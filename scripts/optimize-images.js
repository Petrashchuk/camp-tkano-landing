const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../images');
const OUTPUT_DIR = path.join(__dirname, '../public/images');

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const files = fs.readdirSync(INPUT_DIR).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

Promise.all(files.map(async (file) => {
  const input = path.join(INPUT_DIR, file);
  const name = path.basename(file, path.extname(file));
  const output = path.join(OUTPUT_DIR, `${name}.webp`);

  await sharp(input)
    .resize(800, 800, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);

  console.log(`✓ ${file} → ${name}.webp`);
})).then(() => console.log('Done!'));
