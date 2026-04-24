import React from 'react';

export default function EmpoweringSection() {
  return (
    // Added mt-20 to separate from the section above
    // Removed min-h-screen to reduce overall height
    <section className="flex flex-col lg:flex-row mt-20 mb-20 font-sans max-w-[1400px] mx-auto">
      
      {/* Left Column: Content & Staggered Images */}
      {/* Reduced py-20 to py-12 to reduce the height of the section */}
      <div className="w-full lg:w-1/2 bg-[#F9F7F1] flex flex-col items-center py-12 px-6 lg:px-12">
        
        {/* Text Content */}
        <div className="text-center max-w-md mb-12 mt-4 md:mt-8">
          <h2 className="text-5xl lg:text-[4rem] font-serif text-[#1e3b5c] mb-6 tracking-tight">
           First!We Trained You
          </h2>
          <p className="text-[#636363] text-base md:text-lg leading-relaxed px-2">
            We believe in combining human expertise with digital efficiency. Every KPRT inspector is digitally equipped with the latest tools and software to conduct seamless, real-time quality assessments. By digitizing the inspection process, we provide our clients with instant reporting, actionable data insights, and complete transparency from the factory floor to the final delivery
          </p>
        </div>

        {/* Staggered Images Container */}
        <div className="relative w-full max-w-[420px] h-[400px]">
          
          {/* Image 1: Bottom Left (Portrait) */}
          <div className="absolute bottom-0 left-0 w-[55%] h-[75%] z-10">
            <img 
              src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776506531/Ram45_b1dipl.svg" 
              alt="One-on-one session" 
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          
          {/* Image 2: Top Right (Landscape) */}
          {/* Preserved your h-[30%] change here */}
          <div className="absolute top-0 right-0 w-[55%] h-[30%] z-0">
            <img 
              src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776360410/Ram40_q3sefe.svg" 
              alt="Taking notes on laptop" 
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Right Column: Hero Image */}
      {/* Added max height and slight padding on desktop to decrease its visual size */}
      <div className="w-full lg:w-1/2 h-[1000px] lg:h-auto lg:max-h-[650px] relative">
        <img 
          src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776360095/Ram39_etslfc.svg" 
          alt="Business presentation at whiteboard" 
          className="absolute inset-0 w-full h-full object-cover lg:object-center"
        />
      </div>
      
    </section>
  );
}