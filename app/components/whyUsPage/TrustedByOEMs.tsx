import { oemClients } from "../../data/whyData";

const industryColors: Record<string, string> = {
  Automotive: "oem-badge--auto",
  Electronics: "oem-badge--elec",
  "Heavy Machinery": "oem-badge--heavy",
  Metals: "oem-badge--metal",
};

// Duplicate array for seamless infinite marquee
const marqueeClients = [...oemClients, ...oemClients];

export default function TrustedByOEMs() {
  return (
    <section className="trusted-oems">
      <div className="trusted-oems__inner">
        {/* Header */}
        <div className="trusted-oems__header">
          <span className="section-eyebrow">Trusted By</span>
          <h2 className="section-title">
            India&apos;s Top <span>OEMs & Manufacturers</span>
          </h2>
          <p className="section-subtitle">
            When quality is non-negotiable, India&apos;s most demanding OEMs
            and global Tier-1 suppliers choose KPRT.
          </p>
        </div>

        {/* Marquee */}
        <div className="trusted-oems__marquee-wrap">
          <div className="trusted-oems__marquee">
            {marqueeClients.map((client, i) => (
              <div key={`${client.name}-${i}`} className="trusted-oems__logo-card">
                <div className="trusted-oems__logo-avatar">{client.initials}</div>
                <div className="trusted-oems__logo-info">
                  <div className="trusted-oems__logo-name">{client.name}</div>
                  <span className={`oem-badge ${industryColors[client.industry] ?? ""}`}>
                    {client.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="trusted-oems__strip">
          <div className="trusted-oems__strip-item">
            <i className="fas fa-car" />
            <strong>6+</strong>
            <span>Automotive OEMs</span>
          </div>
          <div className="trusted-oems__strip-divider" />
          <div className="trusted-oems__strip-item">
            <i className="fas fa-industry" />
            <strong>5+</strong>
            <span>Industry Sectors</span>
          </div>
          <div className="trusted-oems__strip-divider" />
          <div className="trusted-oems__strip-item">
            <i className="fas fa-map-marker-alt" />
            <strong>Pan-India</strong>
            <span>Coverage</span>
          </div>
          <div className="trusted-oems__strip-divider" />
          <div className="trusted-oems__strip-item">
            <i className="fas fa-star" />
            <strong>90%+</strong>
            <span>Repeat Engagement</span>
          </div>
        </div>
      </div>
    </section>
  );
}
