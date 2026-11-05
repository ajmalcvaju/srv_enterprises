"use client";

import React, { useState } from "react";
import { Eye, ShieldCheck, FileText, CheckCircle2, X, Download } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteData";

export default function NoticeShowcase() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-royal/90 rounded-3xl p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-aqua/20 text-aqua text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-aqua/30">
                  <FileText className="w-4 h-4" />
                  <span>Official Company Notice & Document</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
                  Our Verified Service Commitments
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  Every service and capability published on this website is authenticated by SRV ENTERPRISES’ official company documentation and notice.
                  Enjoy 100% chemical-free water purification, free doorstep water diagnostic testing, and comprehensive warranty coverage.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-aqua shrink-0" />
                    <span>Free water testing & problem diagnosis</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-aqua shrink-0" />
                    <span>Multi-brand purifier repair & maintenance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-aqua shrink-0" />
                    <span>Exchange facility available on old units</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-aqua shrink-0" />
                    <span>SS Tank 5-Year Warranty with solar heaters</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-aqua hover:bg-aqua-light text-navy-950 font-bold px-6 py-3 rounded-xl text-sm shadow-glow transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Official Notice Document</span>
                  </button>
                  <span className="text-xs text-slate-400">
                    Authorized EKM Building, Sultan Bathery
                  </span>
                </div>
              </div>

              {/* Right: Document Preview Thumbnail */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  onClick={() => setModalOpen(true)}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl hover:border-aqua transition-all duration-300 max-w-sm"
                >
                  <img
                    src="/images/srv-notice-brochure.webp"
                    alt="Official SRV Enterprises Notice & Brochure"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors flex items-center justify-center">
                    <span className="bg-white/90 text-navy font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2 group-hover:scale-110 transition-transform">
                      <Eye className="w-4 h-4 text-royal" /> Click to Expand Notice
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Modal Viewer for Document */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-navy-950/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="bg-navy p-4 px-6 flex items-center justify-between text-white border-b border-navy-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-aqua" />
                <span className="font-bold text-sm sm:text-base font-heading">
                  Official Notice & Brochure – SRV ENTERPRISES
                </span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-white"
                aria-label="Close document modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto flex justify-center bg-slate-100">
              <img
                src="/images/srv-notice-brochure.webp"
                alt="SRV Enterprises Official Brochure"
                className="max-w-full h-auto rounded-xl shadow-md border border-slate-300"
              />
            </div>

            <div className="bg-slate-50 p-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 border-t border-slate-200">
              <span>
                Source Document: Verified SRV Enterprises Client Quotation & Service Notice
              </span>
              <a
                href="/images/srv-notice-brochure.webp"
                download="SRV-Enterprises-Brochure.webp"
                className="inline-flex items-center gap-1.5 font-bold text-royal hover:underline"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Image</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
