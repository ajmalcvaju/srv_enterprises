import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Award,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductImageGallery from "@/components/ProductImageGallery";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { COMPANY_INFO, PRODUCTS } from "@/data/siteData";

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export function generateMetadata({ params }: ProductDetailsPageProps): Metadata {
  const product = PRODUCTS.find((item) => item.id === params.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | ${product.categoryLabel}`,
    description: `${product.tagline}. ${product.description}`,
    openGraph: {
      title: `${product.name} | SRV ENTERPRISES`,
      description: product.description,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const product = PRODUCTS.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  const sameCategoryProducts = PRODUCTS.filter(
    (item) => item.category === product.category && item.id !== product.id
  );
  const otherProducts = PRODUCTS.filter(
    (item) => item.category !== product.category && item.id !== product.id
  );
  const relatedProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 3);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello SRV ENTERPRISES, I am interested in "${product.name}" (${product.categoryLabel}). Please share technical details, installation information, and schedule a consultation.`
  )}`;

  return (
    <div className="flex flex-col w-full bg-surface-light">
      {/* 1. Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 flex-wrap"
          >
            <Link href="/" className="hover:text-royal font-medium transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link href="/products" className="hover:text-royal font-medium transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-600 font-medium">{product.categoryLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-navy font-bold line-clamp-1">{product.name}</span>
          </nav>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-royal hover:text-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>
      </div>

      {/* 2. Main Product Showcase */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Product Image Stage & Assurance Badges */}
            <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
              <ProductImageGallery
                images={
                  product.galleryImages && product.galleryImages.length > 0
                    ? product.galleryImages
                    : [product.image]
                }
                productName={product.name}
                categoryLabel={product.categoryLabel}
                badge={product.badge}
              />

              {/* Quick Trust Strip */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3 text-center">
                  <Award className="w-5 h-5 text-royal mx-auto mb-1.5" />
                  <div className="text-[11px] sm:text-xs font-extrabold text-navy leading-tight">
                    10+ Years
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Field Expertise</div>
                </div>
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3 text-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
                  <div className="text-[11px] sm:text-xs font-extrabold text-navy leading-tight">
                    Certified Fit
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Warranty Support</div>
                </div>
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3 text-center">
                  <Wrench className="w-5 h-5 text-royal mx-auto mb-1.5" />
                  <div className="text-[11px] sm:text-xs font-extrabold text-navy leading-tight">
                    After-Sales
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Doorstep AMC</div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Specifications & Enquiry Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-royal bg-royal/10 px-3 py-1 rounded-full mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{product.tagline}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy font-heading tracking-tight leading-tight">
                  {product.name}
                </h1>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Ideal Applications / Suitable For */}
              <div className="rounded-2xl bg-sky-50/80 border border-sky-200/80 p-4 sm:p-5">
                <div className="text-xs font-extrabold uppercase tracking-wider text-royal mb-1">
                  Recommended Applications
                </div>
                <p className="text-sm sm:text-base font-bold text-navy">
                  Suitable For: <span className="font-semibold text-slate-700">{product.suitableFor}</span>
                </p>
              </div>

              {/* Complete Features & Engineering Specifications */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
                <h2 className="text-base sm:text-lg font-black text-navy font-heading mb-4">
                  Key Highlights &amp; Engineering Specifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 bg-white rounded-xl border border-slate-200/80 p-3 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Consultation & Enquiry Actions */}
              <div className="pt-2 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3.5 px-6 rounded-xl text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                    <span>Enquire Now on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-royal text-white font-bold py-3.5 px-6 rounded-xl text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Call {COMPANY_INFO.displayPhone}</span>
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 hover:border-royal bg-white hover:bg-slate-50 text-navy hover:text-royal font-bold py-3 px-6 text-xs sm:text-sm transition-colors"
                >
                  <span>Book a Free Site Inspection &amp; Technical Consultation</span>
                </Link>
              </div>

              {/* Regional Support Info */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-royal/10 text-royal flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-navy">
                      Authorized Sales, Installation &amp; Service
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Branches: {COMPANY_INFO.branches.join(" • ")}
                    </div>
                  </div>
                </div>
                <div className="text-[11px] font-semibold text-slate-500 sm:text-right">
                  {COMPANY_INFO.workingHours}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-royal">
                  Explore More Solutions
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-navy font-heading mt-1">
                  Related Systems &amp; Products
                </h2>
              </div>
              <Link
                href="/products"
                className="text-sm font-bold text-royal hover:text-navy transition-colors"
              >
                View Full Product Catalog &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedProducts.map((related) => (
                <ProductCard key={related.id} product={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
