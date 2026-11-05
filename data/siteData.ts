export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  experienceYears: number;
  customersCount: number;
  domesticCustomers: number;
  commercialCustomers: number;
  phone: string;
  displayPhone: string;
  additionalPhones: string[];
  gstin: string;
  branches: string[];
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    building: string;
    landmark: string;
    road: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    full: string;
  };
  crmUrl: string;
  workingHours: string;
  logoUrl: string;
  logoCardUrl: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: "SRV ENTERPRISES",
  shortName: "SRV",
  tagline: "Pure Water. Better Living.",
  subTagline: "Sales & Service - Water Purifiers & Water Treatment Plants",
  experienceYears: 10,
  customersCount: 10000,
  domesticCustomers: 7500,
  commercialCustomers: 2500,
  phone: "+918593882776",
  displayPhone: "+91 85938 82776",
  additionalPhones: ["+91 85938 82776", "+91 99618 92278", "+91 75590 39104"],
  gstin: "32BTWJP14566QIZP",
  branches: ["Sulthan Bathery", "Mananthavady", "Kalpetta", "Dubai"],
  whatsapp: "918593882776",
  whatsappDisplay: "+91 85938 82776",
  email: "srventerprises78@gmail.com",
  address: {
    building: "EKM Building",
    landmark: "Opposite Municipal Stadium",
    road: "Mini Bypass",
    city: "Sulthan Bathery",
    district: "Wayanad",
    state: "Kerala",
    pincode: "673592",
    full: "EKM Building, Opposite Municipal Stadium, Mini Bypass, Sulthan Bathery, Wayanad, Kerala - 673592",
  },
  crmUrl: "https://srventerprisesgroup.com",
  workingHours: "Monday - Saturday: 9:00 AM - 7:30 PM | Sunday: On Call",
  logoUrl: "/images/srv-logo.png",
  logoCardUrl: "/images/srv-logo-card.png",
};

export interface HeroSlide {
  id: number;
  badge: string;
  headline: string;
  highlightWord?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
  taglineSecondary: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: "Flagship Domestic & Commercial Purification",
    headline: "Pure Water. Better Living.",
    highlightWord: "Better Living.",
    description: "Discover premium water purification solutions designed for cleaner, safer, and better-tasting water for homes, cafes, and healthcare facilities.",
    primaryCtaText: "Explore Solutions",
    primaryCtaLink: "/products?category=purifiers",
    secondaryCtaText: "Get a Free Quote",
    secondaryCtaLink: "#quote",
    image: "/images/hero-water-purifier.png",
    taglineSecondary: "Multi-stage RO + UV + UF + Alkaline Filtration",
  },
  {
    id: 2,
    badge: "Industrial & Commercial Engineering",
    headline: "Advanced Water Treatment. Engineered for Excellence.",
    highlightWord: "Engineered for Excellence.",
    description: "Explore reliable water treatment solutions for residential, commercial, and industrial requirements. High-capacity RO plants and custom filtration systems.",
    primaryCtaText: "Explore Solutions",
    primaryCtaLink: "/products?category=plants",
    secondaryCtaText: "Get a Free Quote",
    secondaryCtaLink: "#quote",
    image: "/images/1000-lph-ro-plant.jpg",
    taglineSecondary: "Capacities from 250 LPH to 10,000+ LPH",
  },
  {
    id: 3,
    badge: "Renewable Clean Energy",
    headline: "Power Your Future with Clean Energy.",
    highlightWord: "Clean Energy.",
    description: "Explore modern solar energy solutions for a more sustainable and energy-efficient future. Premium solar water heaters with high-grade SS tank warranties.",
    primaryCtaText: "Explore Solutions",
    primaryCtaLink: "/products?category=solar",
    secondaryCtaText: "Get a Free Quote",
    secondaryCtaLink: "#quote",
    image: "/images/hero-solar-energy.jpg",
    taglineSecondary: "Save Up To 80% on Water Heating & Energy Bills",
  },
  {
    id: 4,
    badge: "Next-Gen 24/7 Surveillance",
    headline: "Smarter Security. Greater Peace of Mind.",
    highlightWord: "Peace of Mind.",
    description: "Discover modern surveillance solutions designed for homes and businesses. High-definition night-vision cameras with intelligent remote monitoring.",
    primaryCtaText: "Explore Solutions",
    primaryCtaLink: "/products?category=cctv",
    secondaryCtaText: "Get a Free Quote",
    secondaryCtaLink: "#quote",
    image: "/images/hero-cctv-security.jpg",
    taglineSecondary: "Hikvision, Dahua & CP Plus HD Surveillance Systems",
  },
  {
    id: 5,
    badge: "Complete Home Solutions",
    headline: "Complete Solutions for Modern Living.",
    highlightWord: "Modern Living.",
    description: "Explore reliable power backup, kitchen ventilation, and stainless steel water storage solutions installed by certified engineering technicians.",
    primaryCtaText: "Explore Solutions",
    primaryCtaLink: "/products?category=allied",
    secondaryCtaText: "Get a Free Quote",
    secondaryCtaLink: "#quote",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    taglineSecondary: "Inverters, Auto-Clean Chimneys & Food-Grade SS Tanks",
  },
];

