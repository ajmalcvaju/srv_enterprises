"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Video,
  Award,
} from "lucide-react";

interface MediaItem {
  id: string;
  type: "photo" | "video";
  badge: string;
  badgeColor: string;
  duration?: string;
  headline: string;
  description: string;
  mediaSrc: string;
  posterSrc?: string;
  tags: string[];
}

const SHOWCASE_ITEMS: MediaItem[] = [
  {
    id: "photo-waterman",
    type: "photo",
    badge: "Verified Client Handover",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    headline: "Happy Homeowners with Waterman Filtration System",
    description:
      "A complete domestic water purification setup featuring Waterman RO+Alkaline unit and high-capacity iron-removal filtration cylinder, backed by SRV certified warranty.",
    mediaSrc: "/images/company_showcase_photo.jpg",
    tags: ["Domestic RO + UV", "Iron Removal Filter", "Certified Installation"],
  },
  {
    id: "video-site-walkthrough",
    type: "video",
    badge: "Live Site Demo",
    badgeColor: "bg-royal/30 text-aqua border-aqua/30",
    duration: "14s",
    headline: "On-Site System Assembly & Pressure Calibration",
    description:
      "Watch our technician inspect and calibrate the multi-stage filter connections, demonstrating tight sealing, dual pressure gauges, and leak-free industrial finish.",
    mediaSrc: "/videos/company_showcase_1.mp4",
    posterSrc: "/videos/company_showcase_1_poster.jpg",
    tags: ["Engineering Precision", "Leak-Proof Fittings", "14s Reel"],
  },
  {
    id: "video-customer-experience",
    type: "video",
    badge: "Client Story & Demo",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    duration: "57s",
    headline: "Real Customer Feedback & System Demonstration",
    description:
      "Firsthand walkthrough demonstrating daily water quality improvement, crystal-clear output, and dependable post-installation maintenance service.",
    mediaSrc: "/videos/company_showcase_2.mp4",
    posterSrc: "/videos/company_showcase_2_poster.jpg",
    tags: ["Real Client Review", "Full Demonstration", "57s Story"],
  },
];

export default function CompanyShowcase() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideoId === id) {
      video.pause();
      setPlayingVideoId(null);
    } else {
      // Pause any other playing video
      Object.keys(videoRefs.current).forEach((key) => {
        if (key !== id && videoRefs.current[key]) {
          videoRefs.current[key]?.pause();
        }
      });
      video.play().catch(() => {});
      setPlayingVideoId(id);
    }
  };

  const toggleMute = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-navy-950 via-navy to-navy-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-royal/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-aqua/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-aqua/30 text-aqua text-xs sm:text-sm font-semibold tracking-wide mb-4">
              <Sparkles className="w-4 h-4 text-aqua animate-pulse" />
              <span>Real Company Footage &amp; Customer Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight leading-tight">
              Real Installations. Authentic Customer Trust.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Step into real homes and project sites across Kerala. See our certified technicians installing, calibrating, and handing over Waterman &amp; SRV water purification and filtration systems.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-royal to-aqua hover:from-royal-light hover:to-aqua-light text-navy-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-glow hover:shadow-royal shrink-0 self-start md:self-end"
          >
            <span>Book Your Free Site Survey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-Card Media Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOWCASE_ITEMS.map((item) => {
            const isPlaying = playingVideoId === item.id;

            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-white/[0.04] border border-white/10 hover:border-aqua/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-glow flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative aspect-[9/12] sm:aspect-[9/13] w-full bg-navy-950 overflow-hidden">
                  {item.type === "photo" ? (
                    <div className="relative w-full h-full">
                      <img
                        src={item.mediaSrc}
                        alt={item.headline}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      {/* Photo Overlay Badge */}
                      <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border bg-black/50 text-white border-white/20">
                        <Award className="w-3.5 h-3.5 text-aqua" />
                        <span>Client Handover</span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <video
                        ref={(el) => {
                          videoRefs.current[item.id] = el;
                        }}
                        src={item.mediaSrc}
                        poster={item.posterSrc}
                        playsInline
                        preload="metadata"
                        muted={isMuted}
                        loop
                        onEnded={() => setPlayingVideoId(null)}
                        className="object-cover w-full h-full"
                        onClick={() => togglePlay(item.id)}
                      />

                      {/* Video Overlay Badge */}
                      <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border bg-black/60 text-white border-white/20 pointer-events-none">
                        <Video className="w-3.5 h-3.5 text-aqua" />
                        <span>{item.duration ? `Video • ${item.duration}` : "Video Reel"}</span>
                      </div>

                      {/* Play/Pause Central Floating Button */}
                      <button
                        onClick={() => togglePlay(item.id)}
                        className={`absolute z-20 p-4 sm:p-5 rounded-full bg-navy-950/80 hover:bg-royal text-white border border-white/20 backdrop-blur-md transition-all transform hover:scale-110 shadow-elevated ${
                          isPlaying ? "opacity-0 hover:opacity-100" : "opacity-95"
                        }`}
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 h-6 fill-current" />
                        ) : (
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        )}
                      </button>

                      {/* Mini Video Controls Bar */}
                      {isPlaying && (
                        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-2 bg-navy-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                          <button
                            onClick={(e) => toggleMute(e, item.id)}
                            className="text-slate-300 hover:text-white transition-colors"
                            aria-label={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? (
                              <VolumeX className="w-4 h-4" />
                            ) : (
                              <Volume2 className="w-4 h-4" />
                            )}
                          </button>
                          <button
                            onClick={(e) => handleFullscreen(e, item.id)}
                            className="text-slate-300 hover:text-white transition-colors"
                            aria-label="Fullscreen"
                          >
                            <Maximize2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Gradient Shade for Title legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent pointer-events-none" />
                </div>

                {/* Content Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border inline-block ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                      {item.headline}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Feature Pills */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-white/5 text-slate-300 border border-white/10 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-royal/20 text-aqua flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-aqua" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Certified Engineers on Every Installation
              </div>
              <div className="text-xs text-slate-400">
                10+ Years Experience • 10,000+ Satisfied Customers across Palakkad &amp; Kerala
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-aqua font-semibold">
            <CheckCircle2 className="w-4 h-4 text-aqua" />
            <span>Official Waterman Sales &amp; Service Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
