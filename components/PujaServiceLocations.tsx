'use client'
import React, { useState } from 'react'

const LOCATIONS = [
    "Hinjewadi", "Wagholi", "Kharadi", "Wakad", "Baner", "Hadapsar", "Talegaon Dabhade", "Pimple Saudagar", "Kothrud", "Undri",
    "Viman Nagar", "Bavdhan", "Sus", "Dhanori", "Kondhwa", "Balewadi", "Sinhagad Road", "Wadgaon Sheri", "Moshi", "Kalyani Nagar",
    "Ravet", "Kesnand", "Ambegaon Budruk", "Pimpri Chinchwad", "Aundh", "Pirangut", "Uruli Kanchan", "Keshav Nagar", "Alandi Road",
    "Chakan", "Katraj", "Rahatani", "Manjri", "Warje", "Ambegaon", "Magarpatta", "Chinchwad", "Katraj Kondhwa Road", "Vishrant Wadi",
    "Dehu", "Lohegaon", "Fursungi", "Pimpri", "Handewadi", "Dhayari", "Koregaon Park", "Pimple Gurav", "Pashan Sus Road", "NIBM",
    "Bhugaon", "Nigdi", "Wanwadi", "Pashan", "Mundhwa", "Karvenagar", "Dange Chowk", "Yewalewadi", "Chikhali", "Pimple Nilakh",
    "NIBM Road", "Pisoli", "Tingre Nagar", "Bibwewadi", "Punawale", "NIBM Annexe", "Akurdi", "Somatne Phata", "Narhe", "Kiwale",
    "Thergaon", "Yerwada", "Sangvi", "Bhukum", "Baner-Pashan Link Road", "Erandwane", "Kondhwa Budruk", "Kamshet", "Khadakwasla",
    "Kalewadi", "Senapati Bapat Road", "Sadashiv Peth", "BT Kawade Road", "Ranjangaon", "Bhusari Colony", "Shastri Nagar", "Jejuri",
    "Sanaswadi", "Nagar Road", "Kondhwa Khurd", "Magarpatta Road", "Tathawade", "Vadgaon Budruk", "Dighi", "Paud Road", "Panshet",
    "Loni Kalbhor", "Shirwal", "Chandan Nagar", "Dhankawadi", "Bhosari", "Dive", "Marunji", "Spine Road", "Shivajinagar",
    "Handewadi Road", "Mulshi", "Shivane", "Misalwadi", "Pradhikaran", "Hinjawadi Phase 1", "Awhalwadi", "Fatima Nagar",
    "Parvati Darshan", "Baner Pashan Link Road", "Mohammadwadi", "Mumbai-Pune Expressway", "Charholi Budruk", "Salunke Vihar",
    "Boat Club Road", "Kharadi Bypass Road", "Sasane Nagar", "Shukrawar Peth", "Bund Garden Road", "Talawade", "Mahalunge", "Camp",
    "Anand Nagar", "Gokhale Nagar", "Dapodi", "Lulla Nagar", "Market Yard", "Law College Road", "Uruli Devachi", "Model Colony",
    "Satara Road", "Pune Solapur Road", "Alandi", "Aundh Road", "Sopan Baug", "Bhawani Peth", "Bopodi", "Khadki", "Charholi Khurd",
    "Ganesh Nagar", "Deccan Gymkhana", "Mukund Nagar", "Somwar Peth", "Baramati", "Saswad", "Prabhat Road", "Kirkatwadi",
    "Sangamvadi", "Sukh Sagar Nagar", "Khed Shivapur", "Uttam Nagar", "Sanghavi", "Guruwar Peth", "Nana Peth", "Deccan",
    "Dhole Patil Road", "Pune Cantonment", "Karve Road", "Vadgaon Maval", "Mamurdi", "Rajgurunagar", "Lavasa", "Koregaon",
    "Nande", "MG Road", "Shikrapur", "Moshi Pradhikaran", "Hingne Khurd", "Kasarwadi", "Balaji Nagar", "Bhekrai Nagar",
    "Salisbury Park", "Ghorpadi", "Padmavati", "Rasta Peth", "Daund", "Shaniwar Peth", "Tilak Road", "Old Mumbai Pune Highway",
    "Pune-Nashik Highway", "Mundhwa Road", "Gultekdi", "Nanded City", "Sainath Nagar", "Dattavadi", "Lonikand", "Sahakar Nagar",
    "Bhosale Nagar", "Guru Nanak Nagar", "FC Road", "Kothrud Road", "Bavdhan Khurd", "Sinhagad", "Kasba Peth", "Dehu Road",
    "Jambhul", "Theur", "Bajirao Road", "Manchar", "Uday Baug", "Ambarwet", "Nasrapur", "Saswad Road", "Wadebolai",
    "Talegaon Dhamdhere", "Kolhewadi", "Mangalwar Peth", "Wadegaon", "Ghotawade", "Mahrashi Nagar", "Swargate", "Chandani Chowk",
    "Ganesh Peth", "Bhor", "Kanhe", "Shankar Sheth Road", "Yavat", "Shreehans Nagar", "Purandar", "Shirur", "Kondhawe Dhawade",
    "Budhwar Peth", "Raviwar Peth", "Shirgaon", "Kasarsai", "Pune Railway Station", "Parvati", "Bhagyashree Nagar", "Panchgani",
    "Malshiras", "Wadki", "Parvati Gaon", "Revenue Colony", "Mandai", "Nilakh", "Shewalwadi", "Sanjay Park", "Mahalunge Ingale",
    "Bopkhel", "Rambaug Colony", "Paud", "Kalas", "Sangvi Road", "Somatane", "Ashok Nagar", "Yashvant Nagar", "Chandkhed",
    "Junnar", "Ingale Nagar", "Veerabhadra Nagar", "Talegaon MIDC Road", "Vithalwadi", "Padvi", "Dhanore", "Agarkar Nagar", "Rihe",
    "Koregaon Bhima", "Range Hills", "Vidyanagar", "Markal", "Landewadi", "Indapur", "Nerhe", "Bakori", "Bhilarewadi", "Uravade",
    "Masulkar Colony", "Vanaz", "Kondhwa-Pisoli Road", "Sopan Bag Road", "Gokhale Road", "Empress Gardens", "Sambhaji Nagar",
    "Vadhu Budruk", "Indira Nagar", "Wakadewadi", "Nasrapur Velha Road", "Gahunje", "Velhe", "Maan", "Ganga Dham", "Kavade Mala",
    "Bope", "Chande", "Gudhe", "Tambhad", "Parner Pune Highway", "Ganeshkhind", "Lavale", "Narayan Peth", "Amboli", "Shetphal Haveli",
    "Induri", "Khed", "JM Road", "Walvekar Nagar", "MIT College Road", "Ideal Colony", "Ramtekdi", "Chourainagar", "Malegaon",
    "Taljai", "Pawna Nagar", "Ranjangaon Karanjawane Road", "University Road", "Kanhur Mesai", "Kondanpur", "NDA Road", "Peth Gaon",
    "Range Hill Road", "Naylar Road", "Pimpoli", "Malkapur", "Ashtapur", "Church Road", "Factory Road", "Ganesh Road", "Moshi Phata",
    "Karjat", "Varasgaon", "Narayangaon", "Velu", "Khamundi", "Sarola", "Pingori", "Kondhapuri", "Mahatma Phule Peth",
    "INS Shivaji Lonavala", "Ketkawale", "Walhe", "Chimbali", "Alephata", "Lokamanya Nagar", "Kelawade", "Guruganesh Nagar",
    "Kasar Amboli", "Bawada", "Nanekarwadi", "Narayanpur", "Donaje", "Alandi-Markal Road", "Nimgaon Mhalungi", "Ambavane",
    "Valane", "Mohari BK", "Bhaginghar", "Sonde Karla", "Kodawadi", "Lohagad", "Medankarwadi", "Kolvan", "Karmoli", "Pargaon",
    "Dhangarwadi", "Bahul", "Bopgaon", "Tingarli", "Mhatre Bridge", "Pachane", "East Khadki", "Central Panchgani", "Khamla",
    "Vadgaon MIDC", "Supe", "Varve Khurd", "Wai", "Morgaon", "Kolwadi", "Bhoirwadi", "Sate", "Shindaone", "Pimpalgaon Tarf Khed",
    "Boripardhi", "Holewadi", "Shiroli", "Kurkumbh", "Jalochi", "Nighoje", "Baner Bypass Highway", "Otur", "Ambegaon Khurd"
];

interface PujaServiceLocationsProps {
    pujaName: string;
}

export const PujaServiceLocations: React.FC<PujaServiceLocationsProps> = ({ pujaName }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="bg-white py-12 border-t border-gray-100">
            <div className="container-custom">
                {/* Clickable Heading with Icon */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full group flex items-center justify-center gap-3 mb-8 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? 'Hide locations' : 'Show locations'}
                >
                    <h2 className="text-2xl font-serif font-bold text-maroon-900 text-center">
                        Pandit for Puja in Pune – Areas We Serve
                    </h2>

                    {/* Animated Chevron Icon */}
                    <svg
                        className={`w-6 h-6 text-gold-500 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Locations Grid with Smooth Animation */}
                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                        maxHeight: isExpanded ? '10000px' : '0px',
                        opacity: isExpanded ? 1 : 0
                    }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2 text-sm text-gray-600 pb-4">
                        {LOCATIONS.map((loc, i) => (
                            <div key={i} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full mr-2 flex-shrink-0"></span>
                                <span>Pandit for {pujaName} in {loc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-center text-xs text-gray-400 mt-8">
                    *Book experienced Vedic Pandits for {pujaName} in all localities of Pune and PCMC.
                </p>
            </div>
        </section>
    )
}