export interface ProductItem {
  id: string;
  name: string;
  category: "purifiers" | "plants" | "solar" | "cctv" | "inverters" | "chimneys" | "tanks";
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  isPrimary: boolean;
  badge?: string;
  suitableFor: string;
}

export const PRODUCTS: ProductItem[] = [
  // Primary Category 1: Water Purifiers
  {
    id: "wave-krystal-digital",
    name: "Wave Krystal Digital RO Water Purifier",
    category: "purifiers",
    categoryLabel: "Water Purifier",
    tagline: "Intelligent Digital Multi-Stage Filtration",
    description: "Next-generation domestic water purifier featuring digital purity monitoring, multi-stage RO+UV+UF+Alkaline purification, and a sleek modern aesthetic.",
    image: "/images/wave-krystal-digital.webp",
    features: [
      "Digital Real-Time Purity Display",
      "RO + UV + UF + Mineralizer",
      "High-Recovery Eco Membrane",
      "Auto-Flushing Technology",
      "Food-Grade Antibacterial Storage Tank",
    ],
    isPrimary: true,
    badge: "Best Seller",
    suitableFor: "Villas, Apartments, Modern Kitchens",
  },
  {
    id: "wave-deluxe-ro",
    name: "Wave Deluxe Advanced RO System",
    category: "purifiers",
    categoryLabel: "Water Purifier",
    tagline: "Heavy-Duty Purity for Borewell & Municipal Water",
    description: "Built for tough water conditions including high TDS, heavy mud, and mineral hardness. Delivers sweet, balanced, and perfectly mineralized water.",
    image: "/images/wave-deluxe-ro.webp",
    features: [
      "TDS Controller with Mineral Retention",
      "Super Sediment Pre-Filter",
      "Double Purification by RO + UV",
      "Wall-Mountable & Compact Footprint",
      "Leak-Proof Push-Fit Fittings",
    ],
    isPrimary: true,
    badge: "High Durability",
    suitableFor: "Homes, Independent Houses, High TDS Water",
  },
  {
    id: "prolife-viber-ro",
    name: "Prolife Viber RO Water Purifier",
    category: "purifiers",
    categoryLabel: "Water Purifier",
    tagline: "Compact Elegance with Active Mineral Care",
    description: "Sleek and energy-efficient water purifier designed for space-conscious kitchens without compromising on comprehensive purification standards.",
    image: "/images/prolife-viber-ro.webp",
    features: [
      "Slim Architectural Profile",
      "Multi-Barrier Contaminant Protection",
      "Low Power Consumption",
      "100% Food-Grade Non-Toxic Components",
      "Quick-Change Filter Architecture",
    ],
    isPrimary: true,
    suitableFor: "Modern Kitchens, Small Offices, Clinics",
  },
  {
    id: "prolife-aqua-9l",
    name: "Prolife Aqua 9L Purity Station",
    category: "purifiers",
    categoryLabel: "Water Purifier",
    tagline: "9-Liter High Capacity Storage for Families",
    description: "High-capacity purification system built to ensure uninterrupted availability of pure water for larger families and busy households.",
    image: "/images/prolife-aqua-9l.webp",
    features: [
      "9 Liters Sealed Storage Tank",
      "Multi-Stage Heavy Sediment & Carbon Blocks",
      "UV Disinfection Chamber",
      "Tough Scratch-Resistant Body",
    ],
    isPrimary: true,
    badge: "Large Capacity",
    suitableFor: "Large Families, Educational Institutions, Staff Rooms",
  },
  {
    id: "aqua-phoenix-ro",
    name: "Aqua Phoenix Premium RO",
    category: "purifiers",
    categoryLabel: "Water Purifier",
    tagline: "Superior Taste & Mineral Balance",
    description: "Engineered with Japanese post-carbon polishing to eliminate bad odor and deliver pure, refreshing water taste every single time.",
    image: "/images/aqua-phoenix-ro.webp",
    features: [
      "Silver-Impregnated Carbon Block",
      "High Rejection RO Membrane",
      "Overheat & Dry-Run Protection",
      "Dual Color Elegant Finish",
    ],
    isPrimary: true,
    suitableFor: "Homes, Executive Cabins, Clinics",
  },

  // Primary Category 2: Water Treatment Plants
  {
    id: "commercial-ro-plant-250lph",
    name: "250 LPH Commercial RO Water Plant",
    category: "plants",
    categoryLabel: "Water Treatment Plant",
    tagline: "Engineered for Cafes, Schools & Clinics",
    description: "High-efficiency 250 Liters Per Hour commercial RO plant designed with industrial stainless steel skid, automated control panel, and continuous-duty operation.",
    image: "/images/commercial-ro-250lph.webp",
    features: [
      "250 LPH Output Capacity",
      "SS 304 High-Grade Frame Structure",
      "FRP Multi-Media Pre-Filtration Vessel",
      "Automatic Low/High Pressure Cut-off",
      "Integrated Flow Meters & Pressure Gauges",
    ],
    isPrimary: true,
    badge: "Commercial Choice",
    suitableFor: "Restaurants, Cafes, Diagnostic Labs, Schools",
  },
  {
    id: "industrial-ro-plant-1000lph",
    name: "1000 LPH Heavy-Duty RO Plant",
    category: "plants",
    categoryLabel: "Water Treatment Plant",
    tagline: "Industrial Grade Water Purification for High Demand",
    description: "Heavy-duty 1000 Liters Per Hour industrial RO water treatment system built for continuous operations, high TDS feed water, and strict purity output.",
    image: "/images/1000-lph-ro-plant.jpg",
    features: [
      "1,000 Liters Per Hour Continuous Output",
      "High-Pressure Multistage Vertical Pump",
      "Electronic Control Panel with Microprocessor",
      "Heavy Duty Dow / Toray Industrial Membranes",
      "Chemical Dosing System Integration",
    ],
    isPrimary: true,
    badge: "Industrial Grade",
    suitableFor: "Hotels, Resorts, Hospitals, Food Processing Units",
  },
  {
    id: "industrial-wtp-5000l",
    name: "5000 LPH Complete Water Treatment Plant",
    category: "plants",
    categoryLabel: "Water Treatment Plant",
    tagline: "Large-Scale Water Softening & Media Filtration",
    description: "Engineered turn-key water treatment plant tailored for communities, resorts, factories, and commercial complexes facing heavy iron, manganese, and hardness.",
    image: "/images/industrial-wtp-5000l.webp",
    features: [
      "Dual or Triple FRP Media Vessels",
      "Automated Multi-Port Valves (Auto-Backwash)",
      "Iron Removal, Sand Filter & Activated Carbon",
      "Custom Scaling from 2,000 to 10,000+ LPH",
      "Comprehensive On-Site Water Testing Included",
    ],
    isPrimary: true,
    badge: "Turn-Key Solution",
    suitableFor: "Resorts, Gated Communities, Commercial Complexes, Factories",
  },
  {
    id: "frp-vessel-media-filter",
    name: "Whole-House Iron & Hardness Filtration Vessel",
    category: "plants",
    categoryLabel: "Water Treatment Plant",
    tagline: "Chemical-Free Filtration for the Entire Building",
    description: "Installs right after your overhead or ground water tank. Solves water discoloration, red rust stains, muddy odor, and calcium scale without harmful chemicals.",
    image: "/images/frp-vessel-media-filter.png",
    features: [
      "100% Chemical-Free Natural Media Filtration",
      "Eliminates Mud, Rust, Red Iron & Odor",
      "Protects Home Plumbing & Appliances",
      "Heavy-Duty Corrosion-Proof Composite Tank",
      "Simple Manual or Automatic Backwash System",
    ],
    isPrimary: true,
    badge: "Residential Hero",
    suitableFor: "Entire Houses, Homestays, Hostels, Apartments",
  },

  // Additional Products: Solar Panels
  {
    id: "solar-water-heater-system",
    name: "Advanced Solar Water Heater with SS Tank",
    category: "solar",
    categoryLabel: "Solar Panels & Heating",
    tagline: "Clean Energy Heating with 5-Year SS Tank Warranty",
    description: "High-efficiency evacuated tube collector solar water heating system. Includes a food-grade stainless steel storage tank and certified installation.",
    image: "/images/hero-solar-energy.jpg",
    features: [
      "High-Absorption German Borosilicate Vacuum Tubes",
      "Food-Grade SS 304 Inner Tank",
      "5-Year Manufacturer Warranty on SS Tank",
      "High Density PUF Insulation for 24-hr Hot Water",
      "Special Discount & Free Professional Installation",
    ],
    isPrimary: false,
    badge: "5-Yr Warranty Offer",
    suitableFor: "Homes, Homestays, Eco-Resorts, Hostels",
  },

  // Additional Products: CCTV Cameras
  {
    id: "cctv-surveillance-system",
    name: "24/7 Smart CCTV Surveillance Package",
    category: "cctv",
    categoryLabel: "CCTV Cameras",
    tagline: "Uncompromised 24-Hour Security for Home & Office",
    description: "Full-color day/night surveillance cameras with high-grade DVR/NVR, motion alerts, mobile remote monitoring, and neat concealed cabling.",
    image: "/images/hero-cctv-security.jpg",
    features: [
      "HD / 2K Night-Vision Dome & Bullet Cameras",
      "Weatherproof IP67 Metal Housing",
      "Surveillance-Grade High Capacity Hard Disk",
      "Live Mobile & Remote Tablet Viewing",
      "Professional Clean Cabling & Installation",
    ],
    isPrimary: false,
    badge: "24/7 Protection",
    suitableFor: "Homes, Retail Shops, Warehouses, Educational Campuses",
  },

  // Additional Products: Inverters
  {
    id: "srv-power-inverter-battery",
    name: "SRV High-Capacity Inverter & Battery Pack",
    category: "inverters",
    categoryLabel: "Inverters & Power Backup",
    tagline: "Reliable Uninterrupted Power for Entire Home",
    description: "Pure sine-wave power backup system engineered to keep your home lights, fans, purifiers, and electronics running without interruption.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    features: [
      "Pure Sine Wave Safe for Sensitive Electronics",
      "Heavy-Duty Deep Cycle Tubular Battery",
      "Attractive Package Rates with Free Setup",
      "Fast Charging Technology",
      "Overload, Short Circuit & Deep Discharge Protection",
    ],
    isPrimary: false,
    badge: "Uninterrupted Power",
    suitableFor: "Homes, Clinics, Retail Outlets, Offices",
  },

  // Additional Products: Electric Chimneys
  {
    id: "kitchen-electric-chimney",
    name: "Auto-Clean Electric Kitchen Chimney & Gas Hob",
    category: "chimneys",
    categoryLabel: "Electric Chimneys",
    tagline: "Smoke-Free, Odor-Free Kitchen Architecture",
    description: "Modern curved glass kitchen chimneys from top brands (Faber, Elica, KAF) with touch control, motion sensor, and high suction power.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Thermal Auto-Clean Technology (Baffle-free)",
      "High Airflow Suction (1200 - 1500 m³/hr)",
      "Motion Sensor Gesture Control",
      "Gas Stove Hob Matching Options",
      "Complete Core Drilling & Duct Fitting Included",
    ],
    isPrimary: false,
    badge: "Modern Kitchen",
    suitableFor: "Modular Kitchens, Apartments, Modern Villas",
  },

  // Additional Products: SS Tanks
  {
    id: "ss-water-storage-tank",
    name: "Food-Grade Stainless Steel Water Tank (SS 304/316)",
    category: "tanks",
    categoryLabel: "SS Tanks",
    tagline: "Hygienic, Algae-Free, Rust-Free Water Storage",
    description: "Replace conventional plastic tanks with certified food-grade stainless steel tanks. Keeps water cool in summer, free from microplastics and bacterial slime.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    features: [
      "Certified Food-Grade SS 304 / 316 Construction",
      "100% Rust & Corrosion Resistant",
      "Prevents Algae, Fungus & Biofilm Formation",
      "Keeps Stored Water Cool & Odor-Free",
      "5-Year Manufacturer Warranty",
    ],
    isPrimary: false,
    badge: "100% Hygienic",
    suitableFor: "Residential Rooftops, Hospitals, Food Industries",
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  features: string[];
  isWaterFocused: boolean;
  highlight?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "water-purifier-installation",
    title: "Water Purifier Installation & Setup",
    shortDesc: "Certified installation of domestic & commercial purifiers with water pressure optimization.",
    description: "Our certified technicians ensure secure wall mounting, leakage-proof push-fit plumbing, pre-filter installation, and optimum inlet pressure adjustment for maximum purifier longevity.",
    iconName: "Wrench",
    features: [
      "Granite and tile precision core drilling without wall cracking",
      "Pre-filter housing and pressure regulating valve integration",
      "TDS calibration and post-installation water taste testing",
      "Demonstration of maintenance, tank sanitization & filter life",
    ],
    isWaterFocused: true,
    highlight: "Complimentary TDS Testing",
  },
  {
    id: "multi-brand-purifier-service",
    title: "Multi-Brand Purifier Service & Repair",
    shortDesc: "Comprehensive service for Kent, Aquaguard, Pure Drops, Aquaneeta, KAF and all leading brands.",
    description: "Fast doorstep service and repair for all brands of RO, UV, and UF purifiers. We use genuine replacement membranes, certified sediment/carbon blocks, and UV lamps.",
    iconName: "ShieldCheck",
    features: [
      "Filter replacement (Sediment, Pre-Carbon, Post-Carbon, RO Membrane)",
      "Pump repair, SMPS adaptor replacement & solenoid valve testing",
      "Elimination of slow water flow, foul smell & vibrating noise",
      "Annual Maintenance Contracts (AMC) available",
    ],
    isWaterFocused: true,
    highlight: "All Brands Serviced",
  },
  {
    id: "water-treatment-plant-installation",
    title: "Water Treatment Plant (WTP) Installation",
    shortDesc: "Custom engineering of whole-house iron removal, water softening, and commercial RO plants.",
    description: "From residential 500 LPH whole-house filtration vessels to large 10,000+ LPH industrial multi-stage treatment plants, we design, fabricate, and install turn-key water plants.",
    iconName: "Cpu",
    features: [
      "Site survey, plumbing load calculation & water laboratory test",
      "FRP media vessel setup (Iron removal, activated carbon, softener resin)",
      "High-pressure multistage pumps & automated multiport control valves",
      "Complete plumbing integration with overhead and sump tanks",
    ],
    isWaterFocused: true,
    highlight: "Custom Engineering",
  },
  {
    id: "water-treatment-maintenance",
    title: "Water Treatment Plant Maintenance & Media Refill",
    shortDesc: "Routine backwash calibration, media bed replenishment, and membrane chemical cleaning (CIP).",
    description: "Keep your commercial or residential water treatment plant running at peak efficiency. We provide scheduled media bed servicing, resin regeneration, and membrane descaling.",
    iconName: "Repeat",
    features: [
      "Replacement of Activated Carbon, Birm Iron Media, Manganese Greensand",
      "Softener resin brine tank inspection and recharging",
      "High-pressure RO membrane descaling and chemical CIP sanitization",
      "Emergency on-call breakdown response",
    ],
    isWaterFocused: true,
    highlight: "Guaranteed Performance",
  },
  {
    id: "free-water-testing-consultation",
    title: "Free Water Quality Testing & Consultation",
    shortDesc: "On-site testing of TDS, hardness, iron, and odor with unbiased engineering advice.",
    description: "As stated in our company commitment, we test your water free of charge. Whether your water is yellow, muddy, smelly, salty, or causing rust stains, we diagnose and recommend the exact solution.",
    iconName: "Droplets",
    features: [
      "On-site digital TDS meter evaluation",
      "Color, smell, rust and sediment contamination check",
      "Hard water scale & calcium deposit assessment",
      "No-obligation tailored solution recommendation",
    ],
    isWaterFocused: true,
    highlight: "100% Free Consultation",
  },
  {
    id: "allied-engineering-services",
    title: "Allied Engineering & Home Solutions",
    shortDesc: "Granite cutting, core drilling, chimney fitting, aluminium work, and solar installation.",
    description: "In addition to water solutions, SRV ENTERPRISES provides experienced home engineering services including precision kitchen granite cutting, electric chimney ducting, solar water heater installation, and CCTV setups.",
    iconName: "Home",
    features: [
      "Precision Granite & Kitchen Slab Cutting",
      "Diamond Core Drilling for AC, Chimney & Purifier Pipes",
      "Electric Chimney Fitting & Gas Stove Setup",
      "Solar Water Heater & SS Tank Installation with 5-Yr Warranty",
      "24/7 CCTV Camera Setup & Power Inverter Installation",
    ],
    isWaterFocused: false,
    highlight: "Full Home Engineering",
  },
];

