import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateBlur(filePath) {
  const buffer = await sharp(filePath)
    .resize(10, 10, { fit: 'inside' })
    .blur()
    .toBuffer();
  return `data:image/webp;base64,${buffer.toString('base64')}`;
}

async function run() {
  const wallpaperBlur = await generateBlur('./public/wallpaper.webp');
  const personalBlur = await generateBlur('./public/1_ext.webp');
  
  console.log('--- WALLPAPER BLUR ---');
  console.log(wallpaperBlur);
  console.log('\n--- PERSONAL BLUR ---');
  console.log(personalBlur);
}

run();
