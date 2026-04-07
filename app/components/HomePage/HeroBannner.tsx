"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSpring, animated, config } from "@react-spring/web";

/* ============================================================
   CUSTOM HOOK — mouse-tracking parallax values
   ============================================================ */
function useMouseParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      // Normalise to -1 → 1 relative to viewport centre
      setMouse({
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return mouse;
}

/* ============================================================
   CUSTOM HOOK — scroll-based parallax value
   ============================================================ */
function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return scrollY;
}

/* ============================================================
   COMPONENT
   ============================================================ */
const HeroBanner: React.FC = () => {
  const mouse   = useMouseParallax();
  const scrollY = useScrollY();

  /* ---- Mount animation — everything fades + slides up on load ---- */
  const mountSpring = useSpring({
    from: { opacity: 0, y: 40 },
    to:   { opacity: 1, y: 0 },
    config: config.molasses,
    delay: 100,
  });

  /* ---- Eyebrow enters slightly later ---- */
  const eyebrowSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to:   { opacity: 1, y: 0 },
    config: config.gentle,
    delay: 200,
  });

  /* ---- Headline ---- */
  const headlineSpring = useSpring({
    from: { opacity: 0, y: 32 },
    to:   { opacity: 1, y: 0 },
    config: config.gentle,
    delay: 350,
  });

  /* ---- Subtitle ---- */
  const subtitleSpring = useSpring({
    from: { opacity: 0, y: 24 },
    to:   { opacity: 1, y: 0 },
    config: config.gentle,
    delay: 480,
  });

  /* ---- CTAs ---- */
  const ctaSpring = useSpring({
    from: { opacity: 0, y: 20 },
    to:   { opacity: 1, y: 0 },
    config: config.gentle,
    delay: 580,
  });

  /* ---- Trust chips ---- */
  const trustSpring = useSpring({
    from: { opacity: 0 },
    to:   { opacity: 1 },
    config: config.gentle,
    delay: 720,
  });

  /* ---- Card enters from right ---- */
  const cardSpring = useSpring({
    from: { opacity: 0, x: 60 },
    to:   { opacity: 1, x: 0 },
    config: config.molasses,
    delay: 300,
  });

  /* ---- Mouse parallax — card floats with cursor ---- */
  const cardParallax = useSpring({
    transform: `translate(${mouse.x * -10}px, ${mouse.y * -10}px) rotateY(${mouse.x * 3}deg) rotateX(${mouse.y * -3}deg)`,
    config: { mass: 4, tension: 120, friction: 40 },
  });

  /* ---- Mouse parallax — glow blobs move opposite direction ---- */
  const glow1Parallax = useSpring({
    transform: `translate(${mouse.x * 25}px, ${mouse.y * 20}px)`,
    config: { mass: 6, tension: 80, friction: 50 },
  });

  const glow2Parallax = useSpring({
    transform: `translate(${mouse.x * -18}px, ${mouse.y * -15}px)`,
    config: { mass: 5, tension: 90, friction: 45 },
  });

  /* ---- Badge 1 — floats independently ---- */
  const badge1Spring = useSpring({
    from: { opacity: 0, scale: 0.7 },
    to:   { opacity: 1, scale: 1 },
    config: config.wobbly,
    delay: 700,
  });

  const badge1Parallax = useSpring({
    transform: `translate(${mouse.x * 14}px, ${mouse.y * 12}px)`,
    config: { mass: 3, tension: 100, friction: 35 },
  });

  /* ---- Badge 2 ---- */
  const badge2Spring = useSpring({
    from: { opacity: 0, scale: 0.7 },
    to:   { opacity: 1, scale: 1 },
    config: config.wobbly,
    delay: 850,
  });

  const badge2Parallax = useSpring({
    transform: `translate(${mouse.x * -12}px, ${mouse.y * -10}px)`,
    config: { mass: 3, tension: 110, friction: 38 },
  });

  /* ---- Scroll parallax — hero section scrolls at 40% speed (slow reveal) ---- */
  const sectionScrollSpring = useSpring({
    transform: `translateY(${scrollY * 0.25}px)`,
    opacity: Math.max(0, 1 - scrollY / 500),
    config: { tension: 300, friction: 60 },
  });

  /* ---- Grid scrolls slightly faster than content (depth) ---- */
  const gridScrollSpring = useSpring({
    transform: `translateY(${scrollY * 0.15}px)`,
    config: { tension: 300, friction: 60 },
  });

  return (
    <section className="hero" aria-label="Hero Banner" style={{ overflow: "hidden" }}>

      {/* ---- Geometric background ---- */}
      <div className="hero-bg" aria-hidden="true">
        <animated.div className="hero-bg-grid" style={gridScrollSpring} />
        <animated.div className="hero-bg-glow hero-bg-glow--1" style={glow1Parallax} />
        <animated.div className="hero-bg-glow hero-bg-glow--2" style={glow2Parallax} />
      </div>

      {/* ---- Content wrapper scrolls with parallax ---- */}
      <animated.div className="hero-inner" style={sectionScrollSpring}>

        {/* ==================== LEFT — text content ==================== */}
        <div className="hero-content">

          {/* Eyebrow */}
          <animated.div className="hero-eyebrow" style={eyebrowSpring}>
            <span className="hero-eyebrow-dot" />
            Pan-India Quality &amp; Inspection Services
          </animated.div>

          {/* Headline */}
          <animated.h1 className="hero-title" style={headlineSpring}>
            Your Trusted Partner in
            <span className="hero-title-accent"> Quality &amp; Inspection</span>
          </animated.h1>

          {/* Subtitle */}
          <animated.p className="hero-subtitle" style={subtitleSpring}>
            Delivering reliable supplier quality management, pre-dispatch inspections,
            process audits, and training programs — across 28 states, 20+ industries.
          </animated.p>

          {/* CTAs */}
          <animated.div className="hero-actions" style={ctaSpring}>
            <Link href="/quote" className="btn-primary">
              Get a Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/booking" className="btn-outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Book an Inspection
            </Link>
          </animated.div>

          {/* Trust chips */}
          <animated.div className="hero-trust" style={trustSpring}>
            {["ISO 9001:2015 Certified", "500+ Clients", "15+ Years Experience"].map((t) => (
              <span key={t} className="hero-trust-chip">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                {t}
              </span>
            ))}
          </animated.div>
        </div>

        {/* ==================== RIGHT — visual card ==================== */}
        <div className="hero-visual" aria-hidden="true" style={{ perspective: "1000px" }}>

          {/* Card — mouse tilt + entrance */}
          <animated.div
            style={{
              ...cardSpring,
              ...cardParallax,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-dots">
                  <span /><span /><span />
                </div>
                <span className="hero-card-label">Live Inspection Report</span>
              </div>
              <div className="hero-card-body">
                {[
                  { label: "Supplier Audit",     status: "Completed",   color: "#22c55e" },
                  { label: "PDI — Pune Unit 2",  status: "In Progress", color: "#00A2E9" },
                  { label: "Process Review",     status: "Scheduled",   color: "#f59e0b" },
                  { label: "Training Session",   status: "Completed",   color: "#22c55e" },
                ].map((row) => (
                  <div key={row.label} className="hero-card-row">
                    <div className="hero-card-row-info">
                      <span className="hero-card-row-dot" style={{ background: row.color }} />
                      <span className="hero-card-row-label">{row.label}</span>
                    </div>
                    <span className="hero-card-row-status" style={{ color: row.color }}>
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
              <div className="hero-card-footer">
                <span>Updated just now</span>
                <span className="hero-card-live">
                  <span className="hero-card-live-dot" />
                  Live
                </span>
              </div>
            </div>
          </animated.div>

          {/* Badge TL — floats at its own parallax depth */}
          <animated.div
            className="hero-badge hero-badge--tl"
            style={{
              ...badge1Spring,
              ...badge1Parallax,
              position: "absolute",
              willChange: "transform",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.9l-6.18 3.12L7 13.14 2 8.27l6.91-1.01L12 1z" />
            </svg>
            <span>ISO Certified</span>
          </animated.div>

          {/* Badge BR — floats at opposite direction */}
          <animated.div
            className="hero-badge hero-badge--br"
            style={{
              ...badge2Spring,
              ...badge2Parallax,
              position: "absolute",
              willChange: "transform",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-1V1h-2zm3 18H5V8h14v11z" />
            </svg>
            <span>500+ Projects</span>
          </animated.div>

        </div>
      </animated.div>
    </section>
  );
};

export default HeroBanner;