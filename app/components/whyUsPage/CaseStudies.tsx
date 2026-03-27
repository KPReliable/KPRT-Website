import { caseStudies } from "../../data/whyData";

export default function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="case-studies__inner">
        {/* Header */}
        <div className="case-studies__header">
          <span className="section-eyebrow">Proven Results</span>
          <h2 className="section-title">
            Real Client <span>Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Numbers don&apos;t lie. Here&apos;s what KPRT has delivered for
            clients across India&apos;s key manufacturing sectors.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="case-studies__grid">
          {caseStudies.map((cs) => (
            <div key={cs.client} className="case-study-card">
              {/* Header strip */}
              <div className="case-study-card__header">
                <div className="case-study-card__icon">
                  <i className={`fas ${cs.icon}`} />
                </div>
                <div>
                  <div className="case-study-card__industry">{cs.industry}</div>
                  <div className="case-study-card__client">{cs.client}</div>
                </div>
              </div>

              {/* Challenge */}
              <div className="case-study-card__section">
                <div className="case-study-card__section-label">
                  <i className="fas fa-exclamation-triangle" /> Challenge
                </div>
                <p className="case-study-card__section-text">{cs.challenge}</p>
              </div>

              {/* Divider */}
              <div className="case-study-card__divider" />

              {/* Result */}
              <div className="case-study-card__section">
                <div className="case-study-card__section-label case-study-card__section-label--result">
                  <i className="fas fa-check-circle" /> KPRT Solution & Result
                </div>
                <p className="case-study-card__section-text">{cs.result}</p>
              </div>

              {/* Metrics */}
              <div className="case-study-card__metrics">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="case-study-card__metric">
                    <div className="case-study-card__metric-value">{m.value}</div>
                    <div className="case-study-card__metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
