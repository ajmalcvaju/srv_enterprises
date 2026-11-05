"use client";

import React from "react";
import { ShieldCheck, Award, Sparkles } from "lucide-react";
import { SUPPORTED_BRANDS } from "@/data/siteData";

export default function BrandShowcase() {
  return (
    <section className="py-14 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-royal" />
            <span>Authorized Sales & Multi-Brand Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading tracking-tight">
            Our Official Product Brands & Partners
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            As featured on our official visiting card, we supply genuine products, original spare filters, and authorized warranty service for top global and Indian brands.
          </p>
        </div>

        {/* Brand Logos Grid with Actual Brand Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {SUPPORTED_BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="group bg-white rounded-2xl p-3 border border-slate-200/90 hover:border-royal/50 hover:shadow-card transition-all duration-300 flex flex-col items-center justify-center text-center h-28"
            >
              <div className="h-12 w-full flex items-center justify-center px-1">
                <img
                  src={brand.logoImage}
                  alt={`${brand.name} Authorized Sales & Service`}
                  className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-2 text-[11px] font-bold text-navy group-hover:text-royal transition-colors line-clamp-1">
                {brand.name}
              </div>
              <div className="text-[9px] text-slate-400 font-medium line-clamp-1">
                {brand.category}
              </div>
            </div>
          ))}
        </div>

        {/* Official Brand Strip Banner */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              100% Genuine Membranes, Food-Grade Filters & Factory Parts Guaranteed
            </span>
          </div>

          <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 flex items-center gap-3">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
              Visiting Card Brands:
            </span>
            <img
              src="/images/all-partner-brands-strip.png"
              alt="SRV Enterprises Official Product Brands"
              className="h-6 w-auto object-contain hidden sm:inline"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
