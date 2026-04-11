"use client";

import React from "react";

/* ============================================================
   Words to highlight in each line.
   Highlighted words get the primary blue colour + bold weight.
   Add or remove words freely from either array.
   ============================================================ */
const HEADING_HIGHLIGHTS = [
  "random sampling",
  "absolute assurance",
  "theoretical safety",
  "verified performance",
  "bridge",
  "design",
  "reality",
  "uncompromising quality",
];

const SUBHEADING_HIGHLIGHTS = [
  "zero-tolerance",
  "defects",
  "30%",
  "reduction",
  "total cost of quality",
  "proactive mechanical oversight",
];

/* ============================================================
   Helper — splits a sentence and wraps matched words in <mark>
   ============================================================ */
function highlight(text: string, words: string[]): React.ReactNode[] {
  // Build a regex that matches any of the highlight words (case-insensitive)
  const pattern = new RegExp(
    `(${words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );

  const parts = text.split(pattern);

  return parts.map((part, i) => {
    const isHighlight = words.some(
      (w) => w.toLowerCase() === part.toLowerCase()
    );

    return isHighlight ? (
      <mark
        key={i}
        className="bg-transparent text-[#284c87] font-extrabold not-italic"
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    );
  });
}

/* ============================================================
   Props — both lines are configurable
   ============================================================ */
interface ImpactStatementProps {
  heading?: string;
  subheading?: string;
  companyName?: string;
}

const ImpactStatement: React.FC<ImpactStatementProps> = ({
  heading = "The industrial race is won by moving from random sampling to absolute assurance, from theoretical safety to verified performance. [Company Name] is the bridge between design and reality, helping you unlock uncompromising quality and sustain it at scale.",
  subheading = "Our promise? A zero-tolerance approach to defects and a 30% reduction in your total cost of quality through proactive mechanical oversight.",
  companyName = "KP Reliable",
}) => {
  // Replace [Company Name] placeholder
  const resolvedHeading = heading.replace(/\[Company Name\]/gi, companyName);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">

        {/* ---- Eyebrow line ---- */}
        <div className="flex items-center gap-3">
          <span className="block w-10 h-[2px] bg-[#00a2e9]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00a2e9]">
            Our Commitment
          </span>
        </div>

        {/* ---- Heading ---- */}
        <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-gray-800 leading-snug tracking-tight">
          {highlight(resolvedHeading, HEADING_HIGHLIGHTS)}
        </h2>

        {/* ---- Divider ---- */}
        <div className="w-full h-px bg-gray-100" />

        {/* ---- Subheading ---- */}
        <p className="text-base md:text-lg font-semibold text-gray-500 leading-relaxed">
          {highlight(subheading, SUBHEADING_HIGHLIGHTS)}
        </p>

      </div>
    </section>
  );
};

export default ImpactStatement;