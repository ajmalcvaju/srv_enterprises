"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  CheckCircle2,
  Wrench,
  ExternalLink,
  MessageCircle,
  Play,
  Pause,
} from "lucide-react";
import { SUPPORTED_BRANDS, COMPANY_INFO } from "@/data/siteData";

export default function BrandShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Responsive items count calculation
  useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setItemsPerView(1.2); // Mobile: single card with peek
        } else if (window.innerWidth < 1024) {
          setItemsPerView(2.5); // Tablet: 2.5 cards
        } else if (window.innerWidth < 1280) {
          setItemsPerView(4); // Small Desktop: 4 cards
        } else {
          setItemsPerView(5); // Large Desktop: 5 cards
        }
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalBrands = SUPPORTED_BRANDS.length;
  const maxIndex = Math.max(0, totalBrands - Math.floor(itemsPerView));

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(interval);
  }, [handleNext, isPaused]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50/70 to-white border-y border-slate-200 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-royal" />
              <span>Multi-Brand Sales & Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-heading tracking-tight leading-tight">
              Trusted Brands We Supply &amp; Service
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Authorized sales, genuine spare parts, and certified technician service across Sultan Bathery, Wayanad, and Kerala for world-class manufacturers.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="p-2.5 rounded-xl border border-slate-300 bg-white text-slate-600 hover:text-royal hover:border-royal/40 transition-colors shadow-sm"
              title={isPaused ? "Resume auto-slide" : "Pause carousel"}
              aria-label={isPaused ? "Resume auto-slide" : "Pause carousel"}
            >
              {isPaused ? <Play className="w-4 h-4 text-royal" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-royal hover:text-white hover:border-royal transition-all duration-200 shadow-sm"
              title="Previous Brand"
              aria-label="Previous Brand"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-royal hover:text-white hover:border-royal transition-all duration-200 shadow-sm"
              title="Next Brand"
              aria-label="Next Brand"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden py-3 -my-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-4 sm:gap-5"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {SUPPORTED_BRANDS.map((brand, idx) => {
              const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                `Hello SRV Enterprises, I would like to enquire about sales, spare parts, or service for ${brand.name} (${brand.category}).`
              )}`;

              return (
                <div
                  key={`${brand.name}-${idx}`}
                  className="shrink-0 transition-all duration-300"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${(4 * (itemsPerView - 1)) / itemsPerView}px)`,
                  }}
                >
                  <div className="group h-full bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-card hover:border-royal/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                    {/* Top Tag & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-royal bg-royal/10 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-royal" />
                        <span>Sales &amp; Service</span>
                      </span>
                      <span className="text-[10px] text-slate-600 font-medium hidden sm:inline">
                        100% Genuine
                      </span>
                    </div>

                    {/* Logo Image Viewport */}
                    <div className="h-24 sm:h-28 w-full bg-slate-50/70 rounded-xl p-3 flex items-center justify-center border border-slate-100 group-hover:bg-royal/5 group-hover:border-royal/20 transition-all duration-300">
                      <img
                        src={brand.logoImage}
                        alt={`${brand.name} - Authorized Products & Service`}
                        className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>

                    {/* Brand Info & Action */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <h3 className="font-heading font-extrabold text-navy text-base sm:text-lg group-hover:text-royal transition-colors">
                        {brand.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {brand.category}
                      </p>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-50 hover:bg-royal text-slate-700 hover:text-white text-xs font-semibold border border-slate-200 hover:border-royal transition-all duration-200"
                        title={`Enquire for ${brand.name} Sales or Service`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                        <span>Service &amp; Spares</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? "w-8 bg-royal"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to brand slide ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Continuous Gliding Infinite Marquee Ticker */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <div className="text-center mb-5">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-royal" />
              <span>Continuous Partner Showcase • Official Visiting Card Brands</span>
            </span>
          </div>

          <div className="relative overflow-hidden py-2">
            {/* Left and Right Fade Masks */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

            {/* Marquee Track */}
            <div className="flex gap-8 items-center animate-marquee hover:[animation-play-state:paused] w-max">
              {[...SUPPORTED_BRANDS, ...SUPPORTED_BRANDS].map((brand, i) => (
                <div
                  key={`marquee-${brand.name}-${i}`}
                  className="bg-white rounded-xl px-4 py-2 border border-slate-200/80 shadow-sm flex items-center gap-3 hover:border-royal/50 hover:shadow-md transition-all shrink-0"
                >
                  <img
                    src={brand.logoImage}
                    alt={brand.name}
                    className="h-8 sm:h-9 w-auto max-w-[120px] object-contain"
                  />
                  <div className="text-left border-l border-slate-200 pl-2.5">
                    <div className="text-xs font-bold text-navy whitespace-nowrap">
                      {brand.name}
                    </div>
                    <div className="text-[10px] text-slate-600 whitespace-nowrap">
                      Sales &amp; Service
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Guarantees Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-200/60">
          <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-royal" />
            </div>
            <div>
              <div className="text-xs font-bold text-navy">100% Genuine Parts</div>
              <div className="text-[11px] text-slate-500">Original filters &amp; membranes</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-navy">Doorstep Warranty Service</div>
              <div className="text-[11px] text-slate-500">Certified field technicians</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-xs font-bold text-navy">Annual Maintenance (AMC)</div>
              <div className="text-[11px] text-slate-500">Preventive checkups &amp; testing</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-aqua/15 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-royal" />
            </div>
            <div>
              <div className="text-xs font-bold text-navy">10+ Years Trust</div>
              <div className="text-[11px] text-slate-500">10,000+ happy clients served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
