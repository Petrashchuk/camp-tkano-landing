// ===== PRODUCTS =====
const PRODUCTS = [
  {
    id: 'mangal-folding',
    category: 'grill',
    name: 'Мангал-валіза розкладний',
    desc: 'Компактний мангал-чемодан з нержавіючої сталі та термостійкою емаллю. Складається за хвилини без інструментів, зручна ручка для перенесення. Решітка для гриля в комплекті — готуй м\'ясо, рибу і овочі для великої компанії.',
    price: 889,
    oldPrice: 1189,
    badge: 'Хіт продажів',
    badgeClass: 'badge-red',
    sku: 'mgn-fold',
    supplierUrl: 'https://lugi.com.ua/mangal-valiza-skladanyj-z-reshitkoyu-iz-nerzhaviyuchoyi-stali/',
    emoji: '🔥',
    features: ['43×30×23.5 см', 'Товщина сталі: 1 мм', 'Вага: 2 кг', 'Решітка в комплекті'],
    images: [
      'images/mangal-grill/bbq-mangal/0.webp',
      'images/mangal-grill/bbq-mangal/1.webp',
      'images/mangal-grill/bbq-mangal/2.webp',
      'images/mangal-grill/bbq-mangal/3.webp',
      'images/mangal-grill/bbq-mangal/5.webp',
      'images/mangal-grill/bbq-mangal/6.webp',
      'images/mangal-grill/bbq-mangal/4.webp',
      'images/mangal-grill/bbq-mangal/7.webp',
    ],
  },
  {
    id: 'mangal-portable',
    category: 'grill',
    name: 'Мангал портативний складаний з хромованою решіткою',
    desc: 'Портативний мангал зі знімними ручками для перенесення — легко поміститься в багажник або похідну сумку. Збирається без інструментів. Нержавіюча сталь, термостійка емаль, хромована решітка для гриля в комплекті.',
    price: 1079,
    oldPrice: 1439,
    badge: 'Топ вибір',
    badgeClass: 'badge-blue',
    sku: 'mgn-port',
    supplierUrl: 'https://lugi.com.ua/mangal-portatyvnyj-skladanyj-perenosnyj-z-hromovanoyu-reshitkoyu/',
    emoji: '🔥',
    features: ['51.5×23×25 см', 'Нержавіюча сталь 1 мм', 'Вага: 2 кг', 'Хромована решітка'],
    images: [
      'images/mangal-grill/bbq-mangal1/0.webp',
      'images/mangal-grill/bbq-mangal1/1.webp',
      'images/mangal-grill/bbq-mangal1/3.webp',
      'images/mangal-grill/bbq-mangal1/4.webp',
      'images/mangal-grill/bbq-mangal1/5.webp',
      'images/mangal-grill/bbq-mangal1/2.webp',
      'images/mangal-grill/bbq-mangal1/6.webp',
    ],
  },
  {
    id: 'grill-double',
    category: 'grill',
    name: 'Вугільний гриль двосторонній портативний 38×25×35 см',
    desc: 'Портативний вугільний гриль з двома режимами: відкрита кришка — гриль та барбекю, закрита — рівномірне запікання та коптіння. 2 знімні хромовані решітки в комплекті. Ручка для перенесення та замок-петля для фіксації кришки в дорозі. Стійкі ніжки для будь-якої поверхні.',
    price: 1849,
    oldPrice: 2459,
    badge: '−43% Акція',
    badgeClass: 'badge-red',
    sku: 'grl-dbl',
    supplierUrl: 'https://lugi.com.ua/gril-bq-1/',
    emoji: '🔥',
    features: ['38×25×35 см', 'Решітка: 35×22 см (2 шт)', 'Вага: 3.8 кг', 'Барбекю + гриль + коптильня'],
    images: [
      'images/mangal-grill/grill-black/1.webp',
      'images/mangal-grill/grill-black/2.webp',
      'images/mangal-grill/grill-black/3.webp',
      'images/mangal-grill/grill-black/4.webp',
      'images/mangal-grill/grill-black/5.webp',
      'images/mangal-grill/grill-black/6.webp',
      'images/mangal-grill/grill-black/7.webp',
    ],
  },
  {
    id: 'grill-haki',
    category: 'grill',
    name: 'Вугільний гриль двосторонній портативний 38×25×35 см (хакі)',
    desc: 'Той самий портативний гриль у стильному кольорі хакі. Два режими: відкрита кришка — гриль та барбекю, закрита — запікання та коптіння. 2 знімні решітки в комплекті, дерев\'яна ручка, замок-петля для фіксації кришки.',
    price: 1849,
    oldPrice: 2459,
    badge: 'Стиль хакі',
    badgeClass: 'badge-dark',
    sku: 'grl-haki',
    supplierUrl: 'https://lugi.com.ua/gril-bq-2/',
    emoji: '🔥',
    features: ['38×25×35 см', 'Решітка: 35×22 см (2 шт)', 'Вага: 3.8 кг', 'Барбекю + гриль + коптильня'],
    images: [
      'images/mangal-grill/grill-haki/1.webp',
      'images/mangal-grill/grill-haki/2.webp',
      'images/mangal-grill/grill-haki/3.webp',
      'images/mangal-grill/grill-haki/4.webp',
      'images/mangal-grill/grill-haki/5.webp',
      'images/mangal-grill/grill-haki/6.webp',
    ],
  },
  {
    id: 'grid-ploska',
    category: 'grid',
    name: 'Решітка для гриля і барбекю плоска 24×24 см',
    desc: 'Компактна решітка з нержавіючої сталі — можна використовувати без мангалу: встановити на будь-яку опору або тримати в руках. Довга ручка 30 см з захисною накладкою захищає від опіків. Легко миється.',
    price: 539,
    oldPrice: 719,
    badge: 'Компактна',
    badgeClass: 'badge-teal',
    sku: 'HP455RESH',
    supplierUrl: 'https://lugi.com.ua/reshitka-dlya-grylya-ta-barbekyu-grill-ploska-24-24-sm/',
    emoji: '🥩',
    features: ['24×24 см', 'Ручка: 30 см', 'Нержавіюча сталь', 'Захисна накладка'],
    images: [
      'images/reshitki/ploska/1.webp',
      'images/reshitki/ploska/2.webp',
      'images/reshitki/ploska/5.webp',
      'images/reshitki/ploska/3.webp',
      'images/reshitki/ploska/4.webp',
    ],
  },
  {
    id: 'grid-gluboka',
    category: 'grid',
    name: 'Решітка для гриля і барбекю глибока 38×26 см',
    desc: 'Глибока прямокутна решітка для гриля — надійно утримує м\'ясо, рибу або овочі під час перевертання. Дерев\'яна ручка не нагрівається. Нержавіюча сталь витримує високі температури. Підходить для більшості мангалів відповідного розміру.',
    price: 539,
    oldPrice: 719,
    badge: 'Популярна',
    badgeClass: 'badge-blue',
    sku: 'BQ-10',
    supplierUrl: 'https://lugi.com.ua/reshitka-dlya-grilya-bq-10/',
    emoji: '🥩',
    features: ['38×26 см', 'Нержавіюча сталь', 'Дерев\'яна ручка', 'Глибока форма'],
    images: [
      'images/reshitki/gluboka/1.webp',
      'images/reshitki/gluboka/2.webp',
      'images/reshitki/gluboka/3.webp',
      'images/reshitki/gluboka/4.webp',
    ],
  },
  {
    id: 'grid-ryba',
    category: 'grid',
    name: 'Решітка-гриль для риби 37×15 см',
    desc: 'Решітка-гриль для риби з нержавіючої сталі — готуйте рибу цілком або порційними шматками. Зручно перевертати одним рухом. Довга ручка 30 см з захисною накладкою захищає від опіків. Підходить для мангалу, вогнища та гриля.',
    price: 309,
    oldPrice: 409,
    badge: 'Для риби',
    badgeClass: 'badge-teal',
    sku: 'BQ-11',
    supplierUrl: 'https://lugi.com.ua/reshitka-dlya-grilya-bq-11/',
    emoji: '🐟',
    features: ['37×15 см', 'Ручка: 30 см', 'Нержавіюча сталь', 'Захисна накладка'],
    images: [
      'images/reshitki/ryba/1.webp',
      'images/reshitki/ryba/2.webp',
      'images/reshitki/ryba/3.webp',
      'images/reshitki/ryba/4.webp',
    ],
  },

  {
    id: 'shampur-4',
    category: 'accessories',
    name: 'Набір шампурів 4 шт із нержавіючої сталі з дерев\'яною ручкою 50 см',
    desc: 'Шампури з нержавіючої сталі з дерев\'яною ручкою — зручно тримати, ручка не нагрівається. Довжина 50 см дозволяє рівномірно розміщувати продукти над жаром. Підходить для більшості мангалів і грилів.',
    price: 369,
    oldPrice: 489,
    badge: 'Набір 4 шт',
    badgeClass: 'badge-orange',
    sku: 'BQ-21',
    supplierUrl: 'https://lugi.com.ua/nabir-shampuriv-bq-21/',
    emoji: '🍢',
    features: ['4 шт у наборі', 'Довжина: 50 см', 'Ширина: 7 см', 'Дерев\'яна ручка'],
    images: [
      'images/aksesuary/shampur-4/1.webp',
      'images/aksesuary/shampur-4/2.webp',
    ],
  },
  {
    id: 'shampurs-set',
    category: 'accessories',
    name: 'Комплект шампурів 6 шт із нержавіючої сталі 60×1.5 см',
    desc: 'Набір із 6 шампурів для мангалу, гриля та відкритого вогню. Довжина 60 см — зручна відстань від жару. Ширина 1.5 см забезпечує міцність і надійну фіксацію м\'яса, птиці та овочів під час смаження.',
    price: 279,
    oldPrice: 369,
    badge: 'Набір 6 шт',
    badgeClass: 'badge-orange',
    sku: 'BQ-23',
    supplierUrl: 'https://lugi.com.ua/nabir-shampuriv-bq-23/',
    emoji: '🍢',
    features: ['6 шт у комплекті', 'Довжина: 60 см', 'Ширина: 1.5 см', 'Нержавіюча сталь'],
    images: [
      'images/aksesuary/shampur-6/1.webp',
      'images/aksesuary/shampur-6/2.webp',
      'images/aksesuary/shampur-6/3.webp',
    ],
  },
  {
    id: 'bbq-tools',
    category: 'accessories',
    name: 'Набір аксесуарів для гриля 3 предмети 45 см',
    desc: 'Лопатка, щипці та вилка для гриля — все необхідне для зручного приготування на мангалі або барбекю. Довжина 45 см зберігає безпечну дистанцію від жару. Нержавіюча сталь, вага 700 г.',
    price: 569,
    oldPrice: 759,
    badge: 'Для кемпінгу',
    badgeClass: 'badge-green',
    sku: 'BQ-7',
    supplierUrl: 'https://lugi.com.ua/nabir-aksesuariv-dlya-grilyu-bq-7/',
    emoji: '🍴',
    features: ['3 предмети в наборі', 'Довжина: 45 см', 'Нержавіюча сталь', 'Вага: 700 г'],
    images: [
      'images/aksesuary/instrument-3/1.webp',
      'images/aksesuary/instrument-3/2.webp',
      'images/aksesuary/instrument-3/3.webp',
      'images/aksesuary/instrument-3/4.webp',
      'images/aksesuary/instrument-3/5.webp',
    ],
  },
  {
    id: 'bbq-tools-6',
    category: 'accessories',
    name: 'Набір аксесуарів для гриля та барбекю в чохлі 6 предметів',
    desc: 'Компактний набір із 6 інструментів для барбекю в тканинному чохлі: ніж, лопатка, вилка для м\'яса, щипці, пензлик силіконовий та щітка для чищення. Подовжені ручки 35 см, сумка 40×10×5 см.',
    price: 1179,
    oldPrice: 1569,
    badge: 'Повний набір',
    badgeClass: 'badge-purple',
    sku: 'HP-20-73',
    supplierUrl: 'https://lugi.com.ua/nabir-aksesuariv-dlya-grylyu-ta-barbekyu-v-chohli-6-predmetiv/',
    emoji: '🍴',
    features: ['6 предметів у наборі', 'Довжина: 35 см', 'Нержавіюча сталь', 'Тканинна сумка'],
    images: [
      'images/aksesuary/instrument-6/1.webp',
      'images/aksesuary/instrument-6/2.webp',
      'images/aksesuary/instrument-6/3.webp',
      'images/aksesuary/instrument-6/4.webp',
      'images/aksesuary/instrument-6/5.webp',
    ],
  },
  {
    id: 'bbq-tools-19',
    category: 'accessories',
    name: 'Набір аксесуарів для гриля та барбекю в кейсі 19 предметів',
    desc: 'Повний набір для барбекю в компактному пластиковому кейсі: ніж, лопатка, вилка, щипці, 4 шампури, щітка з запасною, 8 тримачів для кукурудзи та фартух. Нержавіюча сталь, зручні подовжені ручки, кейс 42×14×7.5 см.',
    price: 2329,
    oldPrice: 3099,
    badge: 'Мега набір',
    badgeClass: 'badge-purple',
    sku: 'HP-21-3',
    supplierUrl: 'https://lugi.com.ua/nabir-aksesuariv-dlya-grylyu-ta-barbekyu-v-kejsi-19-predmetiv/',
    emoji: '🍴',
    features: ['19 предметів у наборі', 'Нержавіюча сталь', 'Кейс 42×14×7.5 см', 'Вага: 2 кг'],
    images: [
      'images/aksesuary/instrument-19/1.webp',
      'images/aksesuary/instrument-19/2.webp',
      'images/aksesuary/instrument-19/3.webp',
      'images/aksesuary/instrument-19/4.webp',
      'images/aksesuary/instrument-19/5.webp',
    ],
  },
  {
    id: 'thermo-sumka-8',
    category: 'thermo',
    name: 'Ізотермічна термосумка SANNEA 8 л',
    desc: 'Компактна переносна сумка-холодильник на 8 літрів — вміщує велику кількість продуктів або напоїв. Тришаровий матеріал (EPE + алюмінізований поліестер) зберігає температуру до 4 годин. З акумуляторами холоду час збільшується у рази.',
    price: 299,
    oldPrice: 399,
    badge: 'Міні формат',
    badgeClass: 'badge-teal',
    sku: 'HP-14-3',
    supplierUrl: 'https://lugi.com.ua/izotermichna-termosumka-sannea-na-8-litriv/',
    emoji: '🧊',
    features: ["Об'єм: 8 л", 'Розміри: 28×15×20 см', 'Матеріал: EPE + алюмінізований поліестер', 'Вага: 200 г'],
    images: [
      'images/sumka/1.webp',
      'images/sumka/2.webp',
      'images/sumka/3.webp',
      'images/sumka/4.webp',
      'images/sumka/5.webp',
    ],
  },
  {
    id: 'thermo-sumka-26',
    category: 'thermo',
    name: 'Ізотермічна термосумка SANNEA 26 л',
    desc: 'Велика переносна сумка-холодильник на 26 літрів — для великої компанії, відпочинку на природі чи кемпінгу. Тришаровий матеріал (EPE + алюмінізований поліестер) зберігає температуру до 4 годин. З акумуляторами холоду час збільшується у рази.',
    price: 489,
    oldPrice: 649,
    badge: 'Для компанії',
    badgeClass: 'badge-blue',
    sku: 'HP-14-1',
    supplierUrl: 'https://lugi.com.ua/izotermichna-termosumka-sannea-na-26-litriv/',
    emoji: '🧊',
    features: ["Об'єм: 26 л", 'Розміри: 36×22×33 см', 'Матеріал: EPE + алюмінізований поліестер', 'Вага: 200 г'],
    images: [
      'images/sumka/1.webp',
      'images/sumka/2.webp',
      'images/sumka/3.webp',
      'images/sumka/4.webp',
      'images/sumka/5.webp',
    ],
  },
  {
    id: 'thermo-sumka-16',
    category: 'thermo',
    name: 'Ізотермічна термосумка SANNEA 16 л',
    desc: 'Переносна ізотермічна сумка-холодильник на 16 літрів — відмінний вибір для збереження температури продуктів чи напоїв. Тришаровий матеріал (EPE + алюмінізований поліестер) забезпечує ефективну термоізоляцію до 4 годин. З акумуляторами холоду час збільшується у рази.',
    price: 409,
    oldPrice: 549,
    badge: 'Компакт',
    badgeClass: 'badge-teal',
    sku: 'HP-14-2',
    supplierUrl: 'https://lugi.com.ua/izotermichna-termosumka-sannea-na-16-litriv/',
    emoji: '🧊',
    features: ["Об'єм: 16 л", 'Розміри: 33×18×27 см', 'Матеріал: EPE + алюмінізований поліестер', 'Вага: 200 г'],
    images: [
      'images/sumka/1.webp',
      'images/sumka/2.webp',
      'images/sumka/3.webp',
      'images/sumka/4.webp',
      'images/sumka/5.webp',
    ],
  },
  {
    id: 'shower-electric',
    category: 'shower',
    name: 'Портативний душ із насосом на акумуляторі 4000 mAh',
    desc: 'Компактний занурювальний насос з акумулятором — просто опустіть у будь-яку ємність з водою та вмикайте. 3 літри на хвилину, автономна робота до 60 хв без підзарядки. USB-зарядка, компактний чохол для перевезення. Ідеально для походів, кемпінгу, миття тварин або авто.',
    price: 2339,
    oldPrice: 3119,
    badge: 'Електро душ',
    badgeClass: 'badge-blue',
    sku: 'LYQ-1',
    supplierUrl: 'https://lugi.com.ua/dush-portatyvnyj-lyq-1/',
    emoji: '⚡',
    features: ['Акумулятор: 4000 mAh', 'Робота: до 60 хв', 'Шланг: 2.2 м', 'Вага: 650 г'],
    images: [
      'images/dush/blue/1.webp',
      'images/dush/blue/2.webp',
      'images/dush/blue/3.webp',
      'images/dush/blue/4.webp',
      'images/dush/blue/5.webp',
      'images/dush/blue/6.webp',
      'images/dush/blue/7.webp',
    ],
  },
  {
    id: 'shower-haki',
    category: 'shower',
    name: 'Портативний туристичний душ 20 л (хакі)',
    desc: 'Автономна душова система на принципі сонячного нагріву. Лицьова сторона — міцна оливкова тканина, задня — прозорий ПВХ, що пропускає сонячні промені та нагріває воду. Термометр на корпусі, гнучкий шланг з лійкою та клапаном, кишеня для гігієнічних засобів. Компактно складається після використання.',
    price: 1079,
    oldPrice: 1439,
    badge: 'Сонячний',
    badgeClass: 'badge-orange',
    sku: 'HP-B-1',
    supplierUrl: 'https://lugi.com.ua/turystychnyj-perenosnyj-dush-na-20-l/',
    emoji: '🚿',
    features: ["Об'єм: 20 л", 'Розміри: 50×46 см', 'Шланг: 40 см', 'Вага: 400 г'],
    images: [
      'images/dush/haki/1.webp',
      'images/dush/haki/2.webp',
      'images/dush/haki/3.webp',
      'images/dush/haki/4.webp',
      'images/dush/haki/5.webp',
      'images/dush/haki/6.webp',
    ],
  },
];

