"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Droplets,
  Cpu,
  Sun,
  Shield,
  Zap,
  Wind,
  Box,
  MessageCircle,
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import BrandShowcase from "@/components/BrandShowcase";
import { PRODUCTS, ProductItem, COMPANY_INFO } from "@/data/siteData";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);

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
      <section className="relative bg-navy py-16 sm:py-20 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-royal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-aqua/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-aqua/30 text-aqua text-xs sm:text-sm font-semibold tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-aqua" />
            <span>Authorized Product Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight">
            Premium Water & Home Technologies
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            Giving maximum priority to domestic purifiers and industrial water treatment plants, complemented by solar heaters, CCTV, inverters, chimneys, and SS tanks.
          </p>
        </div>
      </section>

      {/* 2. Interactive Search & Category Filter Navigation */}
      <section className="bg-white border-b border-slate-200 sticky top-16 sm:top-[73px] z-30 shadow-sm py-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetails={(p) => setModalProduct(p)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3.5 Official Brand Partners Showcase */}
      <BrandShowcase />

      {/* 4. Product Details Modal */}
      {modalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/80 backdrop-blur-sm">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-elevated border border-slate-200 overflow-hidden animate-fade-in">
            <button
              onClick={() => setModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-navy hover:bg-slate-100"
              aria-label="Close details modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="bg-slate-100 p-6 rounded-2xl flex items-center justify-center h-64">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-royal bg-royal/10 px-3 py-1 rounded-full uppercase">
                  {modalProduct.categoryLabel}
                </span>

                <h3 className="text-xl font-black text-navy font-heading">
                  {modalProduct.name}
                </h3>

                <p className="text-xs text-slate-500 font-medium">
                  {modalProduct.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {modalProduct.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <div className="text-xs font-bold text-slate-900">Key Features:</div>
                  {modalProduct.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                      `Hi SRV ENTERPRISES, I would like to inquire about specifications and pricing for "${modalProduct.name}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-5 rounded-xl text-sm transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Enquire on WhatsApp Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
