import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Systems | Water Purifiers, Water Treatment Plants, Solar & CCTV",
  description:
    "Explore SRV ENTERPRISES complete product catalog: Domestic RO+UV Water Purifiers, 250-10,000 LPH Commercial Water Treatment Plants, Supreme Solar Water Heaters, CCTV Camera Systems, Inverters, Chimneys & Food-Grade SS Tanks.",
  keywords: [
    "water purifiers",
    "water treatment plants",
    "solar panels and heater",
    "cctv cameras",
    "inverters and batteries",
    "electric chimneys",
    "ss water tanks",
    "commercial ro plant kerala",
    "industrial water filtration wayanad",
  ],
  alternates: {
    canonical: "https://www.srventerprisesindia.com/products",
  },
  openGraph: {
    title: "All Products & Systems | SRV ENTERPRISES",
    description:
      "Water Purifiers, Commercial RO Plants, Solar Heaters, CCTV, Inverters & SS Tanks in Sultan Bathery, Wayanad.",
    url: "https://www.srventerprisesindia.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
