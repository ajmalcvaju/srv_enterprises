"use client";

import React, { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
  categoryLabel: string;
  badge?: string;
}

export default function ProductImageGallery({
  images,
  productName,
  categoryLabel,
  badge,
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] || images[0];

  return (
    <div className="space-y-3">
      <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 p-6 sm:p-10 flex items-center justify-center min-h-[320px] sm:min-h-[420px] shadow-sm overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-bold text-navy bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
            {categoryLabel}
          </span>
          {badge && (
            <span className="text-[11px] font-extrabold text-white bg-royal px-3 py-1 rounded-full shadow-xs uppercase tracking-wide">
              {badge}
            </span>
          )}
        </div>

        <img
          src={activeImage}
          alt={productName}
          className="max-h-[340px] sm:max-h-[380px] w-full object-contain drop-shadow-md transition-opacity duration-200"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2.5">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`h-20 rounded-2xl border p-2 bg-white flex items-center justify-center overflow-hidden transition-all ${
                activeIndex === idx
                  ? "border-royal ring-2 ring-royal/20 shadow-sm"
                  : "border-slate-200 hover:border-slate-300 opacity-75 hover:opacity-100"
              }`}
              aria-label={`View image ${idx + 1} of ${productName}`}
            >
              <img
                src={img}
                alt={`${productName} view ${idx + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
