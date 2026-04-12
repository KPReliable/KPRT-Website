"use client";

import React, { useState } from "react";
import Link from "next/link";

/* ============================================================
    DATA
   ============================================================ */
const TRAINING_TYPES = [
  {
    id: "onsite",
    number: "01",
    title: "Technical Training",
    badge: "At Your Facility",
    description:
      "Our certified trainers come directly to your manufacturing floor. Real-world, hands-on sessions conducted on your equipment, your processes, and your team — ensuring immediate applicability with zero theory-practice gap.",
    outcomes: [
      "Zero disruption to production schedule",
      "Custom checklist aligned to your SOPs",
      "Team assessed on actual work environment",
    ],
    duration: "2–5 Days",
    groupSize: "Up to 20 participants",
  },
  {
    id: "virtual",
    number: "02",
    title: "IBT Training",
    badge: "Remote Sessions",
    description:
      "Instructor-led live sessions delivered via video conferencing. Structured modules, interactive Q&A, and digital workbooks — full training rigour without travel cost, accessible across all 28 states.",
    outcomes: [
      "Accessible pan-India from any location",
      "Recorded sessions for future reference",
      "Assessment and certification on completion",
    ],
    duration: "1–3 Days",
    groupSize: "Up to 50 participants",
  },
  {
    id: "certification",
    number: "03",
    title: "NPD Training",
    badge: "Industry Recognised",
    description:
      "Structured multi-day programmes with formal assessment, practical tests, and an industry-recognised certificate. Ideal for quality engineers, auditors, and team leads who need verified credentials.",
    outcomes: [
      "ISO & IATF 16949 aligned curriculum",
      "Written + practical examination",
      "Certificate valid for 3 years",
    ],
    duration: "3–7 Days",
    groupSize: "Up to 15 participants",
  },
];

const TrainingSection: React.FC = () => {
  const [active, setActive] = useState(TRAINING_TYPES[0].id);
  
  // Find current index to determine even/odd logic
  const activeIndex = TRAINING_TYPES.findIndex((t) => t.id === active);
  const current = TRAINING_TYPES[activeIndex];
  const isOdd = activeIndex % 2 !== 0;

  return (
    <section className="w-full bg-[#1a3460] py-20 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* ---- Header ---- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#00a2e9] mb-3">
              Build Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              Training Programmes
            </h2>
            <p className="mt-4 text-base text-white/45 max-w-lg leading-relaxed">
              We don&apos;t just inspect — we transfer knowledge. Our training
              programmes permanently raise your team&apos;s quality capability.
            </p>
          </div>
          <Link
            href="/services/training"
            className="flex-shrink-0 self-start md:self-end inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/20 px-5 py-2.5 hover:border-[#00a2e9] hover:text-[#00a2e9] transition-colors duration-200 no-underline"
          >
            View all programmes
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ---- Tabs ---- */}
        <div className="flex justify-between items-stretch border-b border-white/8 mb-16 gap-0 overflow-x-auto scrollbar-hide">
          {TRAINING_TYPES.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={[
                  "flex items-center gap-5 px-8 py-5 shrink-0 border-b-2 transition-all duration-300 text-left",
                  isActive ? "border-[#00a2e9] text-white" : "border-transparent text-white/35 hover:text-white/60",
                ].join(" ")}
              >
                <p className="text-base font-semibold whitespace-nowrap">{t.title}</p>
              </button>
            );
          })}
        </div>

        {/* ============================================================
            ALTERNATING CONTENT PANEL
        ============================================================ */}
        <div key={current.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
          
          {/* Main Content Column */}
          <div className={`lg:col-span-7 flex flex-col gap-7 ${isOdd ? "lg:order-last" : "lg:order-first"}`}>
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#00a2e9] mb-2">
                {current.badge}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {current.title}
              </h3>
            </div>

            <p className="text-lg text-white/60 leading-relaxed">
              {current.description}
            </p>

            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/25 mb-4">
                Key Outcomes
              </p>
              <ul className="flex flex-col gap-4">
                {current.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-4">
                    <span className="mt-1.5 w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[#00a2e9]/12 border border-[#00a2e9]/25 rounded-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#00a2e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="10" height="10">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-base text-white/70">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/services/training/${current.id}`}
              className="inline-flex items-center gap-2 text-base font-semibold text-[#00a2e9] hover:text-white transition-colors mt-4 no-underline group"
            >
              Learn more about {current.title}
              <svg className="group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Spacer for 12-column grid precision */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Meta Card Column (Enquiry) */}
          <div className={`lg:col-span-4 flex flex-col gap-4 ${isOdd ? "lg:order-first" : "lg:order-last"}`}>
            <div className="border border-white/[0.07] bg-white/[0.03] p-8 rounded-xl backdrop-blur-sm">
              <div className="space-y-8">
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/25">Duration</p>
                  <p className="text-3xl font-bold text-white">{current.duration}</p>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/25">Group Size</p>
                  <p className="text-3xl font-bold text-white">{current.groupSize}</p>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/25">Format</p>
                  <p className="text-lg text-[#00a2e9] font-medium">{current.badge}</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-10 w-full flex items-center justify-center gap-2 bg-[#00a2e9] hover:bg-[#284c87] text-white text-sm font-bold py-4 rounded-lg transition-all shadow-lg shadow-[#00a2e9]/10 no-underline"
              >
                Enquire About This Programme
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrainingSection;