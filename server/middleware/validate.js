function validateOrder(req, res, next) {
  const { name, phone } = req.body;
  const errors = [];

  if (!req.body.name || typeof req.body.name !== 'string' || req.body.name.trim().length < 2) {
    req.body.name = '1 клік';
  }

  if (!phone || typeof phone !== 'string') {
    errors.push('Введіть номер телефону');
  } else {
    const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
    if (cleaned.length < 10 || !/^\d+$/.test(cleaned)) {
      errors.push('Невірний формат номера телефону');
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: errors.join('. ') });
  }

  req.body.name = (req.body.name || '').trim();
  req.body.phone = phone.trim();
  if (req.body.message) req.body.message = req.body.message.trim().slice(0, 1000);
  if (req.body.city) req.body.city = req.body.city.trim().slice(0, 300);

  next();
}

module.exports = { validateOrder };
