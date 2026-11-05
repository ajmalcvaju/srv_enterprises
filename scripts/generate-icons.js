const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const cleanLogoSrc = path.join(process.cwd(), 'public', 'images', 'srv-logo.png');

async function makeIcons() {
  const size = 512;
  const logoResized = await sharp(cleanLogoSrc)
    .resize(470, 470, { fit: 'inside' })
    .toBuffer();

  // 1. Create a white squircle card
  const iconBuffer = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([
      { input: logoResized, gravity: 'center' }
    ])
    .png()
    .toBuffer();

  // Save to app/icon.png
  fs.writeFileSync(path.join(process.cwd(), 'app', 'icon.png'), iconBuffer);

  // Save to public/favicon.ico
  await sharp(iconBuffer)
    .resize(32, 32)
    .toFile(path.join(process.cwd(), 'public', 'favicon.ico'));

  // Save to public/favicon-32x32.png
  await sharp(iconBuffer)
    .resize(32, 32)
    .toFile(path.join(process.cwd(), 'public', 'favicon-32x32.png'));

  // Save to public/apple-touch-icon.png (180x180)
  await sharp(iconBuffer)
    .resize(180, 180)
    .toFile(path.join(process.cwd(), 'public', 'apple-touch-icon.png'));

  // Create an SVG favicon
  const logoBase64 = (await sharp(cleanLogoSrc).resize(240, null, { fit: 'inside' }).toBuffer()).toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#FFFFFF" stroke="#1265A8" stroke-width="2"/>
  <image href="data:image/png;base64,${logoBase64}" x="4" y="4" width="56" height="56" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
  fs.writeFileSync(path.join(process.cwd(), 'app', 'icon.svg'), svgContent);

  console.log('All icons and favicons generated successfully!');
}

makeIcons().catch(console.error);
