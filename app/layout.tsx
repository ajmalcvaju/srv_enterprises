import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { COMPANY_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  metadataBase: new URL("https://srventerprisesgroup.com"),
  title: {
    default: "SRV ENTERPRISES | Water Purifiers & Water Treatment Plants | 10+ Years Experience",
    template: "%s | SRV ENTERPRISES",
  },
  description:
    "SRV ENTERPRISES - 10+ Years of Experience & 10,000+ Customers. Specialists in Domestic Water Purifiers, Commercial RO Plants, Whole-House Water Treatment Plants, Solar Water Heaters & CCTV Surveillance in Sultan Bathery, Wayanad, Kerala.",
  keywords: [
    "SRV ENTERPRISES",
    "Water Purifier Sultan Bathery",
    "Water Treatment Plant Wayanad",
    "RO Plant Kerala",
    "Commercial Water Purification",
    "Industrial Water Treatment Plant",
    "Iron Removal Filter",
    "Water Softener System",
    "Solar Water Heater with SS Tank",
    "CCTV Camera Installation Sultan Bathery",
    "Pure Drops RO",
    "Kent Water Purifier Service",
  ],
  authors: [{ name: "SRV ENTERPRISES" }],
  creator: "SRV ENTERPRISES",
  publisher: "SRV ENTERPRISES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://srventerprisesgroup.com",
    siteName: "SRV ENTERPRISES",
    title: "SRV ENTERPRISES | 10+ Years of Experience | 10,000+ Customers",
    description:
      "Advanced Water Purification & Treatment Solutions. Domestic RO, Commercial Plants, Solar Energy & Home Solutions in Sultan Bathery, Wayanad, Kerala.",
    images: [
      {
        url: "/images/srv-notice-brochure.webp",
        width: 1200,
        height: 630,
        alt: "SRV ENTERPRISES - Water Purifiers & Treatment Plants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRV ENTERPRISES | Water Purification & Treatment Solutions",
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
    "@type": "LocalBusiness",
    name: COMPANY_INFO.name,
    image: "https://srventerprisesgroup.com/images/srv-notice-brochure.webp",
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    url: "https://srventerprisesgroup.com",
    priceRange: "₹₹",
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
      latitude: "11.6664",
      longitude: "76.2570",
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
    sameAs: [COMPANY_INFO.crmUrl],
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
