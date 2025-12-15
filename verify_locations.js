const fs = require('fs');
const path = require('path');

// All categories from index.tsx
const categories = {
    'Havan': [
        'grah-shanti-havan', 'navagraha-havan', 'lakshmi-havan', 'maha-mrityunjaya-havan',
        'durga-havan', 'ganesh-havan', 'gayatri-havan', 'vishnu-havan', 'shiva-havan',
        'saraswati-havan', 'chandi-havan', 'rudra-havan', 'vastu-havan', 'dhanvantri-havan',
        'kaal-bhairav-havan', 'hanuman-havan', 'santan-gopal-havan', 'kuber-havan',
        'business-success-havan', 'planetary-shanti-havan'
    ],
    'Paath Jaap': [
        'sundarkand-paath', 'hanuman-chalisa-paath', 'ramcharitmanas-paath', 'bhagwat-katha',
        'durga-saptashati-paath', 'vishnu-sahasranama-paath', 'shiva-purana-paath',
        'ganesh-atharvashirsha-paath', 'gayatri-mantra-jaap', 'maha-mrityunjaya-jaap',
        'shani-mantra-jaap', 'navagraha-mantra-jaap', 'lakshmi-ashtottara-paath',
        'kanakadhara-stotra-paath', 'devi-mahatmyam-paath', 'saraswati-stotra-paath',
        'guru-charitra-paath', 'sai-satcharitra-paath', 'rudri-paath', 'vishnu-puran-paath'
    ],
    'Home Puja': [
        'griha-pravesh-puja', 'vastu-puja', 'nitya-home-puja', 'satyanarayan-puja',
        'griha-shanti-puja', 'dosh-nivaran-puja', 'bhoomi-pujan', 'office-shop-opening-puja',
        'vehicle-puja', 'kitchen-opening-puja', 'child-health-puja', 'wealth-prosperity-puja',
        'negative-energy-removal-puja', 'nazar-dosh-puja', 'family-harmony-puja',
        'new-business-home-blessing', 'lakshmi-puja-home', 'sai-puja', 'navdurga-home-puja',
        'festival-home-puja'
    ],
    'Goddess Puja': [
        'durga-puja', 'lakshmi-puja', 'saraswati-puja', 'kali-mata-puja', 'santoshi-mata-puja',
        'gauri-puja', 'annapurna-devi-puja', 'baglamukhi-puja', 'chandi-puja',
        'bhuvaneshwari-puja', 'mahalakshmi-puja', 'lalita-tripura-sundari-puja',
        'skandamata-puja', 'kushmanda-mata-puja', 'katyayani-mata-puja', 'siddhidatri-puja',
        'renuka-mata-puja', 'mansa-devi-puja', 'chamunda-devi-puja', 'dhanalakshmi-puja'
    ],
    'God Puja': [
        'ganesh-puja', 'shiva-puja', 'rudrabhishek-puja', 'vishnu-puja', 'hanuman-puja',
        'ram-puja', 'krishna-puja', 'balaji-puja', 'satyanarayan-puja-god', 'surya-dev-puja',
        'chandra-dev-puja', 'kartikeya-puja', 'ayyappa-puja', 'dattatreya-puja', 'kuber-puja',
        'shani-dev-puja', 'nagaraja-puja', 'varaha-puja', 'narasimha-puja', 'vishwakarma-puja'
    ],
    'Festival Puja': [
        'diwali-lakshmi-puja', 'dhanteras-puja', 'govardhan-puja', 'bhai-dooj-puja',
        'raksha-bandhan-puja', 'ganesh-chaturthi-puja', 'navratri-puja', 'durga-ashtami-puja',
        'krishna-janmashtami-puja', 'ram-navami-puja', 'maha-shivratri-puja', 'holi-pujan',
        'makar-sankranti-puja', 'pongal-puja', 'chhath-puja', 'gudi-padwa-puja', 'ugadi-puja',
        'baisakhi-puja', 'onam-puja', 'sharad-purnima-puja'
    ],
    'Bhajan & Chowki': [
        'mata-ki-chowki', 'mata-ka-jagran', 'sai-bhajan-sandhya', 'krishna-bhajan-sandhya',
        'ram-bhajan-sandhya', 'shiv-bhajan-sandhya', 'hanuman-bhajan-sandhya',
        'bhavya-bhajan-sandhya', 'festival-special-chowki', 'durga-jagran', 'navratri-kirtan',
        'satyanarayan-katha', 'bhagwat-katha-chowki', 'sundarkand-path-bhajan',
        'sai-sandhya-kirtan', 'mahila-satsang', 'community-kirtan', 'vaishnav-bhajan-sandhya',
        'corporate-bhajan-event', 'family-bhajan-evening'
    ],
    'Marriage & Family': [
        'engagement-puja-sagai', 'roka-ceremony-puja', 'vivah-puja', 'lagna-puja',
        'griha-pravesh-marriage', 'naamkaran-sanskar', 'annaprashan-first-rice',
        'mundan-sanskar', 'upanayana-thread-ceremony', 'vidyarambha-puja',
        'karna-vedha-sanskar', 'birthday-puja', 'marriage-anniversary-puja',
        'shashtipoorthi-puja', 'bhima-ratha-shanti', 'satabhishekam-puja',
        'seemantham-puja', 'baby-shower-puja', 'first-birthday-puja', 'cradle-ceremony-puja'
    ],
    'Business & Career': [
        'office-opening-puja', 'shop-inauguration-puja', 'business-growth-puja',
        'lakshmi-kubera-puja', 'new-project-puja', 'factory-opening-puja',
        'warehouse-blessing-puja', 'restaurant-opening-puja', 'hotel-opening-puja',
        'showroom-opening-puja', 'clinic-opening-puja', 'hospital-inauguration-puja',
        'educational-institute-puja', 'gym-opening-puja', 'salon-opening-puja',
        'startup-blessing-puja', 'annual-business-puja', 'financial-year-puja',
        'partnership-puja', 'contract-success-puja'
    ],
    'Planetary Remedies': [
        'pitra-dosh-nivaran', 'sade-sati-shanti', 'grah-klesh-nivaran',
        'shani-shanti-planetary-puja', 'rahu-ketu-dosh-puja', 'mangal-dosh-puja',
        'ketu-dosh-puja', 'surya-dosh-puja', 'chandra-dosh-puja', 'guru-dosh-puja',
        'budh-dosh-puja', 'shukra-dosh-puja', 'navagraha-shanti-puja', 'pitra-dosh-nivaran',
        'grah-klesh-nivaran', 'sade-sati-shanti', 'kaal-sarp-dosh-puja',
        'kundali-grah-shanti', 'horoscope-correction-puja'
    ]
};

const dir = 'c:\\Users\\Nayan\\website_P1\\pages\\puja-services';
let missing = [];
let found = [];
let notExist = [];

Object.keys(categories).forEach(category => {
    console.log(`\nChecking ${category}...`);
    categories[category].forEach(slug => {
        const filePath = path.join(dir, `${slug}.tsx`);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf-8');
            if (content.includes('PujaServiceLocations')) {
                found.push(slug);
            } else {
                missing.push(slug);
                console.log(`  ❌ MISSING: ${slug}`);
            }
        } else {
            notExist.push(slug);
            console.log(`  ⚠️  FILE NOT FOUND: ${slug}`);
        }
    });
});

console.log(`\n\n=== SUMMARY ===`);
console.log(`✅ Has Component: ${found.length}`);
console.log(`❌ Missing Component: ${missing.length}`);
console.log(`⚠️  File Doesn't Exist: ${notExist.length}`);

if (missing.length > 0) {
    console.log(`\n\nMissing files:\n${missing.join('\n')}`);
}

if (notExist.length > 0) {
    console.log(`\n\nNon-existent files:\n${notExist.join('\n')}`);
}
