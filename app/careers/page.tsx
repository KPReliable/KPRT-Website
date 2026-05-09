"use client";

import { useRef, useState, useCallback, useMemo } from "react";
// 1. We have our Job and DepartmentFilter types imported
import { Job, DepartmentFilter } from "./types/careers";
import { jobs, departmentFilters } from "./data/careersData";

// ── Single CSS import for the entire careers page ──
import "./styles/careers.css";

import CareerHero from "./components/CareerHero";
import CareerStats from "./components/CareerStats";
import WhyJoinUs from "./components/WhyJoinUs";
import JobListings from "./components/JobListings";
import Testimonials from "./components/Testimonials";
import CareerCTA from "./components/CareerCTA";
import ApplyModal from "./components/ApplyModal";
import Training from "./components/Training";
import SendCvPopUp from "./components/SendCvPopUp";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const jobsSectionRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // --- FILTER STATE ---
  const [keyword, setKeyword] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("Department");
  const [selectedLocation, setSelectedLocation] = useState("Location");

  // Derive unique locations dynamically from your jobs data
  const uniqueLocations = useMemo<string[]>(() => {
    // 2. Explicitly type 'job' as Job here
    return Array.from(new Set<string>(jobs.map((job: Job) => job.location)));
  }, []);

  // Map departments from your data (ignoring the "All Departments" default option for the dropdown)
  const uniqueDepartments = useMemo<string[]>(() => {
    return departmentFilters
      .filter((dept: DepartmentFilter) => dept.key !== "all")
      .map((dept: DepartmentFilter) => dept.label);
  }, []);

  // --- FILTER LOGIC ---
  const filteredJobs = useMemo(() => {
    // 3. Explicitly type 'job' as Job here too!
    return jobs.filter((job: Job) => {
      const matchKeyword =
        keyword === "" ||
        job.title.toLowerCase().includes(keyword.toLowerCase());

      const matchDept =
        selectedDepartment === "Department" ||
        job.department === selectedDepartment;

      const matchLoc =
        selectedLocation === "Location" || job.location === selectedLocation;

      return matchKeyword && matchDept && matchLoc;
    });
  }, [keyword, selectedDepartment, selectedLocation]);

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
      <CareerHero
        keyword={keyword}
        setKeyword={setKeyword}
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        departmentOptions={uniqueDepartments}
        locationOptions={uniqueLocations}
        onSearch={scrollToJobs}
      />

      <CareerStats />
      <WhyJoinUs />

      <div ref={jobsSectionRef}>
        <JobListings jobs={filteredJobs} onApply={openModal} />
      </div>

      <Testimonials />
      <Training />

      <CareerCTA
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onApply={() => {
          /* Optional: Pass a default empty job or handle CTA application separately */
        }}
      />

      {selectedJob && <ApplyModal job={selectedJob} onClose={closeModal} />}

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className=" fixed inset-0 bg-black/60 z-50 items-center justify-center"
        >
          <SendCvPopUp isOpen={isOpen} setIsOpen={setIsOpen} />
          {/* <ContactPopup isOpen={isOpen} setIsOpen={setIsOpen} /> */}
        </div>
      )}
    </>
  );
}
