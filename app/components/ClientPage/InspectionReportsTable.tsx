"use client";

import { useState } from "react";
import { inspectionReports } from "./portalData";
import { InspectionStatus, ReportStatus } from "@/types/portal";

const statusConfig: Record<InspectionStatus, { label: string; className: string }> = {
  completed:   { label: "Completed",   className: "badge--green"  },
  "in-progress": { label: "In Progress", className: "badge--blue"   },
  scheduled:   { label: "Scheduled",   className: "badge--amber"  },
  pending:     { label: "Pending",     className: "badge--gray"   },
};

const reportConfig: Record<ReportStatus, { label: string; icon: string; className: string }> = {
  available:  { label: "Download",   icon: "fa-download",  className: "report-btn--available" },
  processing: { label: "Processing", icon: "fa-spinner",   className: "report-btn--processing" },
  pending:    { label: "Pending",    icon: "fa-clock",     className: "report-btn--pending" },
};

const filters = ["All", "PDI", "SQI", "IPQI", "AUDIT"];

export default function InspectionReportsTable() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = inspectionReports.filter((r) => {
    const matchType = activeFilter === "All" || r.type === activeFilter;
    const matchSearch =
      r.supplier.toLowerCase().includes(search.toLowerCase()) ||
      r.id.toLowerCase().includes(search.toLowerCase()) ||
      r.title.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <section className="portal-reports">
      {/* Header */}
      <div className="portal-reports__header">
        <div>
          <h2 className="portal-section-title">Inspection Reports</h2>
          <p className="portal-section-sub">Track and download all inspection reports</p>
        </div>
        <div className="portal-reports__controls">
          <div className="portal-search">
            <i className="fas fa-search portal-search__icon" />
            <input
              type="text"
              placeholder="Search by supplier, ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="portal-search__input"
            />
          </div>
          <div className="portal-filters">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`portal-filter-btn ${
                  activeFilter === f ? "portal-filter-btn--active" : ""
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="portal-table-wrap">
        <table className="portal-table">
          <thead>
            <tr>
              <th>Report ID</th>
              <th>Inspection Type</th>
              <th>Supplier</th>
              <th>Date</th>
              <th>Inspector</th>
              <th>PPM</th>
              <th>Status</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="portal-table__empty">
                  <i className="fas fa-inbox" />
                  No records found
                </td>
              </tr>
            ) : (
              filtered.map((report) => {
                const status = statusConfig[report.status];
                const rep = reportConfig[report.reportStatus];
                return (
                  <tr key={report.id} className="portal-table__row">
                    <td>
                      <span className="portal-table__id">{report.id}</span>
                    </td>
                    <td>
                      <span className="portal-table__type-badge">
                        {report.type}
                      </span>
                      <span className="portal-table__type-label">
                        {report.title}
                      </span>
                    </td>
                    <td className="portal-table__supplier">{report.supplier}</td>
                    <td className="portal-table__date">{report.date}</td>
                    <td className="portal-table__inspector">{report.inspector}</td>
                    <td>
                      {report.ppm !== null ? (
                        <span
                          className={`portal-table__ppm ${
                            report.ppm === 0
                              ? "portal-table__ppm--zero"
                              : report.ppm < 25
                              ? "portal-table__ppm--low"
                              : "portal-table__ppm--high"
                          }`}
                        >
                          {report.ppm}
                        </span>
                      ) : (
                        <span className="portal-table__ppm--na">—</span>
                      )}
                    </td>
                    <td>
                      <span className={`badge ${status.className}`}>
                        {status.label}
                      </span>
                    </td>
                    <td>
                      <button
                        className={`report-btn ${rep.className}`}
                        disabled={report.reportStatus !== "available"}
                      >
                        <i className={`fas ${rep.icon}`} />
                        {rep.label}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
