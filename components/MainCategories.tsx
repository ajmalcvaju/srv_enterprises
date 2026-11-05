"use client";

import React from "react";
import Link from "next/link";
import {
  Droplets,
  Cpu,
  Sun,
  Shield,
  Zap,
  Wind,
  Layers,
  Box,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Award,
} from "lucide-react";

export default function MainCategories() {
  const divisions = [
    {
      id: "purifiers",
      number: "01",
      badge: "Flagship Purification",
      title: "Water Purifiers (Domestic & Commercial)",
      shortDesc:
        "Premium multi-stage reverse osmosis, ultraviolet, and ultrafiltration systems designed for cleaner, safer, and better-tasting drinking water.",
      image: "/images/hero-water-purifier.png",
      tagline: "Multi-Stage RO + UV + UF + Alkaline Mineral Enrichment",
      features: [
        "7,500+ Domestic installations across Wayanad & Calicut",
        "Engineered for high TDS borewell water and municipal supply",
        "Authorized sales & service for Kent, AquaGuard, Pureit & Royal Waterman",
      ],
      link: "/products?category=purifiers",
      ctaText: "Explore Water Purifiers",
      gradient: "from-blue-600/10 via-royal/5 to-transparent",
      accentColor: "text-royal",
    },
    {
      id: "plants",
      number: "02",
      badge: "Turnkey Heavy Engineering",
      title: "Water Treatment Plants (WTP & RO Plants)",
      shortDesc:
        "Custom-fabricated residential whole-house filtration vessels and heavy-duty commercial/industrial water treatment plants for resorts, hospitals & institutions.",
      image: "/images/1000-lph-ro-plant.jpg",
      tagline: "Capacities from 250 LPH to 10,000+ Liters Per Hour",
      features: [
        "Chemical-free FRP iron removal filtration (removes rust stains & odor)",
        "Automatic ion-exchange water softeners for hard borewell water",
        "Turnkey fabrication, commissioning, media refills & factory AMC support",
      ],
      link: "/products?category=plants",
      ctaText: "Explore Treatment Plants",
      gradient: "from-cyan-600/10 via-aqua/5 to-transparent",
      accentColor: "text-cyan-700",
    },
    {
      id: "solar",
      number: "03",
      badge: "Renewable Clean Energy",
      title: "Solar Water Heaters & Solar Power Systems",
      shortDesc:
        "Harness Kerala's abundant solar energy. High-efficiency evacuated tube solar water heaters with food-grade SS tanks and rooftop solar power plants.",
      image: "/images/hero-solar-energy.jpg",
      tagline: "Save Up To 80% on Water Heating & Domestic Electricity Bills",
      features: [
        "High-absorption German vacuum tube solar water heaters",
        "Food-Grade Stainless Steel (SS 304/316) tanks with 5-Year Warranty",
        "Rooftop On-Grid & Off-Grid Solar Power with KSEB Net Metering support",
      ],
      link: "/products?category=solar",
      ctaText: "Explore Solar Solutions",
      gradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
      accentColor: "text-amber-600",
    },
    {
      id: "cctv",
      number: "04",
      badge: "24/7 Smart Security",
      title: "24/7 CCTV & Security Surveillance",
      shortDesc:
        "High-definition ColorVu night-vision security cameras with digital video recorders, motion detection alerts, and intelligent smartphone remote monitoring.",
      image: "/images/hero-cctv-security.jpg",
      tagline: "Authorized Hikvision, Dahua & CP Plus HD Surveillance",
      features: [
        "24/7 Full-Color night vision dome, bullet & 360° motorized PTZ cameras",
        "Live smartphone and tablet streaming from anywhere in the world",
        "Aesthetic concealed cabling, outdoor weatherproof housing & 2-year warranty",
      ],
      link: "/products?category=cctv",
      ctaText: "Explore CCTV Packages",
      gradient: "from-emerald-600/10 via-teal-500/5 to-transparent",
      accentColor: "text-emerald-700",
    },
    {
      id: "inverters",
      number: "05",
      badge: "Uninterrupted Power",
      title: "Inverters & Heavy-Duty Tubular Batteries",
      shortDesc:
        "Pure sine wave digital inverters paired with heavy-duty deep-cycle tubular batteries to keep your home lights, fans, purifiers, and IT running seamlessly.",
      image: "/images/product-inverter-battery.jpg",
      tagline: "Instant Millisecond Automatic Power Switchover",
      features: [
        "Pure sine wave output safe for sensitive electronics & medical devices",
        "Long-life deep-cycle tubular batteries (V-Guard & leading Tier-1 brands)",
        "Accurate electrical load calculation, panel wiring & safe battery rack setup",
      ],
      link: "/products?category=inverters",
      ctaText: "Explore Inverter Systems",
      gradient: "from-indigo-600/10 via-purple-500/5 to-transparent",
      accentColor: "text-indigo-700",
    },
    {
      id: "chimneys",
      number: "06",
      badge: "Modern Kitchen Engineering",
      title: "Electric Chimneys, Built-In Hobs & Copper Piping",
      shortDesc:
        "Smoke-free, odor-free kitchen ventilation. Thermal auto-clean curved glass chimneys, toughened glass gas hobs, and architectural copper piping lines.",
      image: "/images/product-chimney-hob.jpg",
      tagline: "Thermal Auto-Clean & 1500 m³/hr High Suction Power",
      features: [
        "Faber & top-brand motion sensor gesture-controlled auto-clean chimneys",
        "Diamond core drilling for exhaust ducting without wall or tile cracks",
        "Precision granite kitchen slab cutting for built-in gas stove hobs",
      ],
      link: "/products?category=chimneys",
      ctaText: "Explore Kitchen Appliances",
      gradient: "from-rose-600/10 via-orange-500/5 to-transparent",
      accentColor: "text-rose-700",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-royal" />
            <span>Complete Home, Commercial &amp; Industrial Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy font-heading tracking-tight">
            Our Core Engineering &amp; Product Divisions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            From pure drinking water and heavy-duty treatment plants to solar energy, 24/7 CCTV security, power backup inverters, and modern kitchen automation—SRV ENTERPRISES delivers complete turnkey solutions backed by 10+ years of trust.
          </p>
        </div>

        {/* 6 Core Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {divisions.map((div) => (
            <div
              key={div.id}
              className="group bg-white rounded-3xl border border-slate-200/90 hover:border-royal/50 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-56 sm:h-64 w-full bg-slate-100 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${div.gradient} z-10 pointer-events-none`} />
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-navy/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                      Division {div.number}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-white/95 backdrop-blur-md text-navy text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm border border-slate-200">
                      {div.badge}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7">
                  <div className="text-xs font-bold text-royal uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-royal" />
                    <span>{div.tagline}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading mb-3 group-hover:text-royal transition-colors leading-snug">
                    {div.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {div.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {div.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="p-6 pt-0">
                <Link
                  href={div.link}
                  className="w-full inline-flex items-center justify-between bg-slate-50 group-hover:bg-royal text-navy group-hover:text-white font-bold py-3 px-5 rounded-2xl text-xs sm:text-sm border border-slate-200 group-hover:border-royal transition-all duration-300 shadow-sm"
                >
                  <span>{div.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Architectural Infrastructure Bar */}
        <div className="bg-navy rounded-3xl p-6 sm:p-8 text-white shadow-elevated border border-navy-700/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-black uppercase tracking-widest text-aqua bg-aqua/10 px-3 py-1 rounded-full border border-aqua/20 inline-block mb-2">
                Allied Architectural Solutions
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                Food-Grade SS Tanks &amp; Concealed Copper Piping
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Replace unhygienic plastic storage with food-grade SS 304/316 water tanks backed by a <strong>5-Year Replacement Warranty</strong>, coupled with heavy-gauge seamless copper pipeline routing for kitchen gas, RO systems, and villas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/products?category=tanks"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-royal to-aqua text-navy-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-royal hover:shadow-glow transition-all"
              >
                <span>View SS Tanks &amp; Piping</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918593882776?text=Hello%20SRV%20Enterprises,%20I%20am%20interested%20in%20SS%20Water%20Tanks%20and%20Copper%20Piping."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-3 rounded-xl text-xs sm:text-sm border border-white/20 transition-all"
              >
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
