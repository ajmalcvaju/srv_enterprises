import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  ShieldCheck,
  Cpu,
  Repeat,
  Droplets,
  Home,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Award,
  Users,
} from "lucide-react";
import { SERVICES, COMPANY_INFO } from "@/data/siteData";
import WaterTdsCalculator from "@/components/WaterTdsCalculator";

export const metadata: Metadata = {
  title: "Services | Water Purifiers & Water Treatment Plant Engineering",
  description:
    "Explore our professional services: Water Purifier Installation, Multi-brand Service & AMC, Water Treatment Plant (WTP) Installation, Plant Maintenance, and Free Water Testing in Kerala. 10+ Years of Experience, 10,000+ Customers.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench":
        return Wrench;
      case "ShieldCheck":
        return ShieldCheck;
      case "Cpu":
        return Cpu;
      case "Repeat":
        return Repeat;
      case "Droplets":
        return Droplets;
      case "Home":
        return Home;
      default:
        return Wrench;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-navy py-20 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-10 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-aqua/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(#36C6D9_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-aqua/30 text-aqua text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <Sparkles className="w-4 h-4 text-aqua" />
            <span>Certified Field Engineering & Doorstep Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-tight">
            Engineering & Water Treatment Services
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Turn-key water treatment plant design, commercial RO engineering, multi-brand purifier maintenance, and complimentary on-site water testing across Wayanad and Northern Kerala.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20SRV%20ENTERPRISES,%20I%20would%20like%20to%20request%20a%20service%20technician%20visit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-royal to-aqua text-navy-950 font-bold px-7 py-3.5 rounded-xl text-sm shadow-royal hover:shadow-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book Service on WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl text-sm border border-white/20"
            >
              <Phone className="w-4 h-4 text-aqua" />
              <span>Call Helpline: {COMPANY_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Premium Trust Banner (Exact instruction requirement) */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-6 border-y border-navy-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-aqua" />
              <span className="text-lg sm:text-xl font-extrabold text-white font-heading">
                10+ Years of Experience
              </span>
            </div>
            <span className="hidden sm:inline text-white/30 text-xl font-light">|</span>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-aqua" />
              <span className="text-lg sm:text-xl font-extrabold text-white font-heading">
                10,000+ Customers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Services Grid */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Confirmed Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Our Core Technical Offerings
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every service is carried out by trained technicians equipped with digital testing instrumentation and genuine manufacturer spares.
            </p>
          </div>

          <div className="space-y-8">
            {SERVICES.map((service, index) => {
              const Icon = getIcon(service.iconName);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Icon & Title */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-royal/10 text-royal flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 text-royal" />
                        </div>
                        <div>
                          {service.highlight && (
                            <span className="text-[10px] font-extrabold text-royal bg-royal/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              {service.highlight}
                            </span>
                          )}
                          <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading mt-1">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-2">
                        <a
                          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20SRV%20ENTERPRISES,%20I%20am%20inquiring%20about%20your%20service:%20${encodeURIComponent(
                            service.title
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm shadow-sm transition-all"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Enquire on WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    {/* Right: Key Deliverables List */}
                    <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-4">
                        Service Scope & Deliverables:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Water Setup Recommendation Advisor */}
      <WaterTdsCalculator />

      {/* 5. Free Water Testing Callout (As pledged in notice) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-elevated">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-aqua bg-aqua/15 px-3 py-1 rounded-full border border-aqua/30">
                Pledged in Official Notice
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
                വെള്ളം സൗജന്യമായി പരിശോധിച്ച് പരിഹാരം നിർദ്ദേശിക്കുന്നു
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                We test your water free of cost. Is your water showing signs of iron rust, foul odor, mud, saltiness, or calcium scale? Contact our technical team in Sultan Bathery today for on-site TDS and contamination assessment.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20SRV%20ENTERPRISES,%20I%20would%20like%20to%20schedule%20a%20Free%20Water%20Testing%20at%20my%20location.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-royal to-aqua text-navy-950 font-bold px-7 py-3.5 rounded-xl text-sm shadow-royal hover:shadow-glow transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Schedule Free Water Test</span>
                </a>
                <span className="text-xs text-slate-300">
                  Zero Consultation Charges • Zero Hidden Fees
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
