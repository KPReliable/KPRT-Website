"use client";

import React, { useState } from "react";
import Link from "next/link";

/* ---- Data ---- */
const FOOTER_LINKS = {
  Services: [
    { label: "Supplier Quality Management", href: "/services/supplier-quality" },
    { label: "Pre-Dispatch Inspection",      href: "/services/pdi" },
    { label: "Quality & Process Audits",     href: "/services/audits" },
    { label: "Training Programs",            href: "/services/training" },
  ],
  Industries: [
    { label: "Automotive",        href: "/industries/automotive" },
    { label: "Electronics",       href: "/industries/electronics" },
    { label: "Heavy Machinery",   href: "/industries/heavy-machinery" },
    { label: "Consumer Goods",    href: "/industries/consumer-goods" },
    { label: "Textiles & Apparel",href: "/industries/textiles" },
    { label: "Plastics & Rubber", href: "/industries/plastics" },
  ],
  Company: [
    { label: "About Us",   href: "/about" },
    { label: "Our Team",   href: "/about#team" },
    { label: "Careers",    href: "/careers" },
    { label: "Resources",  href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service",href: "/terms" },
    { label: "Cookie Policy",  href: "/cookies" },
    { label: "Disclaimer",     href: "/disclaimer" },
  ],
};

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M23 7s-.3-1.9-1.1-2.7c-1.1-1.1-2.3-1.1-2.8-1.2C16.2 3 12 3 12 3s-4.2 0-7.1.1c-.6.1-1.8.1-2.8 1.2C1.3 5.1 1 7 1 7S.7 9.1.7 11.3v2c0 2.1.3 4.3.3 4.3s.3 1.9 1.1 2.7c1.1 1.1 2.5 1 3.1 1.1C7.2 21.5 12 21.5 12 21.5s4.2 0 7.1-.2c.6-.1 1.8-.1 2.8-1.2.8-.8 1.1-2.7 1.1-2.7s.3-2.1.3-4.3v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l7.6 3.6-7.6 3.5z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

const CERTIFICATIONS = ["ISO 9001:2015", "IATF 16949", "ISO 45001"];

/* ---- Component ---- */
const Footer: React.FC = () => {
  const [email, setEmail]       = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer className="footer">

      {/* ======================================================
          CTA STRIP
      ====================================================== */}
      <div className="footer-cta-strip">
        <div className="footer-cta-inner">
          <div className="footer-cta-text">
            <span className="footer-cta-dot" aria-hidden="true" />
            Trusted by 500+ manufacturers across India — get in touch today.
          </div>
          <div className="footer-cta-actions">
            <Link href="/contact" className="footer-cta-btn">Talk to an Expert</Link>
            <Link href="/quote"   className="footer-cta-btn footer-cta-btn--ghost">Get a Quote</Link>
          </div>
        </div>
      </div>

      {/* ======================================================
          MAIN BODY
      ====================================================== */}
      <div className="footer-body">
        <div className="footer-body-inner">

          {/* Brand column */}
          <div className="footer-brand">
            {/* Logo */}
            <Link href="/" className="footer-logo" aria-label="QualityInspect Home">
              <div className="footer-logo-mark">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
              </div>
              <div>
                <p className="footer-logo-name">QualityInspect</p>
                <p className="footer-logo-sub">Inspection &amp; Quality Services</p>
              </div>
            </Link>

            {/* Description */}
            <p className="footer-brand-desc">
              India&apos;s trusted partner for supplier quality management,
              pre-dispatch inspections, process audits, and quality training —
              serving 20+ industries across all 28 states.
            </p>

            {/* Cert badges */}
            <div className="footer-certs">
              {CERTIFICATIONS.map((c) => (
                <span key={c} className="footer-cert-badge">{c}</span>
              ))}
            </div>

            {/* Social icons */}
            <div className="footer-social">
              {SOCIAL.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="footer-social-btn"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Quick contact */}
            <div className="footer-quick-contact">
              <a href="tel:+919876543210" className="footer-quick-item">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
                </svg>
                +91 98765 43210
              </a>
              <a href="mailto:info@qualityinspect.in" className="footer-quick-item">
                <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@qualityinspect.in
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <nav key={heading} className="footer-col" aria-label={`${heading} links`}>
              <h4 className="footer-col-heading">{heading}</h4>
              <ul className="footer-col-list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-col-link">
                      <span className="footer-col-dot" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Newsletter column */}
          <div className="footer-newsletter">
            <h4 className="footer-col-heading">Stay Updated</h4>
            <p className="footer-nl-desc">
              Quality insights and inspection checklists — straight to your inbox. No spam.
            </p>

            {subscribed ? (
              <div className="footer-nl-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                You&apos;re subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-nl-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="footer-nl-input"
                  required
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="footer-nl-btn">Subscribe</button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* ======================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">
            © {new Date().getFullYear()} QualityInspect Pvt. Ltd. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy"  className="footer-bottom-link">Privacy</Link>
            <span className="footer-bottom-sep" aria-hidden="true" />
            <Link href="/terms"    className="footer-bottom-link">Terms</Link>
            <span className="footer-bottom-sep" aria-hidden="true" />
            <Link href="/sitemap"  className="footer-bottom-link">Sitemap</Link>
          </div>
          <p className="footer-made">Made with care in India 🇮🇳</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;