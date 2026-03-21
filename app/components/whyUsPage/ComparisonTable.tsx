import { comparisonRows } from "../../data/whyData";

export default function ComparisonTable() {
  return (
    <section className="comparison">
      <div className="comparison__inner">
        {/* Header */}
        <div className="comparison__header">
          <span className="section-eyebrow">KPRT vs Others</span>
          <h2 className="section-title">
            How We <span>Compare</span>
          </h2>
          <p className="section-subtitle">
            A side-by-side look at what sets KPRT apart from typical inspection
            agencies in India.
          </p>
        </div>

        {/* Table */}
        <div className="comparison__table-wrap">
          <table className="comparison__table">
            <thead>
              <tr>
                <th className="comparison__th comparison__th--feature">
                  Feature
                </th>
                <th className="comparison__th comparison__th--kprt">
                  <div className="comparison__th-kprt-inner">
                    <div className="comparison__th-badge">
                      <i className="fas fa-shield-alt" /> KPRT
                    </div>
                    <span>Recommended</span>
                  </div>
                </th>
                <th className="comparison__th comparison__th--others">
                  Other Agencies
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "comparison__tr--even" : ""}>
                  <td className="comparison__td comparison__td--feature">
                    {row.feature}
                  </td>
                  <td className="comparison__td comparison__td--kprt">
                    {row.kprt === true ? (
                      <span className="comparison__check">
                        <i className="fas fa-check-circle" />
                        Yes
                      </span>
                    ) : (
                      <span className="comparison__partial">
                        <i className="fas fa-info-circle" />
                        {row.kprt}
                      </span>
                    )}
                  </td>
                  <td className="comparison__td comparison__td--others">
                    {row.others === false ? (
                      <span className="comparison__cross">
                        <i className="fas fa-times-circle" />
                        No
                      </span>
                    ) : (
                      <span className="comparison__partial">
                        <i className="fas fa-info-circle" />
                        {row.others}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