export const WATER_PROBLEMS = [
  {
    id: "iron",
    problem: "Reddish Tint or Iron Rust",
    malayalam: "ചെമ്പഴുപ്പ്, അയൺ അംശം",
    symptoms: "Yellow/reddish water, stains on white washbasins, tiles, and clothes.",
    solution: "SRV Chemical-Free Iron Removal Media Filter (FRP Vessel)",
  },
  {
    id: "hardness",
    problem: "Hard Water & White Scale",
    malayalam: "കാൽസ്യത്തിന്റെ മഞ്ഞ നിറം, കട്ടികൂടിയ വെള്ളം",
    symptoms: "White scale on taps, showerheads, dry hair, soap doesn't lather easily.",
    solution: "SRV Automatic Water Softener Plant with Ion-Exchange Resin",
  },
  {
    id: "mud",
    problem: "Muddy Water & Suspended Turbidity",
    malayalam: "ചെളി, നിറം മാറ്റം",
    symptoms: "Cloudy or murky water after rain, visible sediment at tank bottom.",
    solution: "Dual-Media Sand & Carbon Deep Bed Filter",
  },
  {
    id: "smell",
    problem: "Foul Odor & Bad Taste",
    malayalam: "ദുർഗന്ധം, അരുചി",
    symptoms: "Musty or rotten smell, metallic or bitter taste from borewell or well.",
    solution: "High Iodine Activated Carbon Filter with Aeration Block",
  },
  {
    id: "salt",
    problem: "High TDS & Salty Brackish Water",
    malayalam: "ഉപ്പ് രസം, കൂടിയ TDS",
    symptoms: "Salty taste, corrosive to plumbing, unsuitable for drinking and cooking.",
    solution: "Multi-Stage Reverse Osmosis (RO) Plant with High Rejection Membrane",
  },
];

