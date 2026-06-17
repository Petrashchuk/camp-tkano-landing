const express = require('express');
const router  = express.Router();
const NP_API  = 'https://api.novaposhta.ua/v2.0/json/';

async function npRequest(modelName, calledMethod, methodProperties) {
  const res = await fetch(NP_API, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ apiKey: process.env.NP_API_KEY, modelName, calledMethod, methodProperties }),
  });
  if (!res.ok) throw new Error(`NP API HTTP ${res.status}`);
  return res.json();
}

// GET /api/np/cities?q=Київ
router.get('/cities', async (req, res) => {
  const q = (req.query.q || '').trim();
  if (q.length < 2) return res.json([]);
  try {
    const data = await npRequest('Address', 'searchSettlements', { CityName: q, Limit: 10, Page: 1 });
    const addresses = data.data?.[0]?.Addresses || [];
    res.json(addresses.map(a => ({
      ref:             a.Ref,
      deliveryCityRef: a.DeliveryCity || a.Ref,
      name:            a.MainDescription,
      area:            a.Area,
      present:         a.Present,
      hasStreets:      !!a.StreetsAvailability,
    })));
  } catch (err) {
    console.error('NP cities error:', err.message);
    res.status(502).json([]);
  }
});

// GET /api/np/warehouses?cityRef=xxx&q=1
router.get('/warehouses', async (req, res) => {
  const { cityRef, q } = req.query;
  if (!cityRef) return res.json([]);
  try {
    const data = await npRequest('AddressGeneral', 'getWarehouses', {
      CityRef: cityRef, FindByString: q || '', Limit: 50, Page: 1, Language: 'UA',
    });
    res.json((data.data || []).map(w => ({ ref: w.Ref, desc: w.Description, num: w.Number })));
  } catch (err) {
    console.error('NP warehouses error:', err.message);
    res.status(502).json([]);
  }
});

// GET /api/np/streets?settlementRef=xxx&q=Шевченка
router.get('/streets', async (req, res) => {
  const { settlementRef, q } = req.query;
  if (!settlementRef || !q || q.trim().length < 2) return res.json([]);
  try {
    const data = await npRequest('Address', 'searchSettlementStreets', {
      SettlementRef: settlementRef, StreetName: q.trim(), Limit: 20,
    });
    res.json((data.data?.[0]?.Addresses || []).map(s => ({ ref: s.Ref, name: s.Present })));
  } catch (err) {
    console.error('NP streets error:', err.message);
    res.status(502).json([]);
  }
});

module.exports = router;
