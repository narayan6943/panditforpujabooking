const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/logo.png');
const outputPath = path.join(__dirname, '../public/logo.png'); // Overwrite

async function processLogo() {
    console.log('Processing logo for perfect circular crop...');

    // 1. Define strict dimensions
    const size = 512;
    const radius = size / 2;

    // 2. Create a perfect circle SVG mask
    const circleSvg = Buffer.from(
        `<svg width="${size}" height="${size}"><circle cx="${radius}" cy="${radius}" r="${radius}" fill="white"/></svg>`
    );

    // 3. Process the image
    await sharp(inputPath)
        .resize(size, size, { fit: 'cover' }) // Ensure it fills the box
        .composite([{
            input: circleSvg,
            blend: 'dest-in' // This is the key: keeps only what overlaps with the circle
        }])
        .toFile(path.join(__dirname, '../public/logo-processed.png')); // Save to temp

    // 4. Overwrite original
    const fs = require('fs');
    fs.renameSync(path.join(__dirname, '../public/logo-processed.png'), outputPath);

    console.log('Logo successfully cropped to a perfect circle with transparent background.');
}

processLogo().catch(err => {
    console.error('Error processing logo:', err);
    process.exit(1);
});
