"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Features() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const featureGroups = [
    {
      groupTitle: "SYNC_ADAPTERS",
      groupCode: "GRP_01",
      features: [
        {
          id: "01-A",
          title: "INSTAGRAM API INTEGRATION",
          desc: "Connects securely via browser cookie session to fetch your saved posts and collections directly from Instagram APIs. Perform incremental or full sync updates in one click.",
          status: "STABLE",
        },
        {
          id: "01-B",
          title: "PINTEREST & TWITTER SCRAPERS",
          desc: "DOM-scraping engine that initiates page auto-scroll on Pinterest and Twitter/X bookmark pages to capture image URLs, author metadata, and links, bypassing strict API limits.",
          status: "STABLE",
        },
        {
          id: "01-C",
          title: "WEB CLIPPER FAB & CONTEXT MENU",
          desc: "A floating action button (FAB) and context menu shortcut injected on all browser pages to let you manually clip, tag, and file any web content or image to your vault in milliseconds.",
          status: "STABLE",
        },
      ],
    },
    {
      groupTitle: "SEARCH_ENGINE",
      groupCode: "GRP_02",
      features: [
        {
          id: "02-A",
          title: "NEURAL CAPTION FILTERING",
          desc: "Locate posts instantly by caption text, author name, handle, or specific keywords. Query is processed client-side with immediate rendering.",
          status: "OPTIMIZED",
        },
        {
          id: "02-B",
          title: "UNIFIED COLLECTION CLASSIFIER",
          desc: "Create, rename, and assign posts to custom collections. A single post can reside in multiple tags or collections, unlike standard social platform limits.",
          status: "OPTIMIZED",
        },
        {
          id: "02-C",
          title: "VISUAL PREVIEW OVERLAYS",
          desc: "Full-resolution media inspection with embedded media viewers for image carousels, video reels, and external links directly within the unified dashboard.",
          status: "STABLE",
        },
      ],
    },
    {
      groupTitle: "DATA_SECURITY",
      groupCode: "GRP_03",
      features: [
        {
          id: "03-A",
          title: "AES-256 PASSCODE LOCK",
          desc: "Secure sensitive collections or private content bookmarks behind a local 4-digit PIN. Encryption keys are generated client-side and never shared.",
          status: "HARDENED",
        },
        {
          id: "03-B",
          title: "LOCAL-FIRST DEXIE.JS STORAGE",
          desc: "All bookmark details, author metadata, and local tags are stored inside the browser's IndexedDB. Provides lightning-fast offline search operations.",
          status: "LOCAL_ONLY",
        },
        {
          id: "03-C",
          title: "EXPORT / IMPORT BACKUPS",
          desc: "Total ownership of your curated feeds. Export all records, notes, categories, and sync parameters into a single, structured JSON backup file.",
          status: "STABLE",
        },
      ],
    },
  ];

  return (
    <main
      className={`relative min-h-screen w-full bg-black text-[#ff1919] transition-opacity duration-700 overflow-x-hidden ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Global overlays */}
      <div className="noise" />
      <div className="scanlines" />

      {/* ════════════════════════════════════════════════════
          NAV BAR — Thin hairline strip
          ════════════════════════════════════════════════════ */}
      <motion.nav
        className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-sm border-b border-[#ff1919]/20"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-2xl text-[#ff1919] tracking-wider hover:opacity-80 transition-opacity"
            >
              MINDVAULT
            </Link>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-1 font-mono text-[10px] tracking-widest text-[#ff1919]/40 uppercase">
            <span>{Math.round(mousePos.x).toString().padStart(4, "0")}</span>
            <span>×</span>
            <span>{Math.round(mousePos.y).toString().padStart(4, "0")}</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.2em] text-[#ff1919]/60 uppercase">
            <Link href="/" className="hover:text-[#ff1919] transition-colors">
              &lt;_HOME
            </Link>
            <Link
              href="/about"
              className="hover:text-[#ff1919] transition-colors"
            >
              ABOUT
            </Link>
            <span className="font-mono text-[10px] tracking-widest text-[#ff1919]/30">
              V2.0.1
            </span>
          </div>
        </div>
      </motion.nav>

      {/* ════════════════════════════════════════════════════
          HERO HEADER
          ════════════════════════════════════════════════════ */}
      <section className="relative w-full py-16 lg:py-20 border-b border-[#ff1919]/20 flex flex-col items-center">
        {/* Horizontal & Vertical grid hairlines */}
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="w-[1px] h-full bg-[#ff1919]/5" />
        </div>

        <div className="relative z-10 w-full max-w-5xl px-6">
          <div className="font-mono text-[9px] tracking-[0.4em] text-[#ff1919]/40 uppercase mb-4">
            MANIFEST_SYSTEM_CAPABILITIES
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[10vw] lg:text-[7vw] leading-[0.85] tracking-wider text-[#ff1919] mb-6">
            CORE PROTOCOLS
          </h1>

          <p className="font-sans text-xs leading-7 text-[#ff1919]/50 max-w-lg mb-12">
            MindVault features a modular design separating capture agents, client-side indexing, and data presentation. Review the detailed protocol specifications below.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          DETAILED FEATURES GROUPS
          ════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-black text-[#ff1919]">
        {featureGroups.map((group, groupIdx) => (
          <div key={group.groupTitle} className="border-b border-[#ff1919]/15">
            {/* Group Header bar */}
            <div className="w-full border-b border-[#ff1919]/10 px-6 py-4 flex items-center justify-between bg-black/40">
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/50 uppercase">
                {group.groupCode} // {group.groupTitle}
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/30 uppercase">
                ACTIVE_SYSTEM_MODULE
              </span>
            </div>

            {/* Feature Sub-grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {group.features.map((feature, featureIdx) => (
                <div
                  key={feature.id}
                  className={`relative p-8 lg:p-10 border-b lg:border-b-0 ${
                    featureIdx < 2 ? "lg:border-r" : ""
                  } border-[#ff1919]/10 group hover:bg-[#ff1919]/[0.03] transition-all duration-500`}
                >
                  {/* Glowing corner indicator */}
                  <div className="absolute top-4 right-4 font-mono text-[8px] border border-[#ff1919]/20 px-1.5 py-0.5 text-[#ff1919]/40 group-hover:text-[#ff1919] group-hover:border-[#ff1919]/50 transition-colors">
                    {feature.status}
                  </div>

                  <div className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/30 uppercase mb-6">
                    [{feature.id}]
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-3xl leading-[1.1] tracking-wider text-[#ff1919] mb-4">
                    {feature.title}
                  </h3>

                  <p className="font-sans text-xs leading-7 text-[#ff1919]/50 group-hover:text-[#ff1919]/70 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ════════════════════════════════════════════════════
          CTA SECTION
          ════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 bg-black text-[#ff1919] text-center border-t border-[#ff1919]/10">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-6xl tracking-wider mb-6">
            DEPLOY INSTANTLY
          </h2>
          <p className="font-sans text-xs leading-7 text-[#ff1919]/50 mb-10">
            Securely index, search, and manage your visual data. Connect the extension and take absolute control.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1_HFCxh_fqrBX7o1bV_xNea7qpXMzhGXX?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#ff1919] bg-[#ff1919] text-black px-12 py-4 font-mono text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-[#ff1919] font-bold text-center"
          >
            &gt;_DOWNLOAD_EXTENSION
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════════ */}
      <footer className="w-full bg-black border-t border-[#ff1919]/20 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/30 uppercase">
          MINDVAULT © 2026 // SYSTEM MODULES
        </span>
        <div className="flex gap-6 font-mono text-[9px] tracking-[0.2em] text-[#ff1919]/40 uppercase">
          <Link href="/" className="hover:text-[#ff1919]">
            HOME
          </Link>
          <Link href="/about" className="hover:text-[#ff1919]">
            ABOUT
          </Link>
        </div>
      </footer>
    </main>
  );
}
