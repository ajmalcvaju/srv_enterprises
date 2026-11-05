"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle, PhoneCall } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Water Purifier Installation & Service",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please enter a brief description of your requirement or water problem";
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const generatedTicket = "SRV-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  const sendDirectViaWhatsApp = () => {
    const text = `*New Website Enquiry [#${ticketId || "SRV-WEB"}]*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(
      formData.email || "Not provided"
    )}%0A*Service Required:* ${encodeURIComponent(
      formData.service
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card">
      {isSubmitted ? (
        <div className="py-8 text-center space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-royal bg-royal/10 px-3.5 py-1 rounded-full uppercase tracking-wider">
              Enquiry Reference #{ticketId}
            </span>
            <h3 className="text-2xl font-black text-navy font-heading">
              Thank You, {formData.name}!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your inquiry regarding <strong>{formData.service}</strong> has been logged.
              Our engineering team in Sultan Bathery will review your details and contact you at{" "}
              <strong>{formData.phone}</strong> shortly.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
            <div>
              <span className="font-bold text-slate-900">Assigned Branch:</span> Sultan Bathery (Mini Bypass, Wayanad)
            </div>
            <div>
              <span className="font-bold text-slate-900">Direct Helpline:</span>{" "}
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-royal font-bold">
                {COMPANY_INFO.displayPhone}
              </a>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={sendDirectViaWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Forward Reference to WhatsApp Now</span>
            </button>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  service: "Water Purifier Installation & Service",
                  message: "",
                });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-5 rounded-xl text-sm transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="mb-2">
            <h3 className="text-xl sm:text-2xl font-black text-navy font-heading">
              Send an Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Have questions about RO purifiers, water treatment plants, or need a free water test? Fill in the form below.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Anand Kumar / Dr. George"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                errors.name
                  ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                  : "border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
              </p>
            )}
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                placeholder="+91 85938 82776"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: "" });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  errors.phone
                    ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                    : "border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  errors.email
                    ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                    : "border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Product / Service Dropdown */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Product or Service Category *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-sm outline-none bg-white transition-all"
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
              <option value="Whole-House Iron Removal / Hardness Filter">
                Whole-House Iron Removal / Hardness Filter
              </option>
              <option value="Water Purifier Repair, Filter Service or AMC">
                Water Purifier Repair, Filter Service or AMC
              </option>
              <option value="Free Water Testing & Purity Consultation">
                Free Water Testing & Purity Consultation
              </option>
              <option value="Solar Water Heater with SS Tank (5-Yr Warranty Offer)">
                Solar Water Heater with SS Tank (5-Yr Warranty Offer)
              </option>
              <option value="Rooftop Solar Power System (On-Grid / Off-Grid)">
                Rooftop Solar Power System (On-Grid / Off-Grid)
              </option>
              <option value="24/7 CCTV Camera Surveillance Package">
                24/7 CCTV Camera Surveillance Package
              </option>
              <option value="Inverter & Heavy-Duty Tubular Battery Backup">
                Inverter &amp; Heavy-Duty Tubular Battery Backup
              </option>
              <option value="Auto-Clean Kitchen Chimney & Gas Hob">
                Auto-Clean Kitchen Chimney &amp; Gas Hob
              </option>
              <option value="Food-Grade SS Water Tank & Copper Piping">
                Food-Grade SS Water Tank &amp; Copper Piping
              </option>
            </select>
          </div>

          {/* Message / Water Problem Description */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Message or Water Problem Details *
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your requirement (e.g. water is reddish, salty, borewell hardness, purifier model preference, or installation schedule)..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none ${
                errors.message
                  ? "border-rose-400 bg-rose-50/30 focus:border-rose-500"
                  : "border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold py-3.5 px-6 rounded-xl text-sm shadow-royal hover:shadow-glow transition-all"
            >
              <Send className="w-4 h-4 text-navy-950" />
              <span>Submit Enquiry</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20SRV%20ENTERPRISES,%20I%20want%20to%20enquire%20about%20your%20products%20and%20water%20treatment%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-5 rounded-xl text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="text-[11px] text-slate-500 text-center pt-2">
            We respect your privacy. No spam. You will be contacted directly by our certified technicians from Sultan Bathery.
          </div>
        </form>
      )}
    </div>
  );
}
