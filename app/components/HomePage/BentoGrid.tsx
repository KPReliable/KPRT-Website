"use client";

import React from "react";

const BentoGrid = () => {
  return (
    <section
      className="w-full px-6"
      style={{
        background: "var(--color-bg)",
        padding: "var(--section-py) 0",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]"
        style={{ maxWidth: "var(--max-w)" }}
      >

        {/* 🔥 MAIN CARD */}
        <div
          className="col-span-2 row-span-2 rounded-3xl p-6 flex flex-col justify-between transition hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
            color: "var(--color-white)",
          }}
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              AI-powered Insights
            </h2>
            <p className="text-sm opacity-90">
              Get real-time analytics and smart predictions.
            </p>
          </div>
          <div className="text-sm opacity-70">Explore →</div>
        </div>

        {/* CARD */}
        <div
          className="rounded-3xl p-6 backdrop-blur-xl border transition hover:scale-[1.02]"
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
          className="rounded-3xl p-6 backdrop-blur-xl border transition hover:scale-[1.02]"
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
        <div
          className="col-span-2 rounded-3xl p-6 flex justify-between items-center transition hover:scale-[1.02]"
          style={{
            background: "var(--color-bg-alt)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div>
            <h3 className="text-lg font-medium mb-1" style={{ color: "var(--color-text)" }}>
              Integrations
            </h3>
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Connect with 100+ tools seamlessly.
            </p>
          </div>
          <div style={{ color: "var(--color-secondary)" }} className="text-xl">
            🔗
          </div>
        </div>

        {/* SMALL CARD */}
        <div
          className="rounded-3xl p-6 transition hover:scale-[1.03]"
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
          className="rounded-3xl p-6 transition hover:scale-[1.03]"
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