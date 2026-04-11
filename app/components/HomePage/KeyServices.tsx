"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/app/constant/homepage.constants";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5z" />
    </svg>
  ),
};

const KeyServices: React.FC = () => {
  return (
    <section
      className="w-full px-6"
      style={{
        background: "var(--color-bg)",
        padding: "var(--section-py) 0",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "var(--max-w)" }}
      >

        {/* ✅ HEADER (UNCHANGED CONTENT) */}
        <div className="text-center mb-14">
          <span
            className="section-eyebrow"
            style={{ color: "var(--color-secondary)" }}
          >
            What We Do
          </span>

          <h2
            className="section-title"
            style={{ color: "var(--color-text)" }}
          >
            Our Core Services
          </h2>

          <p
            className="mt-3 max-w-xl mx-auto text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Comprehensive quality solutions designed for India manufacturing and supply chain landscape.
          </p>
        </div>

        {/* 🔥 BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[180px]">

          {SERVICES.map((service, i) => {
            const isLarge = i === 0;
            const isWide = i === 3;

            return (
              <Link
                key={service.id}
                href={service.href}
                className={`
                  relative rounded-3xl p-6 flex flex-col justify-between
                  transition-all duration-300 hover:scale-[1.02]
                  overflow-hidden
                  ${isLarge ? "col-span-2 row-span-2" : ""}
                  ${isWide ? "col-span-2" : ""}
                `}
                style={{
                  background: isLarge
                    ? "linear-gradient(135deg, var(--color-primary), var(--color-secondary))"
                    : "var(--color-bg-alt)",
                  border: isLarge ? "none" : "1px solid var(--color-border)",
                  color: isLarge ? "white" : "var(--color-text)",
                }}
              >

                {/* BG IMAGE (SUBTLE) */}
                {service.img && (
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url(${service.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                )}

                {/* CONTENT */}
                <div className="relative z-10">

                  <div
                    className="w-10 h-10 mb-4 flex items-center justify-center rounded-lg"
                    style={{
                      background: isLarge
                        ? "rgba(255,255,255,0.2)"
                        : "var(--color-primary-light)",
                      color: isLarge
                        ? "white"
                        : "var(--color-primary)",
                    }}
                  >
                    {SERVICE_ICONS[service.icon]}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p
                    className="text-sm"
                    style={{
                      color: isLarge
                        ? "rgba(255,255,255,0.85)"
                        : "var(--color-text-muted)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="relative z-10 mt-4 text-sm flex items-center gap-1 opacity-80">
                  Learn more →
                </div>

              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;