// ===== STATE =====
let activeCategory = 'grill';
let selectedProduct = null;
let pendingQty = {};

// ===== NP STATE (module-level for form submit access) =====
let npDeliveryType    = 'warehouse';
let npCityRef         = '';
let npDeliveryCityRef = '';
let npCityName        = '';
let npWarehouseDesc   = '';
let npStreetName      = '';

// Modal-specific state
let modalQty = 1;

// ===== UTILS =====
function generateEventId() {
  return 'cs_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
}

function getMetaCookies() {
  const cookies = document.cookie.split(';').reduce((acc, c) => {
    const idx = c.indexOf('=');
    if (idx === -1) return acc;
    const k = c.slice(0, idx).trim();
    const v = c.slice(idx + 1);
    acc[k] = v;
    return acc;
  }, {});
  return { fbc: cookies._fbc || '', fbp: cookies._fbp || '' };
}

function getUTMParams() {
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get('utm_source') || '',
    utm_medium: p.get('utm_medium') || '',
    utm_campaign: p.get('utm_campaign') || '',
  };
}

function formatPrice(n) {
  return n.toLocaleString('uk-UA');
}

// ===== PIXEL =====
function trackPixelEvent(eventName, params = {}, eventId = null) {
  if (typeof fbq === 'undefined') return;
  const opts = eventId ? { eventID: eventId } : {};
  fbq('track', eventName, params, opts);
}

// ===== CARD CAROUSEL =====
function buildCardCarousel(p) {
  if (!p.images?.length) {
    return `
      <img src="images/${p.id}.webp" alt="${p.name}" loading="lazy"
        style="width:100%;height:100%;object-fit:contain;padding:8px"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="product-img-placeholder">${p.emoji}</div>`;
  }
  const slides = p.images.map(src =>
    `<img class="card-carousel-img" src="${src}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">`
  ).join('');
  if (p.images.length <= 1) {
    return `<div class="card-carousel-track">${slides}</div>`;
  }
  const dots = `<div class="card-carousel-dots">${p.images.map((_, i) => `<span class="card-dot${i === 0 ? ' active' : ''}"></span>`).join('')}</div>`;
  const arrows = `
    <button class="card-carousel-arrow card-carousel-prev" onclick="event.stopPropagation();cardCarouselStep(this,-1)" aria-label="Назад">&#8249;</button>
    <button class="card-carousel-arrow card-carousel-next" onclick="event.stopPropagation();cardCarouselStep(this,1)" aria-label="Вперед">&#8250;</button>`;
  return `<div class="card-carousel-track">${slides}</div>${dots}${arrows}`;
}

function cardCarouselStep(btn, dir) {
  const wrap = btn.closest('.product-img-wrap');
  const track = wrap.querySelector('.card-carousel-track');
  if (!track) return;
  track.scrollBy({ left: track.clientWidth * dir, behavior: 'smooth' });
}

function initCardCarousels() {
  document.querySelectorAll('.card-carousel-track').forEach(track => {
    const dotsEl = track.parentElement.querySelector('.card-carousel-dots');
    if (!dotsEl) return;
    const dots = dotsEl.querySelectorAll('.card-dot');
    track.addEventListener('scroll', () => {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    }, { passive: true });
  });
}

// ===== PRODUCT BUTTONS =====
function productBtnsHTML(p) {
  const inCart = cart.find(i => i.id === p.id);
  if (inCart) {
    return `
      <button class="btn-order" onclick="event.stopPropagation();openModal('${p.id}')">Детальніше</button>
      <div class="product-qty-ctrl" onclick="event.stopPropagation()">
        <button class="product-qty-btn" onclick="event.stopPropagation();updateCartQty('${p.id}',-1)">−</button>
        <span class="product-qty-num">${inCart.qty}</span>
        <button class="product-qty-btn" onclick="event.stopPropagation();updateCartQty('${p.id}',+1)">+</button>
      </div>`;
  }
  return `
    <button class="btn-order" onclick="event.stopPropagation();openModal('${p.id}')">Детальніше</button>
    <button class="btn-cart-add" onclick="event.stopPropagation();addToCart('${p.id}')" aria-label="В кошик"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg></button>`;
}

function refreshProductCard(productId) {
  const el = document.getElementById(`prod-btns-${productId}`);
  if (!el) return;
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) el.innerHTML = productBtnsHTML(product);
}

// ===== RENDER =====
function renderProducts(category) {
  const grid = document.getElementById('products-grid');
  const products = PRODUCTS.filter(p => p.category === category);

  grid.innerHTML = products.map(p => `
    <div class="product-card" data-product-id="${p.id}" style="cursor:pointer">
      <div class="product-img-wrap">
        ${buildCardCarousel(p)}
        ${p.badge ? `<span class="product-badge ${p.badgeClass || ''}">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <ul class="product-features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="product-price-row">
          ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)} грн</span>` : ''}
          <span class="price-current">${formatPrice(p.price)}<span class="price-currency"> грн</span></span>
        </div>
        ${p.oldPrice ? (() => { const pct = Math.round((p.oldPrice - p.price) / p.oldPrice * 100); const save = p.oldPrice - p.price; return `<div class="product-savings"><span class="savings-pct">-${pct}%</span><span class="savings-amt">Економія ${formatPrice(save)} грн</span></div>`; })() : ''}
        <div class="product-btns" id="prod-btns-${p.id}">
          ${productBtnsHTML(p)}
        </div>
      </div>
    </div>
  `).join('');

  initCardCarousels();
}

// ===== TABS =====
function initCategoryTabs() {
  document.getElementById('category-tabs').addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (!tab || tab.dataset.cat === activeCategory) return;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCategory = tab.dataset.cat;
    renderProducts(activeCategory);
    const p = new URLSearchParams(location.search);
    p.set('category', activeCategory);
    p.delete('product');
    history.pushState(null, '', `?${p.toString()}`);
  });
}

// ===== MODAL GALLERY =====
let galleryImages = [];
let galleryCurrentIdx = 0;

function galleryGoTo(idx) {
  const mainImg = document.getElementById('gallery-main-img');
  const videoWrap = document.getElementById('gallery-video-wrap');
  const thumbsEl = document.getElementById('gallery-thumbs');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');

  galleryCurrentIdx = (idx + galleryImages.length) % galleryImages.length;
  mainImg.src = galleryImages[galleryCurrentIdx];
  mainImg.style.display = 'block';
  videoWrap.style.display = 'none';

  thumbsEl.querySelectorAll('.gallery-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === galleryCurrentIdx);
  });

  prevBtn.hidden = galleryImages.length <= 1;
  nextBtn.hidden = galleryImages.length <= 1;
}

function renderModalGallery(images, altText, videoId) {
  const mainImg = document.getElementById('gallery-main-img');
  const videoWrap = document.getElementById('gallery-video-wrap');
  const videoPreview = document.getElementById('gallery-video-preview');
  const thumbsEl = document.getElementById('gallery-thumbs');
  const prevBtn = document.getElementById('gallery-prev');
  const nextBtn = document.getElementById('gallery-next');

  galleryImages = images;
  galleryCurrentIdx = 0;

  mainImg.src = images[0];
  mainImg.alt = altText;
  mainImg.style.display = 'block';
  videoWrap.style.display = 'none';

  prevBtn.hidden = images.length <= 1;
  nextBtn.hidden = images.length <= 1;

  prevBtn.onclick = () => galleryGoTo(galleryCurrentIdx - 1);
  nextBtn.onclick = () => galleryGoTo(galleryCurrentIdx + 1);

  const imgThumbs = images.map((src, i) => `
    <button class="gallery-thumb${i === 0 ? ' active' : ''}" data-src="${src}" data-type="image">
      <img src="${src}" alt="${altText}" loading="lazy">
    </button>
  `).join('');

  const videoThumb = videoId ? `
    <button class="gallery-thumb gallery-thumb-video" data-videoid="${videoId}" data-type="video">
      <img src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" alt="Відео" loading="lazy">
      <span class="gallery-play-icon">▶</span>
    </button>` : '';

  thumbsEl.innerHTML = imgThumbs + videoThumb;

  thumbsEl.onclick = e => {
    const btn = e.target.closest('.gallery-thumb');
    if (!btn) return;
    thumbsEl.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    const thumbIdx = [...thumbsEl.querySelectorAll('.gallery-thumb[data-type="image"]')].indexOf(btn);

    if (btn.dataset.type === 'video') {
      mainImg.style.display = 'none';
      videoPreview.src = `https://img.youtube.com/vi/${btn.dataset.videoid}/hqdefault.jpg`;
      videoWrap.href = `https://www.youtube.com/watch?v=${btn.dataset.videoid}`;
      videoWrap.style.display = 'block';
    } else {
      galleryCurrentIdx = thumbIdx >= 0 ? thumbIdx : 0;
      mainImg.src = btn.dataset.src;
      mainImg.style.display = 'block';
      videoWrap.style.display = 'none';
    }
  };
}

