"use client";

import { useRef, useState, useCallback } from "react";
import { Job } from "./types/careers";

// ── Single CSS import for the entire careers page ──
import "./styles/careers.css";

import CareerHero from "./components/CareerHero";
import CareerStats from "./components/CareerStats";
import WhyJoinUs from "./components/WhyJoinUs";
import JobListings from "./components/JobListings";
import Testimonials from "./components/Testimonials";
import CareerCTA from "./components/CareerCTA";
import ApplyModal from "./components/ApplyModal";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const jobsSectionRef = useRef<HTMLDivElement>(null);

  const scrollToJobs = useCallback(() => {
    jobsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openModal = useCallback((job: Job) => {
    setSelectedJob(job);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedJob(null);
  }, []);

  return (
    <>
      {/* Hero */}
      <CareerHero onViewJobs={scrollToJobs} />

      {/* Stats bar */}
      <CareerStats />

      {/* Why Join Us */}
      <WhyJoinUs />

      {/* Job Listings — anchor ref placed on wrapper div */}
      <div ref={jobsSectionRef}>
        <JobListings onApply={openModal} />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA banner */}
      <CareerCTA onApply={openModal} />

      {/* Apply Modal — portal-like, conditionally rendered */}
      <ApplyModal job={selectedJob} onClose={closeModal} />
    </>
  );
}
