import Link from "next/link";

const stats = [
  { value: "17+", label: "Years Experience" },
  { value: "650+", label: "Trained Inspectors" },
  { value: "500+", label: "Clients Served" },
  { value: "~0 PPM", label: "Customer Defect Goal" },
];

export default function WhyHero() {
  return (
    <>
      <section className="why-hero">
        <div className="why-hero__inner">
          {/* Breadcrumb */}
          <nav className="why-hero__breadcrumb" aria-label="Breadcrumb">
            <Link href="/"><i className="fas fa-home" /> Home</Link>
            <i className="fas fa-chevron-right" />
            <span>Why Choose Us</span>
          </nav>

          {/* Eyebrow */}
          <div className="why-hero__eyebrow">
            <span className="why-hero__dot" />
            The KPRT Difference
          </div>

          {/* Heading */}
          <h1 className="why-hero__title">
            Safer. Faster. <span>More Reliable.</span>
          </h1>

          {/* Subtitle */}
          <p className="why-hero__subtitle">
            In a market full of inspection agencies, KPRT stands apart on one
            non-negotiable principle — complete independence. Here&apos;s why
            India&apos;s top OEMs and 500+ manufacturers choose us.
          </p>

          {/* CTA */}
          <div className="why-hero__actions">
            <Link href="/contact" className="why-hero__btn-primary">
              <i className="fas fa-file-invoice" /> Get a Free Quote
            </Link>
            <Link href="/services" className="why-hero__btn-outline">
              <i className="fas fa-search" /> Explore Services
            </Link>
          </div>

          {/* Stats Row */}
          <div className="why-hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="why-hero__stat">
                <div className="why-hero__stat-value">{s.value}</div>
                <div className="why-hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative bg elements */}
        <div className="why-hero__bg-glow why-hero__bg-glow--1" />
        <div className="why-hero__bg-glow why-hero__bg-glow--2" />
      </section>
      <div className="why-accent-bar" />
    </>
  );
}