export interface BrandPartner {
  name: string;
  category: string;
  logoImage: string;
}

export const SUPPORTED_BRANDS: BrandPartner[] = [
  {
    name: "Royal Waterman",
    category: "A Made of Royal Service",
    logoImage: "/images/brand-royal-waterman.png",
  },
  {
    name: "Supreme",
    category: "Commercial & Piping",
    logoImage: "/images/brand-supreme.png",
  },
  {
    name: "V-Guard",
    category: "Solar & Inverters",
    logoImage: "/images/brand-vguard.png",
  },
  {
    name: "AquaGuard",
    category: "Water Purifiers",
    logoImage: "/images/brand-aquaguard.png",
  },
  {
    name: "Kent RO",
    category: "Mineral RO Purifiers",
    logoImage: "/images/brand-kent.png",
  },
  {
    name: "Faber",
    category: "Electric Chimneys & Hobs",
    logoImage: "/images/brand-faber.png",
  },
  {
    name: "Pureit",
    category: "Advanced Purification",
    logoImage: "/images/brand-pureit.png",
  },
  {
    name: "Kirloskar",
    category: "Pumps & Water Engineering",
    logoImage: "/images/brand-kirloskar.png",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Dr. K. Mathew",
    role: "Resident, Sultan Bathery",
    content: "Our borewell water in Sultan Bathery had severe iron content and red stains all over our bathrooms. SRV Enterprises tested the water for free and installed an FRP Iron Removal Plant. Within 24 hours, the water was crystal clear! Truly professional service.",
    rating: 5,
    project: "Whole-House Iron Removal Plant",
  },
  {
    id: 2,
    name: "Shaju Varghese",
    role: "Resort Owner, Wayanad",
    content: "We installed a 1000 LPH Commercial RO plant from SRV Enterprises for our resort. Their team handled everything from plumbing to calibration seamlessly. In 10+ years of dealing with various vendors, SRV has been the most reliable partner.",
    rating: 5,
    project: "1000 LPH RO Water Treatment Plant",
  },
  {
    id: 3,
    name: "Fathima Nizar",
    role: "Homeowner, Meenangadi",
    content: "Got our Wave Krystal RO purifier and electric chimney installed by SRV. Their technician did clean granite cutting without any mess and explained filter maintenance clearly. The exchange offer on our old purifier was very helpful!",
    rating: 5,
    project: "RO Purifier & Kitchen Chimney",
  },
];
