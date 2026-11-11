"use client";

import React, { useState } from "react";
import {
  Droplets,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WaterTdsCalculator() {
  const [source, setSource] = useState<string>("borewell");
  const [tdsRange, setTdsRange] = useState<string>("300-600");
  const [hasIronIssue, setHasIronIssue] = useState<boolean>(true);

  const getRecommendation = () => {
    if (source === "borewell" && hasIronIssue) {
      return {
        tech: "Whole-House Iron Filter (FRP Vessel) + Multi-Stage RO+UV+UF",
        reason:
          "Borewell water with red stains or iron content must first pass through a chemical-free catalytic media vessel before entering your drinking purifier or household plumbing. This protects taps, appliances, and purifiers from clogging.",
        model: "SRV Whole-House FRP Vessel & Wave Krystal Digital RO",
        suitableFor: "Villas, Homes & Homestays with Borewell",
      };
    } else if (tdsRange === "600-1500" || tdsRange === "1500+") {
      return {
        tech: "High-Rejection RO Membrane + TDS Controller + Mineralizer",
        reason:
          "High TDS (Total Dissolved Solids) water requires high-pressure reverse osmosis membranes to remove heavy minerals and dissolved salts, balanced with a mineralizer to restore healthy essential magnesium and calcium.",
        model: "Wave Deluxe Advanced RO System / Commercial 250 LPH Plant",
        suitableFor: "Borewells, Brackish Water, Commercial Buildings",
      };
    } else if (source === "municipal") {
      return {
        tech: "Advanced UV + UF Disinfection with Activated Carbon Block",
        reason:
          "Municipal / Corporation water is typically low in TDS but carries chlorine odor, suspended pipe rust, and potential microbiological contaminants. UV+UF provides 100% disinfection without stripping natural sweetness.",
        model: "Prolife Viber UV+UF Water Station",
        suitableFor: "Apartments, Municipal Piped Water Supply",
      };
    } else {
      return {
        tech: "Multi-Stage RO + UV + UF + Alkaline Purity System",
        reason:
          "The ideal universal setup providing complete multi-barrier defense against suspended sediment, bacteria, cysts, heavy metals, and variable water table fluctuations.",
        model: "Wave Krystal Digital RO / Prolife Aqua 9L",
        suitableFor: "All Residential and Small Commercial Settings",
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-royal" />
            <span>Interactive Purity Advisor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
            Find Your Recommended Water Purification Setup
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Select your water source and symptoms below. Our engineering algorithm will determine the exact filtration combination you need.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-surface-light rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Step 1: Water Source */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                1. What is your primary water source?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "borewell", label: "Borewell (കുഴൽക്കിണർ)" },
                  { id: "well", label: "Open Ring Well (തുറന്ന കിണർ)" },
                  { id: "municipal", label: "Corporation / Piped" },
                  { id: "tanker", label: "Tanker Supply" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSource(s.id)}
                    className={`p-3 rounded-xl text-xs font-bold border text-left transition-all ${
                      source === s.id
                        ? "bg-navy text-aqua border-aqua shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: TDS Range */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                2. Approximate TDS Level (or Water Taste)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "under-150", label: "Under 150 (Soft / Sweet)" },
                  { id: "150-300", label: "150 - 300 (Normal)" },
                  { id: "300-600", label: "300 - 600 (Moderate Hard)" },
                  { id: "600-1500", label: "600 - 1500 (Salty / Hard)" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTdsRange(t.id)}
                    className={`p-3 rounded-xl text-xs font-bold border text-left transition-all ${
                      tdsRange === t.id
                        ? "bg-navy text-aqua border-aqua shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Iron Stains Checkbox */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="ironCheckbox"
                checked={hasIronIssue}
                onChange={(e) => setHasIronIssue(e.target.checked)}
                className="w-4 h-4 text-royal rounded border-slate-300 focus:ring-royal cursor-pointer"
              />
              <label htmlFor="ironCheckbox" className="text-xs sm:text-sm font-semibold text-slate-800 cursor-pointer">
                Do you observe reddish/yellowish tint, rust stains on sanitaryware, or odor? (ചെമ്പഴുപ്പ്, അയൺ അംശം)
              </label>
            </div>
            <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full hidden sm:inline">
              Common in Wayanad
            </span>
          </div>

          {/* Result Card */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-6 sm:p-8 text-white border border-aqua/30 shadow-elevated">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-aqua bg-aqua/20 px-3 py-1 rounded-full border border-aqua/40">
                Recommended Purification Solution
              </span>
              <span className="text-xs text-slate-300">
                SRV Engineering Advisory
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2">
              {rec.tech}
            </h3>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
              {rec.reason}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-3 border-t border-white/10 mb-6">
              <div>
                <span className="text-slate-400">Recommended Model: </span>
                <span className="font-bold text-white">{rec.model}</span>
              </div>
              <span className="text-white/20">•</span>
              <div>
                <span className="text-slate-400">Best for: </span>
                <span className="font-bold text-aqua">{rec.suitableFor}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hi SRV ENTERPRISES, I used your online water advisor. My water source is ${source}, estimated TDS is ${tdsRange}, iron issues: ${
                    hasIronIssue ? "Yes" : "No"
                  }. Please advise on ${rec.tech} and arrange a free water test.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-royal hover:shadow-glow transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Book Free Water Testing on WhatsApp</span>
              </a>

              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-aqua" />
                <span>100% Free Doorstep Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
