import { milestones } from "../../data/aboutData";
import "@/app/styles/about.css"
export default function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="who-we-are__inner">
        {/* Left — text content */}
        <div className="who-we-are__content">
          <h1 className="section-eyebrow">Who We Are</h1>
          <h2 className="section-title">
            Independent Inspection.
            <br />
            <span>Proven Track Record.</span>
          </h2>
          <p className="who-we-are__body">
            Founded in 2008 as Reliable AES and rebranded as{" "}
            <strong>KP Reliable Technique India Pvt. Ltd. (KPRT)</strong> in
            2017, we have spent over 17 years building India&apos;s most trusted
            third-party inspection network.
          </p>
          <p className="who-we-are__body">
            Our core strength is independence — we have zero ties to any
            manufacturer or supplier. Every inspection, audit, and report we
            deliver carries the same guarantee: impartial findings you can act
            on with confidence.
          </p>
          <p className="who-we-are__body">
            Today, KPRT operates across Haryana, Gujarat, South India, and
            multiple other manufacturing hubs — with 650+ trained inspectors
            ready for rapid deployment to your supplier locations.
          </p>

          {/* Logo meaning */}
          <div className="who-we-are__logo-card">
            <div className="who-we-are__logo-icon">
              <i className="fas fa-sun" />
              <span>Q</span>
            </div>
            <div className="who-we-are__logo-text">
              <strong>Our Logo Meaning</strong>
              <p>
                The &ldquo;Q inside a sunrise&rdquo; represents Quality rising
                with reliability — a new dawn for unbiased inspection in Indian
                manufacturing.
              </p>
            </div>
          </div>
        </div>

        {/* Right — Timeline */}
        <div className="who-we-are__timeline">
          <div className="who-we-are__timeline-label">Our Journey</div>
          {milestones.map((item, index) => (
            <div key={item.year} className="who-we-are__milestone">
              <div className="who-we-are__milestone-year">{item.year}</div>
              <div className="who-we-are__milestone-connector">
                <div className="who-we-are__milestone-dot" />
                {index < milestones.length - 1 && (
                  <div className="who-we-are__milestone-line" />
                )}
              </div>
              <div className="who-we-are__milestone-content">
                <h4 className="who-we-are__milestone-title">{item.title}</h4>
                <p className="who-we-are__milestone-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
