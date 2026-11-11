"use client";

import React, { useState } from "react";
import {
  Droplets,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { WATER_PROBLEMS, COMPANY_INFO } from "@/data/siteData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WaterTroubleshooter() {
  const [selectedProblem, setSelectedProblem] = useState(WATER_PROBLEMS[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-surface-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-navy rounded-3xl p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
          {/* Subtle Accent Circles */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-10 top-0 w-60 h-60 bg-royal/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header */}
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 bg-aqua/15 text-aqua text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-aqua/30 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Water Diagnostic Consultation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-white tracking-tight">
              Facing Water Issues at Home or Business?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base mt-2">
              Select your specific water symptom below to see the chemical-free engineering solution recommended by our technicians.
            </p>
          </div>

          {/* Interactive Problem Selector Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Problem Buttons */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Identify Your Water Problem:
              </span>
              <div className="space-y-2 mt-2">
                {WATER_PROBLEMS.map((item) => {
                  const isSelected = selectedProblem.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedProblem(item)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-center justify-between ${
                        isSelected
                          ? "bg-white text-navy font-bold shadow-lg border-aqua scale-[1.02]"
                          : "bg-navy-800/80 text-slate-200 hover:bg-navy-700/80 border-navy-600/50"
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold">{item.problem}</div>
                        <div
                          className={`text-xs mt-0.5 ${
                            isSelected ? "text-royal" : "text-slate-400"
                          }`}
                        >
                          {item.malayalam}
                        </div>
                      </div>
                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? "text-royal translate-x-1" : "text-slate-500"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Diagnosis & Solution Card */}
            <div className="lg:col-span-7 bg-navy-800/90 border border-aqua/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-royal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-aqua/20 border border-aqua/40 flex items-center justify-center text-aqua">
                  <AlertTriangle className="w-6 h-6 text-aqua" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-aqua font-bold">
                    Problem Identified
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    {selectedProblem.problem}
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                <div className="bg-navy-900/80 p-4 rounded-xl border border-white/5">
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">
                    Typical Symptoms & Causes:
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {selectedProblem.symptoms}
                  </p>
                </div>

                <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/30">
                  <span className="text-xs uppercase font-bold text-emerald-400 block mb-1">
                    Recommended SRV Engineering Solution:
                  </span>
                  <div className="flex items-start gap-2 text-white font-semibold text-sm sm:text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{selectedProblem.solution}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20SRV%20ENTERPRISES,%20I%20have%20an%20issue%20with%20${encodeURIComponent(
                      selectedProblem.problem
                    )}.%20Please%20arrange%20a%20free%20water%20testing.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold px-6 py-3 rounded-xl text-sm shadow-royal hover:shadow-glow transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-navy-950 fill-current" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <div className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-aqua animate-ping" />
                    <span>Free on-site testing in Sultan Bathery & Wayanad region</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
