const fs = require('fs');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

const svgCode = `
<svg width='512' height='512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
  <rect width='512' height='512' fill='#0a0706' rx='100' />
  <text x='50%' y='65%' font-family='Georgia, serif' font-style='italic' font-weight='normal' font-size='360' fill='#c9a96e' text-anchor='middle'>R</text>
  <text x='50%' y='65%' font-family='Georgia, serif' font-style='italic' font-weight='normal' font-size='360' fill='none' stroke='#e2c992' stroke-width='4' text-anchor='middle'>R</text>
</svg>`;

async function makeIcon() {
  try {
    const pngBuffer = await sharp(Buffer.from(svgCode)).png().toBuffer();
    fs.writeFileSync('public/favicon.png', pngBuffer);
    
    const icoBuffer = await pngToIco('public/favicon.png');
    fs.writeFileSync('public/favicon.ico', icoBuffer);
    
    console.log('Successfully generated favicon.ico!');
  } catch (err) {
    console.error('Error generating icon:', err);
  }
}

makeIcon();
