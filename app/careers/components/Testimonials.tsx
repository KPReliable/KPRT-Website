import { testimonials } from "../data/careersData";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="careers-inner">
        <div className="careers-section-head">
          <span className="careers-section-tag">Employee Stories</span>
          <h2 className="careers-section-title">What Our Team Says</h2>
          <p className="careers-section-sub">
            Hear from the people who make quality happen every day.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-card__quote-mark">&ldquo;</div>
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__reviewer">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div className="testimonial-card__info">
                  <strong className="testimonial-card__name">{t.name}</strong>
                  <span className="testimonial-card__role">
                    {t.role} · {t.tenure}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
