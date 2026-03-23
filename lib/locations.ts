export interface Location {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  heroImage: string
  gallery: string[]
  bestTimeToVisit: string
  rating: number
  priceLevel: string
  highlights: string[]
  region: string
  country: string
  category: 'indian' | 'international'
}

export const locations: Location[] = [
  // Indian Destinations
  {
    id: "goa",
    name: "Goa, India",
    shortDescription: "Beautiful beaches, vibrant nightlife, and Portuguese heritage",
    fullDescription: "Goa is a state in western India known for its stunning coastline, Portuguese colonial architecture, and laid-back vibe. From the pristine beaches of Anjuna and Calangute to the historic forts and churches, Goa offers a perfect blend of relaxation and adventure. Experience water sports, explore spice plantations, and enjoy the famous Goan cuisine.",
    heroImage: "/hero-image-goa.jpg",
    gallery: [
      "/cinematic-view-goa.jpg",
      "/i-love-goa.jpg",
      "/lunch-dinner-in-goa.jpg",
      "/sunset-palm-trees-in-goa.jpg",
    ],
    bestTimeToVisit: "November to May",
    rating: 4.4,
    priceLevel: "$",
    highlights: ["Beaches", "Water Sports", "Spice Plantations", "Portuguese Architecture"],
    region: "Asia",
    country: "India",
    category: "indian"
  },
  {
    id: "kerala",
    name: "Kerala, India",
    shortDescription: "God's Own Country with backwaters, spices, and Ayurveda",
    fullDescription: "Kerala, often called 'God's Own Country', is a state in southern India famous for its serene backwaters, lush green landscapes, and rich cultural heritage. Experience houseboat cruises on the backwaters, visit spice plantations, explore wildlife sanctuaries, and rejuvenate with traditional Ayurvedic treatments. The state's unique blend of natural beauty and cultural richness makes it a paradise for nature lovers.",
    heroImage: "/hero-image-kerala.jpg",
    gallery: [
      "/kerala-view1.jpg",
      "/kerala-view-2.jpg",
      "/kerala-view3.jpg",
      "/kerala-view.jpg",
    ],
    bestTimeToVisit: "September to March",
    rating: 4.6,
    priceLevel: "$$",
    highlights: ["Backwaters", "Houseboat Cruises", "Ayurveda", "Wildlife"],
    region: "Asia",
    country: "India",
    category: "indian"
  },
  {
    id: "rajasthan",
    name: "Rajasthan, India",
    shortDescription: "Land of kings with majestic forts, palaces, and desert safaris",
    fullDescription: "Rajasthan, the 'Land of Kings', is a state in northern India known for its rich history, magnificent palaces, and vibrant culture. Explore the majestic forts of Jaipur, Jodhpur, and Udaipur, experience desert safaris in Jaisalmer, and witness the colorful festivals. The state's royal heritage, combined with its diverse landscapes from deserts to lakes, offers an unforgettable journey through India's regal past.",
    heroImage: "/hero-image-rajasthan.jpg",
    gallery: [
      "/rajasthan1.jpg",
      "/rajasthan2.jpg",
      "/rajasthan3.jpg",
      "/rajasthan4.jpg"
    ],
    bestTimeToVisit: "October to March",
    rating: 4.5,
    priceLevel: "$$",
    highlights: ["Palaces", "Desert Safaris", "Cultural Festivals", "Heritage Sites"],
    region: "Asia",
    country: "India",
    category: "indian"
  },
  {
    id: "agra",
    name: "Agra, India",
    shortDescription: "Home to the iconic Taj Mahal and Mughal architecture",
    fullDescription: "Agra, located in Uttar Pradesh, is world-famous for the Taj Mahal, one of the Seven Wonders of the World. Built by Mughal Emperor Shah Jahan as a symbol of love for his wife Mumtaz Mahal, this white marble mausoleum is a masterpiece of Mughal architecture. Explore the Agra Fort, Fatehpur Sikri, and experience the rich Mughal history that shaped India's architectural heritage.",
    heroImage: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544008230-ac1e1fb4f4f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596178060810-fb4bd482ee2c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "October to March",
    rating: 4.7,
    priceLevel: "$$",
    highlights: ["Taj Mahal", "Agra Fort", "Mughal Architecture", "History"],
    region: "Asia",
    country: "India",
    category: "indian"
  },
  {
    id: "varanasi",
    name: "Varanasi, India",
    shortDescription: "Spiritual capital of India with ancient ghats and temples",
    fullDescription: "Varanasi, one of the world's oldest living cities, is the spiritual capital of India and a major pilgrimage destination for Hindus. Located on the banks of the sacred River Ganges, the city is famous for its ghats, temples, and the evening Ganga Aarti ceremony. Experience the spiritual atmosphere, explore ancient temples, and witness the unique blend of devotion and daily life that makes Varanasi truly special.",
    heroImage: "https://images.unsplash.com/photo-1596178060810-fb4bd482ee2c?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544008230-ac1e1fb4f4f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596178060810-fb4bd482ee2c?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "October to March",
    rating: 4.3,
    priceLevel: "$",
    highlights: ["Ganga Ghats", "Temples", "Ganga Aarti", "Spiritual Experience"],
    region: "Asia",
    country: "India",
    category: "indian"
  },
  {
    id: "jaipur",
    name: "Jaipur, India",
    shortDescription: "The Pink City with magnificent palaces and markets",
    fullDescription: "Jaipur, the capital of Rajasthan, is famously known as the 'Pink City' due to the distinctive color of its buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, the city is a UNESCO World Heritage Site featuring magnificent palaces, forts, and vibrant markets. Explore the City Palace, Hawa Mahal, and Amber Fort, and experience the royal heritage of Rajasthan.",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1544008230-ac1e1fb4f4f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596178060810-fb4bd482ee2c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "October to March",
    rating: 4.4,
    priceLevel: "$$",
    highlights: ["Palaces", "Forts", "Markets", "Royal Heritage"],
    region: "Asia",
    country: "India",
    category: "indian"
  },

  // International Destinations (Popular/Searched)
  {
    id: "santorini",
    name: "Santorini, Greece",
    shortDescription: "Iconic white-washed buildings overlooking the Aegean Sea",
    fullDescription: "Santorini is a stunning volcanic island in the Cyclades group of Greek islands. Famous for its dramatic views, stunning sunsets, white-washed houses, and its very own active volcano. The island's unique architecture, built on the edge of a caldera, creates a breathtaking landscape that has captivated travelers for centuries. Wander through narrow cobblestone streets, discover hidden churches with blue domes, and experience the warmth of Greek hospitality.",
    heroImage: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "April to October",
    rating: 4.9,
    priceLevel: "$$$",
    highlights: ["Oia Sunset", "Caldera Views", "Wine Tasting", "Volcanic Beaches"],
    region: "Europe",
    country: "Greece",
    category: "international"
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    shortDescription: "Tropical paradise with spiritual temples and rice terraces",
    fullDescription: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats, making it a perfect destination for both adventure and relaxation.",
    heroImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "April to October",
    rating: 4.6,
    priceLevel: "$",
    highlights: ["Rice Terraces", "Temple Tours", "Surfing", "Yoga Retreats"],
    region: "Asia",
    country: "Indonesia",
    category: "international"
  },
  {
    id: "paris",
    name: "Paris, France",
    shortDescription: "The City of Light with timeless romance and art",
    fullDescription: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "April to June, September to November",
    rating: 4.7,
    priceLevel: "$$$",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "Montmartre"],
    region: "Europe",
    country: "France",
    category: "international"
  },
  {
    id: "dubai",
    name: "Dubai, UAE",
    shortDescription: "Futuristic skyline meets Arabian luxury",
    fullDescription: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. Dubai blends traditional Arabic culture with cutting-edge innovation, offering desert safaris alongside world-class dining and entertainment.",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "November to March",
    rating: 4.6,
    priceLevel: "$$$$",
    highlights: ["Burj Khalifa", "Desert Safari", "Palm Jumeirah", "Dubai Mall"],
    region: "Middle East",
    country: "UAE",
    category: "international"
  },
  {
    id: "thailand",
    name: "Thailand",
    shortDescription: "Land of smiles with temples, beaches, and street food",
    fullDescription: "Thailand, often called the 'Land of Smiles', is a Southeast Asian country known for its tropical beaches, ornate temples, and delicious cuisine. From the bustling streets of Bangkok to the pristine islands of Phuket and Koh Samui, Thailand offers a perfect mix of culture, adventure, and relaxation. Experience ancient temples, vibrant markets, and world-famous street food.",
    heroImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "November to February",
    rating: 4.5,
    priceLevel: "$",
    highlights: ["Temples", "Beaches", "Street Food", "Islands"],
    region: "Asia",
    country: "Thailand",
    category: "international"
  },
  {
    id: "maldives",
    name: "Maldives",
    shortDescription: "Crystal clear waters and luxury overwater villas",
    fullDescription: "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. It's known for its beaches, blue lagoons and extensive reefs. The capital, Malé, has a busy fish market, restaurants and shops. The Maldives is famous for its luxury resorts featuring overwater bungalows and unparalleled snorkeling and diving experiences.",
    heroImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "November to April",
    rating: 4.8,
    priceLevel: "$$$$",
    highlights: ["Overwater Villas", "Snorkeling", "Sunset Cruises", "Spa Retreats"],
    region: "Asia",
    country: "Maldives",
    category: "international"
  },
  {
    id: "japan",
    name: "Tokyo, Japan",
    shortDescription: "Futuristic metropolis with ancient temples and neon lights",
    fullDescription: "Tokyo, Japan's capital, is a bustling metropolis where ancient temples coexist with cutting-edge technology. From the serene gardens of the Imperial Palace to the neon-lit streets of Shibuya, Tokyo offers a unique blend of tradition and modernity. Experience world-class cuisine, visit historic shrines, and explore vibrant districts that never sleep.",
    heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "March to May, September to November",
    rating: 4.8,
    priceLevel: "$$$",
    highlights: ["Temples", "Neon Districts", "Cuisine", "Technology"],
    region: "Asia",
    country: "Japan",
    category: "international"
  },
  {
    id: "italy",
    name: "Rome, Italy",
    shortDescription: "Eternal City with ancient ruins, art, and cuisine",
    fullDescription: "Rome, the Eternal City, is the capital of Italy and a living museum of ancient history and Renaissance art. Walk among the ruins of the Colosseum, throw a coin into the Trevi Fountain, and climb the steps of the Vatican. Experience world-famous Italian cuisine, vibrant piazzas, and the timeless beauty that has inspired artists for centuries.",
    heroImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1529260830199-42e834d57831?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "April to June, September to October",
    rating: 4.7,
    priceLevel: "$$$",
    highlights: ["Colosseum", "Vatican", "Trevi Fountain", "Cuisine"],
    region: "Europe",
    country: "Italy",
    category: "international"
  },
  {
    id: "new-york",
    name: "New York City, USA",
    shortDescription: "The city that never sleeps with iconic landmarks",
    fullDescription: "New York City, often called the 'City That Never Sleeps', is a global hub of culture, finance, and entertainment. From the towering skyscrapers of Manhattan to the diverse neighborhoods of Brooklyn and Queens, NYC offers endless possibilities. Visit the Statue of Liberty, Times Square, Central Park, and experience the energy that makes this city legendary.",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805b6d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c1a8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "April to June, September to November",
    rating: 4.6,
    priceLevel: "$$$$",
    highlights: ["Statue of Liberty", "Times Square", "Central Park", "Broadway"],
    region: "North America",
    country: "USA",
    category: "international"
  },
  {
    id: "london",
    name: "London, UK",
    shortDescription: "Historic capital with royal palaces and modern culture",
    fullDescription: "London, the capital of the United Kingdom, is a vibrant metropolis blending centuries of history with cutting-edge modernity. From Buckingham Palace and the Tower of London to the Tate Modern and Camden Market, London offers a rich tapestry of experiences. Cross the Thames on iconic bridges, enjoy world-class theater, and discover the diverse neighborhoods that make this city endlessly fascinating.",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513026705753-bc3fffca2485?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "March to May, September to November",
    rating: 4.5,
    priceLevel: "$$$",
    highlights: ["Big Ben", "Buckingham Palace", "Tower Bridge", "Museums"],
    region: "Europe",
    country: "UK",
    category: "international"
  }
]

export function getLocationById(id: string): Location | undefined {
  return locations.find(location => location.id === id)
}