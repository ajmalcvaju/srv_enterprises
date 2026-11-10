import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Users,
  ShieldCheck,
  Droplets,
  Cpu,
  Target,
  Eye,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO, SUPPORTED_BRANDS } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Us | 10+ Years of Engineering Excellence",
  description:
    "Learn about SRV ENTERPRISES - 10+ Years of Experience & 10,000+ Customers. Established water purification and treatment specialists based in Sultan Bathery, Wayanad, Kerala.",
};

export default function AboutPage() {
  const galleryItems = [
    {
      title: "Commercial RO Water Treatment Plant (1000 LPH)",
      caption: "Turn-key skid installation for resorts and commercial institutions in Wayanad",
      image: "/images/1000-lph-ro-plant.jpg",
    },
    {
      title: "Domestic Multi-Stage Alkaline RO Purifier",
      caption: "Multi-stage RO+UV+UF purification installed in modern Kerala residence",
      image: "/images/hero-water-purifier.png",
    },
    {
      title: "Rooftop Solar Water Heater & Solar Power Plant",
      caption: "Evacuated tube solar collector with 5-year warranty SS storage tank",
      image: "/images/hero-solar-energy.jpg",
    },
    {
      title: "24/7 Smart CCTV Security & Remote Monitoring",
      caption: "Hikvision & Dahua HD night-vision cameras with mobile live surveillance",
      image: "/images/hero-cctv-security.jpg",
    },
    {
      title: "Pure Sine Wave Inverter & Auto-Clean Kitchen Chimney",
      caption: "Uninterrupted home power backup and Faber auto-clean chimney ducting",
      image: "/images/hero-modern-living.jpg",
    },
    {
      title: "Technology Display & Service Showroom",
      caption: "Our official customer experience & sales center in Sultan Bathery",
      image: "/images/purifier-showroom.png",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Premium Hero Section */}
      <section className="relative bg-navy py-10 lg:py-14 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-aqua/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#36C6D9_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-aqua/30 text-aqua text-xs sm:text-sm font-semibold tracking-wide mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-aqua" />
              <span>Corporate Profile & Engineering Heritage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-aqua">SRV ENTERPRISES</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
              For over a decade, SRV ENTERPRISES has been at the forefront of safe, chemical-free water purification, industrial water treatment plants, and complete modern living solutions across Kerala.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-aqua font-bold">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>10+ Years of Experience</span>
              </div>
              <span className="text-white/40">•</span>
              <div className="flex items-center gap-2 text-aqua font-bold">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>10,000+ Satisfied Customers</span>
              </div>
              <span className="text-white/40">•</span>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-aqua" />
                <span>Sultan Bathery, Wayanad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction & Background (Grounding in Notice) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Engineering Story</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight leading-snug">
                Pioneering Clean Water & Home Infrastructure Across Kerala
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Operating from the <strong>EKM Building, Opposite Municipal Stadium, Mini Bypass, Sultan Bathery</strong>,
                <strong> SRV ENTERPRISES</strong> was founded to resolve the pressing clean water challenges of Kerala&apos;s diverse terrains.
                From borewells plagued by heavy iron rust, mud, and calcium hardness to commercial hospitality establishments needing high-volume potable water, we engineer dependable solutions.
              </p>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                As detailed in our official company notice, our fundamental philosophy is simple:
                <strong> &ldquo;ശുദ്ധമായ വെള്ളം ഉപയോഗിക്കൂ... ആരോഗ്യത്തോടുകൂടി ജീവിക്കൂ&rdquo;</strong> (Use Pure Water, Live Healthily).
                We achieve this without harmful chemicals, using natural multi-media filtration and high-rejection membranes.
              </p>

              {/* Core Commitments from Notice */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    <strong>Zero-Chemical Water Treatment:</strong> Our whole-house and commercial filtration vessels eliminate odor, mud, and iron without using chemical additives.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    <strong>Free On-Site Diagnostic Testing:</strong> We test your water quality for free, assessing TDS, color, odor, and hardness before recommending any solution.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-800 font-medium">
                    <strong>Exchange Facility & Doorstep Service:</strong> Hassle-free exchange options on old water purifiers and certified doorstep service for all leading brands.
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Authentic Brochure Preview Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-surface-light border border-slate-200 p-6 shadow-card">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-300">
                  <img
                    src="/images/srv-notice-brochure.webp"
                    alt="SRV Enterprises Official Notice"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                    Verified Company Notice & Guarantee
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Sultan Bathery, Wayanad (CRM: srventerprisesgroup.com)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-14 sm:py-16 bg-surface-light border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy font-heading mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To guarantee pure, healthy, and chemical-free drinking and utility water to every household, commercial establishment, and institution in Kerala through accessible, high-efficiency engineering and dedicated doorstep maintenance.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-aqua/20 text-aqua-dark flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy font-heading mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To be the undisputed standard for sustainable water treatment and home infrastructure in the region, recognized for transparent testing, durable build quality, and lasting customer relationships across our growing network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Statistics Highlight Strip */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-y border-navy-700/80 py-10 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-navy-700/60 last:border-0">
              <div className="text-3xl sm:text-4xl font-black text-aqua font-heading">
                10+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">
                Years of Field Experience
              </div>
            </div>

            <div className="p-4 border-r border-navy-700/60 last:border-0">
              <div className="text-3xl sm:text-4xl font-black text-aqua font-heading">
                10,000+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">
                Total Happy Customers
              </div>
            </div>

            <div className="p-4 border-r border-navy-700/60 last:border-0">
              <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                7,500+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">
                Domestic Households
              </div>
            </div>

            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                2,500+
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-bold mt-1">
                Commercial Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Business Focus & Allied Offerings */}
      <section className="py-20 bg-surface-light border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Comprehensive Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Our Core Business & Allied Verticals
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              With water purifiers and treatment plants as our primary pillar, we also engineer complete home convenience systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Primary Pillar 1 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-royal/20 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-royal text-white flex items-center justify-center shadow-md">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold text-royal tracking-wider">
                    Primary Business Focus
                  </span>
                  <h3 className="text-2xl font-bold text-navy font-heading">
                    Water Purifiers (Domestic & Commercial)
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                We supply and service top-tier RO, UV, UF, and alkaline water purifiers for residences, cafes, and healthcare institutions. Featuring Royal Waterman, Prolife, and allied ranges with genuine spare parts.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li>• Whole-house and kitchen-specific models</li>
                <li>• Multi-brand AMC and replacement filter packs</li>
                <li>• High-recovery membranes with mineral balance</li>
              </ul>
            </div>

            {/* Primary Pillar 2 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-aqua/40 shadow-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-navy text-aqua flex items-center justify-center shadow-md">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold text-royal tracking-wider">
                    Primary Business Focus
                  </span>
                  <h3 className="text-2xl font-bold text-navy font-heading">
                    Water Treatment Plants (250 - 10,000+ LPH)
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Heavy-duty commercial RO plants, whole-building iron removal plants, and water softeners. Engineered specifically for borewell water, resorts, hospitals, hotels, and schools across Wayanad.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li>• Turn-key skid mounting & automated backwash</li>
                <li>• Chemical-free natural media filtration</li>
                <li>• Complete laboratory compliance testing</li>
              </ul>
            </div>
          </div>

          {/* Allied Offerings Card */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 text-white shadow-elevated">
            <h3 className="text-xl font-bold font-heading mb-4 text-white">
              Allied Engineering Verticals (from Verified Notice)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-300">
              <div className="bg-navy-800/80 p-4 rounded-2xl border border-white/5">
                <div className="font-bold text-white mb-1">Solar Panels & Heaters</div>
                <p className="text-xs text-slate-400">
                  Solar water heaters with food-grade SS tanks backed by a 5-year warranty.
                </p>
              </div>

              <div className="bg-navy-800/80 p-4 rounded-2xl border border-white/5">
                <div className="font-bold text-white mb-1">CCTV Security Cameras</div>
                <p className="text-xs text-slate-400">
                  24/7 HD night-vision surveillance systems for homes, businesses, and estates.
                </p>
              </div>

              <div className="bg-navy-800/80 p-4 rounded-2xl border border-white/5">
                <div className="font-bold text-white mb-1">Inverters & Power Backup</div>
                <p className="text-xs text-slate-400">
                  Reliable home inverter with deep cycle tubular battery installation.
                </p>
              </div>

              <div className="bg-navy-800/80 p-4 rounded-2xl border border-white/5">
                <div className="font-bold text-white mb-1">Chimneys & Fitting Works</div>
                <p className="text-xs text-slate-400">
                  Auto-clean kitchen chimneys, granite cutting, and core drilling services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Premium Image Gallery (Actual Products & Showroom) */}
      <section className="py-20 bg-surface-light border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Visual Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Field Installations & Product Showcases
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              A glimpse into our real water treatment plant skids, domestic purifiers, and showroom center.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="h-56 bg-slate-100 p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-sm text-navy font-heading mb-1 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Strong CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Ready to Experience Pure Water?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Book a complimentary on-site water testing consultation with our Sultan Bathery engineering team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20SRV%20ENTERPRISES,%20I%20would%20like%20to%20learn%20more%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-royal to-aqua text-navy-950 font-bold px-7 py-3.5 rounded-xl text-sm shadow-royal hover:shadow-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact via WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-sm border border-white/20"
            >
              <Phone className="w-4 h-4 text-aqua" />
              <span>View Office & Location</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
