"use client";

import React, { useState } from "react";
import { X, Sparkles, Phone, CheckCircle2, Send, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProductOrService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  defaultProductOrService = "Domestic Water Purifier",
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    requirement: defaultProductOrService,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send via WhatsApp directly with formatted quote request
    const message = `*Free Quote Request - SRV ENTERPRISES*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Location:* ${encodeURIComponent(
      formData.location || "Wayanad"
    )}%0A*Requirement:* ${encodeURIComponent(
      formData.requirement
    )}%0A*Notes:* ${encodeURIComponent(formData.notes || "None")}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`;
    setSubmitted(true);

    setTimeout(() => {
      window.open(url, "_blank");
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-elevated border border-slate-200 z-10 animate-fade-in overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-navy font-heading">
              Quote Request Generated!
            </h3>
            <p className="text-sm text-slate-600">
              Connecting you with our technical advisor on WhatsApp for immediate pricing and free water testing schedule...
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-royal bg-royal/10 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-royal" />
                <span>Zero Obligation Estimate</span>
              </div>
              <h3 className="text-2xl font-black text-navy font-heading">
                Get a Free Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Backed by <strong>10+ Years of Experience</strong> and <strong>10,000+ Customers</strong>.
                We provide prompt estimates and free water quality consultations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma / Dr. K. Mathew"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Town / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sultan Bathery, Kalpetta"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Primary Requirement
                </label>
                <select
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all bg-white"
                >
                  <option value="Domestic Water Purifier (RO+UV+UF)">
                    Domestic Water Purifier (RO+UV+UF)
                  </option>
                  <option value="Commercial RO Plant (250 - 1000 LPH)">
                    Commercial RO Plant (250 - 1000 LPH)
                  </option>
                  <option value="Industrial Water Treatment Plant (WTP)">
                    Industrial Water Treatment Plant (WTP)
                  </option>
                  <option value="Whole-House Iron / Hardness Filter">
                    Whole-House Iron / Hardness Filter
                  </option>
                  <option value="Multi-Brand Purifier Repair / AMC">
                    Multi-Brand Purifier Repair / AMC
                  </option>
                  <option value="Solar Water Heater with SS Tank">
                    Solar Water Heater with SS Tank
                  </option>
                  <option value="CCTV Security Camera Setup">
                    CCTV Security Camera Setup
                  </option>
                  <option value="Inverter, Electric Chimney or Allied Service">
                    Inverter, Electric Chimney or Allied Service
                  </option>
                  <option value="Free Water Testing Request">
                    Free Water Quality Testing Request
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Water Symptoms or Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Red iron stains, salty taste, or need pricing for restaurant..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold py-3.5 px-6 rounded-xl text-sm shadow-royal hover:shadow-glow transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Submit & Request Quote on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-600">
                Direct helpline:{" "}
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-royal font-bold hover:underline"
                >
                  {COMPANY_INFO.displayPhone}
                </a>{" "}
                (EKM Building, Sultan Bathery)
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
