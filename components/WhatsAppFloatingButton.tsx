"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hi SRV ENTERPRISES, I would like to enquire about water purification / treatment solutions."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-navy px-3.5 py-2 rounded-2xl shadow-elevated border border-slate-200 text-xs font-semibold animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with SRV Team</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-elevated hover:shadow-glow transition-all transform hover:scale-110"
        aria-label="Chat on WhatsApp with SRV Enterprises"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white" />
      </a>
    </div>
  );
}
