import { portalStats } from "./portalData";
import "@/app/styles/portal.css"
export default function PortalStats() {
  return (
    <div className="portal-stats">
      {portalStats.map((stat) => (
        <div key={stat.label} className="portal-stat-card">
          <div className="portal-stat-card__icon">
            <i className={`fas ${stat.icon}`} />
          </div>
          <div className="portal-stat-card__body">
            <div className="portal-stat-card__label">{stat.label}</div>
            <div className="portal-stat-card__value">
              {stat.value}
              {stat.suffix && (
                <span className="portal-stat-card__suffix">{stat.suffix}</span>
              )}
            </div>
            {stat.trend && (
              <div
                className={`portal-stat-card__trend ${
                  stat.trendUp
                    ? "portal-stat-card__trend--up"
                    : "portal-stat-card__trend--down"
                }`}
              >
                <i
                  className={`fas ${
                    stat.trendUp ? "fa-arrow-trend-up" : "fa-triangle-exclamation"
                  }`}
                />
                {stat.trend}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
