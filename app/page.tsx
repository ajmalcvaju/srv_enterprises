import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Droplets,
  Cpu,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  Settings,
  HelpCircle,
  Layers,
  Wrench,
  Star,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import MainCategories from "@/components/MainCategories";
import WaterTroubleshooter from "@/components/WaterTroubleshooter";
import NoticeShowcase from "@/components/NoticeShowcase";
import ProductCard from "@/components/ProductCard";
import BrandShowcase from "@/components/BrandShowcase";
import {
  COMPANY_INFO,
  PRODUCTS,
  SERVICES,
  TESTIMONIALS,
} from "@/data/siteData";

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.isPrimary);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section - 5-Slide Carousel */}
      <HeroCarousel />

      {/* 2. Trust and Achievement Section - 10+ Years & 10,000+ Customers */}
      <StatsSection />

      {/* 2.5 Official Product Brand Logos from Visiting Card */}
      <BrandShowcase />

      {/* 3. Core Engineering & Product Divisions */}
      <MainCategories />

      {/* 4. Featured Multi-Division Systems Showcase */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3 py-1 rounded-full inline-block mb-3">
                Flagship Engineering Systems
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
                Featured Systems Across All Divisions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Water Purifiers, Treatment Plants, Solar Water Heaters, Solar Power, 24/7 CCTV, Power Inverters, Chimneys &amp; SS Tanks installed with certified engineering expertise.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-royal hover:text-navy font-bold text-sm transition-colors shrink-0"
            >
              <span>Explore Complete Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Prompt banner to see more */}
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-navy hover:bg-royal text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
            >
              <span>View All Products in Full Catalog</span>
              <ArrowRight className="w-4 h-4 text-aqua" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Water Troubleshooter (Symptom-to-Solution Diagnostic) */}
      <WaterTroubleshooter />

      {/* 6. Why Choose SRV ENTERPRISES? */}
      <section className="py-20 bg-surface-light border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              The SRV Difference
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight">
              Why Choose SRV ENTERPRISES?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              For over a decade, we have built a reputation across Kerala founded on technical precision, honest diagnostics, and long-term customer trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-royal" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading mb-2">
                10+ Years of Experience
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A decade of continuous engineering in high-TDS filtration, whole-house water plants, and precision home installations ensures reliable results.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-aqua/20 text-aqua-dark flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-aqua-dark" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading mb-2">
                10,000+ Satisfied Customers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Trusted by <strong>7,500+ domestic households</strong> for pure drinking water and <strong>2,500+ commercial clients</strong> (resorts, hotels, hospitals & institutions) across Kerala.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading mb-2">
                Quality Products & Parts
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We supply genuine, certified filtration membranes, food-grade storage vessels, and leading brand security and solar systems with full warranties.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading mb-2">
                100% Chemical-Free Water
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                As stated in our company notice, our water treatment plants purify your water naturally without harmful chemical additives.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading mb-2">
                Professional Doorstep Service
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Expert technicians trained in precision granite core-cutting, plumbing pressure testing, multi-brand purifier repairs, and rapid breakdown response.
              </p>
            </div>

            {/* Reason 6 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading mb-2">
                Customer-Focused Support
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Free water testing, transparent diagnostic reports, dedicated AMC plans, and an easy exchange facility for old purifiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-slate-200">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3 py-1 rounded-full inline-block mb-3">
                Expert Technical Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
                Our Engineering & Installation Services
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Certified water treatment, CCTV surveillance, solar energy, inverter wiring, and kitchen chimney installation by certified technicians.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-royal hover:text-navy font-bold text-sm mt-4 md:mt-0 transition-colors shrink-0"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="rounded-3xl p-8 bg-surface-light border border-slate-200/90 hover:border-royal/50 hover:bg-white shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-royal bg-royal/10 px-3 py-1 rounded-full uppercase">
                      {service.highlight}
                    </span>
                    <Wrench className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-xl font-bold text-navy font-heading mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center text-xs font-bold text-royal hover:text-navy gap-1.5 pt-4 border-t border-slate-200"
                >
                  <span>Learn more about service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Official Notice Showcase */}
      <NoticeShowcase />

      {/* 9. Client Reviews */}
      <section className="py-20 bg-surface-light border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Customer Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Backed by Over 10,000+ Satisfied Customers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              See what homeowners, resorts, and businesses across Kerala say about our water solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-navy">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                  <span className="text-[10px] font-semibold text-royal bg-royal/10 px-2.5 py-1 rounded-full">
                    {t.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Premium CTA Section (Exact copy as requested in prompt) */}
      <section className="py-20 bg-gradient-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-aqua/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-aqua/30 text-aqua text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-aqua" />
            <span>10+ Years of Experience | 10,000+ Customers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading leading-tight tracking-tight">
            Let&apos;s Find the Right Water Solution for You.
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            With 10+ years of experience and 10,000+ customers, SRV ENTERPRISES is ready to help you find the right solution.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20SRV%20ENTERPRISES,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20a%20water%20solution.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold px-8 py-4 rounded-xl text-sm sm:text-base shadow-royal hover:shadow-glow transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Get a Free Quote</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all hover:border-aqua/50"
            >
              <Phone className="w-4 h-4 text-aqua" />
              <span>Contact Us</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300">
            Head Office: {COMPANY_INFO.address.building}, {COMPANY_INFO.address.landmark}, {COMPANY_INFO.address.road}, {COMPANY_INFO.address.city} | Helpline: {COMPANY_INFO.displayPhone}
          </div>
        </div>
      </section>
    </div>
  );
}
