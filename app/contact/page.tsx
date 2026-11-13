import React from "react";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { COMPANY_INFO } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact Us | Head Office Sultan Bathery, Wayanad",
  description:
    "Contact SRV ENTERPRISES in Sultan Bathery, Wayanad, Kerala. Phone: +91 85938 82776, Email: srventerprises78@gmail.com. Free water testing and quotation for water purifiers and treatment plants.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-navy py-8 sm:py-12 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-aqua/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-aqua/30 text-aqua text-xs sm:text-sm font-semibold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-aqua" />
            <span>Direct Customer Helpline & Free Diagnostics</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight">
            Contact <span className="text-aqua">SRV ENTERPRISES</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            Whether you need a domestic RO water purifier, a commercial water treatment plant (WTP), or a free water diagnostic test, our Sultan Bathery engineering team is here to assist you.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Details & Form Grid */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3.5 py-1.5 rounded-full inline-block">
                  Headquarters & Showroom
                </span>
                <h2 className="text-3xl font-extrabold text-navy font-heading">
                  Get In Touch With Our Specialists
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Visit our office in Sultan Bathery or call our helpline for immediate technical advice, free TDS testing, and quotation appointments.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Office Location */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm font-heading mb-1">
                      Business & Workshop Address
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      <span className="font-bold text-navy">{COMPANY_INFO.name}</span><br />
                      {COMPANY_INFO.address.building}, {COMPANY_INFO.address.landmark},<br />
                      {COMPANY_INFO.address.road}, {COMPANY_INFO.address.city},<br />
                      {COMPANY_INFO.address.district}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
                    </p>
                    <a
                      href={COMPANY_INFO.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-royal hover:text-aqua mt-2.5 transition-colors"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm font-heading mb-1">
                      Helpline & Contact Numbers
                    </h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {COMPANY_INFO.additionalPhones.map((ph, idx) => (
                        <a
                          key={idx}
                          href={`tel:${ph.replace(/\s+/g, "")}`}
                          className="text-sm font-bold text-royal hover:underline"
                        >
                          {ph}
                        </a>
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">
                      Direct lines to Sultan Bathery customer desk & engineering team
                    </span>
                  </div>
                </div>

                {/* Branches & GSTIN Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm font-heading mb-1">
                      Branch Network & Tax Registration
                    </h3>
                    <div className="text-xs text-slate-700 leading-relaxed">
                      <strong>Branches:</strong> {COMPANY_INFO.branches.join(" • ")}
                    </div>
                    <div className="text-xs text-slate-700 mt-1">
                      <strong>GSTIN:</strong> <span className="font-mono text-royal font-bold">{COMPANY_INFO.gstin}</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm font-heading mb-1">
                      WhatsApp Instant Consultation
                    </h3>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20SRV%20ENTERPRISES,%20I%20have%20an%20enquiry.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#20ba59] hover:underline block"
                    >
                      Chat on WhatsApp (+91 85938 82776)
                    </a>
                    <span className="text-xs text-slate-500">
                      Share water test pictures & site location
                    </span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm font-heading mb-1">
                      Official Email
                    </h3>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-bold text-royal hover:underline block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-xs text-slate-500">
                      Send project blueprints & quotation inquiries
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm font-heading mb-1">
                      Working Hours
                    </h3>
                    <p className="text-xs text-slate-600">
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Working Contact Form & Showroom Visual Card */}
            <div className="lg:col-span-7 space-y-6">
              <ContactForm />

              {/* Showroom Storefront Showcase */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
                <div className="relative bg-slate-100 overflow-hidden">
                  <img
                    src="/images/srv-showroom-front.jpg"
                    alt="SRV ENTERPRISES Sales & Service Showroom - Sultan Bathery"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-navy/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/15">
                    Sultan Bathery Showroom
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-extrabold text-navy text-base font-heading">
                      Technology Display &amp; Service Showroom
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {COMPANY_INFO.address.building}, {COMPANY_INFO.address.landmark}, {COMPANY_INFO.address.road}, {COMPANY_INFO.address.city}
                    </p>
                  </div>
                  <a
                    href={COMPANY_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal hover:text-navy bg-royal/10 hover:bg-royal/15 px-3.5 py-2 rounded-xl transition-colors shrink-0"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Visit Showroom</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Maps Integration (Sultan Bathery Location) */}
      <section className="bg-white py-14 sm:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-left justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3.5 py-1.5 rounded-full inline-block mb-2">
                Visit Our Center
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
                Our Location in Sultan Bathery
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto md:mx-0">
                {COMPANY_INFO.address.full}
              </p>
            </div>
            <div>
              <a
                href={COMPANY_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-sm"
              >
                <MapPin className="w-4 h-4 text-aqua" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-card h-96 sm:h-[450px] relative bg-slate-100">
            {/* Embedded Google Map iframe focused on verified business listing */}
            <iframe
              title="SRV ENTERPRISES WATER PURIFIER, SOLAR WATER HEATER SALES & SERVICE"
              src={COMPANY_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
