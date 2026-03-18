"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/app/constant/homepage.constants";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
      <path d="M11 8v6M8 11h6" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      <path d="M8 7h8M8 11h5" />
    </svg>
  ),
};

const KeyServices: React.FC = () => {
  return (
    <section className="services" aria-label="Key Services">
      <div className="services-inner">
        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive quality solutions designed for India&apos;s manufacturing and supply chain landscape.
          </p>
        </div>

        {/* Cards grid */}
        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              href={service.href}
              className="service-card"
              style={{ animationDelay: `${i * 0.1}s` }}
              aria-label={service.title}
            >
              <div className="service-card-icon">
                {SERVICE_ICONS[service.icon]}
              </div>
              <div className="service-card-number">0{i + 1}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              <div className="service-card-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;