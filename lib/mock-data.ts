export interface Flight {
  id: string;
  airline: string;
  airlineLogo: string;
  departureTime: string;
  arrivalTime: string;
  departureCity: string;
  departureCode: string;
  arrivalCity: string;
  arrivalCode: string;
  duration: string;
  stops: number;
  stopInfo?: string;
  price: number;
  currency: string;
}

export interface Route {
  id: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  price: number;
  currency: string;
  image: string;
}

export interface Deal {
  id: string;
  destination: string;
  country: string;
  image: string;
  price: number;
  currency: string;
}

export const airlines = [
  { name: "Air India", logo: "/images/airlines/air-india.svg" },
  { name: "IndiGo", logo: "/images/airlines/indigo.svg" },
  { name: "Emirates", logo: "/images/airlines/emirates.svg" },
  { name: "British Airways", logo: "/images/airlines/british-airways.svg" },
  { name: "Vistara", logo: "/images/airlines/vistara.svg" },
  { name: "SpiceJet", logo: "/images/airlines/spicejet.svg" },
];

export const mockFlights: Flight[] = [
  {
    id: "1",
    airline: "IndiGo",
    airlineLogo: "/images/airlines/indigo.svg",
    departureTime: "06:15",
    arrivalTime: "10:30",
    departureCity: "New Delhi",
    departureCode: "DEL",
    arrivalCity: "Dubai",
    arrivalCode: "DXB",
    duration: "3h 45m",
    stops: 0,
    price: 12499,
    currency: "INR",
  },
  {
    id: "2",
    airline: "Emirates",
    airlineLogo: "/images/airlines/emirates.svg",
    departureTime: "08:45",
    arrivalTime: "12:15",
    departureCity: "New Delhi",
    departureCode: "DEL",
    arrivalCity: "Dubai",
    arrivalCode: "DXB",
    duration: "3h 30m",
    stops: 0,
    price: 18999,
    currency: "INR",
  },
  {
    id: "3",
    airline: "Air India",
    airlineLogo: "/images/airlines/air-india.svg",
    departureTime: "14:20",
    arrivalTime: "20:45",
    departureCity: "New Delhi",
    departureCode: "DEL",
    arrivalCity: "Dubai",
    arrivalCode: "DXB",
    duration: "6h 25m",
    stops: 1,
    stopInfo: "Mumbai",
    price: 10499,
    currency: "INR",
  },
  {
    id: "4",
    airline: "Vistara",
    airlineLogo: "/images/airlines/vistara.svg",
    departureTime: "22:30",
    arrivalTime: "02:15",
    departureCity: "New Delhi",
    departureCode: "DEL",
    arrivalCity: "Dubai",
    arrivalCode: "DXB",
    duration: "3h 45m",
    stops: 0,
    price: 15499,
    currency: "INR",
  },
  {
    id: "5",
    airline: "SpiceJet",
    airlineLogo: "/images/airlines/spicejet.svg",
    departureTime: "05:30",
    arrivalTime: "13:45",
    departureCity: "New Delhi",
    departureCode: "DEL",
    arrivalCity: "Dubai",
    arrivalCode: "DXB",
    duration: "8h 15m",
    stops: 2,
    stopInfo: "Jaipur, Mumbai",
    price: 8999,
    currency: "INR",
  },
];

export const popularRoutes: Route[] = [
  {
    id: "1",
    from: "Delhi",
    fromCode: "DEL",
    to: "Dubai",
    toCode: "DXB",
    price: 10499,
    currency: "INR",
    image: "/images/destinations/dubai.jpg",
  },
  {
    id: "2",
    from: "Delhi",
    fromCode: "DEL",
    to: "Goa",
    toCode: "GOI",
    price: 3999,
    currency: "INR",
    image: "/images/destinations/goa.jpg",
  },
  {
    id: "3",
    from: "Mumbai",
    fromCode: "BOM",
    to: "Bangkok",
    toCode: "BKK",
    price: 14999,
    currency: "INR",
    image: "/images/destinations/bangkok.jpg",
  },
  {
    id: "4",
    from: "Delhi",
    fromCode: "DEL",
    to: "London",
    toCode: "LHR",
    price: 42999,
    currency: "INR",
    image: "/images/destinations/london.jpg",
  },
];

export const travelDeals: Deal[] = [
  {
    id: "1",
    destination: "Dubai",
    country: "UAE",
    image: "/images/destinations/dubai.jpg",
    price: 10499,
    currency: "INR",
  },
  {
    id: "2",
    destination: "Goa",
    country: "India",
    image: "/images/destinations/goa.jpg",
    price: 3999,
    currency: "INR",
  },
  {
    id: "3",
    destination: "Bangkok",
    country: "Thailand",
    image: "/images/destinations/bangkok.jpg",
    price: 14999,
    currency: "INR",
  },
  {
    id: "4",
    destination: "London",
    country: "United Kingdom",
    image: "/images/destinations/london.jpg",
    price: 42999,
    currency: "INR",
  },
  {
    id: "5",
    destination: "Paris",
    country: "France",
    image: "/images/destinations/paris.jpg",
    price: 38999,
    currency: "INR",
  },
  {
    id: "6",
    destination: "Goa",
    country: "India",
    image: "/images/destinations/goa.jpg",
    price: 2999,
    currency: "INR",
  },
];
