import React from "react";
import Link from "next/link";
import {
  Droplets,
  Cpu,
  Sun,
  Shield,
  Zap,
  Wind,
  Box,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function MainCategories() {
  const secondaryProducts = [
    {
      title: "Solar Panels & Heaters",
      desc: "Evacuated tube solar water heaters with 5-year warranty SS tanks.",
      icon: Sun,
      category: "solar",
      badge: "Save Electricity",
    },
    {
      title: "CCTV Cameras",
      desc: "24/7 HD night-vision surveillance for homes and commercial establishments.",
      icon: Shield,
      category: "cctv",
      badge: "24/7 Security",
    },
    {
      title: "Inverters & Batteries",
      desc: "Pure sine wave high-capacity backup systems with safe home installation.",
      icon: Zap,
      category: "inverters",
      badge: "Uninterrupted",
    },
    {
      title: "Electric Chimneys",
      desc: "Auto-clean suction kitchen chimneys with precision granite cut & fit.",
      icon: Wind,
      category: "chimneys",
      badge: "Modern Kitchen",
    },
    {
      title: "SS Water Tanks",
      desc: "Food-grade stainless steel 304/316 tanks with 5-year replacement warranty.",
      icon: Box,
      category: "tanks",
      badge: "Hygienic Grade",
    },
  ];

  return (
    <section className="py-20 bg-surface-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Droplets className="w-4 h-4 text-royal" />
            <span>Core Engineering Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy font-heading tracking-tight">
            Complete Water Solutions for Every Need
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Engineered purity for both individual residences and large-scale commercial facilities,
            backed by over 10 years of trusted expertise and 10,000+ satisfied clients.
          </p>
        </div>

        {/* 2 Primary Categories: High Visual Prominence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Primary 1: Water Purifiers */}
          <div className="relative group rounded-3xl bg-white border border-slate-200/80 hover:border-royal/50 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-royal bg-royal/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-royal" /> Primary Focus 01
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Domestic & Commercial
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading mb-3 group-hover:text-royal transition-colors">
                Water Purifiers
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Premium multi-stage reverse osmosis, ultraviolet, and ultrafiltration systems designed for cleaner, safer, and better-tasting water. Engineered to handle high TDS borewell water and municipal supplies.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Multi-Stage RO + UV + UF + Mineral alkaline enrichment</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Free doorstep water testing & exchange facilities</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Multi-brand service for Kent, Aquaguard, Pure Drops, etc.</span>
                </div>
              </div>

              <Link
                href="/products?category=purifiers"
                className="inline-flex items-center gap-2 bg-navy hover:bg-royal text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md group-hover:gap-3"
              >
                <span>Explore Purifiers</span>
                <ArrowRight className="w-4 h-4 text-aqua" />
              </Link>
            </div>

            {/* Visual Image Banner */}
            <div className="h-64 sm:h-72 bg-gradient-to-t from-slate-100 to-white relative p-6 flex items-center justify-center border-t border-slate-100 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#1265A8_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
              <img
                src="/images/hero-water-purifier.png"
                alt="SRV Water Purifiers"
                className="max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />
            </div>
          </div>

          {/* Primary 2: Water Treatment Plants */}
          <div className="relative group rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 text-white border border-navy-700 hover:border-aqua/50 shadow-elevated transition-all duration-300 overflow-hidden flex flex-col justify-between">
            {/* Corner Badge */}
            <div className="absolute top-6 right-6 bg-aqua text-navy-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-glow">
              Engineered Excellence
            </div>

            <div className="p-8 sm:p-10">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-aqua bg-aqua/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5 text-aqua" /> Primary Focus 02
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mb-3 group-hover:text-aqua transition-colors">
                Water Treatment Plants
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Turn-key residential whole-house filtration and large commercial / industrial water treatment plants. Chemical-free solutions for severe iron rust, water discoloration, mud, hardness, and high TDS.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-aqua shrink-0" />
                  <span>Capacities from 250 LPH to 10,000+ Liters Per Hour</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-aqua shrink-0" />
                  <span>Whole-house iron removal FRP vessels without chemicals</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-aqua shrink-0" />
                  <span>Full turnkey fabrication, commissioning, and AMC support</span>
                </div>
              </div>

              <Link
                href="/products?category=plants"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-royal group-hover:gap-3"
              >
                <span>Explore Treatment Plants</span>
                <ArrowRight className="w-4 h-4 text-navy-950" />
              </Link>
            </div>

            {/* Visual Image Banner */}
            <div className="h-64 sm:h-72 bg-navy-950/70 relative p-6 flex items-center justify-center border-t border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#36C6D9_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
              <img
                src="/images/1000-lph-ro-plant.jpg"
                alt="SRV Water Treatment Plant"
                className="max-h-full object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Additional Products Section */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Integrated Offerings
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading mt-1">
                Additional Modern Living Solutions
              </h3>
            </div>
            <Link
              href="/products"
              className="text-xs sm:text-sm font-bold text-royal hover:text-navy flex items-center gap-1.5 mt-2 sm:mt-0"
            >
              <span>View All Products in Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {secondaryProducts.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.title}
                  href={`/products?category=${p.category}`}
                  className="group bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-royal/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-royal/10 text-royal flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5 text-royal" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {p.badge}
                      </span>
                    </div>

                    <h4 className="font-bold text-navy text-sm font-heading group-hover:text-royal transition-colors mb-1.5">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-royal group-hover:text-navy transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
