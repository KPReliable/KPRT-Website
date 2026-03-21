"use client";

import { Job } from "../types/careers";

interface CareerCTAProps {
  onApply: (job: Job) => void;
}

const openApplication: Job = {
  id: "open",
  title: "General Application",
  department: "Open Application",
  departmentKey: "open",
  location: "Pan-India",
  experience: "Any",
  qualification: "Any",
  type: "Full-time",
  mode: "Various",
};

export default function CareerCTA({ onApply }: CareerCTAProps) {
  return (
    <div className="career-cta">
      <div className="career-cta__glow" />
      <div className="career-cta__content">
        <h2 className="career-cta__title">Don&apos;t See a Role That Fits?</h2>
        <p className="career-cta__sub">
          We&apos;re always looking for passionate quality professionals. Send
          us your profile and we&apos;ll reach out when the right opportunity
          opens up.
        </p>
        <button
          className="career-cta__btn"
          onClick={() => onApply(openApplication)}
        >
          Send Your CV
          <span className="career-cta__arrow">→</span>
        </button>
      </div>
    </div>
  );
}
