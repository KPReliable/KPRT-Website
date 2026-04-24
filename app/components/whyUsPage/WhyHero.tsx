import React from 'react';

const WhyHero: React.FC = () => {
  return (
    // Changed to min-h-screen to cover the full frame, and added flex layout to push text to the bottom
    <section className="relative w-full min-h-screen bg-[#17253b] overflow-hidden font-sans flex flex-col justify-between">
      
      {/* Main Content Area - Expands to push the bottom text down */}
      <div className="flex-grow flex items-center w-full">
        
        {/* CORRECTED: Replaced max-w-[1600px] and px-8 with max-w-6xl and px-4 to match your ServicesSection exactly */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-12">
          
          {/* Left Content Area (Text & SVG) - 60% width */}
          <div className="relative w-full md:w-[60%] flex flex-col justify-center z-20">
            
            <span className="text-[#52dca7] font-medium text-lg md:text-xl mb-4 block tracking-wide">
              about us
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.15] z-10 relative">
              Driven by Fluidic Intelligence, <br className="hidden xl:block" /> Guided by Caring
            </h1>
            
            {/* Decorative Wavy/Squiggly Line - High z-index to overlap the image */}
            <div className="absolute -bottom-10 left-[-5%] w-[120%] max-w-[800px] pointer-events-none z-30 opacity-90">
              <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-[#52dca7]">
                <path 
                  d="M20,150 C80,165 130,80 190,60 C250,40 300,120 230,150 C160,180 110,130 140,85 C170,40 290,50 360,85 C430,120 370,170 280,165 C180,160 160,105 250,95 C360,85 490,125 590,165" 
                  stroke="currentColor" 
                  strokeWidth="5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Image Area - 40% width, positioned center-right */}
          <div className="relative w-full md:w-[40%] flex justify-center md:justify-end items-center mt-12 md:mt-0 z-10">
            
            {/* Constrained Image Box */}
            <div className="relative w-full m-4 max-w-md lg:max-w-lg h-[400px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-md shadow-2xl">
              
              {/* Overlays to create the dark blue blended tint */}
              <div className="absolute inset-0 bg-[#17253b] mix-blend-multiply opacity-60 z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[#17253b] opacity-40 z-10 pointer-events-none"></div>
              
              {/* Main Image */}
              <img 
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776101079/Ram18_jccab6.svg"
                alt="Why Us Hero"
                className="absolute inset-0 w-full h-full object-cover object-center grayscale-[0.2]"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Two Lines - Positioned at the bottom of the full frame */}
      {/* CORRECTED: Changed px-6 to px-4 to keep padding uniform with the rest of the layout */}
      <div className="w-full text-center pb-10 px-4 z-20">
        <p className="text-gray-300 text-sm md:text-base font-light tracking-wide max-w-6xl mx-auto">
          Delivering decades of hands-on experience in third-party inspection, testing, and quality assurance. <br className="hidden md:block" />
          Ensuring compliance, safety, and operational excellence across diverse industrial sectors.
        </p>
      </div>

    </section>
  );
};

export default WhyHero;