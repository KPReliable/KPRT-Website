"use client";

import { useState } from "react";
import { jobs, departmentFilters } from "../data/careersData";
import { Job } from "../types/careers";

interface JobListingsProps {
  onApply: (job: Job) => void;
}

export default function JobListings({ onApply }: JobListingsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? jobs
      : jobs.filter((j) => j.departmentKey === activeFilter);

  return (
    <section className="job-listings" id="jobs">
      <div className="careers-inner">
        <div className="job-listings__head careers-section-head">
          <span className="careers-section-tag">Open Positions</span>
          <h2 className="careers-section-title">Find Your Role</h2>
          <p className="careers-section-sub">
            Explore current openings across departments. Filter by area to find
            the right fit.
          </p>
        </div>

        <div className="job-listings__filter-bar" role="group" aria-label="Department filters">
          {departmentFilters.map((f) => (
            <button
              key={f.key}
              className={`job-listings__filter-btn${
                activeFilter === f.key ? " job-listings__filter-btn--active" : ""
              }`}
              onClick={() => setActiveFilter(f.key)}
              aria-pressed={activeFilter === f.key}
            >
              {f.label}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="job-listings__grid">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} onApply={onApply} />
            ))}
          </div>
        ) : (
          <div className="job-listings__empty">
            <p>No openings in this department right now.</p>
            <a href="mailto:careers@qiinspect.com" className="job-listings__mail-link">
              Send your CV → careers@qiinspect.com
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function JobCard({ job, onApply }: { job: Job; onApply: (job: Job) => void }) {
  return (
    <div className="job-card">
      <div className="job-card__dept">{job.department}</div>
      <h3 className="job-card__title">{job.title}</h3>
      <div className="job-card__meta">
        <span className="job-card__meta-tag">📍 {job.location}</span>
        <span className="job-card__meta-tag">🎓 {job.qualification}</span>
        <span className="job-card__meta-tag">💼 {job.experience}</span>
      </div>
      <div className="job-card__footer">
        <span className="job-card__type">
          {job.type} · {job.mode}
        </span>
        <button className="job-card__apply-btn" onClick={() => onApply(job)}>
          Apply Now
          <span className="job-card__arrow">→</span>
        </button>
      </div>
    </div>
  );
}
