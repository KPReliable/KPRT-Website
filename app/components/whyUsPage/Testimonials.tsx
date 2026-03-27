import { testimonials } from "../../data/whyData";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        {/* Header */}
        <div className="testimonials__header">
          <span className="section-eyebrow section-eyebrow--light">
            Client Voices
          </span>
          <h2 className="section-title testimonials__title">
            What Our <span>Clients Say</span>
          </h2>
          <p className="section-subtitle testimonials__subtitle">
            Real feedback from quality leaders who trust KPRT to protect their
            supply chains every day.
          </p>
        </div>

        {/* Cards */}
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              {/* Quote mark */}
              <div className="testimonial-card__quote-mark">
                <i className="fas fa-quote-left" />
              </div>

              {/* Result badge */}
              <div className="testimonial-card__result-badge">
                <i className="fas fa-chart-line" />
                {t.result}
              </div>

              {/* Quote */}
              <blockquote className="testimonial-card__quote">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div className="testimonial-card__author-info">
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">
                    {t.title}
                    <span> · {t.company}</span>
                  </div>
                </div>
              </div>

              {/* Star rating */}
              <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fas fa-star" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
