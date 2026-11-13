"use client";

import React from "react";
import { Users, ShieldCheck, CheckCircle2, Award, Sparkles } from "lucide-react";
import { LEADERSHIP_TEAM } from "@/data/siteData";

export default function LeadershipSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/70 to-white border-y border-slate-200 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-royal" />
            <span>Leadership &amp; Ownership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight">
            The Leadership Behind SRV Enterprises
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Founded and steered by <strong>Rahul P R</strong>, <strong>Vipin Das</strong>, and <strong>Sam Jacob</strong> — the three owners whose dedication to certified engineering and genuine customer relationships defines SRV Enterprises.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
            <Sparkles className="w-3.5 h-3.5 text-royal" />
            <span>S • R • V — The Three Pillars of Our Organization</span>
          </div>
        </div>

        {/* 3 Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((leader, index) => (
            <div
              key={leader.name}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-soft hover:shadow-elevated hover:border-royal/40 transition-all duration-300 flex flex-col justify-between overflow-hidden text-center md:text-left"
            >
              {/* Leader Photo Header - Full View */}
              <div className="relative h-80 sm:h-96 w-full bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100/90 overflow-hidden flex items-center justify-center p-4">
                {/* Subtle blurred ambient backdrop */}
                <img
                  src={leader.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-125 pointer-events-none"
                />

                {/* Sharp 100% Fully Visible Uncropped Portrait */}
                <img
                  src={leader.image}
                  alt={`${leader.name} - Co-Owner of SRV Enterprises`}
                  className="relative z-20 max-h-full max-w-full object-contain rounded-2xl shadow-md border border-white/80 transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Top Badge: Founding Owner */}
                <div className="absolute top-3 left-3 z-30">
                  <span className="bg-navy/90 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-sm inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-aqua" />
                    <span>Founding Owner</span>
                  </span>
                </div>

                {/* Top Right: Owner # */}
                <div className="absolute top-3 right-3 z-30">
                  <span className="bg-white/95 backdrop-blur-md text-navy text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-sm border border-slate-200">
                    Owner
                  </span>
                </div>
              </div>

              {/* Leader Info Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-royal/10 text-royal text-xs font-bold px-3 py-1 rounded-full mb-3">
                    <Award className="w-3 h-3 text-royal" />
                    <span>{leader.role}</span>
                  </div>

                  <h3 className="text-2xl font-black text-navy font-heading group-hover:text-royal transition-colors">
                    {leader.name}
                  </h3>

                  <div className="text-xs font-bold text-slate-500 tracking-wide mt-1 mb-3">
                    {leader.title}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leader.focus}
                  </p>
                </div>

                {/* Verified Leadership Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-200/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>On-Site Technical &amp; Business Oversight</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
