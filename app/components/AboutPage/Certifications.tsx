import { certifications } from "../../data/aboutData";

export default function Certifications() {
  return (
    <section className="certifications">
      <div className="certifications__inner">
        {/* Header */}
        <div className="certifications__header">
          <span className="section-eyebrow">Standards We Follow</span>
          <h2 className="section-title">
            Certifications & <span>Accreditations</span>
          </h2>
          <p className="section-subtitle">
            Our inspection and audit services are aligned with globally
            recognized quality standards — so your supply chain meets the
            highest benchmarks.
          </p>
        </div>

        {/* Cert Cards */}
        <div className="certifications__grid">
          {certifications.map((cert) => (
            <div key={cert.title} className="certifications__card">
              <div className="certifications__card-icon">
                <i className={`fas ${cert.icon}`} />
              </div>
              <div className="certifications__card-body">
                <div className="certifications__card-title">{cert.title}</div>
                <div className="certifications__card-subtitle">
                  {cert.subtitle}
                </div>
                <p className="certifications__card-desc">{cert.description}</p>
              </div>
              <div className="certifications__card-badge">
                <i className="fas fa-check-circle" />
                Compliant
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="certifications__trust-strip">
          <div className="certifications__trust-item">
            <i className="fas fa-car" />
            <span>Automotive OEMs</span>
          </div>
          <div className="certifications__trust-divider" />
          <div className="certifications__trust-item">
            <i className="fas fa-industry" />
            <span>Heavy Machinery</span>
          </div>
          <div className="certifications__trust-divider" />
          <div className="certifications__trust-item">
            <i className="fas fa-microchip" />
            <span>Electronics</span>
          </div>
          <div className="certifications__trust-divider" />
          <div className="certifications__trust-item">
            <i className="fas fa-box" />
            <span>Consumer Goods</span>
          </div>
          <div className="certifications__trust-divider" />
          <div className="certifications__trust-item">
            <i className="fas fa-cogs" />
            <span>Engineering & Castings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
