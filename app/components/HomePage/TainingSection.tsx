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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <defs>
          <linearGradient id="g-onsite" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60b4ff" />
            <stop offset="100%" stopColor="#00a2e9" />
          </linearGradient>
        </defs>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          fill="url(#g-onsite)" opacity="0.18" stroke="url(#g-onsite)" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="#60d4ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <defs>
          <linearGradient id="g-virtual" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60b4ff" />
            <stop offset="100%" stopColor="#00a2e9" />
          </linearGradient>
        </defs>
        <rect x="2" y="3" width="20" height="14" rx="2"
          fill="url(#g-virtual)" opacity="0.18" stroke="url(#g-virtual)" strokeWidth="1.6" />
        <path d="M8 21h8M12 17v4" stroke="#60d4ff" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="10" r="3" stroke="#60d4ff" strokeWidth="1.4" />
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
        <defs>
          <linearGradient id="g-cert" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#60b4ff" />
            <stop offset="100%" stopColor="#00a2e9" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="8" r="6"
          fill="url(#g-cert)" opacity="0.18" stroke="url(#g-cert)" strokeWidth="1.6" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"
          stroke="#60d4ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8l2 2 4-4" stroke="#60d4ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  { step: "01", title: "Needs Assessment", description: "We evaluate your team's current skill gaps and align training objectives to your quality targets." },
  { step: "02", title: "Custom Curriculum", description: "A tailored training plan is designed around your industry, processes, and compliance requirements." },
  { step: "03", title: "Training Delivery", description: "Certified trainers deliver the programme — on-site, virtual, or blended based on your preference." },
  { step: "04", title: "Assessment & Cert", description: "Participants are assessed through practical tests and receive an industry-recognised certificate." },
];

/* ============================================================
   COMPONENT
   ============================================================ */
const TrainingSection: React.FC = () => {
  const [active, setActive] = useState(TRAINING_TYPES[0].id);
  const current = TRAINING_TYPES.find((t) => t.id === active)!;

  return (
    <section className="w-full bg-[#1a3460] py-20 px-6">
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ============================================================
            HORIZONTAL TABS
        ============================================================ */}
        <div className="flex justify-between items-stretch border-b border-white/8 mb-10 gap-0 overflow-x-auto">
          {TRAINING_TYPES.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={[
                  "flex  items-center gap-5 px-8 py-5 shrink-0 border-b-2 transition-all duration-200 text-left",
                  isActive
                    ? "border-[#00a2e9] text-white"
                    : "border-transparent text-white/35 hover:text-white/60",
                ].join(" ")}
              >
                {/* 3D Icon */}
              

                <div className="text-left">
            
                  <p className={[
                    "text-base font-semibold whitespace-nowrap transition-colors duration-200",
                    isActive ? "text-white" : "",
                  ].join(" ")}>
                    {t.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ============================================================
            CONTENT PANEL — full width below tabs
        ============================================================ */}
        <div
          key={current.id}
          className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mb-20"
        >
          {/* Left — main content */}
          <div className="flex flex-col gap-7">

            {/* Badge + title */}
            <div>
              <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#00a2e9] mb-2">
                {current.badge}
              </span>
              <h3 className="text-3xl font-bold text-white leading-tight">
                {current.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-lg text-white/60 leading-relaxed">
              {current.description}
            </p>

            {/* Outcomes */}
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/25 mb-4">
                Key Outcomes
              </p>
              <ul className="flex flex-col gap-4">
                {current.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-4">
                    <span className="mt-1 w-5 h-5 flex-shrink-0 flex items-center justify-center bg-[#00a2e9]/12 border border-[#00a2e9]/25">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#00a2e9"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        width="11" height="11">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-base text-white/65">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn more link */}
            <Link
              href={`/services/training/${current.id}`}
              className="inline-flex items-center gap-2 text-base font-semibold text-[#00a2e9] hover:text-white transition-colors duration-200 no-underline mt-2"
            >
              Learn more about {current.title}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right — meta card */}
          <div className="flex flex-col gap-4">

            {/* Duration + group size */}
            <div className="border border-white/[0.07] bg-white/[0.03] p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/25">
                  Duration
                </p>
                <p className="text-2xl font-bold text-white">{current.duration}</p>
              </div>
              <div className="h-px bg-white/[0.06]" />
              <div className="flex flex-col gap-1">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/25">
                  Group Size
                </p>
                <p className="text-2xl font-bold text-white">{current.groupSize}</p>
              </div>
              <div className="h-px bg-white/[0.06]" />
              <div className="flex flex-col gap-1">
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/25">
                  Format
                </p>
                <p className="text-base text-white/60">{current.badge}</p>
              </div>
            </div>

            {/* Enquire CTA */}
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 bg-[#00a2e9] hover:bg-[#284c87] text-white text-sm font-semibold py-3.5 transition-colors duration-200 no-underline"
            >
              Enquire About This Programme
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

          </div>
        </div>

        {/* ============================================================
            PROCESS STRIP
        ============================================================ */}
       
      </div>
    </section>
  );
};

export default TrainingSection;