"use client";

import React from "react";
import { MessageCircle, CheckCircle2, ExternalLink } from "lucide-react";
import { ProductItem, COMPANY_INFO } from "@/data/siteData";

interface ProductCardProps {
  product: ProductItem;
  onOpenDetails?: (product: ProductItem) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello SRV ENTERPRISES, I am interested in inquiring about "${product.name}" (${product.categoryLabel}). Please share details and consultation.`
  )}`;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-royal/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1">
      {/* Product Image Stage */}
      <div className="relative h-64 sm:h-72 w-full bg-gradient-to-b from-slate-50 via-slate-50/60 to-white p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start max-w-[80%]">
          <span className="text-[11px] font-bold text-navy bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 shadow-xs">
            {product.categoryLabel}
          </span>
          {product.badge && (
            <span className="text-[10px] font-extrabold text-white bg-royal px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wide">
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

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Tagline */}
        <div className="text-[11px] text-royal font-extrabold tracking-wider uppercase line-clamp-1 mb-1.5">
          {product.tagline}
        </div>

        {/* Product Title - Fixed min-height ensures aligned baseline across row */}
        <h3 className="text-lg sm:text-xl font-black text-navy font-heading group-hover:text-royal transition-colors leading-snug line-clamp-2 min-h-[3.25rem] mb-2">
          {product.name}
        </h3>

        {/* Description - Fixed min-height ensures features start at same level */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 min-h-[2.5rem] leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Suitable For Pill Box */}
        <div className="rounded-xl bg-slate-50 border border-slate-100 p-2.5 mb-4 text-xs">
          <span className="font-bold text-navy">Suitable For: </span>
          <span className="text-slate-600 line-clamp-1">{product.suitableFor}</span>
        </div>

        {/* Key Features Highlights (first 3) */}
        <div className="space-y-2 py-3 border-t border-slate-100 mb-2">
          {product.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="line-clamp-1 font-medium">{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Bar (Pinned directly at bottom without extra void) */}
        <div className="pt-4 mt-auto border-t border-slate-100 flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            title="Enquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Enquire Now</span>
          </a>

          {onOpenDetails && (
            <button
              onClick={() => onOpenDetails(product)}
              className="px-3.5 py-3 rounded-xl border border-slate-200 hover:border-royal bg-slate-50 hover:bg-white text-slate-700 hover:text-royal font-bold text-xs transition-colors flex items-center gap-1.5 shrink-0"
              title="View Specifications"
              aria-label="View specifications"
            >
              <span>Specs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
