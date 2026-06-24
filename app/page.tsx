"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BrainModel = dynamic(() => import("@/components/landing/brain-model").then(mod => mod.BrainModel), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-mono text-xs tracking-[0.3em] text-[#ff1919]/50 uppercase animate-pulse">LOADING_SYSTEM...</span>
    </div>
  )
});

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [damageCount, setDamageCount] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  const randomValues = useMemo(() => {
    return "MINDVAULT".split("").map(() => ({
      fallY: 1000 + (Math.random() * 500),
      fallRotate: (Math.random() - 0.5) * 45,
      shakeRotate: (Math.random() - 0.5)
    }));
  }, [damageCount]);

  const handleBrainClick = () => {
    setDamageCount(prev => prev + 1);
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 150);
  };

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className={`relative min-h-screen w-full bg-[#ff1919] transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Global overlays */}
      <div className="noise" />
      <div className="scanlines" />

      {/* ════════════════════════════════════════════════════
          TOP NAV BAR — thin hairline strip
          ════════════════════════════════════════════════════ */}
      <motion.nav 
        className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-sm border-b border-[#ff1919]/20"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="font-[family-name:var(--font-display)] text-2xl text-[#ff1919] tracking-wider">MINDVAULT</span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-1 font-mono text-[10px] tracking-widest text-[#ff1919]/40 uppercase">
            <span>{Math.round(mousePos.x).toString().padStart(4, '0')}</span>
            <span>×</span>
            <span>{Math.round(mousePos.y).toString().padStart(4, '0')}</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.2em] text-[#ff1919]/60 uppercase">
            <Link href="/about" className="hover:text-[#ff1919] transition-colors">ABOUT</Link>
            <Link href="/features" className="hover:text-[#ff1919] transition-colors">FEATURES</Link>
            <span className="font-mono text-[10px] tracking-widest text-[#ff1919]/30">V2.0.1</span>
          </div>
        </div>
      </motion.nav>

      {/* ════════════════════════════════════════════════════
          HERO — Brain as center focal point, text behind
          ════════════════════════════════════════════════════ */}
      <section className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center bg-black border-b border-[#ff1919]/20">
        
        {/* Background text — MINDVAULT behind brain */}
        <div className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden transition-all duration-75 ${isGlitching ? 'opacity-50 scale-[1.02] skew-x-2' : 'opacity-100'}`}>
          <h1 className="flex font-[family-name:var(--font-display)] text-[22vw] leading-[0.85] tracking-[0.04em] text-[#ff1919] whitespace-nowrap select-none">
            {"MINDVAULT".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 0, rotate: 0 }}
                animate={damageCount >= 10 ? { 
                  y: randomValues[i].fallY, 
                  rotate: randomValues[i].fallRotate,
                  transition: { duration: 2, delay: i * 0.05, ease: "circIn" }
                } : damageCount > 5 ? {
                  y: [0, -10, 5, 0],
                  rotate: randomValues[i].shakeRotate * (damageCount - 5),
                  transition: { duration: 0.2 }
                } : {}}
                className={i >= 4 ? "text-transparent" : ""}
                style={i >= 4 ? { WebkitTextStroke: "3px #ff1919" } : {}}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Horizontal + Vertical grid hairlines through center */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[1px] h-full bg-[#ff1919]/10" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-full h-[1px] bg-[#ff1919]/10" />
        </div>

        {/* 3D Brain Model — CENTER, covering ~40% of viewport */}
        <motion.div 
          className="relative z-10 w-[70vw] h-[60vh] min-w-[400px] min-h-[400px] max-w-[900px] max-h-[800px]"
          animate={isGlitching ? { 
            x: [0, -5, 5, -2, 0],
            filter: ["brightness(1)", "brightness(2)", "brightness(0.5)", "brightness(1)"],
            scale: [1, 1.1, 0.9, 1.05, 1]
          } : {}}
          transition={{ duration: 0.15 }}
        >
          <BrainModel onBrainClick={handleBrainClick} />
        </motion.div>

        {/* Bottom center — tagline + CTA */}
        <motion.div 
          className="absolute bottom-16 left-0 right-0 z-20 flex flex-col items-center text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl tracking-wider text-[#ff1919] leading-none mb-2">
            ORGANIZED. SEARCHABLE. VAULTED.
          </p>
          <p className="font-sans text-xs text-[#ff1919]/40 tracking-wide max-w-md mt-3 mb-6">
            Your Instagram saves — centralized, indexed, and retrieved with precision.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1_HFCxh_fqrBX7o1bV_xNea7qpXMzhGXX?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#ff1919]/40 bg-transparent hover:bg-[#ff1919] hover:text-black px-8 py-3 font-mono text-[10px] tracking-[0.2em] text-[#ff1919]/80 transition-all duration-300 uppercase text-center"
          >
            &gt;_INSTALL_EXTENSION
          </a>
        </motion.div>

        {/* Corner technical readouts */}
        <div className="absolute top-20 left-6 z-20 font-mono text-[9px] tracking-[0.2em] text-[#ff1919]/30 uppercase space-y-1">
          <div>STATUS: ACTIVE</div>
          <div>PROTOCOL: AES-256</div>
        </div>
        <div className="absolute top-20 right-6 z-20 font-mono text-[9px] tracking-[0.2em] text-[#ff1919]/30 uppercase text-right space-y-1">
          <div>X:{Math.round(mousePos.x).toString().padStart(4, '0')}</div>
          <div>Y:{Math.round(mousePos.y).toString().padStart(4, '0')}</div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-6 bg-[#ff1919]/30" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FEATURES SECTION — Dark BG, orange text
          ════════════════════════════════════════════════════ */}
      <section id="features" className="relative w-full bg-black text-[#ff1919]">
        {/* Section label bar */}
        <div className="w-full border-b border-[#ff1919]/20 px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/40 uppercase">SECTION_02</span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/40 uppercase">DATA_MANIFEST</span>
        </div>

        {/* Large section heading */}
        <div className="w-full border-b border-[#ff1919]/20 px-6 py-8">
          <h2 className="font-[family-name:var(--font-display)] text-[12vw] lg:text-[8vw] leading-[0.9] tracking-wider text-[#ff1919]">
            EXPLORE<br/>THE CORE
          </h2>
        </div>

        {/* Feature grid — 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {[
            {
              id: "01",
              title: "CENTRALIZED\nSYNC",
              desc: "Merge multiple Instagram profiles into a singular, unified feed. Stop context switching between scattered accounts."
            },
            {
              id: "02",
              title: "NEURAL\nSEARCH",
              desc: "Query any saved post instantly. Filter by date, caption text, or visual similarity — no more mindless scrolling."
            },
            {
              id: "03",
              title: "SECURE\nPROTOCOL",
              desc: "AES-256 encrypted credentials. Your data remains solely on your local machine. No cloud. No compromise."
            }
          ].map((feature, i) => (
            <div
              key={feature.id}
              className={`relative p-8 lg:p-10 border-b lg:border-b-0 ${i < 2 ? 'lg:border-r' : ''} border-[#ff1919]/15 group hover:bg-[#ff1919]/[0.05] transition-all duration-500`}
            >
              <div className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/30 uppercase mb-6">
                [{feature.id}]
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl leading-[1] tracking-wider text-[#ff1919] mb-6 whitespace-pre-line">
                {feature.title}
              </h3>
              <p className="font-sans text-xs leading-7 text-[#ff1919]/50 group-hover:text-[#ff1919]/70 transition-colors max-w-xs">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          HOW IT WORKS — Orange BG, black text  
          ════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#ff1919] text-black">
        {/* Section label bar */}
        <div className="w-full border-b border-black/15 px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.3em] text-black/30 uppercase">SECTION_03</span>
          <span className="font-mono text-[9px] tracking-[0.3em] text-black/30 uppercase">OPERATIONAL_PROTOCOL</span>
        </div>

        <div className="w-full border-b border-black/15 px-6 py-8">
          <h2 className="font-[family-name:var(--font-display)] text-[12vw] lg:text-[8vw] leading-[0.9] tracking-wider text-black">
            THREE STEPS<br/>TO CLARITY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { step: "01", title: "INSTALL", desc: "Add the MindVault Chrome Extension. One click. Zero configuration. Immediate deployment." },
            { step: "02", title: "SYNC", desc: "Connect your Instagram profile. Your saves are instantly indexed, cataloged, and encrypted locally." },
            { step: "03", title: "SEARCH", desc: "Find any saved post in milliseconds. Filter by date, caption, or visual content similarity." }
          ].map((item, i) => (
            <div key={item.step} className={`relative p-8 lg:p-10 border-b md:border-b-0 ${i < 2 ? 'md:border-r' : ''} border-black/15`}>
              {/* Giant background number */}
              <div className="absolute top-2 right-4 font-[family-name:var(--font-display)] text-[15vw] md:text-[8vw] leading-none text-black/[0.06] select-none pointer-events-none">
                {item.step}
              </div>
              <div className="relative z-10">
                <div className="font-mono text-[9px] tracking-[0.4em] text-black/30 uppercase mb-4">STEP_{item.step}</div>
                <h3 className="font-[family-name:var(--font-display)] text-5xl lg:text-6xl tracking-wider text-black mb-4">{item.title}</h3>
                <p className="font-sans text-xs leading-7 text-black/60 max-w-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA — Dark section
          ════════════════════════════════════════════════════ */}
      <section id="about" className="relative w-full bg-black text-[#ff1919] border-t border-[#ff1919]/20">
        <div className="w-full border-b border-[#ff1919]/15 px-6 py-3">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/30 uppercase">SECTION_04</span>
        </div>

        <div className="w-full px-6 py-20 lg:py-28 flex flex-col items-center text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[14vw] lg:text-[10vw] leading-[0.85] tracking-wider text-[#ff1919] mb-8">
            STOP<br/>SCROLLING
          </h2>
          <p className="font-sans text-xs leading-7 text-[#ff1919]/50 max-w-md mb-10 tracking-wide">
            Join the protocol. Your visual intelligence layer is one extension away from absolute clarity.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1_HFCxh_fqrBX7o1bV_xNea7qpXMzhGXX?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#ff1919] bg-[#ff1919] text-black px-12 py-4 font-mono text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-[#ff1919] font-bold text-center"
          >
            &gt;_DOWNLOAD_NOW
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════════ */}
      <footer className="w-full bg-black border-t border-[#ff1919]/20 px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/30 uppercase">MINDVAULT © 2026</span>
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/30 uppercase">SECURE_LOCAL_INSTANCE</span>
      </footer>
    </main>
  );
}
