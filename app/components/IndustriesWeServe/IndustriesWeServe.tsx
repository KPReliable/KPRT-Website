"use client";

import React, { useState } from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/app/constant/industries.constants";
import IndustryCard from "@/app/components/IndustriesWeServe/IndustryCard";

const FILTERS = ["All", "Automotive", "Electronics", "Heavy Machinery", "Consumer Goods", "Others"];

const IndustriesWeServe: React.FC = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? INDUSTRIES
      : active === "Others"
      ? INDUSTRIES.filter((i) => ["textiles", "plastics"].includes(i.id))
      : INDUSTRIES.filter((i) =>
          i.title.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <section className="industries" aria-label="Industries We Serve">
      <div className="industries-inner">

        {/* ---- Section header ---- */}
        <div className="section-header">
          <span className="section-eyebrow">Our Expertise</span>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">
            Deep domain knowledge across India&apos;s core manufacturing sectors —
            delivering quality solutions that match the unique demands of each industry.
          </p>
        </div>

        {/* ---- Filter tabs ---- */}
        <div className="ind-filters" role="tablist" aria-label="Filter industries">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`ind-filter-btn${active === f ? " ind-filter-btn--active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ---- Cards grid ---- */}
        <div className="ind-grid">
          {filtered.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>

        {/* ---- Bottom CTA strip ---- */}
        <div className="ind-cta-strip">
          <div className="ind-cta-strip-content">
            <div>
              <p className="ind-cta-strip-title">Don&apos;t see your industry?</p>
              <p className="ind-cta-strip-sub">
                We work across all manufacturing sectors. Talk to us about your specific requirements.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Discuss Your Industry
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;