const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

function esc(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatOrderMessage(order) {
  const isOneClick = !order.name || order.name === '1 клік';

  const lines = isOneClick
    ? [
        '📲 <b>ЗАМОВЛЕННЯ В 1 КЛІК — CampStore</b>',
        '',
        `📞 <b>Передзвонити:</b> ${esc(order.phone)}`,
        '',
      ]
    : [
        '🏕️ <b>Нове замовлення — CampStore</b>',
        '',
        `👤 <b>Ім'я:</b> ${esc(order.name)}`,
        `📞 <b>Телефон:</b> ${esc(order.phone)}`,
        '',
      ];

  if (order.items && order.items.length > 0) {
    lines.push('📋 <b>Замовлення:</b>');
    order.items.forEach(i => {
      lines.push(`  • ${esc(i.name)} × ${i.qty} — ${i.price * i.qty} грн`);
      if (i.supplierUrl) lines.push(`    🔗 <a href="${i.supplierUrl}">${i.supplierUrl}</a>`);
    });
    lines.push(`💰 <b>Разом:</b> ${order.price} грн`);
  } else {
    lines.push(`📦 <b>Товар:</b> ${esc(order.product)}`);
    if (order.qty && order.qty > 1) lines.push(`🔢 <b>Кількість:</b> ${order.qty} шт`);
    lines.push(`💰 <b>Сума:</b> ${order.price} грн`);
    if (order.supplierUrl) lines.push(`🔗 <a href="${order.supplierUrl}">${order.supplierUrl}</a>`);
  }

  if (order.city) {
    const label = order.deliveryType === 'address' ? '🏠 <b>Адресна доставка:</b>' : '📦 <b>Відділення НП:</b>';
    lines.push(`${label} ${esc(order.city)}`);
  }
  if (order.message) lines.push(`💬 <b>Коментар:</b> ${esc(order.message)}`);
  if (order.utm_source) lines.push(`📊 <b>Джерело:</b> ${esc(order.utm_source)}`);

  const kyivTime = new Date(order.timestamp).toLocaleString('uk-UA', {
    timeZone: 'Europe/Kyiv',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
  lines.push('', `🕐 ${kyivTime}`);
  lines.push('', '⏳ <b>Статус:</b> Очікує на опрацювання');

  return lines.join('\n');
}

async function sendTelegramNotification(order, orderId) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('Telegram not configured, skipping');
    return;
  }

  const body = {
    chat_id: TELEGRAM_CHAT_ID,
    text: formatOrderMessage(order),
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  };

  if (orderId) {
    body.reply_markup = {
      inline_keyboard: [[
        { text: '✅ Підтвердити', callback_data: `confirm:${orderId}` },
        { text: '❌ Відхилити', callback_data: `reject:${orderId}` },
      ]],
    };
  }

  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Telegram API error: ${response.status} ${error}`);
  }
  return response.json();
}

async function editTelegramMessage(chatId, messageId, text) {
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/editMessageText`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, message_id: messageId, text, parse_mode: 'HTML', disable_web_page_preview: true }),
  });
}

async function answerCallbackQuery(callbackQueryId, text) {
  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ callback_query_id: callbackQueryId, text }),
  });
}

function buildStatusMessage(order, status) {
  const isOneClick = !order.name || order.name === '1 клік';

  const lines = isOneClick
    ? [
        '📲 <b>ЗАМОВЛЕННЯ В 1 КЛІК — CampStore</b>',
        '',
        `📞 <b>Телефон:</b> ${esc(order.phone)}`,
        `📦 <b>Товар:</b> ${esc(order.product)}`,
        `💰 <b>Сума:</b> ${order.price} грн`,
      ]
    : [
        '🏕️ <b>Замовлення — CampStore</b>',
        '',
        `👤 <b>Ім'я:</b> ${esc(order.name)}`,
        `📞 <b>Телефон:</b> ${esc(order.phone)}`,
        `📦 <b>Товар:</b> ${esc(order.product)}`,
        `💰 <b>Сума:</b> ${order.price} грн`,
      ];

  if (order.message) lines.push(`💬 <b>Коментар:</b> ${esc(order.message)}`);
  const kyivTime = new Date(order.timestamp || order.createdAt).toLocaleString('uk-UA', {
    timeZone: 'Europe/Kyiv', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
  lines.push('', `🕐 ${kyivTime}`);
  lines.push('', `<b>Статус:</b> ${status}`);
  return lines.join('\n');
}

module.exports = { sendTelegramNotification, editTelegramMessage, answerCallbackQuery, buildStatusMessage, esc };
