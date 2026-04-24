import React from 'react';

export default function GrowthSection() {
  return (
    // Main wrapper with the off-white background
    <main className="min-h-screen bg-[#ffffff] text-[#1c1c1c] p-6 md:p-10 font-sans flex items-center justify-center">
      <div className="max-w-[1200px] w-full mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-10 gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.05] tracking-tight">
            Cultivating Excellence<br />Our Campus-to-Industry Pipeline
          </h1>
          <p className="max-w-[380px] text-lg font-semibold leading-relaxed lg:pb-2">
            Our specialized recruitment solutions are<br className="hidden md:block" />
            designed to build powerful teams
          </p>
        </header>
        
        {/* Cards Grid */}
        {/* Responsive grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          
          {/* Card 1: Executive Search */}
          <div className="bg-[#aebcb0] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="35" width="10" height="25" rx="3" fill="#8d9e90"/>
                <rect x="20" y="20" width="10" height="40" rx="3" fill="#1c1c1c"/>
                <rect x="35" y="28" width="10" height="32" rx="3" fill="#8d9e90"/>
                <rect x="50" y="15" width="10" height="45" rx="3" fill="#1c1c1c"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-semibold tracking-tight">Graduate Engineering Trainee</span>
          </div>

          {/* Card 2: Image */}
          {/* Note: Using inline style for the background image for simplicity, but you could use Next/Image in a real app */}
          <div 
            className="bg-cover bg-center aspect-[4/5]"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dinnmia6e/image/upload/v1776681014/CASTING_dwrrkq.svg')" }}
          ></div>

          {/* Card 3: Tech & Engineering */}
          <div className="bg-[#ded7c7] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="15" width="50" height="22" rx="11" fill="#1c1c1c"/>
                <circle cx="18" cy="26" r="8" fill="#a49f91"/>
                <rect x="5" y="42" width="50" height="22" rx="11" fill="#c3bcac"/>
                <circle cx="42" cy="53" r="8" fill="#1c1c1c"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-semibold tracking-tight">Campus Hiring </span>
          </div>

          {/* Card 4: Creative & Design */}
          <div className="bg-[#fb9d05] aspect-[4/5] p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="5" fill="#1c1c1c"/>
                <circle cx="35" cy="18" r="4.5" fill="#1c1c1c"/>
                <circle cx="52" cy="35" r="4.5" fill="#1c1c1c"/>
                <circle cx="35" cy="52" r="4.5" fill="#1c1c1c"/>
                <circle cx="18" cy="35" r="4.5" fill="#1c1c1c"/>
                <circle cx="23" cy="23" r="4.5" fill="#827a83"/>
                <circle cx="47" cy="23" r="4.5" fill="#827a83"/>
                <circle cx="47" cy="47" r="4.5" fill="#1c1c1c"/>
                <circle cx="23" cy="47" r="4.5" fill="#827a83"/>
              </svg>
            </div>
            <span className="text-[1.1rem] font-semibold tracking-tight">Training</span>
          </div>

        </div>
      </div>
    </main>
  );
}