'use client'

import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center px-6"
      // style={{ minHeight: "100svh" }}
    >
      {/* ---- Video Container (FIXED) ---- */}
      <div className="relative w-full max-w-6xl mx-auto  overflow-hidden">

        {/* Maintain aspect ratio */}
        <div className="relative w-full aspect-[16/9]">

          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dinnmia6e/video/upload/v1777540893/video13_h0oyib.mp4"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(6,18,42,0.45) 0%, rgba(6,18,42,0.5) 40%, rgba(6,18,42,0.65) 100%)",
            }}
          />

          {/* ---- Text ---- */}
          <div
            className="absolute inset-0 flex items-center justify-center px-6 text-center"
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateY(0)" : "translateY(16px)",
              transition:
                "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div className="max-w-3xl mx-auto flex flex-col items-center">

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
                style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
              >
                Where Quality Meets <br />
                <span className="font-bold text-[#00a2e9]">
                  Manufacturing Excellence
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-white/70 leading-relaxed text-sm sm:text-base max-w-xl">
                Certified inspection teams embedded directly on your production floor —
                ensuring zero-defect output at every stage of the supply chain.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Scroll Indicator ---- */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: textVisible ? 0.6 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-black/40">
          Scroll
        </span>
        <div className="w-px h-8 bg-black/20 relative overflow-hidden">
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
}