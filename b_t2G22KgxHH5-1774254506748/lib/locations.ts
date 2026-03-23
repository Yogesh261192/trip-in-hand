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
}

export const locations: Location[] = [
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
    region: "Europe"
  },
  {
    id: "kyoto",
    name: "Kyoto, Japan",
    shortDescription: "Ancient temples and serene bamboo forests await",
    fullDescription: "Kyoto, once the capital of Japan, is a city on the island of Honshu famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses. The city is also known for formal traditions such as kaiseki dining and geisha entertainers. The stunning Arashiyama Bamboo Grove and the iconic Fushimi Inari shrine with its thousands of vermillion torii gates are must-visit destinations.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "March to May, October to November",
    rating: 4.8,
    priceLevel: "$$",
    highlights: ["Bamboo Forest", "Fushimi Inari", "Tea Ceremonies", "Cherry Blossoms"],
    region: "Asia"
  },
  {
    id: "iceland",
    name: "Reykjavik, Iceland",
    shortDescription: "Land of fire and ice with otherworldly landscapes",
    fullDescription: "Iceland is a Nordic island nation defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. From the stunning Northern Lights dancing across winter skies to the midnight sun of summer, Iceland offers experiences found nowhere else on Earth. Explore glaciers, witness powerful waterfalls, relax in natural hot springs, and discover a land where nature reigns supreme.",
    heroImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520769945061-0a448c463865?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1490823871488-3fece5c60f93?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "June to August, September to March for Northern Lights",
    rating: 4.7,
    priceLevel: "$$$",
    highlights: ["Northern Lights", "Blue Lagoon", "Golden Circle", "Glaciers"],
    region: "Europe"
  },
  {
    id: "bali",
    name: "Bali, Indonesia",
    shortDescription: "Tropical paradise with spiritual temples and rice terraces",
    fullDescription: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats, making it a perfect destination for both adventure and relaxation.",
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=600&fit=crop",
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
    region: "Asia"
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu, Peru",
    shortDescription: "Ancient Incan citadel perched high in the Andes",
    fullDescription: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar. This UNESCO World Heritage site sits 2,430 meters above sea level and offers breathtaking views of the surrounding mountains and valleys.",
    heroImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1548637553-eb1c2b67f8a2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569574728019-9d76bae5d7bb?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "May to September",
    rating: 4.9,
    priceLevel: "$$",
    highlights: ["Inca Trail", "Sun Gate", "Temple of the Sun", "Mountain Views"],
    region: "South America"
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
    region: "Asia"
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
    region: "Europe"
  },
  {
    id: "new-zealand",
    name: "Queenstown, New Zealand",
    shortDescription: "Adventure capital surrounded by majestic mountains",
    fullDescription: "Queenstown, New Zealand, sits on the shores of the South Island's Lake Wakatipu, set against the dramatic Southern Alps. Renowned for adventure sports, it's also a base for exploring the region's vineyards and historic mining towns. The surrounding mountains have ski fields and hiking trails, and a famous bungee-jumping site at Kawarau Gorge Suspension Bridge.",
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504681869696-d977211a5f4c?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "December to February",
    rating: 4.8,
    priceLevel: "$$",
    highlights: ["Bungee Jumping", "Milford Sound", "Skiing", "Wine Tours"],
    region: "Oceania"
  },
  {
    id: "morocco",
    name: "Marrakech, Morocco",
    shortDescription: "Vibrant souks and ancient medina full of wonders",
    fullDescription: "Marrakech, a former imperial city in western Morocco, is a major economic center and home to mosques, palaces and gardens. The medina is a densely packed, walled medieval city dating to the Berber Empire, with mazelike alleys where thriving souks sell traditional textiles, pottery and jewelry. The city's vibrant atmosphere, aromatic spices, and rich cultural heritage create an unforgettable sensory experience.",
    heroImage: "https://images.unsplash.com/photo-1518544866330-4e716499f800?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1528820128562-dcae4a4d0c57?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545167496-5a7896d4b6f7?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "March to May, September to November",
    rating: 4.5,
    priceLevel: "$",
    highlights: ["Medina Souks", "Jardin Majorelle", "Riads", "Atlas Mountains"],
    region: "Africa"
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
    region: "Middle East"
  },
  {
    id: "switzerland",
    name: "Swiss Alps, Switzerland",
    shortDescription: "Majestic peaks and charming alpine villages",
    fullDescription: "The Swiss Alps occupy the southern part of Switzerland and are one of Europe's great natural features. These majestic mountains feature dramatic peaks, pristine glacial lakes, and charming villages that seem frozen in time. Whether skiing in winter or hiking in summer, the Swiss Alps offer breathtaking scenery and world-renowned hospitality. Iconic destinations like Zermatt, Interlaken, and Lucerne provide unforgettable alpine experiences.",
    heroImage: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "December to March for skiing, June to September for hiking",
    rating: 4.9,
    priceLevel: "$$$$",
    highlights: ["Matterhorn", "Scenic Trains", "Chocolate Tours", "Alpine Lakes"],
    region: "Europe"
  },
  {
    id: "patagonia",
    name: "Patagonia, Argentina",
    shortDescription: "Untamed wilderness at the end of the world",
    fullDescription: "Patagonia is a sparsely populated region at the southern end of South America, shared by Argentina and Chile. The region comprises the southern section of the Andes mountains along the western edge as well as the deserts, pampas and grasslands to the east. The dramatic scenery includes glaciers, lakes, and the iconic granite peaks of Torres del Paine. It's a paradise for hikers, photographers, and nature enthusiasts.",
    heroImage: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=1200&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513553404607-988bf2703777?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&h=400&fit=crop"
    ],
    bestTimeToVisit: "October to April",
    rating: 4.8,
    priceLevel: "$$",
    highlights: ["Torres del Paine", "Perito Moreno Glacier", "Hiking", "Wildlife"],
    region: "South America"
  }
]

export function getLocationById(id: string): Location | undefined {
  return locations.find(location => location.id === id)
}
