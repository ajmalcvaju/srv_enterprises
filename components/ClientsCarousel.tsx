"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Award,
} from "lucide-react";
import { PREMIUM_CLIENTS } from "@/data/siteData";

export default function ClientsCarousel() {
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
          setItemsPerView(1); // Mobile: single card centered
        } else if (window.innerWidth < 1024) {
          setItemsPerView(2); // Tablet: 2 cards
        } else if (window.innerWidth < 1280) {
          setItemsPerView(3); // Small Desktop: 3 cards
        } else {
          setItemsPerView(4); // Large Desktop: 4 cards
        }
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalClients = PREMIUM_CLIENTS.length;
  const maxIndex = Math.max(0, totalClients - Math.floor(itemsPerView));

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
    }, 3600);
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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-y border-slate-200 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-royal" />
            <span>Institutional &amp; Commercial Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight">
            Our Premium Clients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Leading hospitals, law enforcement departments, 5-star luxury resorts, educational institutions, and food enterprises rely on SRV Enterprises for certified water engineering and dependable maintenance.
          </p>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous client"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-navy hover:text-royal hover:border-royal/50 hover:bg-slate-50 active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next client"
              className="w-11 h-11 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-navy hover:text-royal hover:border-royal/50 hover:bg-slate-50 active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out py-2"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {PREMIUM_CLIENTS.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="shrink-0 px-2.5 sm:px-3 transition-all duration-300"
                style={{
                  width: `${100 / itemsPerView}%`,
                }}
              >
                <div className="group h-full bg-white rounded-3xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card hover:border-royal/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-center sm:text-left">
                  {/* Top Sector Tag & Verified Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-royal bg-royal/10 px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-royal" />
                        <span>{client.badge}</span>
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{client.location}</span>
                      </span>
                    </div>

                    {/* Client Logo Box */}
                    <div className="h-36 sm:h-40 w-full bg-gradient-to-b from-slate-50/80 to-slate-100/50 rounded-2xl p-4 flex items-center justify-center border border-slate-100 group-hover:bg-royal/5 group-hover:border-royal/20 transition-all duration-300 overflow-hidden">
                      <img
                        src={client.logoImage}
                        alt={`${client.name} - Client of SRV Enterprises`}
                        className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                        loading="lazy"
                      />
                    </div>

                    {/* Client Info */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <h3 className="font-heading font-extrabold text-navy text-lg sm:text-xl group-hover:text-royal transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                        {client.category}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Verification Label */}
                  <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-center justify-center sm:justify-start gap-1.5 text-[11px] text-emerald-700 font-semibold bg-emerald-50/60 px-3 py-1.5 rounded-xl border border-emerald-200/50">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Verified Commercial Installation</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? "w-8 bg-royal shadow-sm"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
