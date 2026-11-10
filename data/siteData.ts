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
  proprietor: string;
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
  mapEmbedUrl: string;
  googleMapsDirectionsUrl: string;
  crmUrl: string;
  workingHours: string;
  logoUrl: string;
  logoCardUrl: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: "SRV ENTERPRISES",
  shortName: "SRV",
  proprietor: "Vipin",
  tagline: "Pure Water. Better Living.",
  subTagline: "Sales & Service - Water Purifiers, Treatment Plants, Solar, CCTV, Inverters & Kitchen Solutions",
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
    city: "Sultan Bathery",
    district: "Wayanad",
    state: "Kerala",
    pincode: "673592",
    full: "Vipin SRV ENTERPRISES, EKM Building, Opposite Municipal Stadium, Mini Bypass, Sultan Bathery, Kerala - 673592",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4843251369525!2d76.2535382!3d11.6600483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba609d565df94ab%3A0x63de9bdc4621a587!2sSRV%20ENTERPRISES%20WATER%20PURIFIER%20%2CSOLAR%20WATER%20HEATER%20SALES%26SERVICE!5e0!3m2!1sen!2sin!4v1794292422428!5m2!1sen!2sin",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/place/SRV+ENTERPRISES+WATER+PURIFIER+,SOLAR+WATER+HEATER+SALES%26SERVICE/@11.6600483,76.2535382,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba609d565df94ab:0x63de9bdc4621a587!8m2!3d11.6600483!4d76.2535382!16s%2Fg%2F11q2_w_98_?entry=ttu",
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
    image: "/images/hero-water-purifier-waterman.jpg",
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
    image: "/images/hero-modern-living.jpg",
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
    id: "royal-waterman-relax-ro",
    name: "Royal Waterman Relax Diamond RO Purifier",
    category: "purifiers",
    categoryLabel: "Water Purifier",
    tagline: "Triple Active Copper + Alkaline Diamond Edition",
    description: "Ultra-luxury designer RO water purifier by Royal Waterman featuring a diamond-faceted matte black cabinet, vertical golden LED status display, rose gold metallic tap, and Triple Active Copper + Alkaline mineral infusion.",
    image: "/images/royal-waterman-relax-ro.webp",
    features: [
      "Triple Active Copper + Alkaline Immuno Filtration",
      "Diamond-Faceted Luxury Matte Black Aesthetic Cabinet",
      "Vertical Golden LED Purity & Tank Level Monitoring Bar",
      "Rose Gold Metallic Ergonomic Push Dispensing Tap",
      "ISI Marked (IS 14724) & ISO 9001:2015 Certified System",
      "Certified Doorstep Installation & Lifetime Service Support",
    ],
    isPrimary: true,
    badge: "Luxury Edition",
    suitableFor: "Designer Kitchens, Luxury Villas, Executive Suites & High TDS Water",
  },
  {
    id: "royal-waterman-fighter-ro",
    name: "Royal Waterman Fighter 3.0 RO Purifier",
    category: "purifiers",
    categoryLabel: "Water Purifier",
    tagline: "RO + UV + UF + Copper (Cu) Active Immuno Purity",
    description: "Flagship domestic RO water purifier by Royal Waterman with active Copper (Cu) mineral infusion, smart LED status display, and multi-barrier filtration certified to ISO 9001:2015 & ISI standards.",
    image: "/images/royal-waterman-fighter-ro.webp",
    features: [
      "Multi-Stage RO + UV + UF + Copper (Cu) Purification",
      "Active Copper Infusion for Immunity & Digestion",
      "Smart LED Status Indicators (Tank Full, Purifying, Source)",
      "Food-Grade Dual-Tone Antibacterial Storage Tank",
      "ISO 9001:2015 & ISI Certified Quality",
      "SRV Certified Doorstep Installation & Lifetime Service",
    ],
    isPrimary: true,
    badge: "Copper + Alkaline",
    suitableFor: "Villas, Modern Kitchens, Clinics & High TDS Borewell Water",
  },
  {
    id: "royal-waterman-compact-ro",
    name: "Royal Waterman Compact RO + UV + TDS Purifier",
    category: "purifiers",
    categoryLabel: "Water Purifier",
    tagline: "Ultra-Compact Smart Multi-Stage Purification",
    description: "Sleek and space-saving domestic water purifier by Royal Waterman featuring dual-tone sky blue and white cabinet, multi-stage RO + UV + TDS controller filtration, and smart LED status indicators (Power / Tank Full).",
    image: "/images/royal-waterman-compact-ro.webp",
    features: [
      "Multi-Stage RO + UV + TDS Controller Filtration",
      "Smart Capsule LED Indicators (Power On / Tank Full)",
      "Ultra-Compact Wall-Mountable Space-Saving Footprint",
      "Food-Grade Antibacterial Sealed Storage Tank",
      "ISI Marked (IS 14724) & ISO 9001:2015 Certified System",
      "Certified Doorstep Installation & Warranty by SRV Enterprises",
    ],
    isPrimary: true,
    badge: "Space Saver",
    suitableFor: "Apartments, Compact Kitchens, Small Families, Offices & Clinics",
  },
  {
    id: "royal-waterman-whale-ro",
    name: "Royal Waterman Whale RO Water Purifier",
    category: "purifiers",
    categoryLabel: "Water Purifier",
    tagline: "High-Capacity Reverse Osmosis Purity Station",
    description: "High-capacity domestic and commercial RO water purifier by Royal Waterman featuring a transparent tinted storage tank, multi-stage RO filtration, heavy-duty mineral retention, and ISO 9001:2015 certified quality.",
    image: "/images/royal-waterman-whale-ro.webp",
    features: [
      "High-Capacity Transparent Tinted Storage Reservoir",
      "Multi-Stage Heavy-Duty Reverse Osmosis Filtration",
      "Sediment, Pre-Carbon & Post-Carbon Block Protection",
      "Ergonomic Push-Dispense Tap with Mounting Stand",
      "ISO 9001:2015 Certified Manufacturing Standards",
      "SRV Enterprises Certified Doorstep Installation & AMC",
    ],
    isPrimary: true,
    badge: "High Capacity",
    suitableFor: "Large Families, Offices, Clinics, Cafes & Borewell Water",
  },
  {
    id: "royal-waterman-crystal-drop",
    name: "Royal Waterman Crystal Drop Multi-Stage Filtration Skid",
    category: "purifiers",
    categoryLabel: "Commercial & Domestic Purifier",
    tagline: "Heavy-Duty Triple-Stage UV Purity Skid",
    description: "Freestanding heavy-duty multi-stage filtration system by Royal Waterman featuring a rugged powder-coated blue steel chassis, triple high-flow sediment & carbon canisters, UV disinfection chamber, and ISO 9001:2015 certification.",
    image: "/images/royal-waterman-crystal-drop.webp",
    features: [
      "Triple-Stage High-Flow Filtration (Sediment + Pre-Carbon + Post-Carbon)",
      "High-Output Ultraviolet (UV) Disinfection Technology",
      "Rugged Powder-Coated Steel Frame for Floor or Wall Mount",
      "High-Pressure Leak-Proof Commercial Canister Housings",
      "ISO 9001:2015 Certified Manufacturing Quality",
      "Full On-Site Installation & AMC Support by SRV Enterprises",
    ],
    isPrimary: true,
    badge: "Heavy Duty",
    suitableFor: "Cafes, Restaurants, Bakeries, Hostels, Clinics & High-Flow Homes",
  },

  // Primary Category 2: Water Treatment Plants
  {
    id: "aquaan-500lph-ro-plant",
    name: "Aquaan 500 LPH Commercial RO Plant",
    category: "plants",
    categoryLabel: "Water Treatment Plant",
    tagline: "Industrial SS Skid with Dual Media Sand & Carbon Pre-Treatment",
    description: "High-efficiency 500 Liters Per Hour commercial reverse osmosis system by Aquaan featuring high-grade stainless steel skid, dual blue FRP sand and activated carbon filtration vessels, digital microprocessor automation panel, and high-pressure vertical multistage pump.",
    image: "/images/aquaan-500lph-ro-plant.webp",
    features: [
      "500 Liters Per Hour (LPH) High-Recovery Output",
      "Dual FRP Pre-Filtration Vessels (Sand Filter + Carbon Filter)",
      "Digital Microprocessor Automation Control Panel with Mimic Display",
      "High-Pressure Vertical Multistage Stainless Steel Booster Pump",
      "Dual Rotameter Flow Meters & Stainless Steel Pressure Gauges",
      "Rugged SS 304 Skid Chassis for Space-Efficient Floor Mounting",
      "SRV Certified Turnkey On-Site Installation & AMC Support",
    ],
    isPrimary: true,
    badge: "500 LPH Skid",
    suitableFor: "Hotels, Hospitals, Resorts, Bottling Units, Colleges & Food Manufacturing",
  },
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
    id: "royal-waterman-sediment-filter",
    name: "Royal Waterman Sediment Filtration Vessel",
    category: "plants",
    categoryLabel: "Water Treatment Plant",
    tagline: "High-Efficiency Multi-Grade Sand & Turbidity Filtration",
    description: "Heavy-duty whole-house sediment filtration vessel by Royal Waterman engineered with multi-grade quartz sand and silex media to eliminate turbidity, suspended mud, slit, and fine physical debris from borewell and open well water.",
    image: "/images/royal-waterman-sediment-filter-vessel.webp",
    features: [
      "Multi-Grade Quartz Sand & Silex Media Bed",
      "Eliminates Suspended Mud, Turbidity, Slit & Rust Debris",
      "Top-Mounted Ergonomic Multi-Port Manual Backwash Valve",
      "Corrosion-Proof Heavy-Duty Blue FRP Composite Cylinder",
      "Protects Home Plumbing, Overhead Tanks & Domestic RO Units",
      "Certified On-Site Plumbing & Commissioning by SRV Enterprises",
    ],
    isPrimary: true,
    badge: "Sediment Filter",
    suitableFor: "Borewell Water, Muddy Well Water, Whole Houses, Commercial Buildings & Homestays",
  },
  {
    id: "royal-waterman-iron-removal-filter",
    name: "Royal Waterman Iron Removal Filtration Vessel",
    category: "plants",
    categoryLabel: "Water Treatment Plant",
    tagline: "Advanced Catalytic Iron & Manganese Oxidation Filter",
    description: "Specialized high-capacity whole-house iron removal vessel by Royal Waterman powered by catalytic manganese greensand and Birm media to eliminate dissolved red iron, rust discoloration, yellow bathroom stains, and metallic taste without hazardous chemicals.",
    image: "/images/royal-waterman-iron-removal-filter-vessel.webp",
    features: [
      "High-Activity Catalytic Iron & Manganese Removal Media Bed",
      "Completely Removes Red Iron Rust, Turbidity & Metallic Stains",
      "Prevents Yellow Discoloration on Sanitary Ware, Tiles & Clothes",
      "Top Multi-Port Valve with Easy Backwash & Rinse Operations",
      "Food-Grade Heavy-Duty Reinforced Composite FRP Vessel",
      "On-Site Water Hardness/Iron Testing & Certified Warranty",
    ],
    isPrimary: true,
    badge: "Iron Removal",
    suitableFor: "High Iron Borewells, Yellow Stained Water, Villas, Resorts & Hostels",
  },
  {
    id: "royal-waterman-carbon-filter",
    name: "Royal Waterman Activated Carbon Filtration Vessel",
    category: "plants",
    categoryLabel: "Water Treatment Plant",
    tagline: "High Iodine Activated Coconut Shell Carbon Adsorption",
    description: "Whole-house activated carbon media filtration vessel by Royal Waterman loaded with premium high-iodine virgin coconut shell carbon to eliminate chlorine, pesticides, foul swampy odors, organic discoloration, and volatile compounds.",
    image: "/images/royal-waterman-carbon-filter-vessel.webp",
    features: [
      "Premium High-Iodine Virgin Coconut Shell Activated Carbon",
      "Dechlorinates & Removes Organic Contaminants and Odors",
      "Eliminates Swampy Smell, Stagnant Odor & Bad Taste",
      "Corrosion-Resistant Seamless FRP Vessel with Sturdy Base",
      "Top-Mounted Multi-Port Valve for Quick Periodic Backwash",
      "Full Plumbing Integration with Bypass Line by SRV Team",
    ],
    isPrimary: true,
    badge: "Carbon Filter",
    suitableFor: "Chlorinated Water, Odorous Well Water, Hotels, Bakeries, Villas & Estates",
  },
  {
    id: "electronic-water-conditioner-dual-stage",
    name: "Electronic Water Conditioner with Dual-Stage Filtration",
    category: "plants",
    categoryLabel: "Water Treatment Plant",
    tagline: "Chemical-Free Anti-Scale Electronic Conditioner & Dual Jumbo Filter",
    description: "Advanced wall-mounted water treatment system combining dual high-capacity 20-inch sediment and carbon filter housings with an intelligent electronic anti-scale water conditioner to prevent lime-scale buildup in pipes, geysers, and appliances without salt or chemicals.",
    image: "/images/electronic-water-conditioner-dual-stage.webp",
    features: [
      "Microprocessor Electronic Scale Prevention (Chemical & Salt Free)",
      "Dual 20\" High-Flow Filter Housings (Sediment + Activated Carbon)",
      "Smart Wall-Mount Controller with Dual Status LEDs (Power / Active)",
      "Flow-Coupled Sensor & Inline Service Dispensing Tap",
      "Protects Geysers, Solar Water Heaters, Washing Machines & Piping",
      "Zero Water Wastage & Maintenance-Free Eco Operation",
      "Professional Doorstep Wall-Mount Installation by SRV Enterprises",
    ],
    isPrimary: true,
    badge: "Scale Prevention",
    suitableFor: "Villas, Homes with Hard Borewell Water, Apartments, Homestays & Commercial Kitchens",
  },

  // Core Product: Solar Water Heater & Solar Power
  {
    id: "supreme-solar-water-heater",
    name: "Supreme Solar AMRO PLUS Solar Water Heater",
    category: "solar",
    categoryLabel: "Solar Water Heaters",
    tagline: "High-Efficiency Evacuated Tube System with SS Insulated Tank",
    description: "Rooftop solar water heating system by Supreme Solar featuring high-absorption three-target borosilicate glass vacuum tubes, food-grade insulated stainless steel tank, and heavy-duty weather-resistant frame. Integrates seamlessly with overhead storage tanks for 24/7 hot water.",
    image: "/images/supreme-solar-water-heater.webp",
    features: [
      "Supreme Solar High-Efficiency Borosilicate Three-Target Vacuum Tubes",
      "High-Density PUF Insulated Tank for Retaining Hot Water 24+ Hours",
      "Food-Grade Stainless Steel Inner Tank with High Corrosion Resistance",
      "Rugged Powder-Coated All-Weather Roof Mounting Support Stand",
      "Seamless Gravity & Pressure Integration with Overhead Storage Tanks",
      "Saves up to 80% on Water Heating Electricity Bills with On-Site Warranty",
      "Complete Roof Structural Installation & Plumbing by SRV Enterprises",
    ],
    isPrimary: true,
    badge: "Supreme Solar",
    suitableFor: "Villas, Independent Houses, Homestays, Eco-Resorts, Hostels & Hospitals",
  },
  {
    id: "solar-water-heater-system",
    name: "Advanced Solar Water Heater with SS Tank",
    category: "solar",
    categoryLabel: "Solar Water Heaters",
    tagline: "Clean Energy Heating with 5-Year SS Tank Warranty",
    description: "High-efficiency evacuated tube collector solar water heating system. Includes a food-grade stainless steel storage tank and certified installation.",
    image: "/images/hero-solar-energy.jpg",
    features: [
      "High-Absorption German Borosilicate Vacuum Tubes",
      "Food-Grade SS 304 Inner Tank with 5-Year Warranty",
      "High Density PUF Insulation for 24-hr Hot Water",
      "Saves up to 80% on Water Heating Electricity Bills",
      "Special Discount & Free Professional Roof Installation",
    ],
    isPrimary: true,
    badge: "5-Yr Tank Warranty",
    suitableFor: "Homes, Homestays, Eco-Resorts, Hostels, Hospitals",
  },
  {
    id: "solar-power-rooftop-system",
    name: "Rooftop Solar Power System (On-Grid / Off-Grid)",
    category: "solar",
    categoryLabel: "Solar Power Systems",
    tagline: "Zero Electricity Bills with Smart Solar Power",
    description: "High-efficiency monocrystalline solar panels with smart solar inverters, bi-directional net metering assistance, and battery backup support.",
    image: "/images/hero-solar-energy.jpg",
    features: [
      "Tier-1 High-Efficiency Monocrystalline Solar Panels",
      "On-Grid, Off-Grid & Hybrid Solar Inverter Options",
      "KSEB Net-Metering & Subsidy Documentation Support",
      "25-Year Linear Power Output Warranty on Panels",
      "Turnkey Roof Structural Fabrication & Lightning Protection",
    ],
    isPrimary: true,
    badge: "25-Yr Performance",
    suitableFor: "Villas, Commercial Buildings, Resorts, Institutions",
  },

  // Core Product: CCTV Cameras
  {
    id: "cctv-surveillance-system",
    name: "24/7 Smart CCTV Surveillance Package",
    category: "cctv",
    categoryLabel: "CCTV Cameras",
    tagline: "Uncompromised 24-Hour Security for Home & Office",
    description: "Full-color day/night surveillance cameras with high-grade DVR/NVR, motion alerts, mobile remote monitoring, and neat concealed cabling.",
    image: "/images/hero-cctv-security.jpg",
    features: [
      "HD / 2K Night-Vision Dome, Bullet & PTZ Cameras",
      "Hikvision, Dahua & CP Plus Authorized Systems",
      "ColorVu 24/7 Full-Color Night Recording",
      "Live Mobile & Remote Tablet Viewing with Motion Alerts",
      "Concealed Aesthetic Cabling & 2-Year Hardware Warranty",
    ],
    isPrimary: true,
    badge: "24/7 Night Vision",
    suitableFor: "Homes, Estates, Retail Shops, Warehouses, Campuses",
  },

  // Core Product: Inverters & Batteries
  {
    id: "srv-power-inverter-battery",
    name: "Pure Sine Wave Inverter & Tubular Battery Combo",
    category: "inverters",
    categoryLabel: "Inverters & Power Backup",
    tagline: "Reliable Uninterrupted Power for Entire Home",
    description: "Pure sine-wave power backup system engineered to keep your home lights, fans, purifiers, and electronics running without interruption.",
    image: "/images/product-inverter-battery.jpg",
    features: [
      "Pure Sine Wave Safe for Sensitive Home Electronics & IT",
      "Heavy-Duty Deep Cycle Tubular Battery (V-Guard & top brands)",
      "Instant Millisecond Automatic Switchover during Outages",
      "Smart Multi-Stage Rapid Battery Charging",
      "Overload, Short Circuit & Deep Discharge Protection",
    ],
    isPrimary: true,
    badge: "Uninterrupted Power",
    suitableFor: "Homes, Clinics, Retail Outlets, Offices, Villas",
  },

  // Core Product: Electric Chimneys & Hobs
  {
    id: "kitchen-electric-chimney",
    name: "Auto-Clean Electric Kitchen Chimney & Built-In Hob",
    category: "chimneys",
    categoryLabel: "Electric Chimneys & Hobs",
    tagline: "Smoke-Free, Odor-Free Kitchen Architecture",
    description: "Modern curved glass & angular kitchen chimneys from top brands (Faber, Supreme) with touch control, motion sensor, and high suction power.",
    image: "/images/product-chimney-hob.jpg",
    features: [
      "Thermal Auto-Clean Technology with Oil Collector Tray",
      "Powerful 1200 - 1500 m³/hr Airflow Suction",
      "Wave-to-Operate Motion Sensor Gesture Control",
      "Matching Toughened Glass Built-In Gas Stove Hobs",
      "Complete Diamond Core Drilling & Precision Ducting Included",
    ],
    isPrimary: true,
    badge: "Auto-Clean Tech",
    suitableFor: "Modular Kitchens, Modern Apartments, Luxury Villas",
  },

  // Core Product: SS Tanks
  {
    id: "ss-water-storage-tank",
    name: "Food-Grade Stainless Steel Water Tank (SS 304/316)",
    category: "tanks",
    categoryLabel: "SS Water Tanks",
    tagline: "Hygienic, Algae-Free, Rust-Free Water Storage",
    description: "Replace conventional plastic tanks with certified food-grade stainless steel tanks. Keeps water cool in summer, free from microplastics and bacterial slime.",
    image: "/images/product-ss-tank.jpg",
    features: [
      "Certified Food-Grade SS 304 / 316 Construction",
      "100% Rust, UV & Corrosion Resistant",
      "Zero Algae, Fungus & Biofilm Formation",
      "Mirror-Finish Interior for Effortless Periodic Rinsing",
      "5-Year Manufacturer Replacement Warranty",
    ],
    isPrimary: true,
    badge: "5-Yr Warranty",
    suitableFor: "Residential Rooftops, Hospitals, Food Industries, Villas",
  },

  // Core Product: Copper Piping
  {
    id: "copper-piping-installation",
    name: "Architectural Concealed Copper Piping",
    category: "tanks",
    categoryLabel: "Copper Piping",
    tagline: "Heavy-Gauge Seamless Copper Lines for RO & Gas",
    description: "Leak-proof architectural copper pipeline installation for high-purity water filtration, central LPG kitchen gas lines, and HVAC systems.",
    image: "/images/product-ss-tank.jpg",
    features: [
      "Heavy-Gauge Seamless Deoxidized Copper Tubes",
      "Silver-Braze Leak-Proof Pressure Tested Joints",
      "Concealed Under-Floor & In-Wall Architectural Routing",
      "Certified for High Pressure RO Lines & Central LPG Gas",
      "Corrosion-Free Lifetime Durability",
    ],
    isPrimary: false,
    badge: "High Durability",
    suitableFor: "New Home Constructions, Restaurants, Luxury Kitchens",
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
  division: "water" | "solar" | "cctv" | "power" | "kitchen";
}