// ===== MODAL =====
function openModal(productId) {
  selectedProduct = PRODUCTS.find(p => p.id === productId);
  if (!selectedProduct) return;

  document.getElementById('modal-product-name').textContent =
    `${selectedProduct.name} — ${formatPrice(selectedProduct.price)} грн`;
  document.getElementById('order-form').reset();
  resetPhoneField();
  document.getElementById('form-error').style.display = 'none';
  const phoneInp = document.getElementById('phone');
  const phoneErr = document.getElementById('err-m-phone');
  if (phoneInp) phoneInp.classList.remove('error');
  if (phoneErr) { phoneErr.textContent = ''; phoneErr.style.display = 'none'; }

  // Reset modal qty
  modalQty = 1;
  document.getElementById('modal-qty-num').textContent = '1';

  const featuresEl   = document.getElementById('modal-features');
  const featuresWrap = document.getElementById('modal-features-wrap');
  if (featuresEl && featuresWrap) {
    const hasFeatures = selectedProduct.features?.length > 0;
    featuresEl.innerHTML = hasFeatures
      ? selectedProduct.features.map(f => {
          const sep = f.indexOf(': ');
          if (sep !== -1) {
            return `<li><span class="feat-label">${f.slice(0, sep)}</span><span class="feat-dots"></span><span class="feat-value">${f.slice(sep + 2)}</span></li>`;
          }
          return `<li><span class="feat-full">${f}</span></li>`;
        }).join('')
      : '';
    featuresWrap.style.display = hasFeatures ? '' : 'none';
  }

  const galleryEl = document.getElementById('modal-gallery');
  const box = document.querySelector('.modal-box');
  if (selectedProduct.images && selectedProduct.images.length > 0) {
    renderModalGallery(selectedProduct.images, selectedProduct.name, selectedProduct.videoId || null);
    galleryEl.style.display = 'block';
    box.classList.add('modal-box--wide');
  } else {
    galleryEl.style.display = 'none';
    box.classList.remove('modal-box--wide');
  }

  document.getElementById('modal-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  const modalParams = new URLSearchParams(location.search);
  modalParams.set('category', selectedProduct.category);
  modalParams.set('product', productId);
  history.pushState({ product: productId }, '', `?${modalParams.toString()}`);

  trackPixelEvent('ViewContent', {
    content_name: selectedProduct.name,
    content_ids: [selectedProduct.sku],
    content_type: 'product',
    value: selectedProduct.price,
    currency: 'UAH',
  });
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  document.querySelector('.modal-box').classList.remove('modal-box--wide');
  document.body.style.overflow = '';
  selectedProduct = null;
  if (location.search.includes('product=')) {
    const closeParams = new URLSearchParams(location.search);
    closeParams.delete('product');
    const qs = closeParams.toString();
    history.pushState(null, '', qs ? `?${qs}` : location.pathname);
  }
}

// ===== CART =====
const CART_KEY = 'campstore_cart';

function cartLoad() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; }
}

function cartSave() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

let cart = cartLoad();

function changePendingQty(productId, delta) {
  const current = pendingQty[productId] || 1;
  pendingQty[productId] = Math.max(1, current + delta);
  const el = document.getElementById(`pre-qty-${productId}`);
  if (el) el.textContent = pendingQty[productId];
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const qty = pendingQty[productId] || 1;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  pendingQty[productId] = 1;
  cartSave();
  renderCartBadge();
  renderCheckoutSummary();
  refreshProductCard(productId);
  showToast(`✅ ${product.name} — додано до кошика`);
  trackPixelEvent('AddToCart', {
    content_name: product.name,
    content_ids: [product.sku],
    content_type: 'product',
    value: product.price * qty,
    currency: 'UAH',
    num_items: qty,
  });
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  cartSave();
  renderCartBadge();
  renderCartItems();
  renderCheckoutSummary();
  refreshProductCard(productId);
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) { removeFromCart(productId); return; }
  cartSave();
  renderCartBadge();
  renderCartItems();
  renderCheckoutSummary();
  refreshProductCard(productId);
}


function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }

function renderCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-flex' : 'none';
  if (count > 0) {
    badge.classList.remove('badge-pulse');
    void badge.offsetWidth;
    badge.classList.add('badge-pulse');
  }
}

function renderCartItems() {
  const itemsEl = document.getElementById('cart-items');
  const emptyEl = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.style.display = 'none';
    itemsEl.innerHTML = '';
    emptyEl.style.display = 'flex';
    footerEl.style.display = 'none';
    return;
  }

  itemsEl.style.display = '';
  emptyEl.style.display = 'none';
  footerEl.style.display = 'block';

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.images ? item.images[0] : `images/${item.id}.webp`}" alt="${item.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="cart-item-emoji">${item.emoji}</div>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)} × ${item.qty} = <b>${formatPrice(item.price * item.qty)} грн</b></div>
      </div>
      <div class="cart-qty">
        <button class="cart-qty-btn" onclick="updateCartQty('${item.id}',-1)">−</button>
        <span class="cart-qty-num">${item.qty}</span>
        <button class="cart-qty-btn" onclick="updateCartQty('${item.id}',+1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Видалити">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  `).join('');

  document.getElementById('cart-total-price').textContent = formatPrice(getCartTotal()) + ' грн';
}

function openCart() {
  renderCartItems();
  document.getElementById('cart-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function goToCheckout() {
  closeCart();
  renderCheckoutSummary();
  document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
}

function renderCheckoutSummary() {
  const itemsEl = document.getElementById('checkout-summary-items');
  const totalEl = document.getElementById('checkout-summary-total');
  const priceEl = document.getElementById('checkout-summary-price');
  const hintEl  = document.getElementById('checkout-empty-hint');
  if (!itemsEl) return;

  const summaryCard = document.getElementById('checkout-summary');

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    totalEl.style.display = 'none';
    hintEl.style.display  = 'block';
    return;
  }

  if (summaryCard) summaryCard.style.display = '';
  hintEl.style.display = 'none';
  itemsEl.innerHTML = cart.map(i => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${i.images ? i.images[0] : `images/${i.id}.webp`}" alt="${i.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="cart-item-emoji">${i.emoji || ''}</div>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-price">${formatPrice(i.price)} × ${i.qty} = <b>${formatPrice(i.price * i.qty)} грн</b></div>
      </div>
      <div class="cart-qty">
        <button class="cart-qty-btn" onclick="coQtyChange('${i.id}',-1)">−</button>
        <span class="cart-qty-num">${i.qty}</span>
        <button class="cart-qty-btn" onclick="coQtyChange('${i.id}',+1)">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${i.id}')" aria-label="Видалити">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  `).join('');
  totalEl.style.display = 'flex';
  priceEl.textContent   = formatPrice(getCartTotal()) + ' грн';
}

function coQtyChange(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) { removeFromCart(productId); }
  else { cartSave(); renderCartBadge(); }
  renderCheckoutSummary();
}

