"use client";

import React, { useEffect, useState, useRef } from "react";
import { Award, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate Years to 10
          let yCount = 0;
          const yInterval = setInterval(() => {
            yCount += 1;
            if (yCount >= COMPANY_INFO.experienceYears) {
              setYears(COMPANY_INFO.experienceYears);
              clearInterval(yInterval);
            } else {
              setYears(yCount);
            }
          }, 80);

          // Animate Customers to 10000
          let cCount = 0;
          const step = Math.ceil(COMPANY_INFO.customersCount / 40);
          const cInterval = setInterval(() => {
            cCount += step;
            if (cCount >= COMPANY_INFO.customersCount) {
              setCustomers(COMPANY_INFO.customersCount);
              clearInterval(cInterval);
            } else {
              setCustomers(cCount);
            }
          }, 35);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#071C35] to-[#040F1E] py-14 sm:py-20 border-y border-navy-700/80 overflow-hidden"
    >
      {/* Subtle Aqua Ambient Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-32 bg-aqua/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-aqua text-xs font-bold tracking-widest uppercase bg-aqua/10 px-3.5 py-1.5 rounded-full border border-aqua/20 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-aqua" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Trusted Engineering & Proven Reliability
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            A decade of dedication to pure water, sustainable energy, and dependable home technologies across Kerala.
          </p>
        </div>

        {/* 2 Primary Core Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
          {/* Metric 1: 10+ Years of Experience */}
          <div className="relative group bg-gradient-to-br from-navy-800/90 to-navy-900/90 border border-white/10 hover:border-aqua/40 rounded-3xl p-8 sm:p-10 shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-royal to-aqua/40 flex items-center justify-center text-white shadow-royal">
                <Award className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs uppercase tracking-widest text-aqua font-bold bg-aqua/10 px-3 py-1 rounded-full border border-aqua/20">
                Industry Milestone
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white font-heading tracking-tight flex items-baseline gap-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-aqua">
                  {years}
                </span>
                <span className="text-aqua text-4xl sm:text-5xl font-extrabold">+</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Years of Experience
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                Extensive technical mastery in water testing, custom multi-stage filtration design, industrial RO plant fabrication, and multi-brand service.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-aqua font-semibold">
              <CheckCircle2 className="w-4 h-4 text-aqua" />
              <span>Dedicated Technical Support & AMC Service</span>
            </div>
          </div>

          {/* Metric 2: 10,000+ Customers */}
          <div className="relative group bg-gradient-to-br from-navy-800/90 to-navy-900/90 border border-white/10 hover:border-aqua/40 rounded-3xl p-8 sm:p-10 shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-aqua/30 to-royal flex items-center justify-center text-white shadow-glow">
                <Users className="w-7 h-7 text-aqua" />
              </div>
              <span className="text-xs uppercase tracking-widest text-aqua font-bold bg-aqua/10 px-3 py-1 rounded-full border border-aqua/20">
                Customer Trust
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-white font-heading tracking-tight flex items-baseline gap-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-aqua">
                  {customers.toLocaleString()}
                </span>
                <span className="text-aqua text-4xl sm:text-5xl font-extrabold">+</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Satisfied Customers
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                Serving independent homeowners, luxury villas, commercial resorts, hospitals, restaurants, and educational campuses with clean, safe water.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-aqua font-semibold">
              <CheckCircle2 className="w-4 h-4 text-aqua" />
              <span>Prompt Doorstep Assistance & Free Purity Testing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
