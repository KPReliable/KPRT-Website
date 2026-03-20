import { certificates } from "./portalData";

const statusConfig = {
  valid:    { label: "Valid",     className: "badge--green",  icon: "fa-circle-check"   },
  expiring: { label: "Expiring",  className: "badge--amber",  icon: "fa-clock"          },
  expired:  { label: "Expired",   className: "badge--red",    icon: "fa-circle-xmark"   },
};

export default function CertificatesPanel() {
  return (
    <section className="portal-certs">
      <div className="portal-certs__header">
        <h2 className="portal-section-title">Certificates</h2>
        <p className="portal-section-sub">Download your quality certificates</p>
      </div>
      <div className="portal-certs__list">
        {certificates.map((cert) => {
          const config = statusConfig[cert.status];
          return (
            <div key={cert.id} className="cert-card">
              <div className="cert-card__icon">
                <i className="fas fa-certificate" />
              </div>
              <div className="cert-card__body">
                <div className="cert-card__top">
                  <h3 className="cert-card__name">{cert.name}</h3>
                  <span className={`badge ${config.className}`}>
                    <i className={`fas ${config.icon}`} />
                    {config.label}
                  </span>
                </div>
                <p className="cert-card__supplier">
                  <i className="fas fa-industry" /> {cert.supplier}
                </p>
                <div className="cert-card__dates">
                  <span>
                    <i className="fas fa-calendar-plus" /> Issued: {cert.issuedDate}
                  </span>
                  <span>
                    <i className="fas fa-calendar-xmark" /> Expires: {cert.expiryDate}
                  </span>
                </div>
              </div>
              <button
                className={`cert-download-btn ${
                  cert.status === "expired" ? "cert-download-btn--disabled" : ""
                }`}
                disabled={cert.status === "expired"}
              >
                <i className="fas fa-download" />
                Download
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
