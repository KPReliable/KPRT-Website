import Link from "next/link";
import { coreValues } from "../../data/aboutData";

export default function WhyKPReliable() {
  return (
    <section className="why-kprt">
      <div className="why-kprt__inner">
        {/* Header */}
        <div className="why-kprt__header">
          <span className="section-eyebrow why-kprt__eyebrow">
            Why Choose KPRT
          </span>
          <h2 className="section-title why-kprt__title">
            Transparency. Reliability.{" "}
            <span>Expertise.</span>
          </h2>
          <p className="section-subtitle why-kprt__subtitle">
            What makes KPRT different isn&apos;t just what we do — it&apos;s
            the principles we refuse to compromise on.
          </p>
        </div>

        {/* Values Grid */}
        <div className="why-kprt__grid">
          {coreValues.map((value) => (
            <div key={value.title} className="why-kprt__card">
              <div className="why-kprt__card-icon">
                <i className={`fas ${value.icon}`} />
              </div>
              <h3 className="why-kprt__card-title">{value.title}</h3>
              <p className="why-kprt__card-desc">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="why-kprt__cta">
          <div className="why-kprt__cta-text">
            <h3>Ready to experience the KPRT difference?</h3>
            <p>
              Join 500+ companies that trust KPRT for independent quality
              inspection across India.
            </p>
          </div>
          <div className="why-kprt__cta-actions">
            <Link href="/contact" className="why-kprt__btn-primary">
              <i className="fas fa-file-invoice" />
              Get a Free Quote
            </Link>
            <Link href="/services" className="why-kprt__btn-outline">
              <i className="fas fa-search" />
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
