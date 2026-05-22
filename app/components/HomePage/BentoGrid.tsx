"use client";

import React from "react";

const BentoGrid = () => {
  return (
    <section
      className="w-full px-4 sm:px-6"
      style={{
        background: "var(--color-bg)",
        padding: "var(--section-py) 0",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Container Frame */}
      {/* CHANGED: Swapped strict column bounds for responsive step parameters with fluid mobile row tracking */}
      <div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-auto sm:auto-rows-[180px]"
        style={{ maxWidth: "var(--max-w)" }}
      >

        {/* 🔥 MAIN CARD */}
        {/* CHANGED: Made layout span properties responsive (`col-span-1 sm:col-span-2 sm:row-span-2`) */}
        <div
          className="col-span-1 sm:col-span-2 sm:row-span-2 rounded-3xl p-6 flex flex-col justify-between min-h-[220px] sm:min-h-auto transition hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            color: "var(--color-white)",
          }}
        >
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              AI-powered Insights
            </h2>
            <p className="text-sm opacity-90">
              Get real-time analytics and smart predictions.
            </p>
          </div>
          <div className="text-sm opacity-70 text-left">Explore →</div>
        </div>

        {/* CARD */}
        <div
          className="rounded-3xl p-6 backdrop-blur-xl border transition hover:scale-[1.02] text-left"
          style={{
            background: "rgba(255,255,255,0.6)",
            borderColor: "var(--color-border)",
          }}
        >
          <h3 className="text-lg font-medium mb-2" style={{ color: "var(--color-text)" }}>
            Automation
          </h3>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Streamline workflows with ease.
          </p>
        </div>

        {/* CARD */}
        <div
          className="rounded-3xl p-6 backdrop-blur-xl border transition hover:scale-[1.02] text-left"
          style={{
            background: "rgba(255,255,255,0.6)",
            borderColor: "var(--color-border)",
          }}
        >
          <h3 className="text-lg font-medium mb-2" style={{ color: "var(--color-text)" }}>
            Security
          </h3>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Enterprise-grade protection.
          </p>
        </div>

        {/* WIDE CARD */}
        {/* CHANGED: Made horizontal width mapping responsive (`col-span-1 sm:col-span-2`) */}
        <div
          className="col-span-1 sm:col-span-2 rounded-3xl p-6 flex justify-between items-center transition hover:scale-[1.02] text-left"
          style={{
            background: "var(--color-bg-alt)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div className="overflow-hidden">
            <h3 className="text-lg font-medium mb-1" style={{ color: "var(--color-text)" }}>
              Integrations
            </h3>
            <p className="text-sm truncate" style={{ color: "var(--color-text-muted)" }}>
              Connect with 100+ tools seamlessly.
            </p>
          </div>
          <div style={{ color: "var(--color-secondary)" }} className="text-xl flex-shrink-0 ml-4">
            🔗
          </div>
        </div>

        {/* SMALL CARD */}
        <div
          className="rounded-3xl p-6 transition hover:scale-[1.03] text-left"
          style={{
            background: "var(--color-primary-light)",
          }}
        >
          <h3 className="text-lg font-medium mb-2" style={{ color: "var(--color-primary-dark)" }}>
            Analytics
          </h3>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Visual dashboards for insights.
          </p>
        </div>

        {/* SMALL CARD */}
        <div
          className="rounded-3xl p-6 transition hover:scale-[1.03] text-left"
          style={{
            background: "var(--color-primary-light)",
          }}
        >
          <h3 className="text-lg font-medium mb-2" style={{ color: "var(--color-primary-dark)" }}>
            Reports
          </h3>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Export data instantly.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;