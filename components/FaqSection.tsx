"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    category: "Water Purifiers",
    question: "Which water purifier is best for borewell water with high TDS in Kerala?",
    answer:
      "For high TDS (Total Dissolved Solids) borewell or well water, a multi-stage Reverse Osmosis (RO) system combined with UV disinfection, UF filtration, and an Alkaline Mineral cartridge is recommended. Royal Waterman and Pure Drops systems from SRV Enterprises reduce TDS from 2000+ ppm down to the safe 70–150 ppm range while preserving essential minerals like calcium and magnesium.",
  },
  {
    category: "Water Treatment Plants",
    question: "What capacity Water Treatment Plant (WTP) or RO Plant do I need for my home or business?",
    answer:
      "For domestic whole-house filtration (iron removal & water softening), FRP vessel filtration systems with flow rates of 1000–3000 LPH are ideal. For commercial operations like hotels, homestays, resorts, cafes, and hospitals, SRV Enterprises engineers turnkey commercial RO plants ranging from 250 LPH, 500 LPH, 1000 LPH up to 10,000+ LPH with automatic backwash and pressure calibration.",
  },
  {
    category: "Solar Panels & Heaters",
    question: "Why should I choose Supreme Solar water heaters with stainless steel (SS) tanks?",
    answer:
      "Supreme Solar water heaters feature evacuated glass tube (ETC) collector technology that efficiently absorbs heat even during cloudy monsoon weather in Kerala. The inner storage tank is made from high-grade Food-Grade SS 304/316 stainless steel, which prevents rust, resists hard water corrosion, and cuts your monthly water-heating electricity bill by up to 80%.",
  },
  {
    category: "CCTV Cameras",
    question: "Which CCTV cameras provide the best night vision security for homes and estates in Wayanad?",
    answer:
      "We recommend Hikvision ColorVu, Dahua Full-Color, and CP Plus HD IP camera systems. Unlike traditional infrared cameras that produce grainy black-and-white night footage, modern ColorVu cameras deliver crisp 24/7 full-color video even in pitch-black conditions, complete with smartphone live streaming, motion alerts, and waterproof outdoor housing.",
  },
  {
    category: "Inverters and Batteries",
    question: "How do I choose the right inverter and battery backup for frequent power cuts?",
    answer:
      "For homes, a Pure Sine Wave Inverter (900VA to 1500VA) paired with a heavy-duty 150Ah–220Ah Tubular Battery provides 6 to 12 hours of backup for lights, fans, Wi-Fi routers, and LED TVs. Pure Sine Wave technology ensures noiseless operation and protects sensitive modern appliances from voltage fluctuations.",
  },
  {
    category: "Electric Chimneys",
    question: "How does a filterless auto-clean electric kitchen chimney work?",
    answer:
      "Auto-clean chimneys use thermal heat auto-clean technology to melt heavy oil, ghee, and grease residue collected inside the blower assembly and direct it into a detachable oil-collector tray at the push of a button. Paired with 1200–1500 m³/hr suction capacity and motion gesture control, it keeps Kerala kitchens completely smoke-free without messy manual filter washing.",
  },
  {
    category: "SS Water Tanks",
    question: "Why are food-grade Stainless Steel (SS) water tanks better than plastic water tanks?",
    answer:
      "Food-grade SS 304 and SS 316 water tanks do not leach microplastics or chemical odors into drinking water even when exposed to direct tropical sun. They block 100% of sunlight, completely preventing algae and bacterial growth, and feature smooth conical bottoms for effortless zero-residue draining and cleaning.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Schema.org FAQPage for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal/10 text-royal text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-royal" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Expert insights on water purifiers, commercial RO plants, solar water heaters, CCTV surveillance, inverters, chimneys, and SS water tanks across Kerala.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 bg-surface-light hover:border-royal/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-navy hover:text-royal transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-extrabold text-royal bg-royal/10 px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 hidden sm:inline-block">
                      {item.category}
                    </span>
                    <span className="text-base sm:text-lg">{item.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-royal" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-white">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-bold text-navy text-sm sm:text-base">
              Have a custom requirement or need a water test?
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Our technicians provide free on-site water testing and site surveys across Wayanad & Calicut.
            </div>
          </div>
          <a
            href="https://wa.me/918593882776?text=Hi%20SRV%20Enterprises,%20I%20have%20a%20question%20regarding%20water%20purifiers%20and%20treatment%20systems."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-royal hover:bg-navy text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-sm shrink-0"
          >
            <Sparkles className="w-4 h-4 text-aqua" />
            <span>Ask Our Engineering Team</span>
          </a>
        </div>
      </div>
    </section>
  );
}
