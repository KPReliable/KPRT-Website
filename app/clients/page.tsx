import type { Metadata } from "next";
import CertificatesPanel from "../components/ClientPage/CertificatesPanel";
import InspectionReportsTable from "../components/ClientPage/InspectionReportsTable";
import PortalHeader from "../components/ClientPage/PortalHeader";
import PortalStats from "../components/ClientPage/PortalStats";
import QualityAlerts from "../components/ClientPage/QualityAlerts";
import "@/app/styles/portal.css"
export const metadata: Metadata = {
  title: "Client Portal | KP Reliable — Inspection & Quality Services",
  description:
    "Securely access your inspection reports, quality alerts, and certificates through the KPRT Client Portal.",
};

export default function ClientPortalPage() {
  return (
    <div className="portal-layout">
      {/* Portal Header */}
      <PortalHeader
        clientName="Rahul Mehta"
        companyName="Maruti Suzuki India Ltd."
      />

      {/* Main Content */}
      <main className="portal-main">
        {/* Welcome Banner */}
        <div className="portal-welcome">
          <div className="portal-welcome__inner">
            <div className="portal-welcome__text">
              <h1 className="portal-welcome__title">
                Welcome back, <span>Rahul</span> 👋
              </h1>
              <p className="portal-welcome__sub">
                Maruti Suzuki India Ltd. · Last login: 18 Mar 2025, 10:42 AM
              </p>
            </div>
            <button className="portal-welcome__request-btn">
              <i className="fas fa-plus" />
              New Inspection Request
            </button>
          </div>
        </div>

        {/* Content wrapper */}
        <div className="portal-content">
          {/* Stats Row */}
          <PortalStats />

          {/* Two-column layout: Reports + Sidebar */}
          <div className="portal-grid">
            {/* Left: Reports table */}
            <div className="portal-grid__main">
              <InspectionReportsTable />
            </div>

            {/* Right: Alerts + Certificates */}
            <aside className="portal-grid__aside">
              <QualityAlerts />
              <CertificatesPanel />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
