"use client";

import { Job } from "../types/careers";

interface CareerCTAProps {
  onApply: (job: Job) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
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

export default function CareerCTA({
  onApply,
  isOpen,
  setIsOpen,
}: CareerCTAProps) {
  return (
    // Outer container with the dark navy background
    <section className="bg-[#0f172a] w-full py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side: Heading */}
        <div className="w-full md:w-1/2">
          <h2 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-tight">
            What can we help you <br className="hidden md:block" /> achieve?
          </h2>
        </div>

        {/* Right Side: Buttons */}
        <div className="w-full md:w-auto flex flex-col gap-5">
          {/* Top Button: Solid Green */}
          <button
            className="px-10 py-4 bg-[#52d1b4] text-[#0f172a] text-lg font-medium rounded-full hover:bg-[#3fb89b] transition-colors duration-300 w-full md:w-[220px]"
            onClick={() => {
              // Add any action you want for "Work with us" here, like scrolling to the jobs section
              document
                .getElementById("jobs-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Work with us
          </button>

          {/* Bottom Button: Transparent with Outline */}
          <button
            className="px-10 py-4 bg-transparent border border-[#334155] text-white text-lg font-medium rounded-full hover:bg-[#1e293b] hover:border-[#475569] transition-colors duration-300 w-full md:w-[220px]"
            // onClick={() => onApply(openApplication)}
            onClick={() => setIsOpen(true)}
          >
            Send CV
          </button>
        </div>
      </div>
    </section>
  );
}
