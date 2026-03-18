"use client";

import React from "react";
import Image from "next/image";
import { CLIENTS, CERTIFICATIONS } from "@/app/constant/homepage.constants";

const CERT_ICONS: Record<string, React.ReactNode> = {
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <circle cx="12" cy="8" r="7" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  ),
  "shield-check": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.9l-6.18 3.12L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

const TrustBuilders: React.FC = () => {
  return (
    <section className="trust" aria-label="Trust Builders">
      <div className="trust-inner">
        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow">Trusted By</span>
          <h2 className="section-title">Our Clients &amp; Certifications</h2>
          <p className="section-subtitle">
            Partnering with India&apos;s leading manufacturers and backed by internationally recognised quality standards.
          </p>
        </div>

        {/* Client logos marquee */}
        <div className="trust-logos-wrap">
          <div className="trust-logos" aria-label="Client logos">
            {/* Duplicate for seamless scroll */}
            {[...CLIENTS, ...CLIENTS].map((client, i) => (
              <div key={`${client.id}-${i}`} className="trust-logo-card">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={48}
                    className="trust-logo-img"
                  />
                ) : (
                  <span className="trust-logo-placeholder">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="trust-certs" aria-label="Certifications">
          <p className="trust-certs-label">Certified &amp; Compliant</p>
          <div className="trust-certs-grid">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div className="cert-icon">
                  {CERT_ICONS[cert.icon]}
                </div>
                <div className="cert-info">
                  <span className="cert-title">{cert.title}</span>
                  <span className="cert-subtitle">{cert.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBuilders;