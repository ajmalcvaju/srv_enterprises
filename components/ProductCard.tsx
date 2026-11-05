"use client";

import React, { useState } from "react";
import { MessageCircle, CheckCircle, Sparkles, ExternalLink, ShieldCheck } from "lucide-react";
import { ProductItem, COMPANY_INFO } from "@/data/siteData";

interface ProductCardProps {
  product: ProductItem;
  onOpenDetails?: (product: ProductItem) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello SRV ENTERPRISES, I am interested in inquiring about the "${product.name}" (${product.categoryLabel}). Please share details and consultation.`
  )}`;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-royal/40 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Product Image Area */}
      <div className="relative h-64 w-full bg-gradient-to-b from-slate-50 to-slate-100/60 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
          <span className="text-[11px] font-bold text-navy bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 shadow-sm">
            {product.categoryLabel}
          </span>
          {product.badge && (
            <span className="text-[10px] font-extrabold text-white bg-royal px-2.5 py-0.5 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
          loading="lazy"
        />
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="text-xs text-royal font-semibold tracking-wide uppercase">
            {product.tagline}
          </div>

          <h3 className="text-lg font-bold text-navy font-heading group-hover:text-royal transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Suitable for badge */}
          <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
            <span className="font-semibold text-slate-700">Suitable for:</span>
            <span>{product.suitableFor}</span>
          </div>

          {/* Features Highlights */}
          <div className="pt-2 space-y-1.5 border-t border-slate-100">
            {product.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <CheckCircle className="w-3.5 h-3.5 text-royal shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: WhatsApp Enquiry */}
        <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Enquire Now</span>
          </a>

          {onOpenDetails && (
            <button
              onClick={() => onOpenDetails(product)}
              className="p-3 rounded-xl border border-slate-200 text-slate-600 hover:text-royal hover:border-royal transition-colors"
              title="View Specifications"
              aria-label="View specifications"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
