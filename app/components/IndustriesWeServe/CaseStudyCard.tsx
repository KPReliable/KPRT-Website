"use client";

import React from "react";
import { CaseStudy } from "@/app/types/industries.types";
import { CheckCircleIcon, QuoteMarkIcon } from "@/app/components/icons/IndustryIcons";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  accent: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, accent }) => {
  return (
    <div className="cs-card">
      <QuoteMarkIcon className="cs-quote-icon" />

      <div className="cs-metric" style={{ color: accent }}>
        {caseStudy.metric}
        <span className="cs-metric-label">{caseStudy.metricLabel}</span>
      </div>

      <div className="cs-client">
        <CheckCircleIcon className="cs-check" />
        <span>{caseStudy.client}</span>
      </div>

      <div className="cs-body">
        <div className="cs-row">
          <span className="cs-row-label">Challenge</span>
          <p className="cs-row-text">{caseStudy.challenge}</p>
        </div>
        <div className="cs-row">
          <span className="cs-row-label">Outcome</span>
          <p className="cs-row-text">{caseStudy.result}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;