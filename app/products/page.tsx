"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Droplets,
  Cpu,
  Sun,
  Shield,
  Zap,
  Wind,
  Box,
  X,
  Sparkles,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import BrandShowcase from "@/components/BrandShowcase";
import { PRODUCTS } from "@/data/siteData";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Solutions", icon: Sparkles, count: PRODUCTS.length },
    {
      id: "purifiers",
      label: "Water Purifiers",
      icon: Droplets,
      isPrimary: true,
      count: PRODUCTS.filter((p) => p.category === "purifiers").length,
    },
    {
      id: "plants",
      label: "Water Treatment Plants",
      icon: Cpu,
      isPrimary: true,
      count: PRODUCTS.filter((p) => p.category === "plants").length,
    },
    {
      id: "solar",
      label: "Solar Panels & Heaters",
      icon: Sun,
      count: PRODUCTS.filter((p) => p.category === "solar").length,
    },
    {
      id: "cctv",
      label: "CCTV Cameras",
      icon: Shield,
      count: PRODUCTS.filter((p) => p.category === "cctv").length,
    },
    {
      id: "inverters",
      label: "Inverters & Batteries",
      icon: Zap,
      count: PRODUCTS.filter((p) => p.category === "inverters").length,
    },
    {
      id: "chimneys",
      label: "Electric Chimneys",
      icon: Wind,
      count: PRODUCTS.filter((p) => p.category === "chimneys").length,
    },
    {
      id: "tanks",
      label: "SS Water Tanks",
      icon: Box,
      count: PRODUCTS.filter((p) => p.category === "tanks").length,
    },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative bg-navy py-8 sm:py-10 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-aqua/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-aqua/30 text-aqua text-xs sm:text-sm font-semibold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-aqua" />
            <span>Authorized Product Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight">
            Complete Engineering &amp; Technology Catalog
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            Certified Water Purifiers, Industrial Treatment Plants, Solar Water Heaters, Solar Power Plants, 24/7 CCTV Surveillance, Power Inverters, and Auto-Clean Kitchen Chimneys &amp; Hobs.
          </p>
        </div>
      </section>

      {/* 2. Interactive Search & Category Filter Navigation */}
      <section className="relative bg-white border-b border-slate-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Top Row: Search input */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products by model or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-royal focus:ring-2 focus:ring-royal/20 text-xs sm:text-sm outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs text-slate-500 font-semibold flex items-center gap-2">
              <span>Showing {filteredProducts.length} items</span>
              <span className="text-slate-300">|</span>
              <span className="text-royal font-bold">10,000+ Installations</span>
            </div>
          </div>

          {/* Category Tabs: Primary Categories Styled Prominently */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? cat.isPrimary
                        ? "bg-navy text-aqua shadow-md border-2 border-aqua"
                        : "bg-royal text-white shadow-md"
                      : cat.isPrimary
                      ? "bg-slate-100 hover:bg-slate-200 text-navy border border-slate-300"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Product Catalog Grid */}
      <section className="py-16 bg-surface-light min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
              <Droplets className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-navy">No products matched your search</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Try searching for another keyword or clear your filter to view all categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2 rounded-xl bg-royal text-white text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3.5 Official Brand Partners Showcase */}
      <BrandShowcase />
    </div>
  );
}
