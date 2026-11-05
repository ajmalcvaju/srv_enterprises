import React from "react";
import Link from "next/link";
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO, SUPPORTED_BRANDS } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#040F1E] text-slate-300 pt-16 pb-8 border-t border-navy-700/60 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-aqua/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Achievement Banner */}
        <div className="bg-gradient-to-r from-navy-800 to-navy-700 border border-navy-600/60 rounded-2xl p-6 sm:p-8 mb-16 shadow-elevated">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-aqua/10 border border-aqua/30 flex items-center justify-center shrink-0">
                <Award className="w-7 h-7 text-aqua" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  10+ Years
                </div>
                <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold">
                  Field Engineering Experience
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-royal/20 border border-royal/40 flex items-center justify-center shrink-0">
                <Users className="w-7 h-7 text-aqua" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  10,000+
                </div>
                <div className="text-xs text-slate-300 font-semibold">
                  Trusted Customers
                </div>
                <div className="text-[11px] text-aqua">
                  7,500+ Domestic | 2,500+ Commercial
                </div>
              </div>
            </div>

            <div className="flex items-center md:justify-end">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20SRV%20ENTERPRISES,%20I%20would%20like%20to%20get%20a%20free%20water%20consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold px-6 py-3 rounded-xl text-sm shadow-royal hover:shadow-glow transition-all"
              >
                <span>Book Free Water Consultation</span>
                <CheckCircle2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal to-aqua flex items-center justify-center text-white shadow-royal">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white font-heading">
                  SRV <span className="text-aqua">ENTERPRISES</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                  {COMPANY_INFO.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              With <strong>10+ Years of Experience</strong> and over <strong>10,000+ Satisfied Customers</strong> (comprising <strong>7,500+ domestic</strong> households and <strong>2,500+ commercial</strong> installations),
              SRV ENTERPRISES delivers industry-leading domestic & commercial water purification,
              heavy-duty water treatment plants (WTP/RO), solar systems, and allied modern living installations.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-xs bg-navy-800/80 text-aqua px-3 py-1 rounded-full border border-navy-700">
                <ShieldCheck className="w-3.5 h-3.5" /> 10+ Years Experience
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-navy-800/80 text-aqua px-3 py-1 rounded-full border border-navy-700">
                <Users className="w-3.5 h-3.5" /> 10,000+ Customers
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-navy-800/80 text-slate-300 px-3 py-1 rounded-full border border-navy-700">
                Free Water Testing
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-aqua pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-aqua transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-aqua transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-aqua transition-colors">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-aqua transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-aqua transition-colors">
                  Contact & Location
                </Link>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.crmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-aqua transition-colors inline-flex items-center gap-1 text-aqua"
                >
                  <span>Company CRM</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Core Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-aqua pl-2">
              Key Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/products?category=purifiers"
                  className="hover:text-aqua transition-colors text-slate-200 font-medium"
                >
                  Domestic Water Purifiers
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=plants"
                  className="hover:text-aqua transition-colors text-slate-200 font-medium"
                >
                  Water Treatment Plants (WTP)
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=plants"
                  className="hover:text-aqua transition-colors"
                >
                  Industrial & Commercial RO
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=solar"
                  className="hover:text-aqua transition-colors"
                >
                  Solar Panels & Water Heaters
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=cctv"
                  className="hover:text-aqua transition-colors"
                >
                  CCTV Surveillance Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=inverters"
                  className="hover:text-aqua transition-colors"
                >
                  Inverters, Chimneys & SS Tanks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-aqua pl-2">
              Head Office
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-aqua shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {COMPANY_INFO.address.building}, {COMPANY_INFO.address.landmark}, {COMPANY_INFO.address.road}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.district}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-aqua shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-aqua transition-colors font-medium text-white text-xs"
                >
                  {COMPANY_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-aqua shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-aqua transition-colors text-xs"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-aqua shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-400">
                  {COMPANY_INFO.workingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Supported Brands Bar */}
        <div className="pt-8 pb-10 border-t border-navy-800">
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-4 text-center font-semibold">
            Authorized Sales & Multi-Brand Service Excellence
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {SUPPORTED_BRANDS.map((b) => (
              <span
                key={b.name}
                className="bg-navy-900/90 hover:bg-navy-800 border border-navy-700/60 px-4 py-1.5 rounded-lg text-xs font-semibold text-slate-300 transition-colors"
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} <strong>{COMPANY_INFO.name}</strong>. All rights reserved.
            Authorized Water Purification & Engineering Solutions.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/about" className="hover:text-aqua">About</Link>
            <span>•</span>
            <Link href="/services" className="hover:text-aqua">Services</Link>
            <span>•</span>
            <Link href="/products" className="hover:text-aqua">Products</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-aqua">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
