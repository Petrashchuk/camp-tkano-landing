const crypto = require('crypto');

const TIKTOK_PIXEL_ID     = process.env.TIKTOK_PIXEL_ID;
const TIKTOK_ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN;

function hashValue(value) {
  if (!value) return undefined;
  return crypto.createHash('sha256').update(String(value).toLowerCase().trim()).digest('hex');
}

async function sendTikTokEvent(data) {
  if (!TIKTOK_PIXEL_ID || !TIKTOK_ACCESS_TOKEN) return;

  const phone = data.phone ? data.phone.replace(/\D/g, '') : undefined;

  const payload = {
    pixel_code: TIKTOK_PIXEL_ID,
    event:      data.event || 'SubmitForm',
    event_id:   data.event_id || `tt_${Date.now()}`,
    timestamp:  new Date().toISOString(),
    context: {
      user_agent: data.userAgent || '',
      ip:         data.ip || '',
      user: {
        ...(phone && { phone_number: hashValue(phone) }),
      },
    },
    properties: {
      ...(data.value        && { value: data.value, currency: 'UAH' }),
      ...(data.content_name && { content_name: data.content_name }),
    },
  };

  const res = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': TIKTOK_ACCESS_TOKEN,
    },
    body: JSON.stringify({ data: [payload] }),
  });

  if (!res.ok) throw new Error(`TikTok API: ${res.status} ${await res.text()}`);
  return res.json();
}

module.exports = { sendTikTokEvent };
