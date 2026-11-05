import React from "react";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Award,
  Users,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
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
      <section className="relative bg-navy py-16 sm:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-aqua/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-aqua/30 text-aqua text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-aqua" />
            <span>Direct Customer Helpline & Free Diagnostics</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-tight">
            Contact <span className="text-aqua">SRV ENTERPRISES</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Whether you need a domestic RO water purifier, a commercial water treatment plant (WTP), or a free water diagnostic test, our Sultan Bathery engineering team is here to assist you.
          </p>
        </div>
      </section>

      {/* 2. Premium Trust Banner (Exact requirement) */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 py-6 border-y border-navy-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-aqua" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold text-white font-heading">
                  Trusted by 10,000+ Customers
                </span>
                <span className="text-xs text-aqua font-semibold">
                  7,500+ Domestic • 2,500+ Commercial
                </span>
              </div>
            </div>
            <span className="hidden sm:inline text-white/30 text-xl font-light">|</span>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-aqua" />
              <span className="text-lg sm:text-xl font-extrabold text-white font-heading">
                10+ Years of Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Contact Details & Form Grid */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
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
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {COMPANY_INFO.address.building}, {COMPANY_INFO.address.landmark},<br />
                      {COMPANY_INFO.address.road}, {COMPANY_INFO.address.city},<br />
                      {COMPANY_INFO.address.district}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
                    </p>
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
                    <MessageCircle className="w-6 h-6 fill-current" />
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

            {/* Right: Working Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Maps Integration (Sultan Bathery Location) */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3.5 py-1.5 rounded-full inline-block mb-2">
              Visit Our Center
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
              Our Location in Sultan Bathery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Conveniently located at EKM Building, opposite Municipal Stadium on Mini Bypass, Sultan Bathery, Wayanad.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-card h-96 relative bg-slate-100">
            {/* Embedded Google Map iframe focused on Sultan Bathery Municipal Stadium */}
            <iframe
              title="SRV ENTERPRISES Sultan Bathery Location"
              src="https://maps.google.com/maps?q=Municipal%20Stadium%20Mini%20Bypass%20Sultan%20Bathery%20Wayanad%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
