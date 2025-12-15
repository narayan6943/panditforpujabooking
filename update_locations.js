const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Nayan\\website_P1\\pages\\puja-services';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && f !== 'index.tsx' && !f.startsWith('demo') && !f.startsWith('listing'));

let updatedCount = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Add Import if missing
    if (!content.includes('PujaServiceLocations')) {
        // Try to add after other component imports
        if (content.includes("import { Footer } from '@/components/Footer'")) {
            content = content.replace(
                "import { Footer } from '@/components/Footer'",
                "import { Footer } from '@/components/Footer'\nimport { PujaServiceLocations } from '@/components/PujaServiceLocations'"
            );
        } else {
            // Fallback: add to top imports
            content = content.replace(
                "import React",
                "import { PujaServiceLocations } from '@/components/PujaServiceLocations'\nimport React"
            );
        }
    }

    // 2. Add Component before Footer if missing
    if (!content.includes('<PujaServiceLocations')) {
        const slug = file.replace('.tsx', '');
        const pujaName = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

        if (content.includes('<Footer />')) {
            content = content.replace(
                '<Footer />',
                `<PujaServiceLocations pujaName="${pujaName}" />\n            <Footer />`
            );
            updatedCount++;
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(`Updated ${file}`);
        } else {
            console.warn(`Skipping ${file}: No <Footer /> tag found.`);
        }
    } else {
        console.log(`Skipping ${file}: Already has PujaServiceLocations.`);
    }
});

console.log(`Total files updated: ${updatedCount}`);
