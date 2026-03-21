import Link from "next/link";
import { aboutStats } from "../../data/aboutData";

export default function AboutHero() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero__inner">
          {/* Breadcrumb */}
          <nav className="about-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">
              <i className="fas fa-home" />
              Home
            </Link>
            <i className="fas fa-chevron-right" />
            <span>About Us</span>
          </nav>

          {/* Eyebrow */}
          <div className="about-hero__eyebrow">
            <span className="about-hero__eyebrow-dot" />
            Est. 2008 — KP Reliable Technique India Pvt. Ltd.
          </div>

          {/* Two-column layout */}
          <div className="about-hero__grid">
            {/* Left */}
            <div className="about-hero__content">
              <h1 className="about-hero__title">
                Built on <span>Trust.</span>
                <br />
                Driven by <span>Quality.</span>
              </h1>
              <p className="about-hero__subtitle">
                KPRT is India&apos;s leading independent third-party inspection
                company — serving OEMs, Tier-1, and Tier-2 manufacturers since
                2008 with a single promise: zero conflict of interest, every
                time.
              </p>
              <div className="about-hero__actions">
                <Link href="/services" className="about-hero__btn-primary">
                  <i className="fas fa-search" />
                  Explore Our Services
                </Link>
                <Link href="/contact" className="about-hero__btn-outline">
                  <i className="fas fa-phone-alt" />
                  Talk to Us
                </Link>
              </div>
            </div>

            {/* Right — Stats Card */}
            <div className="about-hero__card">
              <div className="about-hero__card-header">
                <div className="about-hero__card-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="about-hero__card-label">Company at a Glance</span>
              </div>
              <div className="about-hero__card-body">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="about-hero__card-stat">
                    <div className="about-hero__card-stat-value">
                      {stat.value}
                      <span>{stat.suffix}</span>
                    </div>
                    <div className="about-hero__card-stat-label">
                      {stat.label}
                    </div>
                    <div className="about-hero__card-stat-bar">
                      <div className="about-hero__card-stat-fill" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="about-hero__card-footer">
                <span>
                  <i className="fas fa-map-marker-alt" />
                  Pan-India Presence
                </span>
                <span className="about-hero__card-live">
                  <span className="about-hero__card-live-dot" />
                  Active Operations
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="about-accent-bar" />
    </>
  );
}
