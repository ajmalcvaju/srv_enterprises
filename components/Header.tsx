"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Droplets,
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";

interface HeaderProps {
  onOpenQuote?: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-navy-900 text-slate-300 text-xs py-2 px-4 border-b border-navy-700/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-aqua font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-aqua" />
              <span>10+ Years • 10,000+ Customers (7,500+ Domestic | 2,500+ Commercial)</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <span className="text-slate-400">GSTIN:</span>
              <span className="text-white font-mono font-semibold">{COMPANY_INFO.gstin}</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden xl:flex items-center gap-1.5 text-slate-300 text-[11px]">
              <MapPin className="w-3 h-3 text-aqua" />
              <span>Sulthan Bathery • Mananthavady • Kalpetta • Dubai</span>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-aqua transition-colors text-white font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-aqua" />
              <span>{COMPANY_INFO.displayPhone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={COMPANY_INFO.crmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-aqua transition-colors text-slate-300"
              title="Access SRV Enterprises CRM"
            >
              <span>CRM Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#071C35]/95 backdrop-blur-md shadow-elevated py-3 border-b border-aqua/15"
            : "bg-[#071C35] py-4 border-b border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo from Visiting Card */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white px-3 py-1.5 rounded-xl shadow-md border border-white/20 transition-all group-hover:scale-[1.02] flex items-center justify-center">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="SRV ENTERPRISES - Sales & Service"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-black tracking-wide text-white uppercase font-heading">
                SRV ENTERPRISES
              </span>
              <span className="text-[10px] text-aqua tracking-wider uppercase font-semibold">
                Sales & Service • Wayanad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-all relative py-1 ${
                    isActive
                      ? "text-aqua"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-royal to-aqua rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold px-5 py-2.5 rounded-lg text-sm shadow-royal hover:shadow-glow transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-navy-950" />
              <span>Get a Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="sm:hidden text-xs font-bold bg-aqua text-navy-950 px-3 py-1.5 rounded-md"
            >
              Free Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-200 hover:text-white p-2 rounded-lg bg-navy-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-900 border-b border-navy-700 px-4 pt-3 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <div className="bg-navy-800/80 p-3 rounded-lg mb-2 text-xs text-slate-300 flex items-center justify-between">
                <span className="text-aqua font-semibold">10+ Years | 10,000+ Customers</span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-white font-bold flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-aqua" /> Call Us
                </a>
              </div>

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive
                        ? "bg-navy-800 text-aqua font-semibold"
                        : "text-slate-200 hover:bg-navy-800/50 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </Link>
                );
              })}

              <div className="pt-3 border-t border-navy-700 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenQuote) onOpenQuote();
                  }}
                  className="w-full text-center bg-gradient-to-r from-royal to-aqua text-navy-950 font-bold py-2.5 rounded-lg text-sm shadow-royal"
                >
                  Get a Free Quote
                </button>
                <a
                  href={COMPANY_INFO.crmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-navy-800 text-slate-300 hover:text-white py-2 rounded-lg text-xs flex items-center justify-center gap-1.5"
                >
                  <span>SRV Enterprises CRM Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
