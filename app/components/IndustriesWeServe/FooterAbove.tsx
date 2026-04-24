import React from 'react';

const PreFooterBanner: React.FC = () => {
  return (
    // Replaced horizontal margins with px-6 to prevent scrollbars while maintaining safe areas
    <section className="w-full bg-[#111c30] py-16 lg:py-24 px-6 flex justify-center items-center font-sans">
      
      {/* Inner container aligned with your max-w-6xl layout */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left side: Heading */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            What can we help you <br className="hidden md:block" /> achieve?
          </h2>
        </div>

        {/* Right side: Action Buttons */}
        <div className="w-full md:w-auto flex flex-col gap-4 min-w-[260px] max-w-xs mx-auto md:mx-0">
          <button className="w-full bg-[#52dca7] hover:bg-[#42c593] text-[#111c30] text-sm md:text-base font-semibold py-3.5 px-8 rounded-full transition-all duration-300 shadow-sm">
            Work with us
          </button>
          
          <button className="w-full bg-transparent border border-[#5a6b8a] hover:border-white hover:bg-white/5 text-white text-sm md:text-base font-semibold py-3.5 px-8 rounded-full transition-all duration-300">
            Apply for job
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default PreFooterBanner;