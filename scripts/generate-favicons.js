const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../public/logo.png');
const publicDir = path.join(__dirname, '../public');

async function generate() {
    console.log('Reading from:', inputFile);
    const image = sharp(inputFile);

    // 1. favicon.ico (Using 32x32 PNG renamed to .ico for broad compatibility)
    await image.clone().resize(32, 32).toFile(path.join(publicDir, 'favicon.ico'));

    // 2. favicon-16x16.png
    await image.clone().resize(16, 16).toFile(path.join(publicDir, 'favicon-16x16.png'));

    // 3. favicon-32x32.png
    await image.clone().resize(32, 32).toFile(path.join(publicDir, 'favicon-32x32.png'));

    // 4. apple-touch-icon.png (180x180)
    await image.clone().resize(180, 180).toFile(path.join(publicDir, 'apple-touch-icon.png'));

    // 5. android-chrome-192x192.png
    await image.clone().resize(192, 192).toFile(path.join(publicDir, 'android-chrome-192x192.png'));

    // 6. android-chrome-512x512.png
    await image.clone().resize(512, 512).toFile(path.join(publicDir, 'android-chrome-512x512.png'));

    console.log('Favicons generated successfully.');
}

generate().catch(err => {
    console.error('Error generating favicons:', err);
    process.exit(1);
});
