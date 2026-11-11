"use client";

import React, { useState } from "react";
import { Eye, ShieldCheck, FileText, CheckCircle2, X, Download } from "lucide-react";

export default function NoticeShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState<"notice" | "card">("notice");

  return (
    <>
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-royal/90 rounded-3xl p-8 sm:p-12 text-white shadow-elevated relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-aqua/20 text-aqua text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-aqua/30">
                  <FileText className="w-4 h-4 shrink-0" />
                  <span>Official Company Documentation</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight">
                  Verified Notice & Official Credentials
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  Every service, brand partnership, and specification on this website is authenticated by SRV ENTERPRISES’ official company documentation, notice, and registered visiting card.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-aqua shrink-0" />
                    <span>Free water testing & problem diagnosis</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-aqua shrink-0" />
                    <span>Multi-brand purifier repair & maintenance</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-aqua shrink-0" />
                    <span>GSTIN: 32BTWJP14566QIZP Registered</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-aqua shrink-0" />
                    <span>Sulthan Bathery • Mananthavady • Kalpetta • Dubai</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <button
                    onClick={() => {
                      setActiveDoc("notice");
                      setModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2 bg-aqua hover:bg-aqua-light text-navy-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-glow transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Company Notice</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDoc("card");
                      setModalOpen(true);
                    }}
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm border border-white/20 transition-all"
                  >
                    <Eye className="w-4 h-4 text-aqua" />
                    <span>View Official Visiting Card</span>
                  </button>
                </div>
              </div>

              {/* Right: Document Preview Thumbnail */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  onClick={() => {
                    setActiveDoc("card");
                    setModalOpen(true);
                  }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl hover:border-aqua transition-all duration-300 max-w-sm bg-white p-2"
                >
                  <img
                    src="/images/srv-visiting-card.png"
                    alt="Official SRV Enterprises Visiting Card"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/10 transition-colors flex items-center justify-center">
                    <span className="bg-white/95 text-navy font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2 group-hover:scale-110 transition-transform">
                      <Eye className="w-4 h-4 text-royal" /> Expand Visiting Card
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
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveDoc("notice")}
                  className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg transition-all ${
                    activeDoc === "notice"
                      ? "bg-aqua text-navy-950 shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Company Notice & Brochure
                </button>
                <button
                  onClick={() => setActiveDoc("card")}
                  className={`text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg transition-all ${
                    activeDoc === "card"
                      ? "bg-aqua text-navy-950 shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  Official Visiting Card
                </button>
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
                src={
                  activeDoc === "notice"
                    ? "/images/srv-notice-brochure.webp"
                    : "/images/srv-visiting-card.png"
                }
                alt="SRV Enterprises Official Credential Document"
                className="max-w-full h-auto rounded-xl shadow-md border border-slate-300"
              />
            </div>

            <div className="bg-slate-50 p-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 border-t border-slate-200">
              <span>
                Verified Document: SRV ENTERPRISES (GSTIN: 32BTWJP14566QIZP)
              </span>
              <a
                href={
                  activeDoc === "notice"
                    ? "/images/srv-notice-brochure.webp"
                    : "/images/srv-visiting-card.png"
                }
                download={activeDoc === "notice" ? "SRV-Notice.webp" : "SRV-Visiting-Card.png"}
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
