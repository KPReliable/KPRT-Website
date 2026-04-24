"use client";

import { Job } from "../types/careers";

interface JobListingsProps {
  jobs: Job[];
  onApply: (job: Job) => void;
}

export default function JobListings({ jobs, onApply }: JobListingsProps) {
  // Group jobs by department to create the headers seen in the screenshot
  const groupedJobs = jobs.reduce((acc, job) => {
    if (!acc[job.department]) {
      acc[job.department] = [];
    }
    acc[job.department].push(job);
    return acc;
  }, {} as Record<string, Job[]>);

  return (
    // UPDATED: Background color changed to match the dark navy blue screenshot
    <section className="bg-[#1e3b5c] text-white py-20 px-6 md:px-12 min-h-screen" id="jobs">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Empty State */}
        {Object.keys(groupedJobs).length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
            <p className="text-xl mb-4 text-white/80">No openings match your current search criteria.</p>
            <a href="mailto:careers@kprti.com" className="text-teal-400 hover:text-teal-300 transition-colors font-medium">
              Send your CV &rarr; careers@kprti.com
            </a>
          </div>
        ) : (
          /* Render Grouped Jobs */
          Object.entries(groupedJobs).map(([department, deptJobs]) => (
            <div key={department} className="mb-16">
              
              {/* Category Header (e.g., "Architecture and Technology Consulting") */}
              <div className="flex justify-between items-center mb-2 pb-4 border-b border-white/20">
                <h2 className="text-2xl md:text-3xl font-medium tracking-wide">
                  {department}
                </h2>
                {/* Small teal accent line on the right */}
                <span className="w-4 h-[2px] bg-teal-400"></span>
              </div>

              {/* Job Rows */}
              <div className="flex flex-col">
                {deptJobs.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => onApply(job)}
                    // Grid layout aligns the columns perfectly on desktop, stacking on mobile
                    className="group flex flex-col md:grid md:grid-cols-[140px_1fr_200px_120px_24px] gap-4 md:gap-6 items-start md:items-center py-6 border-b border-white/10 hover:bg-white/5 cursor-pointer transition-all px-4 -mx-4 rounded-lg"
                  >
                    
                    {/* 1. Level/Experience Badge with Dots */}
                    <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full w-fit">
                      <div className="flex gap-[3px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
                      </div>
                      <span className="text-xs font-medium text-white/90 whitespace-nowrap">
                        {/* Using experience here instead of "Director" based on your data structure */}
                        {job.experience}
                      </span>
                    </div>

                    {/* 2. Job Title */}
                    <h3 className="text-base md:text-lg font-medium text-white leading-snug">
                      {job.title}
                    </h3>

                    {/* 3. Location */}
                    <div className="text-white/70 text-sm">
                      {job.location}
                    </div>

                    {/* 4. Employment Type */}
                    <div className="text-white/70 text-sm">
                      {job.type}
                    </div>

                    {/* 5. Arrow Icon */}
                    <div className="hidden md:flex justify-end text-xl font-light text-white/80 group-hover:text-white group-hover:translate-x-1 transition-transform">
                      &gt;
                    </div>
                    
                    {/* Mobile Apply hint */}
                    <div className="md:hidden text-teal-400 text-sm font-medium mt-2">
                      Apply Now &rarr;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}