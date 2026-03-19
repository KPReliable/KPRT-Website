"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Industry } from "@/app/types/industries.types";
import {
  CarIcon,
  CircuitIcon,
  GearIcon,
  BoxIcon,
  FabricIcon,
  LayersIcon,
  ArrowRightIcon,
} from "@/app/components/icons/IndustryIcons";
import CaseStudyCard from "@/app/components/IndustriesWeServe/CaseStudyCard";

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  car:     CarIcon,
  circuit: CircuitIcon,
  gear:    GearIcon,
  box:     BoxIcon,
  fabric:  FabricIcon,
  layers:  LayersIcon,
};

interface IndustryCardProps {
  industry: Industry;
  index: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ industry, index }) => {
  const [showCase, setShowCase] = useState(false);
  const Icon = ICON_MAP[industry.icon] ?? GearIcon;

  return (
    <div
      className={`ind-card${showCase ? " ind-card--flipped" : ""}`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Front face */}
      <div className="ind-card-front">
        <div className="ind-card-top">
          <div className="ind-icon-wrap" style={{ background: `${industry.accent}14`, borderColor: `${industry.accent}30` }}>
            <Icon className="ind-icon" style={{ color: industry.accent } as React.CSSProperties} />
          </div>
          <span className="ind-card-num">0{index + 1}</span>
        </div>

        <div className="ind-card-accent" style={{ background: industry.accent }} />

        <h3 className="ind-title">{industry.title}</h3>
        <p className="ind-subtitle">{industry.subtitle}</p>
        <p className="ind-desc">{industry.description}</p>

        <div className="ind-tags">
          {industry.tags.map((tag) => (
            <span key={tag} className="ind-tag">{tag}</span>
          ))}
        </div>

        <div className="ind-card-footer">
          <button
            className="ind-case-btn"
            onClick={() => setShowCase(true)}
            aria-label={`View case study for ${industry.title}`}
          >
            View Case Study
            <ArrowRightIcon className="ind-arrow" />
          </button>
          <Link href={industry.href} className="ind-learn-link">
            Learn more
          </Link>
        </div>
      </div>

      {/* Case study overlay */}
      {showCase && (
        <div className="ind-card-case">
          <button
            className="ind-case-close"
            onClick={() => setShowCase(false)}
            aria-label="Close case study"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
            Back
          </button>
          <CaseStudyCard caseStudy={industry.caseStudy} accent={industry.accent} />
        </div>
      )}
    </div>
  );
};

export default IndustryCard;