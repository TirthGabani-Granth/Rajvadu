const fs = require('fs');
const sharp = require('sharp');
const pngToIco = require('png-to-ico').default;

const svgCode = `
<svg width='512' height='512' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
  <rect width='512' height='512' fill='#0a0706' rx='128' />
  
  <text x='50%' y='64%' font-family='Georgia, serif' font-style='italic' font-weight='normal' font-size='320' fill='#c9a96e' text-anchor='middle'>RT</text>
  <text x='50%' y='64%' font-family='Georgia, serif' font-style='italic' font-weight='normal' font-size='320' fill='none' stroke='#e2c992' stroke-width='4' text-anchor='middle'>RT</text>
</svg>`;

async function makeIcon() {
  try {
    const pngBuffer = await sharp(Buffer.from(svgCode)).png().toBuffer();
    fs.writeFileSync('public/favicon.png', pngBuffer);
    
    const icoBuffer = await pngToIco(['public/favicon.png']);
    fs.writeFileSync('public/favicon.ico', icoBuffer);
    
    console.log('Successfully generated RT favicon!');
  } catch (err) {
    console.error('Error generating icon:', err);
  }
}

makeIcon();
