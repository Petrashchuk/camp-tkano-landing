const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const { validateOrder } = require('../middleware/validate');
const { sendTelegramNotification } = require('../services/telegram');
const { sendMetaConversionEvent } = require('../services/meta-capi');
const { saveOrder } = require('../services/order-store');

router.post('/', validateOrder, async (req, res) => {
  try {
    const rawItems = req.body.items;
    const hasItems = Array.isArray(rawItems) && rawItems.length > 0;

    const order = {
      name: req.body.name,
      phone: req.body.phone,
      product: hasItems
        ? rawItems.map(i => `${i.name} ×${i.qty}`).join(', ')
        : (req.body.product || ''),
      productValue: req.body.productValue || '',
      supplierUrl: req.body.supplierUrl || '',
      qty: hasItems ? rawItems.reduce((s, i) => s + (i.qty || 1), 0) : (req.body.qty || 1),
      price: req.body.price || 0,
      items: hasItems ? rawItems : null,
      message: req.body.message || '',
      city: req.body.city || '',
      deliveryType: req.body.deliveryType || '',
      timestamp: new Date().toISOString(),
      ip: (req.headers['x-forwarded-for'] || req.ip || '').split(',')[0].trim(),
      userAgent: req.headers['user-agent'] || '',
      fbc: req.body.fbc || '',
      fbp: req.body.fbp || '',
      event_id: req.body.event_id || '',
      utm_source: req.body.utm_source || '',
      utm_medium: req.body.utm_medium || '',
      utm_campaign: req.body.utm_campaign || '',
    };

    const orderId = crypto.randomBytes(8).toString('hex');
    saveOrder(orderId, order);

    sendTelegramNotification(order, orderId).catch(err =>
      console.error('Telegram error:', err.message)
    );

    sendMetaConversionEvent({
      event_name: hasItems ? 'InitiateCheckout' : 'Lead',
      event_id: order.event_id,
      order_id: orderId,
      phone: order.phone,
      name: order.name,
      ip: order.ip,
      userAgent: order.userAgent,
      fbc: order.fbc,
      fbp: order.fbp,
      content_name: order.product,
      content_ids: [order.productValue],
      num_items: order.qty,
      value: order.price,
      currency: 'UAH',
    }).catch(err => console.error('Meta CAPI error:', err.message));

    res.json({ success: true });
  } catch (err) {
    console.error('Order error:', err);
    res.status(500).json({ error: 'Помилка сервера. Спробуйте пізніше.' });
  }
});

module.exports = router;
