"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [coffeePoured, setCoffeePoured] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(142);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCoffeeClick = () => {
    if (!coffeePoured) {
      setCoffeePoured(true);
      setCoffeeCount((prev) => prev + 1);
    }
  };

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
              href="/features"
              className="hover:text-[#ff1919] transition-colors"
            >
              FEATURES
            </Link>
            <span className="font-mono text-[10px] tracking-widest text-[#ff1919]/30">
              V2.0.1
            </span>
          </div>
        </div>
      </motion.nav>

      {/* ════════════════════════════════════════════════════
          MAIN CONTENT SECTION — Side by Side Widescreen Grid
          ════════════════════════════════════════════════════ */}
      <section className="relative w-full py-12 lg:py-20 flex flex-col items-center">
        {/* Decorative Vertical Grid Line */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#ff1919]/5 hidden lg:block" />

        <div className="relative z-10 w-full px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full">
            
            {/* LEFT COLUMN: About Me (Social Tiles, Bio) */}
            <div className="flex flex-col space-y-10">
              
              {/* Header Block (Name & Designation Title) */}
              <div className="relative">
                {/* Spinning Asterisk Behind the Name */}
                <div className="absolute right-0 lg:right-8 top-1/2 -translate-y-1/2 -z-10 w-28 h-28 lg:w-44 lg:h-44 pointer-events-none select-none">
                  <motion.svg
                    viewBox="0 0 100 100"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="w-full h-full text-[#ff1919]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="13"
                  >
                    {/* Spoke lines (3/4 length of previous ones, flat/sharp ends) */}
                    <line x1="50" y1="20" x2="50" y2="80" />
                    <line x1="20" y1="50" x2="80" y2="50" />
                    <line x1="28.8" y1="28.8" x2="71.2" y2="71.2" />
                    <line x1="28.8" y1="71.2" x2="71.2" y2="28.8" />
                  </motion.svg>
                </div>

                <div className="font-mono text-[9px] tracking-[0.4em] text-[#ff1919]/40 uppercase mb-4">
                  MANIFEST_DEVELOPER_NODE
                </div>

                <h1 className="relative z-10 font-[family-name:var(--font-display)] text-[10vw] lg:text-[7vw] leading-[0.85] tracking-wider text-[#ff1919] mb-3">
                  BUILT BY<br />
                  <span
                    className="text-black inline-block mt-2"
                    style={{
                      fontFamily: "'Gilroy-Heavy', 'Gilroy-Bold', 'Gilroy', sans-serif",
                      fontWeight: 900,
                      WebkitTextStroke: "2px #ff1919",
                      WebkitTextFillColor: "black",
                    }}
                  >
                    SAGAR JHAJJARI
                  </span>
                </h1>
                
                <div className="font-mono text-[11px] tracking-[0.25em] text-[#ff1919]/90 uppercase flex items-center gap-2 mt-4">
                  <span className="inline-block w-2.5 h-2.5 bg-[#ff1919] animate-pulse rounded-full" />
                  CREATOR & LEAD DEVELOPER // MINDVAULT SYSTEM ARCHITECT
                </div>
              </div>

              {/* SOCIAL / NETWORKS SECTION — Compact Tiles, placed just beneath name */}
              <div className="border-t border-[#ff1919]/10 pt-8">
                <div className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/40 uppercase mb-4">
                  DEVELOPER_NETWORKS_CONNECTED
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/sagar-jhajjari/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center text-center bg-[#ff1919] hover:bg-[#d61414] border border-[#ff1919] w-36 h-36 relative transition-all duration-300 group shrink-0"
                  >
                    {/* Glowing corner highlights */}
                    <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-black/40 group-hover:border-black" />
                    <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-black/40 group-hover:border-black" />

                    <div className="flex flex-col items-center gap-2">
                      {/* LinkedIn SVG */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black group-hover:scale-110 transition-all duration-300"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <span className="font-mono text-[10px] tracking-wider text-black font-bold mt-1">
                        LINKEDIN
                      </span>
                    </div>
                    <span className="font-mono text-[7px] text-black/60 absolute bottom-2">
                      &gt;_CONNECT
                    </span>
                  </a>

                  {/* Behance */}
                  <a
                    href="https://www.behance.net/sagarjhajjari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center text-center bg-[#ff1919] hover:bg-[#d61414] border border-[#ff1919] w-36 h-36 relative transition-all duration-300 group shrink-0"
                  >
                    {/* Glowing corner highlights */}
                    <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-black/40 group-hover:border-black" />
                    <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-black/40 group-hover:border-black" />

                    <div className="flex flex-col items-center gap-2">
                      {/* Behance SVG */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 333333 333333"
                        fill="currentColor"
                        className="text-black group-hover:scale-110 transition-all duration-300"
                      >
                        <path d="M96656 62252c9824 0 18671 854 26734 2608 8083 1685 14911 4559 20707 8459 5726 3913 10144 9122 13409 15620 3126 6435 4687 14512 4687 24077 0 10352-2331 18935-7037 25848-4748 6896-11646 12500-20898 16935 12622 3642 21937 10021 28187 19076 6244 9122 9246 20055 9246 32929 0 10415-2023 19329-5974 26882-4035 7622-9504 13797-16203 18559-6768 4811-14579 8329-23309 10606-8667 2264-17581 3451-26797 3451l-99407 2V62270l96667 6-12-26v2zm120854 16541h83133v20252l-83133-6V78787v6zm18474 152836c6128 5974 14911 8976 26378 8976 8201 0 15372-2093 21285-6256 5911-4165 9504-8575 10876-13140l35919 6c-5795 17889-14517 30598-26488 38281-11793 7683-26224 11585-42969 11585-11730 0-22200-1902-31643-5610-9437-3772-17311-9037-23955-15957-6441-6896-11516-15096-15102-24736-3520-9559-5327-20183-5327-31638 0-11128 1833-21482 5457-31053 3709-9645 8791-17895 15557-24872 6760-6970 14703-12500 24083-16535 9315-4041 19600-6065 30992-6065 12555 0 23555 2417 32998 7358 9376 4872 17120 11455 23173 19661 6065 8213 10352 17642 13023 28181 2669 10537 3581 21537 2848 33077l-107200-4c0 11646 3913 22791 10083 28699l12 43v-2zm46807-77972c-4811-5333-13085-8268-23037-8268-6522 0-11909 1100-16202 3315-4226 2203-7683 4933-10352 8201-2602 3254-4435 6773-5451 10470-1039 3581-1685 6896-1902 9770l66407-6c-978-10407-4559-18092-9437-23492l-24 12-2-2zm-192011-8606c7998 0 14635-1902 19838-5734 5205-3772 7683-10022 7683-18620 0-4742-848-8728-2541-11793-1746-3057-4041-5474-6963-7159-2872-1748-6114-2941-9947-3587-3708-707-7622-1033-11582-1033H45093v47904h45701l-12 24h-2zm2474 87287c4441 0 8667-394 12610-1317 4035-909 7622-2270 10606-4348 2996-2024 5541-4681 7350-8201 1833-3457 2669-7874 2669-13270 0-10537-3002-18098-8913-22663-5911-4504-13787-6705-23549-6705H45080v56423l48173-6v87z" />
                      </svg>
                      <span className="font-mono text-[10px] tracking-wider text-black font-bold mt-1">
                        BEHANCE
                      </span>
                    </div>
                    <span className="font-mono text-[7px] text-black/60 absolute bottom-2">
                      &gt;_PORTFOLIO
                    </span>
                  </a>
                </div>
              </div>

              {/* Biography & Vision */}
              <div className="border-t border-[#ff1919]/10 pt-8 w-full">
                <div className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/40 uppercase mb-4">
                  PROJECT_MISSION_STATEMENT
                </div>
                <div className="space-y-6 font-sans text-sm leading-8 text-[#ff1919]/70">
                  <p>
                    MindVault was born out of a simple frustration: the digital hoarding epidemic. We save, we bookmark, we favorite, and then we forget. Important references, tutorials, and inspiration get buried under a mountain of algorithmically driven feeds.
                  </p>
                  <p>
                    As an independent developer, my goal was to build a local-first, privacy-respecting visual organizer for saved posts. No cloud uploads, no forced accounts, and no monetization of your personal taste. All your data remains securely stored on your local browser.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Support block (Ko-fi card & specifications card) */}
            <div className="flex flex-col space-y-6">
              
              {/* Ko-fi Support Card */}
              <div className="border border-[#ff1919]/20 p-6 bg-black/40 backdrop-blur-sm relative overflow-hidden group hover:border-[#ff1919]/40 transition-all duration-500 w-full">
                <div className="absolute top-0 right-0 bg-[#ff1919]/10 px-2 py-1 font-mono text-[8px] text-[#ff1919]/80 uppercase">
                  SUPPORT_PROTOCOL
                </div>
                
                {/* Glowing corner highlights */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#ff1919]" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#ff1919]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#ff1919]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#ff1919]" />

                <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-[#ff1919] mb-6">
                  FUEL DEVELOPMENT
                </h3>

                {/* Horizontal layout: Bigger Coffee Icon left, prominent paragraph and status line right */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6 pb-6 border-b border-[#ff1919]/10">
                  <motion.div
                    animate={
                      coffeePoured
                        ? {
                            scale: [1, 1.15, 0.95, 1],
                            rotate: [0, 8, -8, 0],
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                    className="w-20 h-20 border border-[#ff1919]/30 rounded-full flex items-center justify-center bg-[#ff1919]/5 relative shrink-0"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#ff1919]"
                    >
                      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                      <line x1="6" y1="2" x2="6" y2="4" />
                      <line x1="10" y1="2" x2="10" y2="4" />
                      <line x1="14" y1="2" x2="14" y2="4" />
                    </svg>
                  </motion.div>
                  <div className="flex-1 flex flex-col gap-3">
                    <p className="font-sans text-[13px] leading-6 text-[#ff1919]/90 font-medium">
                      MindVault is built as a lightweight utility with zero recurring fees. Consider throwing some caffeine tokens into the engine to support direct development.
                    </p>
                    <div className="font-mono text-[9px] text-[#ff1919]/70 space-y-1">
                      <div>STATUS: {coffeePoured ? "TRANSFER_COMPLETED_THX" : "AWAITING_TRANSFER"}</div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://ko-fi.com/sagarjhajjari"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCoffeeClick}
                  className="block w-full bg-[#ff1919] hover:bg-[#b30000] text-black hover:text-white border border-[#ff1919] hover:border-[#b30000] py-3.5 font-mono text-[10px] tracking-[0.2em] transition-all duration-300 uppercase text-center font-bold"
                >
                  &gt;_BUY_A_COFFEE_FOR_DEVELOPER
                </a>
              </div>

              {/* Tech Specs Block */}
              <div className="border border-[#ff1919]/15 p-6 bg-black/25 backdrop-blur-sm relative flex flex-col justify-between w-full">
                <div>
                  <div className="absolute top-0 right-0 bg-[#ff1919]/5 px-2 py-1 font-mono text-[8px] text-[#ff1919]/50 uppercase">
                    SYSTEM_INFO
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-[#ff1919]/90 mb-4">
                    SYSTEM SPECIFICATIONS
                  </h3>
                  <div className="font-mono text-[9.5px] space-y-3.5 text-[#ff1919]/50">
                    <div className="flex justify-between border-b border-[#ff1919]/10 pb-1.5">
                      <span>FRAMEWORK</span>
                      <span className="text-[#ff1919]/70">NEXT.JS 16.2</span>
                    </div>
                    <div className="flex justify-between border-b border-[#ff1919]/10 pb-1.5">
                      <span>STYLE SYSTEM</span>
                      <span className="text-[#ff1919]/70">TAILWIND 4.0</span>
                    </div>
                    <div className="flex justify-between border-b border-[#ff1919]/10 pb-1.5">
                      <span>LOCAL DB</span>
                      <span className="text-[#ff1919]/70">INDEXED_DB (DEXIE)</span>
                    </div>
                    <div className="flex justify-between pb-1.5">
                      <span>PRIVACY GATE</span>
                      <span className="text-[#ff1919]/70">AES-256_LOCAL</span>
                    </div>
                  </div>
                </div>
                
                <div className="font-mono text-[8px] text-[#ff1919]/30 mt-6 pt-4 border-t border-[#ff1919]/5">
                  // ENGINE_INIT_COMPLETE: 100% ONLINE
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════════════════ */}
      <footer className="w-full bg-black border-t border-[#ff1919]/20 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff1919]/30 uppercase">
          MINDVAULT © 2026 // SAGAR JHAJJARI
        </span>
        <div className="flex gap-6 font-mono text-[9px] tracking-[0.2em] text-[#ff1919]/40 uppercase">
          <Link href="/" className="hover:text-[#ff1919]">
            HOME
          </Link>
          <Link href="/features" className="hover:text-[#ff1919]">
            FEATURES
          </Link>
        </div>
      </footer>
    </main>
  );
}
