const fs = require('fs');
const path = require('path');

const STORE_PATH = path.join(__dirname, '../../data/orders.json');
const TTL = 7 * 24 * 60 * 60 * 1000;

function ensureDir() {
  const dir = path.dirname(STORE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function load() {
  try {
    if (!fs.existsSync(STORE_PATH)) return {};
    return JSON.parse(fs.readFileSync(STORE_PATH, 'utf8'));
  } catch { return {}; }
}

function save(orders) {
  ensureDir();
  fs.writeFileSync(STORE_PATH, JSON.stringify(orders, null, 2));
}

function cleanup(orders) {
  const now = Date.now();
  for (const id of Object.keys(orders)) {
    if (now - orders[id].createdAt > TTL) delete orders[id];
  }
}

function saveOrder(orderId, order) {
  const orders = load();
  orders[orderId] = { ...order, createdAt: Date.now() };
  cleanup(orders);
  save(orders);
}

function getOrder(orderId) {
  return load()[orderId] || null;
}

function deleteOrder(orderId) {
  const orders = load();
  delete orders[orderId];
  save(orders);
}

module.exports = { saveOrder, getOrder, deleteOrder };
