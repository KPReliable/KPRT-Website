"use client";

import Link from "next/link";
import { heroStats } from "@/app/data/servicesData";

const chips = [
  { icon: "fa-shield-alt", label: "100% Independent & Impartial" },
  { icon: "fa-bolt", label: "Rapid Deployment" },
  { icon: "fa-map-marker-alt", label: "Pan-India Coverage" },
  { icon: "fa-bullseye", label: "Near Zero PPM Approach" },
];

export default function ServicesHero() {
  return (
    <>
      {/* Hero Banner */}
      <section className="services-hero">
        <div className="services-hero__inner">
          {/* Breadcrumb */}
          <nav className="services-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">
              <i className="fas fa-home" />
              Home
            </Link>
            <i className="fas fa-chevron-right" />
            <span>Services</span>
          </nav>

          {/* Eyebrow */}
          <div className="services-hero__eyebrow">
            <span className="services-hero__eyebrow-dot" />
            What We Offer
          </div>

          {/* Heading */}
          <h1 className="services-hero__title">
            End-to-End <span>Quality</span>
            <br />
            Inspection Services
          </h1>

          {/* Subtitle */}
          <p className="services-hero__subtitle">
            From supplier qualification to final dispatch — KPRT delivers
            independent, third-party inspection services that eliminate poor
            quality costs and ensure near-zero PPM at your customer end.
          </p>

          {/* Trust Chips */}
          <div className="services-hero__chips">
            {chips.map((chip) => (
              <span key={chip.label} className="services-hero__chip">
                <i className={`fas ${chip.icon}`} />
                {chip.label}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="services-hero__stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="services-hero__stat">
                <div className="services-hero__stat-value">
                  {stat.value}
                  <span>{stat.suffix}</span>
                </div>
                <div className="services-hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Accent Bar */}
      <div className="services-accent-bar" />
    </>
  );
}
