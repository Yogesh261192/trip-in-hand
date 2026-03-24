export interface ContentBlock {
  type: 'heading' | 'subheading' | 'paragraph' | 'list';
  text?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: ContentBlock[];
  publishedDate: string;
  author: string;
  cta?: string;
  href?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '01',
    slug: 'must-visit-2026',
    title: '10 Must-Visit Destinations in 2026',
    summary: 'From tropical getaways to Himalayan retreats, discover the hottest places to book this year.',
    content: [
      { type: 'heading', text: 'Why 2026 Is Your Year to Travel' },
      { type: 'paragraph', text: 'After two years of uncertainty, travel is back with stronger routes, better deals and new experiences. In 2026, the smartest planning is the key to transforming your next trip into a memorable story.' },
      { type: 'subheading', text: 'Top 10 Destinations to Explore' },
      { type: 'list', items: [
        'Goa, India: beaches, spice markets, and sunset nightlife',
        'Santorini, Greece: island vistas, whitewashed towns, and wine tasting',
        'Kyoto, Japan: cultural temples, traditional tea culture, and autumn leaves',
        'Rishikesh, India: river rafting, yoga, and spiritual retreats',
        'Marrakech, Morocco: souks, palaces, and desert day trips',
        'Banff, Canada: mountain lakes, hiking, and cozy lodges',
        'Reykjavik, Iceland: northern lights, geothermal pools, and glaciers',
        'Cape Town, South Africa: coastal routes, vineyards, and city flavors',
        'Buenos Aires, Argentina: tango, street cafes, and vibrant nightlife',
        'Bali, Indonesia: temples, rice terraces, and wellness retreats'
      ] },
      { type: 'subheading', text: 'Plan with Purpose' },
      { type: 'paragraph', text: 'Book early (45-70 days ahead for international flights and 3-5 weeks for regional departures). Monitor rates with alerts, avoid peak holiday spans, and research local costs.' },
      { type: 'list', items: [
        'Use multiple search engines and set price watches',
        'Consider flexible airports and midweek travel',
        'Verify baggage and cancellation policies before booking'
      ] },
      { type: 'subheading', text: 'Safety and Sustainability' },
      { type: 'paragraph', text: 'Coordinate health documents, carry digital copies, and support community-friendly operators. Travel responsibly with a focus on minimizing environmental impact.' },
      { type: 'paragraph', text: 'Armed with these tips, your 2026 adventure starts with a single smart booking.' }
    ],
    publishedDate: 'March 20, 2026',
    author: 'Trip In Hand Editorial Team',
    cta: 'Read the guide',
    href: '/blog/must-visit-2026'
  }
];
