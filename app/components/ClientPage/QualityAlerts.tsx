import { qualityAlerts } from "./portalData";
import { AlertSeverity } from "@/app/types/portal";

const severityConfig: Record<AlertSeverity, { icon: string; className: string; label: string }> = {
  critical: { icon: "fa-circle-exclamation", className: "alert-card--critical", label: "Critical" },
  warning:  { icon: "fa-triangle-exclamation", className: "alert-card--warning", label: "Warning" },
  info:     { icon: "fa-circle-info",          className: "alert-card--info",    label: "Info" },
};

export default function QualityAlerts() {
  return (
    <section className="portal-alerts">
      <div className="portal-alerts__header">
        <h2 className="portal-section-title">Quality Alerts</h2>
        <p className="portal-section-sub">Active alerts requiring your attention</p>
      </div>
      <div className="portal-alerts__list">
        {qualityAlerts.map((alert) => {
          const config = severityConfig[alert.severity];
          return (
            <div key={alert.id} className={`alert-card ${config.className}`}>
              <div className="alert-card__icon">
                <i className={`fas ${config.icon}`} />
              </div>
              <div className="alert-card__body">
                <div className="alert-card__top">
                  <span className={`alert-badge alert-badge--${alert.severity}`}>
                    {config.label}
                  </span>
                  <span className="alert-card__date">{alert.date}</span>
                </div>
                <h3 className="alert-card__title">{alert.title}</h3>
                <p className="alert-card__supplier">
                  <i className="fas fa-building" /> {alert.supplier}
                </p>
                <p className="alert-card__desc">{alert.description}</p>
              </div>
              <button className="alert-card__action">
                View Details <i className="fas fa-arrow-right" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
