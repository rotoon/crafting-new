const sharp = require('sharp');
const fs = require('fs');

async function convert(fileIn, fileOut) {
  try {
    await sharp(fileIn).webp().toFile(fileOut);
    console.log(`Converted ${fileIn} to ${fileOut}`);
  } catch (err) {
    console.error(`Error converting ${fileIn}:`, err);
  }
}

convert('public/assets/services/service-branding.png', 'public/assets/services/service-branding.webp');
convert('public/assets/services/service-production.png', 'public/assets/services/service-production.webp');
