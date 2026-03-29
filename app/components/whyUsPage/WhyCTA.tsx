import Link from "next/link";

const contactCards = [
  { icon: "fa-phone-alt", label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "fab fa-whatsapp", label: "WhatsApp", value: "Chat Instantly", href: "https://wa.me/919876543210" },
  { icon: "fa-envelope", label: "Email Us", value: "info@kpreliable.com", href: "mailto:info@kpreliable.com" },
];

export default function WhyCTA() {
  return (
    <section className="why-cta">
      <div className="why-cta__inner">
        {/* Eyebrow */}
        <span className="why-cta__eyebrow">Start Today</span>

        {/* Heading */}
        <h2 className="why-cta__title">
          Experience the <span>KPRT Difference</span>
        </h2>

        {/* Subtitle */}
        <p className="why-cta__subtitle">
          Join 500+ manufacturers who have made KPRT their trusted quality
          inspection partner. Your first inspection request is one click away.
        </p>

        {/* Action Buttons */}
        <div className="why-cta__actions">
          <Link href="/contact" className="why-cta__btn-primary">
            <i className="fas fa-file-invoice" />
            Get a Free Quote
          </Link>
          <Link href="/services" className="why-cta__btn-outline">
            <i className="fas fa-calendar-check" />
            Book an Inspection
          </Link>
        </div>

        {/* Contact cards */}
        <div className="why-cta__cards">
          {contactCards.map((card) => (
            <a key={card.label} href={card.href} className="why-cta__card">
              <div className="why-cta__card-icon">
                <i className={`${card.icon.startsWith("fab") ? card.icon : `fas ${card.icon}`}`} />
              </div>
              <div className="why-cta__card-info">
                <div className="why-cta__card-label">{card.label}</div>
                <div className="why-cta__card-value">{card.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="why-cta__blob why-cta__blob--1" />
      <div className="why-cta__blob why-cta__blob--2" />
    </section>
  );
}
