"use client";

import React from "react";
import Link from "next/link";

const ExpertCTA: React.FC = () => {
  return (
    // CHANGED: Handled outer wrapper spacing using fluid responsive padding boundaries
    <section className="expert-cta w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden text-white" aria-label="Talk to Our Experts">
      {/* BG decoration */}
      <div className="expert-cta-bg absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="expert-cta-blob expert-cta-blob--1 absolute w-72 h-72 bg-blue-600/20 blur-3xl rounded-full -top-12 -left-12" />
        <div className="expert-cta-blob expert-cta-blob--2 absolute w-72 h-72 bg-cyan-600/20 blur-3xl rounded-full -bottom-12 -right-12" />
        <div className="expert-cta-grid" />
      </div>

      {/* Main Container Frame */}
      {/* CHANGED: Transformed outer body layer using flexible desktop columns branching constraints */}
      <div className="expert-cta-inner relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Text Block */}
        <div className="expert-cta-content w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
          <span className="section-eyebrow expert-cta-eyebrow text-xs sm:text-sm font-bold tracking-[0.25em] text-blue-400 uppercase block">Let&apos;s Work Together</span>
          {/* CHANGED: Swapped strict title limits for clean responsive typography sizes */}
          <h2 className="expert-cta-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Talk to Our Experts Today
          </h2>
          <p className="expert-cta-subtitle text-sm sm:text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Whether you need a one-time inspection or an ongoing quality partnership,
            our team is ready to help. Get in touch for a free consultation.
          </p>

          {/* Action Trigger Buttons Container */}
          {/* CHANGED: Buttons wrap cleanly to full width on compact portrait phone views */}
          <div className="expert-cta-actions flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-4">
            <Link href="/contact" className="btn-primary btn-primary--large inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-blue-600/20 transition-all active:scale-[0.99] text-center">
              Schedule a Free Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" className="flex-shrink-0">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="tel:+919876543210" className="btn-ghost inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 font-semibold text-sm rounded-lg transition-all active:scale-[0.99] text-center">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" className="flex-shrink-0 text-slate-400">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
              </svg>
              Call Us Now
            </Link>
          </div>
        </div>

        {/* Contact Info Cards Sidebar Block */}
        {/* CHANGED: Transformed layout grid structures responsively (1 -> 2 -> 1 column pattern updates) */}
        <div className="expert-cta-cards w-full lg:w-1/2 max-w-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
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
            <Link key={item.label} href={item.href} className="expert-cta-card bg-slate-800/40 border border-slate-800 hover:border-slate-700/80 rounded-xl p-4 sm:p-5 flex items-center gap-4 transition-all hover:-translate-y-0.5">
              <div className="expert-cta-card-icon w-11 h-11 rounded-lg bg-blue-600/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div className="expert-cta-card-info flex flex-col text-left overflow-hidden">
                <span className="expert-cta-card-label text-xs font-semibold uppercase tracking-wider text-slate-400">{item.label}</span>
                <span className="expert-cta-card-value text-sm sm:text-base font-bold text-white truncate mt-0.5">{item.value}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertCTA;