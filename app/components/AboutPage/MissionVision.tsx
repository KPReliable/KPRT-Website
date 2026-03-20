export default function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="mission-vision__inner">
        {/* Section Header */}
        <div className="mission-vision__header">
          <span className="section-eyebrow">Our Purpose</span>
          <h2 className="section-title">
            Mission & <span>Vision</span>
          </h2>
        </div>

        {/* Cards Row */}
        <div className="mission-vision__grid">
          {/* Mission */}
          <div className="mission-vision__card mission-vision__card--mission">
            <div className="mission-vision__card-icon">
              <i className="fas fa-bullseye" />
            </div>
            <div className="mission-vision__card-tag">Our Mission</div>
            <h3 className="mission-vision__card-title">
              Minimize & Eliminate Poor Quality Cost
            </h3>
            <p className="mission-vision__card-body">
              To deliver unbiased, independent inspection and quality assurance
              services that minimize poor quality costs, prevent defects at
              source, and ensure near-zero PPM at our clients&apos; customer
              end — through transparency, reliability, and zero conflict of
              interest.
            </p>
            <ul className="mission-vision__card-list">
              <li>
                <i className="fas fa-check" />
                100% impartial inspection reporting
              </li>
              <li>
                <i className="fas fa-check" />
                Near-zero PPM at customer end
              </li>
              <li>
                <i className="fas fa-check" />
                Preventive risk management over reactive fixes
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="mission-vision__card mission-vision__card--vision">
            <div className="mission-vision__card-icon">
              <i className="fas fa-eye" />
            </div>
            <div className="mission-vision__card-tag">Our Vision</div>
            <h3 className="mission-vision__card-title">
              India&apos;s Most Trusted Quality Partner
            </h3>
            <p className="mission-vision__card-body">
              To become the most trusted name in third-party quality inspection
              across India — recognized by OEMs, Tier-1, and Tier-2 suppliers
              for our unmatched independence, speed of deployment, and
              measurable impact on supply chain quality.
            </p>
            <ul className="mission-vision__card-list">
              <li>
                <i className="fas fa-check" />
                Preferred partner for India&apos;s top OEMs
              </li>
              <li>
                <i className="fas fa-check" />
                Pan-India coverage with same-day deployment
              </li>
              <li>
                <i className="fas fa-check" />
                Benchmark standard for inspection excellence
              </li>
            </ul>
          </div>

          {/* Core Promise */}
          <div className="mission-vision__card mission-vision__card--promise">
            <div className="mission-vision__card-icon">
              <i className="fas fa-handshake" />
            </div>
            <div className="mission-vision__card-tag">Our Promise</div>
            <h3 className="mission-vision__card-title">
              Zero Conflict. Complete Confidence.
            </h3>
            <p className="mission-vision__card-body">
              Every engagement with KPRT is governed by a single non-negotiable
              principle — complete independence. Our inspectors, auditors, and
              consultants have no financial interest in the outcome of any
              inspection, giving you findings you can trust unconditionally.
            </p>
            <div className="mission-vision__promise-badge">
              <i className="fas fa-shield-alt" />
              <span>Independence Guaranteed — Always</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
