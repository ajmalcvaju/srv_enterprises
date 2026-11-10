"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Award,
  Users,
  Home,
  Building2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";

export default function AboutStatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [domestic, setDomestic] = useState(0);
  const [commercial, setCommercial] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Smooth easeOutExpo
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setYears(Math.floor(easeOut * COMPANY_INFO.experienceYears));
            setCustomers(Math.floor(easeOut * COMPANY_INFO.customersCount));
            setDomestic(Math.floor(easeOut * COMPANY_INFO.domesticCustomers));
            setCommercial(Math.floor(easeOut * COMPANY_INFO.commercialCustomers));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setYears(COMPANY_INFO.experienceYears);
              setCustomers(COMPANY_INFO.customersCount);
              setDomestic(COMPANY_INFO.domesticCustomers);
              setCommercial(COMPANY_INFO.commercialCustomers);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      id: "years",
      icon: Award,
      value: years,
      suffix: "+",
      label: "Years of Field Experience",
      detail: "A decade of engineering innovation",
      color: "from-blue-400 to-aqua",
      iconColor: "text-aqua",
      glowColor: "group-hover:border-aqua/50",
    },
    {
      id: "customers",
      icon: Users,
      value: customers.toLocaleString(),
      suffix: "+",
      label: "Total Happy Customers",
      detail: "Trusted across Wayanad & Kerala",
      color: "from-aqua via-cyan-200 to-white",
      iconColor: "text-cyan-400",
      glowColor: "group-hover:border-cyan-400/50",
    },
    {
      id: "domestic",
      icon: Home,
      value: domestic.toLocaleString(),
      suffix: "+",
      label: "Domestic Households",
      detail: "Pure drinking water for families",
      color: "from-emerald-400 to-teal-200",
      iconColor: "text-emerald-400",
      glowColor: "group-hover:border-emerald-400/50",
    },
    {
      id: "commercial",
      icon: Building2,
      value: commercial.toLocaleString(),
      suffix: "+",
      label: "Commercial Clients",
      detail: "Hotels, resorts, labs & campuses",
      color: "from-amber-400 to-orange-200",
      iconColor: "text-amber-400",
      glowColor: "group-hover:border-amber-400/50",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#071C35] via-[#040F1E] to-[#020B16] py-16 sm:py-20 border-y border-navy-700/80 overflow-hidden text-white shadow-2xl"
    >
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#36C6D9_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Badge & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-aqua text-xs font-bold tracking-widest uppercase bg-aqua/10 px-4 py-1.5 rounded-full border border-aqua/30 mb-3.5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-aqua animate-pulse" />
            <span>Proven Track Record &amp; Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-tight">
            Our Milestones &amp; Engineering Impact
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed font-normal max-w-2xl mx-auto">
            A decade of certified water purification, chemical-free filtration, and home infrastructure excellence across Kerala.
          </p>
        </div>

        {/* 4 Animated Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className={`group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/10 ${stat.glowColor} shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-center overflow-hidden`}
              >
                {/* Ambient Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Floating Icon Capsule */}
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/10 group-hover:border-white/25 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 shadow-sm">
                    <Icon className={`w-6 h-6 ${stat.iconColor} transition-transform duration-300`} />
                  </div>

                  {/* Animated Big Number */}
                  <div className="text-4xl sm:text-5xl font-black font-heading tracking-tight flex items-baseline justify-center gap-0.5">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-aqua">
                      {stat.value}
                    </span>
                    <span className="text-aqua text-3xl sm:text-4xl font-extrabold animate-pulse">
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Metric Label */}
                  <div className="text-xs sm:text-sm uppercase tracking-wider text-slate-100 font-extrabold mt-3 leading-snug">
                    {stat.label}
                  </div>

                  {/* Detail description */}
                  <div className="text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">
                    {stat.detail}
                  </div>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-[11px] text-aqua/90 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-aqua shrink-0" />
                  <span>Verified Field Metric</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Guarantee Footnote */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-aqua shrink-0" />
            <span>ISO 9001:2015 &amp; ISI Certified Products</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Free On-Site Diagnostic Water Testing</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-aqua shrink-0" />
            <span>Certified Technicians &amp; Lifetime AMC Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
