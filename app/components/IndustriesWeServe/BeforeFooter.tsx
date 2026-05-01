import React from 'react';

const BeforeFooter: React.FC = () => {
  
  // MATCHED OUTER CONTAINER: Changed m-6 to my-6 to prevent horizontal overflow
  return (
    <section className="relative w-full bg-[#f4f6f9] my-6 py-14 lg:py-24 px-6 flex items-center justify-center overflow-hidden font-sans">
      
      {/* MATCHED INNER CONTAINER: Changed max-w-7xl to max-w-6xl to perfectly align with the video width */}
      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content Area */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-start z-20">
          <span className="text-gray-500 font-medium tracking-wide mb-4 text-sm md:text-base">
           At KP Reliable Technique India Pvt. Ltd., we bring decades of hands-on experience in third-party inspection, testing, and quality 
           assurance services
             across diverse industrial sectors.
          </span>
          
          <h2 className="text-2xl md:text-3xl lg:text-[22px] leading-tight font-medium text-[#111827] mb-10">
             Our team of certified professionals and technical experts has successfully executed hundreds
             of projects—ensuring compliance, safety, and operational excellence for our clients.
          </h2>
          
          
        </div>

        {/* Right Content Area (Image & Abstract Shapes) */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center z-10 mt-10 lg:mt-0">
          
          {/* Decorative Background Shapes */}
          <div className="absolute top-[-20%] right-[10%] w-32 h-64 bg-[#dbe8f0] rounded-full rotate-[30deg] -z-10"></div>
          <div className="absolute bottom-[-15%] left-[0%] w-32 h-72 bg-[#aee2ce] rounded-full rotate-[35deg] -z-10 opacity-80"></div>
          <div className="absolute bottom-[-25%] right-[30%] w-32 h-80 bg-[#aee2ce] rounded-full rotate-[-20deg] -z-10 opacity-70"></div>
          <div className="absolute top-[20%] left-[-15%] w-24 h-56 bg-[#dbe8f0] rounded-full rotate-[-30deg] -z-10 opacity-80"></div>

          {/* Main Image */}
          <div className="relative w-full max-w-[550px] min-h-[200px] lg:min-h-[480px] bg-white/50 flex items-center justify-center shadow-lg  overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776186990/Ram29_cqoeiw.svg" // Replace with your actual image path
              alt="Professional working on laptop" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="text-gray-400 text-sm z-0"></span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeFooter;