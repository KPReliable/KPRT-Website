"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface CareerHeroProps {
  keyword: string;
  setKeyword: (val: string) => void;
  selectedDepartment: string;
  setSelectedDepartment: (val: string) => void;
  selectedLocation: string;
  setSelectedLocation: (val: string) => void;
  departmentOptions: string[];
  locationOptions: string[];
  onSearch: () => void;
}

const CareerHero: React.FC<CareerHeroProps> = ({
  keyword, setKeyword,
  selectedDepartment, setSelectedDepartment,
  selectedLocation, setSelectedLocation,
  departmentOptions, locationOptions,
  onSearch
}) => {
  // We only keep the open/close state local, as it's just for UI toggling
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <section className="relative w-full h-[650px] flex flex-col justify-end pb-20">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0"> 
        <Image
          src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776681031/1_mpphqk.svg" 
          alt="Team background"
          fill
          className="object-cover" 
          priority
        />
      </div>

      {/* Dark Fading Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-neutral-950/30 via-neutral-950/70 to-neutral-950/98"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Headings */}
        <div className="mb-12">
          <p className="text-[#fb9d05] font-medium text-xl tracking-wide mb-2">careers</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Thinking about <br className="hidden md:block" /> becoming a KPRTIAN?
          </h1>
        </div>

        {/* Search / Filter Bar */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-0 border-b border-white/30 pb-6">
          
          {/* Keyword Input */}
          <div className="flex flex-col w-full md:w-[35%] pr-4">
            <label htmlFor="keyword" className="text-white text-sm mb-1">Keyword</label>
            <input 
              type="text" 
              id="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Quality Engineer, Quality Inspector..." 
              className="bg-transparent border-none text-white text-lg placeholder-white/80 focus:outline-none focus:ring-0 p-0"
            />
          </div>

          {/* CUSTOM DEPARTMENT DROPDOWN */}
          <div className="flex flex-col w-full md:w-[25%] md:px-6 md:border-l md:border-white/30 relative group mt-4 md:mt-0">
            <label className="text-white text-sm mb-1 hidden md:block opacity-0">Department</label> 
            
            {/* Clickable Header */}
            <div 
              className="relative flex items-center justify-between w-full cursor-pointer"
              onClick={() => {
                setDepartmentOpen(!departmentOpen);
                setLocationOpen(false); // Close the other dropdown
              }}
            >
              <span className={`text-lg font-medium ${selectedDepartment === 'Department' ? 'text-white/90' : 'text-white'}`}>
                {selectedDepartment}
              </span>
              <svg className={`w-5 h-5 text-white transition-transform duration-200 ${departmentOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Transparent Floating Options Menu */}
            {departmentOpen && (
              <div className="absolute top-full left-0 mt-4 w-full min-w-[200px] bg-black/40 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-2xl z-50">
                {/* Option to clear filter */}
                <div 
                    className="px-4 py-3 text-white/70 italic text-lg hover:bg-white/20 cursor-pointer transition-colors"
                    onClick={() => {
                      setSelectedDepartment("Department");
                      setDepartmentOpen(false);
                    }}
                  >
                    All Departments
                </div>
                {departmentOptions.map((option) => (
                  <div 
                    key={option}
                    className="px-4 py-3 text-white text-lg hover:bg-white/20 cursor-pointer transition-colors"
                    onClick={() => {
                      setSelectedDepartment(option);
                      setDepartmentOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CUSTOM LOCATION DROPDOWN */}
          <div className="flex flex-col w-full md:w-[25%] md:px-6 md:border-l md:border-white/30 relative group mt-4 md:mt-0">
             <label className="text-white text-sm mb-1 hidden md:block opacity-0">Location</label>
            
            {/* Clickable Header */}
            <div 
              className="relative flex items-center justify-between w-full cursor-pointer"
              onClick={() => {
                setLocationOpen(!locationOpen);
                setDepartmentOpen(false); // Close the other dropdown
              }}
            >
              <span className={`text-lg font-medium ${selectedLocation === 'Location' ? 'text-white/90' : 'text-white'}`}>
                {selectedLocation}
              </span>
              <svg className={`w-5 h-5 text-white transition-transform duration-200 ${locationOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Transparent Floating Options Menu */}
            {locationOpen && (
              <div className="absolute top-full left-0 mt-4 w-full min-w-[200px] bg-black/40 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-2xl z-50">
                {/* Option to clear filter */}
                 <div 
                    className="px-4 py-3 text-white/70 italic text-lg hover:bg-white/20 cursor-pointer transition-colors"
                    onClick={() => {
                      setSelectedLocation("Location");
                      setLocationOpen(false);
                    }}
                  >
                    All Locations
                </div>
                {locationOptions.map((option) => (
                  <div 
                    key={option}
                    className="px-4 py-3 text-white text-lg hover:bg-white/20 cursor-pointer transition-colors"
                    onClick={() => {
                      setSelectedLocation(option);
                      setLocationOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full md:w-auto md:ml-auto mt-8 md:mt-0 flex justify-end">
            <button 
              onClick={onSearch}
              className="w-full md:w-auto text-[#ffb300] border border-[#ffb300] font-semibold text-base px-8 py-3.5 rounded-full hover:bg-[#ffb300] hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Find my future
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerHero;