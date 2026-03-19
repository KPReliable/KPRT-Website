import Link from "next/link";
import { serviceCards } from "./servicesData";

export default function ServicesGrid() {
  return (
    <section className="services-grid-section">
      <div className="services-grid-section__inner">
        {/* Section Header */}
        <div className="services-grid-section__header">
          <span className="section-eyebrow">Our Core Services</span>
          <h2 className="section-title">
            Six Specialized <span>Service</span> Verticals
          </h2>
          <p className="section-subtitle">
            Every service is designed to eliminate quality risk at a different
            stage of your supply chain — from raw materials to finished goods
            dispatch.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid-section__grid">
          {serviceCards.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="service-card"
              id={service.id}
            >
              {/* Number */}
              <div className="service-card__num">
                {service.number} — {service.category}
              </div>

              {/* Icon */}
              <div className="service-card__icon">
                <i className={`fas ${service.icon}`} />
              </div>

              {/* Title */}
              <h3 className="service-card__title">{service.title}</h3>

              {/* Description */}
              <p className="service-card__desc">{service.description}</p>

              {/* Tags */}
              <div className="service-card__tags">
                {service.tags.map((tag) => (
                  <span key={tag.label} className="service-card__tag">
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* CTA Link */}
              <span className="service-card__link">
                View Full Details <i className="fas fa-arrow-right" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