// ===== SCROLL =====
function scrollToCatalog() {
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

// ===== TOAST =====
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.toggle('error', isError);
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== SOCIAL PROOF =====
const SOCIAL_PROOF_ITEMS = [
  { name: 'Марина', city: 'Харкові', product: 'термосумку 8 л' },
  { name: 'Дмитро', city: 'Києві', product: 'мангал розкладний валіза' },
  { name: 'Олена', city: 'Дніпрі', product: 'комплект шампурів 6 шт' },
  { name: 'Тетяна', city: 'Львові', product: 'термосумку 26 л' },
  { name: 'Андрій', city: 'Запоріжжі', product: 'гриль вугільний BQ-1' },
  { name: 'Наталія', city: 'Полтаві', product: 'набір аксесуарів 6 шт у чохлі' },
  { name: 'Сергій', city: 'Вінниці', product: 'мангал портативний' },
  { name: 'Ірина', city: 'Чернігові', product: 'термосумку 16 л' },
  { name: 'Максим', city: 'Сумах', product: 'решітку-гриль для риби' },
  { name: 'Юлія', city: 'Рівному', product: 'шампури з дерев\'яною ручкою' },
  { name: 'Олег', city: 'Миколаєві', product: 'гриль вугільний хакі BQ-2' },
  { name: 'Василь', city: 'Одесі', product: 'решітку глибоку 38×26 см' },
  { name: 'Катерина', city: 'Херсоні', product: 'набір аксесуарів 3 шт 45 см' },
  { name: 'Богдан', city: 'Тернополі', product: 'набір аксесуарів 19 шт у кейсі' },
  { name: 'Оксана', city: 'Черкасах', product: 'решітку плоску 24×24 см' },
];

function initSocialProof() {
  const popup = document.getElementById('social-proof');
  const textEl = document.getElementById('sp-text');
  if (!popup || !textEl) return;

  let idx = Math.floor(Math.random() * SOCIAL_PROOF_ITEMS.length);

  function show() {
    const item = SOCIAL_PROOF_ITEMS[idx % SOCIAL_PROOF_ITEMS.length];
    idx++;
    textEl.textContent = `${item.name} з ${item.city} замовив(-ла) ${item.product}`;
    popup.classList.add('active');
    setTimeout(() => popup.classList.remove('active'), 5000);
  }

  setTimeout(() => {
    show();
    setInterval(show, 22000);
  }, 9000);
}

// ===== COUNTDOWN =====
function initCountdown() {
  const els = document.querySelectorAll('.countdown-timer');
  if (!els.length) return;

  const STORAGE_KEY = 'cs_promo_end';
  const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;

  let endTime = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
  if (!endTime || endTime < Date.now()) {
    endTime = Date.now() + THREE_DAYS_MS;
    localStorage.setItem(STORAGE_KEY, endTime);
  }

  function update() {
    const diff = endTime - Date.now();
    if (diff <= 0) {
      endTime = Date.now() + THREE_DAYS_MS;
      localStorage.setItem(STORAGE_KEY, endTime);
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    const text = d > 0
      ? `${d}д ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      : `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    els.forEach(el => { el.textContent = text; });
  }

  update();
  setInterval(update, 1000);
}

// ===== PHONE MASK =====
const PHONE_PREFIX = '+38 (0';

function formatPhone(digits) {
  let s = PHONE_PREFIX;
  if (digits.length > 0) s += digits.slice(0, 2);
  if (digits.length >= 2) s += ') ' + digits.slice(2, 5);
  if (digits.length >= 5) s += '-' + digits.slice(5, 7);
  if (digits.length >= 7) s += '-' + digits.slice(7, 9);
  return s;
}

function initPhoneMask(input) {
  if (!input) return;
  function getDigits() {
    return input.value.slice(PHONE_PREFIX.length).replace(/\D/g, '').slice(0, 9);
  }

  function applyMask() {
    input.value = formatPhone(getDigits());
  }

  input.addEventListener('focus', () => {
    if (!input.value.startsWith(PHONE_PREFIX)) input.value = PHONE_PREFIX;
    setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
  });

  input.addEventListener('keydown', e => {
    const pos = input.selectionStart;
    const selEnd = input.selectionEnd;

    if (e.key !== 'Backspace' && e.key !== 'Delete') return;

    // Захист префікса
    if (e.key === 'Backspace' && pos <= PHONE_PREFIX.length) { e.preventDefault(); return; }
    if (e.key === 'Delete'    && pos <  PHONE_PREFIX.length) { e.preventDefault(); return; }

    // Backspace на форматуючому символі → видаляємо попередню цифру
    if (e.key === 'Backspace' && pos === selEnd && pos > PHONE_PREFIX.length) {
      const charBefore = input.value[pos - 1];
      if (/[\s()\-]/.test(charBefore)) {
        e.preventDefault();
        const digits = getDigits();
        const digitsBeforePos = input.value.slice(PHONE_PREFIX.length, pos).replace(/\D/g, '').length;
        if (digitsBeforePos > 0) {
          const newDigits = digits.slice(0, digitsBeforePos - 1) + digits.slice(digitsBeforePos);
          input.value = formatPhone(newDigits);
          const cursorPos = formatPhone(newDigits.slice(0, digitsBeforePos - 1)).length;
          input.setSelectionRange(cursorPos, cursorPos);
        }
      }
    }
  });

  input.addEventListener('input', () => {
    if (!input.value.startsWith(PHONE_PREFIX)) {
      input.value = PHONE_PREFIX + input.value.replace(/\D/g, '');
    }
    applyMask();
    input.setSelectionRange(input.value.length, input.value.length);
  });
}

function resetPhoneField(el) {
  const input = (el instanceof HTMLElement) ? el : document.getElementById(typeof el === 'string' ? el : 'phone');
  if (input) input.value = PHONE_PREFIX;
}

// ===== PRODUCT IMAGE HOVER =====
function initProductImageHover() {
  const grid = document.getElementById('products-grid');

  grid.addEventListener('mouseover', e => {
    if (window.innerWidth <= 768) return;
    const card = e.target.closest('.product-card');
    if (!card) return;
    const product = PRODUCTS.find(p => p.id === card.dataset.productId);
    if (!product?.images || product.images.length < 2) return;
    const track = card.querySelector('.card-carousel-track');
    if (track) track.scrollTo({ left: track.clientWidth, behavior: 'smooth' });
  });

  grid.addEventListener('mouseout', e => {
    if (window.innerWidth <= 768) return;
    const card = e.target.closest('.product-card');
    if (!card) return;
    if (e.relatedTarget && card.contains(e.relatedTarget)) return;
    const track = card.querySelector('.card-carousel-track');
    if (track) track.scrollTo({ left: 0, behavior: 'smooth' });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  if (window.META_PIXEL_ID) {
    fbq('init', window.META_PIXEL_ID);
    fbq('track', 'PageView');
  }

  renderProducts(activeCategory);
  initCategoryTabs();
  initProductImageHover();
  initCountdown();
  initSocialProof();
  renderCartBadge();
  renderCheckoutSummary();
  const phoneInput = document.getElementById('phone');
  initPhoneMask(phoneInput);
  resetPhoneField();

  const coPhoneInput = document.getElementById('co-phone');
  initPhoneMask(coPhoneInput);
  resetPhoneField(coPhoneInput);

  let touchStartX = 0;
  let touchMoved = false;
  const grid = document.getElementById('products-grid');
  grid.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchMoved = false;
  }, { passive: true });
  grid.addEventListener('touchmove', e => {
    if (Math.abs(e.touches[0].clientX - touchStartX) > 8) touchMoved = true;
  }, { passive: true });
  grid.addEventListener('click', e => {
    if (touchMoved) return;
    if (e.target.closest('button')) return;
    const card = e.target.closest('[data-product-id]');
    if (card) openModal(card.dataset.productId);
  });

  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.getElementById('cart-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeCart();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeCart(); }
  });

  window.addEventListener('popstate', () => {
    const pid = new URLSearchParams(location.search).get('product');
    if (pid) {
      openModal(pid);
    } else {
      document.getElementById('modal-overlay').classList.remove('active');
      document.querySelector('.modal-box').classList.remove('modal-box--wide');
      document.body.style.overflow = '';
      selectedProduct = null;
    }
  });

  function mSetFieldError(inputId, errorId, msg) {
    const inp = document.getElementById(inputId);
    const err = document.getElementById(errorId);
    if (!inp || !err) return;
    if (msg) { inp.classList.add('error'); err.textContent = msg; err.style.display = 'block'; }
    else      { inp.classList.remove('error'); err.textContent = ''; err.style.display = 'none'; }
  }

  document.getElementById('phone')?.addEventListener('input', () => mSetFieldError('phone', 'err-m-phone', ''));

  document.getElementById('order-form').addEventListener('submit', async e => {
    e.preventDefault();
    if (!selectedProduct) return;

    const phone = document.getElementById('phone').value.trim();
    const submitBtn = document.getElementById('submit-btn');

    mSetFieldError('phone', 'err-m-phone', '');
    document.getElementById('form-error').style.display = 'none';

    if (!phone || phone.replace(/[\s\-\(\)\+]/g, '').length < 10) {
      mSetFieldError('phone', 'err-m-phone', 'Введіть коректний номер телефону');
      document.getElementById('phone').focus();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Відправляємо...';

    const eventId = generateEventId();
    const { fbc, fbp } = getMetaCookies();
    const utms = getUTMParams();

    trackPixelEvent('Lead', {
      content_name: selectedProduct.name,
      content_ids: [selectedProduct.sku],
      content_type: 'product',
      value: selectedProduct.price * modalQty,
      currency: 'UAH',
      num_items: modalQty,
    }, eventId);

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          product: selectedProduct.name,
          productValue: selectedProduct.sku,
          supplierUrl: selectedProduct.supplierUrl || undefined,
          qty: modalQty,
          price: selectedProduct.price * modalQty,
          event_id: eventId,
          fbc,
          fbp,
          ...utms,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Помилка сервера');

      const productName = selectedProduct.name;
      closeModal();
      showToast(`✅ Запит на «${productName}» отримано! Очікуйте дзвінка менеджера`);
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Замовити в 1 клік';
      const errorEl = document.getElementById('form-error');
      errorEl.textContent = err.message || 'Щось пішло не так. Спробуйте ще раз.';
      errorEl.style.display = 'block';
    }
  });

  // ===== NP AUTOCOMPLETE =====
  {
    const cityInput      = document.getElementById('npCityInput');
    const cityDropdown   = document.getElementById('npCityDropdown');
    const warehouseInput = document.getElementById('npWarehouseInput');
    const warehouseDrop  = document.getElementById('npWarehouseDropdown');
    const streetInput    = document.getElementById('npStreetInput');
    const streetDrop     = document.getElementById('npStreetDropdown');
    const warehouseGroup = document.getElementById('npWarehouseGroup');
    const streetGroup    = document.getElementById('npStreetGroup');
    const buildingGroup  = document.getElementById('npBuildingGroup');

    function npDebounce(fn, ms) {
      let t;
      return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
    }

    function showDrop(dropEl, items) {
      if (!items.length) { dropEl.hidden = true; return; }
      dropEl.innerHTML = items.map((item, i) =>
        `<li class="np-drop-item" data-idx="${i}">${item.label}</li>`
      ).join('');
      dropEl._items = items;
      dropEl.hidden = false;
    }

    function hideDrop(dropEl) { dropEl.hidden = true; }

    document.addEventListener('click', e => {
      if (!e.target.closest('.np-field')) {
        hideDrop(cityDropdown);
        hideDrop(warehouseDrop);
        hideDrop(streetDrop);
      }
    });

    // Delivery toggle
    const deliveryToggleEl = document.getElementById('deliveryToggle');
    deliveryToggleEl?.querySelectorAll('.delivery-type-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        npDeliveryType = btn.dataset.type;
        deliveryToggleEl.querySelectorAll('.delivery-type-btn').forEach(b => b.classList.toggle('active', b === btn));
        warehouseGroup.hidden = (npDeliveryType !== 'warehouse');
        streetGroup.hidden    = (npDeliveryType !== 'address');
        buildingGroup.hidden  = (npDeliveryType !== 'address');
        hideDrop(warehouseDrop);
        hideDrop(streetDrop);
      });
    });

    // City search
    const searchCities = npDebounce(async (q) => {
      if (q.length < 2) { hideDrop(cityDropdown); return; }
      const data = await fetch(`/api/np/cities?q=${encodeURIComponent(q)}`).then(r => r.json()).catch(() => []);
      showDrop(cityDropdown, data.map(c => ({
        label: c.present,
        onSelect: () => {
          npCityRef         = c.ref;
          npDeliveryCityRef = c.deliveryCityRef;
          npCityName        = c.present;
          cityInput.value   = c.present;
          cityInput.classList.remove('error');
          document.getElementById('err-city').style.display = 'none';
          hideDrop(cityDropdown);
          warehouseInput.disabled = false;
          streetInput.disabled    = false;
          npWarehouseDesc = '';
          warehouseInput.value = '';
          streetInput.value    = '';
          if (npDeliveryType === 'warehouse') loadWarehouses('');
        },
      })));
    }, 300);

    cityInput.addEventListener('input', e => {
      npCityRef = ''; npDeliveryCityRef = ''; npCityName = '';
      warehouseInput.disabled = true;
      streetInput.disabled    = true;
      searchCities(e.target.value.trim());
    });

    cityDropdown.addEventListener('click', e => {
      const li = e.target.closest('.np-drop-item');
      if (li) cityDropdown._items[+li.dataset.idx]?.onSelect();
    });

    // Warehouse search
    async function loadWarehouses(q) {
      if (!npDeliveryCityRef) return;
      const data = await fetch(`/api/np/warehouses?cityRef=${npDeliveryCityRef}&q=${encodeURIComponent(q)}`).then(r => r.json()).catch(() => []);
      showDrop(warehouseDrop, data.map(w => ({
        label: w.desc,
        onSelect: () => {
          npWarehouseDesc      = w.desc;
          warehouseInput.value = w.desc;
          warehouseInput.classList.remove('error');
          document.getElementById('err-warehouse').style.display = 'none';
          hideDrop(warehouseDrop);
        },
      })));
    }

    warehouseInput.addEventListener('focus', () => { if (npDeliveryCityRef) loadWarehouses(warehouseInput.value.trim()); });
    warehouseInput.addEventListener('input', npDebounce(e => loadWarehouses(e.target.value.trim()), 300));
    warehouseDrop.addEventListener('click', e => {
      const li = e.target.closest('.np-drop-item');
      if (li) warehouseDrop._items[+li.dataset.idx]?.onSelect();
    });

    // Street search
    const searchStreets = npDebounce(async (q) => {
      if (!npCityRef || q.length < 2) { hideDrop(streetDrop); return; }
      const data = await fetch(`/api/np/streets?settlementRef=${npCityRef}&q=${encodeURIComponent(q)}`).then(r => r.json()).catch(() => []);
      showDrop(streetDrop, data.map(s => ({
        label: s.name,
        onSelect: () => {
          npStreetName       = s.name;
          streetInput.value  = s.name;
          hideDrop(streetDrop);
        },
      })));
    }, 300);

    streetInput.addEventListener('input', e => {
      npStreetName = '';
      searchStreets(e.target.value.trim());
    });
    streetDrop.addEventListener('click', e => {
      const li = e.target.closest('.np-drop-item');
      if (li) streetDrop._items[+li.dataset.idx]?.onSelect();
    });
  }

  // ===== CHECKOUT FORM =====
  function setFieldError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const errEl = document.getElementById(errorId);
    if (!input || !errEl) return;
    if (message) {
      input.classList.add('error');
      errEl.textContent = message;
      errEl.style.display = 'block';
    } else {
      input.classList.remove('error');
      errEl.textContent = '';
      errEl.style.display = 'none';
    }
  }

  function clearAllFieldErrors() {
    [['co-name','err-name'],['co-phone','err-phone'],['npCityInput','err-city'],
     ['npWarehouseInput','err-warehouse'],['npStreetInput','err-street']].forEach(([i,e]) => setFieldError(i,e,''));
  }

  // Clear error on input
  ['co-name','co-phone','npCityInput','npWarehouseInput','npStreetInput'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => {
      const errId = { 'co-name':'err-name','co-phone':'err-phone','npCityInput':'err-city',
                      'npWarehouseInput':'err-warehouse','npStreetInput':'err-street' }[id];
      setFieldError(id, errId, '');
    });
  });

  document.getElementById('checkout-form').addEventListener('submit', async e => {
    e.preventDefault();
    if (cart.length === 0) {
      showToast('Оберіть товар з каталогу 👇', true);
      scrollToCatalog();
      return;
    }

    const name    = document.getElementById('co-name').value.trim();
    const phone   = document.getElementById('co-phone').value.trim();
    const message = document.getElementById('co-message').value.trim();
    const submitBtn = document.getElementById('checkout-submit-btn');

    clearAllFieldErrors();

    let firstErrorEl = null;

    if (!name || name.length < 2) {
      setFieldError('co-name', 'err-name', "Введіть ваше ім'я");
      firstErrorEl = firstErrorEl || document.getElementById('co-name');
    }
    if (!phone || phone.replace(/[\s\-\(\)\+]/g, '').length < 10) {
      setFieldError('co-phone', 'err-phone', 'Введіть коректний номер телефону');
      firstErrorEl = firstErrorEl || document.getElementById('co-phone');
    }
    if (!npCityName) {
      setFieldError('npCityInput', 'err-city', 'Оберіть місто зі списку');
      firstErrorEl = firstErrorEl || document.getElementById('npCityInput');
    }
    if (npDeliveryType === 'warehouse' && !npWarehouseDesc) {
      setFieldError('npWarehouseInput', 'err-warehouse', 'Оберіть відділення Нової Пошти');
      firstErrorEl = firstErrorEl || document.getElementById('npWarehouseInput');
    }
    if (npDeliveryType === 'address' && !npStreetName && !document.getElementById('npStreetInput').value.trim()) {
      setFieldError('npStreetInput', 'err-street', 'Введіть назву вулиці');
      firstErrorEl = firstErrorEl || document.getElementById('npStreetInput');
    }

    if (firstErrorEl) {
      firstErrorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const cityStr = npDeliveryType === 'warehouse'
      ? `${npCityName}, ${npWarehouseDesc}`
      : [npCityName, npStreetName || document.getElementById('npStreetInput').value.trim(), document.getElementById('npBuildingInput').value.trim()].filter(Boolean).join(', ');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Відправляємо...';

    const eventId = generateEventId();
    const { fbc, fbp } = getMetaCookies();
    const utms = getUTMParams();
    const items = cart.map(i => ({ name: i.name, sku: i.sku, qty: i.qty, price: i.price, supplierUrl: i.supplierUrl || null }));

    trackPixelEvent('InitiateCheckout', {
      content_ids: items.map(i => i.sku),
      content_type: 'product',
      value: getCartTotal(),
      currency: 'UAH',
      num_items: getCartCount(),
    }, eventId);

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, message, city: cityStr, deliveryType: npDeliveryType, items, price: getCartTotal(), event_id: eventId, fbc, fbp, ...utms }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Помилка сервера');
      const cartTotal = getCartTotal();
      const cartProductName = cart.length === 1 ? cart[0].name : `${cart.length} товари`;
      cart = [];
      cartSave();
      renderCartBadge();
      window.location.href = '/thank-you.html?product=' + encodeURIComponent(cartProductName) + '&price=' + cartTotal;
    } catch (err) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Замовити зараз';
      showToast(err.message || 'Щось пішло не так. Спробуйте ще раз.', true);
    }
  });

  // ===== MODAL QTY =====
  document.getElementById('modal-qty-minus').addEventListener('click', () => {
    if (modalQty > 1) { modalQty--; document.getElementById('modal-qty-num').textContent = modalQty; }
  });
  document.getElementById('modal-qty-plus').addEventListener('click', () => {
    modalQty++; document.getElementById('modal-qty-num').textContent = modalQty;
  });

  document.getElementById('modal-add-to-cart').addEventListener('click', () => {
    if (!selectedProduct) return;
    const existing = cart.find(i => i.id === selectedProduct.id);
    if (existing) {
      existing.qty += modalQty;
    } else {
      cart.push({ ...selectedProduct, qty: modalQty });
    }
    cartSave();
    renderCartBadge();
    renderCheckoutSummary();
    refreshProductCard(selectedProduct.id);
    showToast(`✅ ${selectedProduct.name} — додано до кошика`);
    trackPixelEvent('AddToCart', {
      content_name: selectedProduct.name,
      content_ids: [selectedProduct.sku],
      content_type: 'product',
      value: selectedProduct.price * modalQty,
      currency: 'UAH',
      num_items: modalQty,
    });
    closeModal();
  });

  // (modal NP autocomplete removed — 1-click order)



  // ===== FLOAT CONTACT WIDGET =====
  const floatContact = document.getElementById('float-contact');
  const floatToggle  = document.getElementById('float-toggle');
  if (floatToggle && floatContact) {
    floatToggle.addEventListener('click', () => {
      floatContact.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!floatContact.contains(e.target)) floatContact.classList.remove('open');
    });
  }

  const params = new URLSearchParams(location.search);
  const urlCategory = params.get('category');
  const urlProduct  = params.get('product') || location.hash.replace('#', '');

  if (urlCategory && urlCategory !== activeCategory && PRODUCTS.some(p => p.category === urlCategory)) {
    activeCategory = urlCategory;
    renderProducts(activeCategory);
    document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.cat === activeCategory));
  }

  if (urlProduct && PRODUCTS.find(p => p.id === urlProduct)) {
    const cat = PRODUCTS.find(p => p.id === urlProduct).category;
    if (cat !== activeCategory) {
      activeCategory = cat;
      renderProducts(activeCategory);
      document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.cat === activeCategory));
    }
    setTimeout(() => openModal(urlProduct), 80);
  }
});
