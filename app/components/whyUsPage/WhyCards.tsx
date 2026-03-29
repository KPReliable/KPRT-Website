
import { whyCards } from "../../data/whyData";

export default function WhyCards() {
  return (
    <section className="why-cards">
      <div className="why-cards__inner">
        {/* Header */}
        <div className="why-cards__header">
          <span className="section-eyebrow">Why KPRT</span>
          <h2 className="section-title">
            Six Reasons to <span>Choose Us</span>
          </h2>
          <p className="section-subtitle">
            Every advantage below is backed by 17+ years of documented results
            — not just a marketing claim.
          </p>
        </div>

        {/* Grid */}
        <div className="why-cards__grid">
          {whyCards.map((card) => (
            <div
              key={card.title}
              className={`why-card why-card--${card.accent}`}
            >
              {/* Stat badge */}
              <div className="why-card__stat-badge">
                {card.stat}
                <span>{card.statSuffix}</span>
              </div>

              {/* Icon */}
              <div className="why-card__icon">
                <i className={`fas ${card.icon}`} />
              </div>

              {/* Title */}
              <h3 className="why-card__title">{card.title}</h3>

              {/* Description */}
              <p className="why-card__desc">{card.description}</p>

              {/* Points */}
              <ul className="why-card__points">
                {card.points.map((pt: string) => (
                  <li key={pt}>
                    <i className="fas fa-check-circle" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
