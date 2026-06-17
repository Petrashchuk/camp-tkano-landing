const express = require('express');
const router = express.Router();
const { editTelegramMessage, answerCallbackQuery, buildStatusMessage } = require('../services/telegram');
const { sendMetaConversionEvent } = require('../services/meta-capi');
const { getOrder, deleteOrder } = require('../services/order-store');

router.post('/', async (req, res) => {
  res.sendStatus(200);

  try {
    const update = req.body;
    if (!update.callback_query) return;

    const { id: callbackId, data, message } = update.callback_query;
    const [action, orderId] = data.split(':');
    const chatId = message.chat.id;
    const messageId = message.message_id;

    const order = getOrder(orderId);
    if (!order) {
      await answerCallbackQuery(callbackId, 'Замовлення не знайдено або вже оброблено');
      return;
    }

    if (action === 'confirm') {
      sendMetaConversionEvent({
        event_name: 'Purchase',
        event_id: `purchase_${orderId}`,
        name: order.name,
        phone: order.phone,
        ip: order.ip,
        userAgent: order.userAgent,
        fbc: order.fbc || '',
        fbp: order.fbp || '',
        content_name: order.product,
        value: order.price || 0,
        currency: 'UAH',
      }).catch(err => console.error('Meta CAPI Purchase error:', err.message));

      await editTelegramMessage(chatId, messageId, buildStatusMessage(order, '✅ Підтверджено'));
      await answerCallbackQuery(callbackId, '✅ Замовлення підтверджено!');
    } else if (action === 'reject') {
      await editTelegramMessage(chatId, messageId, buildStatusMessage(order, '❌ Відхилено'));
      await answerCallbackQuery(callbackId, '❌ Замовлення відхилено');
    }

    deleteOrder(orderId);
  } catch (err) {
    console.error('Telegram webhook error:', err);
  }
});

module.exports = router;
