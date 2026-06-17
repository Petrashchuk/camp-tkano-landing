const crypto = require('crypto');

function hash(value) {
  if (!value) return undefined;
  return crypto.createHash('sha256').update(String(value).trim().toLowerCase()).digest('hex');
}

async function sendMetaConversionEvent(eventData) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return;

  const phone = (eventData.phone || '').replace(/\D/g, '');

  const payload = {
    data: [{
      event_name: eventData.event_name || 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventData.event_id || undefined,
      action_source: 'website',
      event_source_url: process.env.ALLOWED_ORIGIN || '',
      user_data: {
        ph: hash(phone),
        fn: hash(eventData.name),
        external_id: hash(phone),
        country: hash('ua'),
        client_ip_address: eventData.ip || undefined,
        client_user_agent: eventData.userAgent || undefined,
        fbc: eventData.fbc || undefined,
        fbp: eventData.fbp || undefined,
      },
      custom_data: {
        content_name: eventData.content_name || '',
        content_ids: eventData.content_ids || undefined,
        content_type: 'product',
        value: eventData.value || 0,
        currency: eventData.currency || 'UAH',
        num_items: eventData.num_items || undefined,
        order_id: eventData.order_id || undefined,
      },
    }],
  };

  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  const res = await fetch(
    `https://graph.facebook.com/v22.0/${pixelId}/events?access_token=${accessToken}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Meta CAPI: ${res.status} ${err}`);
  }
}

module.exports = { sendMetaConversionEvent };
