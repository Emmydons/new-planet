export const HOTEL_CONFIG = {
  // Basic Info
  hotelName: "New Planet Resorts",
  tagline: "An Oasis of Refined Luxury in the Heart of Lagos",
  shortDescription:
    "Discover an extraordinary sanctuary where timeless elegance meets contemporary sophistication. Our award-winning resort offers an unparalleled experience of refined luxury, impeccable service, and unforgettable moments.",

  // Contact
  phone: "+234 708 421 4660",
  whatsapp: "+234 708 421 4660",
  email: "reservations@newplanetresorts.com",
  address: "Aka Rd, Ojo, Lagos 102101, Lagos, Nigeria",
  website: "www.newplanetresorts.com",

  // Rooms
  rooms: [
    {
      id: 1,
      name: "Royal Imperial Suite",
      price: 85000,
      currency: "₦",
      image: "/images/rooms/deluxe.png",
      description: "An exquisite sanctuary of opulence featuring panoramic views and bespoke Italian furnishings",
      features: [
        "King-size Hästens bed",
        "Egyptian cotton linens",
        "Marble en-suite bathroom",
        "Executive work sanctuary",
        "4K Smart TV with streaming",
        "Climate control system",
      ],
    },
    {
      id: 2,
      name: "Executive Premier Room",
      price: 65000,
      currency: "₦",
      image: "/images/rooms/executive.png",
      description: "Sophisticated comfort meets modern technology in this thoughtfully designed retreat",
      features: [
        "Queen-size premium bed",
        "Contemporary designer furnishings",
        "Rainfall shower experience",
        "Dedicated workspace",
        "Ultra HD entertainment system",
        "High-speed fiber internet",
      ],
    },
    {
      id: 3,
      name: "Classic Elegance Room",
      price: 45000,
      currency: "₦",
      image: "/images/rooms/standard.png",
      description: "Timeless charm and essential luxuries create a perfect haven for discerning travelers",
      features: [
        "Luxury double bed",
        "Premium mattress topper",
        "Private spa bathroom",
        "Essential luxury amenities",
        "Interactive television",
        "Individual climate control",
      ],
    },
    {
      id: 4,
      name: "Presidential Penthouse Suite",
      price: 150000,
      currency: "₦",
      image: "/images/rooms/presidential.png",
      description: "The epitome of luxury living with private butler service and breathtaking panoramic vistas",
      features: [
        "Multiple sleeping quarters",
        "Bespoke luxury furnishings",
        "Spa-like bathroom sanctuary",
        "24/7 dedicated concierge",
        "Private entertainment lounge",
        "Designer toiletries collection",
      ],
    },
  ],

  // Amenities
  amenities: [
    {
      id: 1,
      name: "High-Speed Fiber Internet",
      icon: "Wifi",
      description: "Lightning-fast connectivity throughout the premises",
    },
    {
      id: 2,
      name: "Infinity Pool & Spa",
      icon: "Waves",
      description: "Temperature-controlled oasis with panoramic views",
    },
    {
      id: 3,
      name: "Michelin-Star Dining",
      icon: "UtensilsCrossed",
      description: "World-class culinary experiences by renowned chefs",
    },
    {
      id: 4,
      name: "State-of-Art Fitness Center",
      icon: "Dumbbell",
      description: "Premium equipment with personal training services",
    },
    {
      id: 5,
      name: "Executive Conference Center",
      icon: "LayoutGrid",
      description: "Sophisticated venues for prestigious corporate events",
    },
    {
      id: 6,
      name: "Luxury Spa & Wellness",
      icon: "Heart",
      description: "Holistic treatments by internationally certified therapists",
    },
    {
      id: 7,
      name: "24/7 Concierge Service",
      icon: "Clock",
      description: "Dedicated team anticipating your every need",
    },
    {
      id: 8,
      name: "Complimentary Valet",
      icon: "ParkingCircle",
      description: "White-glove parking service for your convenience",
    },
  ],

  // Dining
  restaurant: {
    name: "The Emerald Grill",
    description:
      "Embark on a gastronomic journey where culinary artistry meets exquisite flavors. Our Michelin-trained chefs craft extraordinary dishes using the finest international ingredients, complemented by an extensive selection of vintage wines.",
    cuisine: "International Fusion & Contemporary African",
    hours: "6:30 AM - 11:30 PM",
    image: "/images/dining/restaurant.png",
  },

  // About
  about: {
    title: "A Legacy of Excellence",
    description:
      "Nestled in the vibrant heart of Lagos, New Planet Resorts represents the pinnacle of hospitality excellence. Our dedication to perfection manifests in every meticulously crafted detail, from our architectural grandeur to our bespoke concierge services that anticipate your every desire.",
    mission: "To curate transcendent experiences that redefine the art of hospitality and create lasting memories.",
    image: "/images/about.png",
  },

  // Gallery images
  gallery: [
    {
      id: 1,
      title: "Grand Lobby",
      image: "/images/gallery/lobby.png",
      category: "Interior",
    },
    { id: 2, title: "Pool Area", image: "/images/gallery/pool.png", category: "Leisure" },
    { id: 3, title: "Suite View", image: "/images/gallery/suite.png", category: "Rooms" },
    { id: 4, title: "Dining", image: "/images/gallery/dining.png", category: "Dining" },
    { id: 5, title: "Conference", image: "/images/gallery/conference.png", category: "Events" },
    { id: 6, title: "Exterior", image: "/images/gallery/exterior.png", category: "Property" },
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Alexander Vanderbilt",
      role: "International Investment Banker",
      message:
        "The attention to detail and world-class service at New Planet Resorts rivals the finest establishments in Dubai and Singapore. An absolute masterpiece of hospitality.",
      image: "/images/testimonials/guest1.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Victoria Sterling",
      role: "Luxury Travel Concierge",
      message:
        "Having experienced hotels across six continents, I can confidently declare New Planet Resorts as a new standard of excellence. Every moment was perfection personified.",
      image: "/images/testimonials/guest2.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. James Wellington",
      role: "Global Business Consultant",
      message:
        "The seamless blend of contemporary luxury and warm Nigerian hospitality creates an experience that is both sophisticated and genuinely welcoming. Truly exceptional.",
      image: "/images/testimonials/guest3.png",
      rating: 5,
    },
  ],

  // Events
  events: {
    title: "Prestigious Events & Celebrations",
    description:
      "Transform your vision into reality within our magnificent event spaces. From intimate gatherings to grand galas, our dedicated event specialists orchestrate flawless occasions that leave lasting impressions.",
    image: "/images/events/conference.png",
    spaces: [
      {
        name: "The Grand Crystal Ballroom",
        capacity: "350 distinguished guests",
        description: "An awe-inspiring venue for magnificent celebrations and prestigious galas",
      },
      {
        name: "Executive Boardroom",
        capacity: "120 executives",
        description: "Sophisticated environment for high-level corporate summits and strategic meetings",
      },
      {
        name: "Private VIP Salon",
        capacity: "60 exclusive guests",
        description: "Intimate elegance for private celebrations, ceremonies, and elite gatherings",
      },
    ],
  },

  // Social Media
  socials: {
    facebook: "https://facebook.com/newplanetresorts",
    instagram: "https://instagram.com/newplanetresorts",
    linkedin: "https://linkedin.com/company/newplanetresorts",
    twitter: "https://twitter.com/newplanetresorts",
  },

  // Hero Section
  hero: {
    headline: "Where Dreams Become Extraordinary Memories",
    subheadline: "Experience world-class hospitality in our sanctuary of refined elegance and timeless sophistication",
    image: "/images/hero.png",
  },
};
