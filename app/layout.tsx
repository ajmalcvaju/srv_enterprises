import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { COMPANY_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.srventerprisesindia.com"),
  title: {
    default: "SRV ENTERPRISES | Water Purifiers, Water Treatment Plants, Solar, CCTV & SS Tanks",
    template: "%s | SRV ENTERPRISES",
  },
  description:
    "SRV ENTERPRISES - 10+ Years Experience & 10,000+ Customers. Kerala's trusted destination for Water Purifiers (RO+UV+Alkaline), Commercial Water Treatment Plants, Solar Panels & Heaters, CCTV Cameras, Power Inverters & Batteries, Electric Kitchen Chimneys & SS Water Tanks in Sultan Bathery, Wayanad.",
  keywords: [
    "SRV ENTERPRISES",
    "water purifiers",
    "water purifier sultan bathery",
    "water purifier wayanad",
    "best water purifier in kerala",
    "domestic ro water purifier",
    "alkaline water purifier",
    "water treatment plants",
    "water treatment plant wayanad",
    "commercial ro plant kerala",
    "industrial water treatment plant",
    "iron removal filter kerala",
    "water softener system wayanad",
    "frp filtration vessel",
    "solar panels and heater",
    "solar water heater with ss tank",
    "solar power plant wayanad",
    "supreme solar water heater",
    "cctv cameras",
    "cctv camera installation sultan bathery",
    "hikvision cctv camera wayanad",
    "dahua cctv surveillance kerala",
    "inverters and batteries",
    "home inverter and battery kerala",
    "tubular solar battery wayanad",
    "pure sine wave inverter",
    "electric chimneys",
    "auto clean kitchen chimney wayanad",
    "faber electric chimney",
    "ss water tanks",
    "stainless steel water tank kerala",
    "food grade ss 304 water tank",
    "water purifier service sultan bathery",
    "ro plant maintenance kerala",
  ],
  authors: [{ name: "SRV ENTERPRISES" }],
  creator: "SRV ENTERPRISES",
  publisher: "SRV ENTERPRISES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.srventerprisesindia.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.srventerprisesindia.com",
    siteName: "SRV ENTERPRISES",
    title: "SRV ENTERPRISES | Water Purifiers, Treatment Plants, Solar & Security in Kerala",
    description:
      "10+ Years Experience, 10,000+ Satisfied Customers. High-capacity Water Purifiers, Commercial RO Plants, Solar Water Heaters, CCTV Cameras, Inverters & SS Tanks in Sultan Bathery, Wayanad.",
    images: [
      {
        url: "/images/srv-notice-brochure.webp",
        width: 1200,
        height: 630,
        alt: "SRV ENTERPRISES - Water Purifiers, Treatment Plants & Home Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRV ENTERPRISES | Water Purifiers, RO Plants, Solar & CCTV Kerala",
    description:
      "10+ Years of Experience, 10,000+ Customers. Water Purifiers, RO Plants, Solar Water Heaters, and CCTV in Kerala.",
    images: ["/images/srv-notice-brochure.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "SRV ENTERPRISES",
    alternateName: [
      "SRV Enterprises Sultan Bathery",
      "SRV Waterman Wayanad",
      "SRV Enterprises India",
      "Royal Waterman Kerala",
    ],
    image: "https://www.srventerprisesindia.com/images/srv-notice-brochure.webp",
    logo: "https://www.srventerprisesindia.com/images/srv-logo-new.png",
    telephone: ["+918593882776", "+919961892278", "+917559039104"],
    email: COMPANY_INFO.email,
    url: "https://www.srventerprisesindia.com",
    priceRange: "₹₹",
    description:
      "SRV ENTERPRISES is Kerala's trusted engineering provider for Domestic & Commercial Water Purifiers, Turnkey Water Treatment Plants, Solar Panels & Heaters, CCTV Security Systems, Inverters & Batteries, Electric Kitchen Chimneys, and Stainless Steel (SS) Water Tanks.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${COMPANY_INFO.address.building}, ${COMPANY_INFO.address.landmark}, ${COMPANY_INFO.address.road}`,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.6600483",
      longitude: "76.2535382",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Sultan Bathery" },
      { "@type": "AdministrativeArea", name: "Wayanad" },
      { "@type": "AdministrativeArea", name: "Kalpetta" },
      { "@type": "AdministrativeArea", name: "Mananthavady" },
      { "@type": "AdministrativeArea", name: "Meppadi" },
      { "@type": "AdministrativeArea", name: "Kozhikode" },
      { "@type": "AdministrativeArea", name: "Kannur" },
      { "@type": "AdministrativeArea", name: "Malappuram" },
      { "@type": "AdministrativeArea", name: "Kerala" },
      { "@type": "AdministrativeArea", name: "Nilgiris, Tamil Nadu" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Solutions & Systems",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Water Purifiers",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Domestic RO Water Purifiers" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Alkaline Water Purifier Systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "UV & UF Water Filtration" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Water Treatment Plants",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial & Industrial RO Plants (250 - 10000 LPH)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Iron Removal Filtration Vessels" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Softener Systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sediment & Carbon Filtration Plants" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Solar Panels & Solar Water Heaters",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Supreme Solar Water Heaters with SS Tanks" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rooftop Solar Power Systems" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "CCTV Cameras & Surveillance",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "HD Night-Vision CCTV Camera Systems" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hikvision, Dahua & CP Plus Security Installation" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Inverters and Batteries",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pure Sine Wave Inverters" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Heavy-Duty Tubular Solar Batteries" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Electric Chimneys & Hobs",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Auto-Clean Kitchen Chimneys" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Built-in Gas Hobs & Ventilation" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Stainless Steel (SS) Water Tanks",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Food-Grade SS 304 Water Tanks" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "SS 316 Commercial Grade Water Storage Tanks" } },
          ],
        },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:30",
      },
    ],
    sameAs: [
      "https://www.facebook.com",
      "https://www.instagram.com",
      COMPANY_INFO.crmUrl,
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
