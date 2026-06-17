require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const orderRoutes = require('./routes/orders');
const telegramWebhookRoutes = require('./routes/telegram-webhook');
const novaPoshtaRoutes = require('./routes/nova-poshta');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://connect.facebook.net", "https://fonts.googleapis.com"],
      scriptSrcAttr: ["'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https://www.facebook.com", "https://www.google-analytics.com", "https://img.youtube.com"],
      connectSrc: ["'self'", "https://www.facebook.com", "https://connect.facebook.net"],
      fontSrc: ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      frameSrc: ["https://www.youtube.com", "https://www.youtube-nocookie.com"],
    },
  },
}));

app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*' }));
app.use(express.json({ limit: '1mb' }));
app.set('trust proxy', 1);

const orderLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Забагато запитів. Спробуйте через 15 хвилин.' },
});

app.get('/config.js', (req, res) => {
  res.setHeader('Content-Type', 'application/javascript');
  res.setHeader('Cache-Control', 'no-cache');
  res.send(`window.META_PIXEL_ID = '${process.env.META_PIXEL_ID || ''}';`);
});

app.use(express.static(path.join(__dirname, '../public'), {
  maxAge: '7d',
  setHeaders: (res, filePath) => {
    if (/\.(webp|jpg|png|gif)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
    }
    if (/\.(js|css|html)$/i.test(filePath)) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  },
}));

app.use('/api/order', orderLimiter, orderRoutes);

const npLimiter = rateLimit({ windowMs: 60 * 1000, max: 60, message: { error: 'Забагато запитів.' } });
app.use('/api/np', npLimiter, novaPoshtaRoutes);

const webhookSecret = process.env.TELEGRAM_WEBHOOK_SECRET;
if (webhookSecret) {
  app.use(`/api/telegram-webhook/${webhookSecret}`, telegramWebhookRoutes);
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`CampStore server running on port ${PORT}`);

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const origin = process.env.ALLOWED_ORIGIN;
  if (webhookSecret && botToken && origin) {
    const webhookUrl = `${origin}/api/telegram-webhook/${webhookSecret}`;
    fetch(`https://api.telegram.org/bot${botToken}/setWebhook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: webhookUrl }),
    })
      .then(r => r.json())
      .then(r => console.log('Telegram webhook:', r.ok ? 'registered' : r.description))
      .catch(err => console.error('Telegram webhook error:', err.message));
  }
});
