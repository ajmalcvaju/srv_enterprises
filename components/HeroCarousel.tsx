"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { HERO_SLIDES } from "@/data/siteData";

interface HeroCarouselProps {
  onOpenQuote?: () => void;
}

export default function HeroCarousel({ onOpenQuote }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = HERO_SLIDES.length;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current, total]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <section
      className="relative w-full bg-navy overflow-hidden"
      aria-label="Hero Carousel"
    >
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-royal/25 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-aqua/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-royal-dark/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#36C6D9_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Carousel Container */}
      <div className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[680px] flex items-center z-10">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${
                isActive
                  ? "opacity-100 pointer-events-auto z-10"
                  : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-7 space-y-6 text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-aqua/30 text-aqua text-xs sm:text-sm font-semibold tracking-wide">
                      <Sparkles className="w-4 h-4 text-aqua animate-pulse" />
                      <span>{slide.badge}</span>
                      <span className="hidden sm:inline text-white/40">•</span>
                      <span className="hidden sm:inline text-white/90">
                        10+ Years Trust
                      </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white font-heading leading-[1.1] tracking-tight">
                      {slide.headline}
                    </h1>

                    {/* Subtitle / Description */}
                    <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
                      {slide.description}
                    </p>

                    {/* Key Feature Highlight Tag */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-aqua font-medium">
                      <CheckCircle className="w-4 h-4 text-aqua shrink-0" />
                      <span>{slide.taglineSecondary}</span>
                    </div>

                    {/* CTAs */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={slide.primaryCtaLink}
                        className="inline-flex items-center gap-2.5 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base shadow-royal hover:shadow-glow transition-all transform hover:-translate-y-0.5"
                      >
                        <span>{slide.primaryCtaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={onOpenQuote}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all hover:border-aqua/50"
                      >
                        <span>{slide.secondaryCtaText}</span>
                      </button>
                    </div>

                    {/* Trust Proof Micro-Badge */}
                    <div className="pt-4 flex items-center gap-6 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-aqua" />
                        <span>10,000+ Customers</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-slate-300">Free Water Testing Available</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Product Showcase */}
                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
                      {/* Ambient Glow */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-aqua/20 to-royal/30 rounded-3xl blur-2xl transform scale-95" />

                      {/* Card Frame */}
                      <div className="relative rounded-3xl bg-gradient-to-b from-navy-700/60 to-navy-900/90 border border-white/15 backdrop-blur-xl p-4 sm:p-6 shadow-elevated overflow-hidden group">
                        {/* Slide Special Tag */}
                        {slide.id === 2 && (
                          <div className="absolute top-4 right-4 z-20 bg-aqua text-navy-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-glow">
                            PRIMARY SPECIALTY
                          </div>
                        )}
                        {slide.id === 1 && (
                          <div className="absolute top-4 right-4 z-20 bg-royal-light text-white text-xs font-bold px-3 py-1 rounded-full">
                            TOP RATED
                          </div>
                        )}

                        <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-navy-900/80 flex items-center justify-center">
                          <img
                            src={slide.image}
                            alt={slide.headline}
                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        {/* Caption Strip */}
                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                          <span className="font-semibold text-white">
                            {slide.headline.split(".")[0]}
                          </span>
                          <span className="text-aqua font-medium">SRV Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Controls & Pagination Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2.5 ${
                  idx === current
                    ? "w-10 bg-gradient-to-r from-royal to-aqua shadow-glow"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Quick Slide Title Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`text-xs px-3 py-1.5 rounded-lg transition-all ${
                  idx === current
                    ? "bg-white/15 text-aqua font-bold border border-aqua/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                0{s.id}. {s.headline.split(".")[0]}
              </button>
            ))}
          </div>

          {/* Navigation Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all border border-white/10 hover:border-aqua/40"
              aria-label="Previous Slide"
              title="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all border border-white/10 hover:border-aqua/40"
              aria-label="Next Slide"
              title="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
