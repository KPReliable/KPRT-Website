import React from 'react';

const ModernizationSection = () => {
  return (
    <section className="w-full expert-cta py-24 px-6 font-sans mb-8 mt-8 text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto mx-auto">
        
        {/* Upper Section: Image and Title */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Left: Main Image */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-sm">
              <img 
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776270834/Ram36_oghi4s.svg" 
                alt="Modernization Team" 
                className="w-full h-auto object-cover grayscale-[0.2] brightness-90"
              />
            </div>
          </div>

          {/* Right: Hero Text */}
          <div className="w-full md:w-1/2 md:pl-8">
            <span className="text-[var(--color-secondary-light)] text-sm font-semibold tracking-wide mb-4 block">
              Transform the business
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Technology Core <br />
              Modernization
            </h2>
          </div>
        </div>

        {/* Lower Section: Detailed Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* Point 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              Mainframe Modernization++
            </h3>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-md">
              Modernize legacy cores without risk
            </p>
          </div>

          {/* Point 2 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              DEP++
            </h3>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-md">
              Keeps data flowing smoothly and safely through compliant pipeline
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ModernizationSection;