export const SERVICES: ServiceItem[] = [
  {
    id: "water-purifier-installation",
    title: "Water Purifier Installation & Multi-Brand AMC",
    shortDesc: "Certified installation of domestic & commercial purifiers with water pressure optimization.",
    description: "Our certified technicians ensure secure wall mounting, leakage-proof push-fit plumbing, pre-filter installation, and optimum inlet pressure adjustment for maximum purifier longevity.",
    iconName: "Droplets",
    features: [
      "Granite and tile precision core drilling without wall cracking",
      "Pre-filter housing and pressure regulating valve integration",
      "TDS calibration and post-installation water taste testing",
      "Annual Maintenance Contracts (AMC) for Kent, AquaGuard, Pureit & Royal Waterman",
    ],
    isWaterFocused: true,
    highlight: "Free TDS Testing",
    division: "water",
  },
  {
    id: "water-treatment-plant-installation",
    title: "Water Treatment Plant (WTP) & Iron Removal",
    shortDesc: "Custom engineering of whole-house iron removal, water softening, and commercial RO plants.",
    description: "From residential 500 LPH whole-house filtration vessels to large 10,000+ LPH industrial multi-stage treatment plants, we design, fabricate, and install turn-key water plants.",
    iconName: "Cpu",
    features: [
      "FRP media vessel setup (Chemical-free Iron removal, activated carbon, softener resin)",
      "Capacities from 250 LPH to 10,000+ Liters Per Hour",
      "High-pressure multistage pumps & automated multiport control valves",
      "Complete turnkey fabrication, commissioning, media refills & AMC",
    ],
    isWaterFocused: true,
    highlight: "Turnkey WTP Engineering",
    division: "water",
  },
  {
    id: "cctv-surveillance-installation",
    title: "24/7 CCTV Camera Setup & Security Surveillance",
    shortDesc: "HD night-vision dome, bullet, and PTZ camera installation with remote mobile monitoring.",
    description: "Complete security surveillance engineering for homes, commercial complexes, resorts, and estates. We supply, mount, configure, and maintain authorized Hikvision, Dahua, and CP Plus systems with neat concealed cabling.",
    iconName: "Shield",
    features: [
      "HD / 2K ColorVu full-color night-vision cameras",
      "DVR/NVR configuration with motion detection & mobile alert notifications",
      "Neat, weatherproof, concealed outdoor and indoor cabling",
      "Multi-device remote live monitoring setup on smartphones, tablets & PCs",
    ],
    isWaterFocused: false,
    highlight: "24/7 Security Support",
    division: "cctv",
  },
  {
    id: "solar-energy-systems-installation",
    title: "Solar Water Heaters & Solar Power Systems",
    shortDesc: "Evacuated tube solar water heaters with 5-year SS tank warranties and rooftop solar power.",
    description: "Harness renewable solar energy to slash domestic and commercial energy bills by up to 80%. We provide complete rooftop mounting, solar plumbing, electrical integration, and net metering assistance.",
    iconName: "Sun",
    features: [
      "High-absorption German vacuum tube solar water heaters",
      "Food-grade Stainless Steel (SS 304/316) tanks with 5-year warranty",
      "On-grid & off-grid rooftop solar power systems with Tier-1 panels",
      "KSEB net metering assistance & comprehensive system maintenance",
    ],
    isWaterFocused: false,
    highlight: "Save 80% Electricity",
    division: "solar",
  },
  {
    id: "inverter-battery-installation",
    title: "Inverter & Heavy-Duty Tubular Battery Installation",
    shortDesc: "Pure sine wave inverter and heavy-duty battery installation for uninterrupted power.",
    description: "Protect your household appliances and commercial operations from frequent power cuts. We calculate your electrical load, install pure sine wave inverters, and wire heavy-duty tubular battery banks safely.",
    iconName: "Zap",
    features: [
      "Pure sine wave digital inverters safe for delicate electronic equipment",
      "Long-life deep-cycle tubular batteries (V-Guard, Exide, Luminous)",
      "Millisecond automatic changeover during power blackouts",
      "Safe electrical panel wiring, battery rack assembly & health testing",
    ],
    isWaterFocused: false,
    highlight: "Uninterrupted Power",
    division: "power",
  },
  {
    id: "kitchen-chimney-hob-fitting",
    title: "Electric Chimney Fitting, Gas Hobs & Core Drilling",
    shortDesc: "Thermal auto-clean chimney ducting, built-in gas stove fitting & diamond core drilling.",
    description: "Transform your kitchen into a clean, smoke-free space. We provide authorized installation of Faber and top-brand auto-clean chimneys, built-in glass gas hobs, and flawless diamond core drilling through granite and masonry.",
    iconName: "Wind",
    features: [
      "Diamond core drilling for 6-inch chimney exhaust ducting without wall damage",
      "Precision kitchen countertop granite cutting for built-in gas hobs",
      "Anti-vibration chimney wall-mounting and exterior louvre cap fitting",
      "Complete gas pipeline leak testing and safety commissioning",
    ],
    isWaterFocused: false,
    highlight: "Clean Modular Kitchen",
    division: "kitchen",
  },
  {
    id: "copper-piping-installation-service",
    title: "Architectural Copper Piping & Central Gas Lines",
    shortDesc: "Heavy-gauge seamless copper piping for water purifiers, kitchen LPG, and HVAC lines.",
    description: "Professional architectural piping for long-lasting, leak-free performance. We lay concealed heavy-gauge copper conduits for RO drinking water distribution, central kitchen LPG gas networks, and air-conditioning lines.",
    iconName: "Layers",
    features: [
      "Heavy-gauge seamless deoxidized copper tubing (certified food/gas grade)",
      "High-temperature silver brazing with zero-leakage pressure verification",
      "Concealed architectural routing during new construction or renovation",
      "High durability against corrosion, rodent damage, and high pressure",
    ],
    isWaterFocused: false,
    highlight: "Lifetime Durability",
    division: "kitchen",
  },
  {
    id: "free-water-testing-consultation",
    title: "Free Water Quality Testing & Technical Consultation",
    shortDesc: "On-site testing of TDS, hardness, iron, and odor with unbiased engineering advice.",
    description: "As stated in our company commitment, we test your water free of charge. Whether your water has iron rust stains, high hardness, mud, or bad odor, our engineers diagnose the sample and prescribe the right solution.",
    iconName: "Droplets",
    features: [
      "On-site digital TDS meter evaluation and salinity testing",
      "Chemical testing for dissolved iron, calcium hardness, and pH level",
      "Site survey for water treatment plant or solar placement",
      "Free unbiased recommendation with zero purchase obligation",
    ],
    isWaterFocused: true,
    highlight: "100% Free Consultation",
    division: "water",
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
