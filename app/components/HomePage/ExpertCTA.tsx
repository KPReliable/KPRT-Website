"use client";

import React from "react";
import Link from "next/link";

const ExpertCTA: React.FC = () => {
  return (
    <section className="expert-cta" aria-label="Talk to Our Experts">
      {/* BG decoration */}
      <div className="expert-cta-bg" aria-hidden="true">
        <div className="expert-cta-blob expert-cta-blob--1" />
        <div className="expert-cta-blob expert-cta-blob--2" />
        <div className="expert-cta-grid" />
      </div>

      <div className="expert-cta-inner">
        <div className="expert-cta-content">
          <span className="section-eyebrow expert-cta-eyebrow">Let&apos;s Work Together</span>
          <h2 className="expert-cta-title">
            Talk to Our Experts Today
          </h2>
          <p className="expert-cta-subtitle">
            Whether you need a one-time inspection or an ongoing quality partnership,
            our team is ready to help. Get in touch for a free consultation.
          </p>

          <div className="expert-cta-actions">
            <Link href="/contact" className="btn-primary btn-primary--large">
              Schedule a Free Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="tel:+919876543210" className="btn-ghost">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
              Call Us Now
            </Link>
          </div>
        </div>

        {/* Contact info cards */}
        <div className="expert-cta-cards">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
              ),
              label: "Call Us",
              value: "+91 98765 43210",
              href: "tel:+919876543210",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              ),
              label: "Email Us",
              value: "info@qualityinspect.in",
              href: "mailto:info@qualityinspect.in",
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                </svg>
              ),
              label: "Reach",
              value: "Pan-India · 28 States",
              href: "/contact",
            },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="expert-cta-card">
              <div className="expert-cta-card-icon">{item.icon}</div>
              <div className="expert-cta-card-info">
                <span className="expert-cta-card-label">{item.label}</span>
                <span className="expert-cta-card-value">{item.value}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertCTA;