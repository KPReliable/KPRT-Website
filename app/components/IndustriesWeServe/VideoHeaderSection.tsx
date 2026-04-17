"use client";

import React, { useEffect, useRef, useState } from "react";

const VideoHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [textDone, setTextDone] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger once when section comes into view
        if (entry.isIntersecting && !textDone) {
          setTextVisible(true);
          // Fade out after 3 seconds
          // setTimeout(() => {
          //   setTextVisible(false);
          //   setTextDone(true);
          // }, 3000);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [textDone]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh" }}
    >
      {/* ---- Video ---- */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dinnmia6e/video/upload/v1776418179/Ram40_dm5rkd.mp4"
      />

      {/* ---- Dark overlay ---- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,18,42,0.45) 0%, rgba(6,18,42,0.5) 40%, rgba(6,18,42,0.65) 100%)",
        }}
      />

      {/* ---- Text overlay (scroll-triggered, shows once) ---- */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-none"
        style={{
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-[#00a2e9]" />
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#00a2e9]">
            Precision at Scale
          </p>
          <span className="w-8 h-px bg-[#00a2e9]" />
        </div>

        {/* Headline */}
        <h2
          className="text-white font-extralight leading-[1.05] mb-6"
          style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
        >
          Where Quality Meets <br />
          <span className="font-bold text-[#00a2e9]">Manufacturing Excellence</span>
        </h2>

        {/* Subtext */}
        <p
          className="text-white/60 leading-relaxed max-w-xl"
          style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
        >
          Certified inspection teams embedded directly on your production floor —
          ensuring zero-defect output at every stage of the supply chain.
        </p>
      </div>

      {/* ---- Scroll indicator (fades with text) ---- */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{
          opacity: textVisible ? 0.6 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-[#00a2e9]"
            style={{
              height: "50%",
              animation: "scrollDrop 1.4s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollDrop {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default VideoHeroSection;