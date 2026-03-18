"use client";

import React from "react";
import Link from "next/link";

const HeroBanner: React.FC = () => {
  return (
    <section className="hero" aria-label="Hero Banner">
      {/* Geometric background pattern */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow hero-bg-glow--1" />
        <div className="hero-bg-glow hero-bg-glow--2" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Pan-India Quality &amp; Inspection Services
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Your Trusted Partner in
            <span className="hero-title-accent"> Quality &amp; Inspection</span>
          </h1>

          {/* Subline */}
          <p className="hero-subtitle">
            Delivering reliable supplier quality management, pre-dispatch inspections,
            process audits, and training programs — across 28 states, 20+ industries.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <Link href="/quote" className="btn-primary">
              Get a Quote
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/booking" className="btn-outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Book an Inspection
            </Link>
          </div>

          {/* Trust chips */}
          <div className="hero-trust">
            {["ISO 9001:2015 Certified", "500+ Clients", "15+ Years Experience"].map((t) => (
              <span key={t} className="hero-trust-chip">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-dots">
                <span /><span /><span />
              </div>
              <span className="hero-card-label">Live Inspection Report</span>
            </div>
            <div className="hero-card-body">
              {[
                { label: "Supplier Audit", status: "Completed", color: "#22c55e" },
                { label: "PDI — Pune Unit 2", status: "In Progress", color: "#00A2E9" },
                { label: "Process Review", status: "Scheduled", color: "#f59e0b" },
                { label: "Training Session", status: "Completed", color: "#22c55e" },
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

          {/* Floating badges */}
          <div className="hero-badge hero-badge--tl">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.9l-6.18 3.12L7 13.14 2 8.27l6.91-1.01L12 1z"/></svg>
            <span>ISO Certified</span>
          </div>
          <div className="hero-badge hero-badge--br">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
            <span>500+ Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;