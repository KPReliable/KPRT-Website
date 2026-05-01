import React from 'react';
import Image from 'next/image';

const BeforeFooter: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-4 md:px-8">
      {/* Main Container with a subtle border to match the design */}
      <div className="flex flex-col border border-gray-300">
        
        {/* Top Image Container */}
        <div className="relative w-full h-[250px] md:h-[400px] lg:h-[500px]">
          {/* Note: Place your image in the 'public' folder and update the src below */}
          <Image
            src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776101079/Ram18_jccab6.svg" 
            alt="Car driving fast in a tunnel"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bottom Three-Column Text Container */}
        {/* 'divide-x' creates the vertical lines between columns on medium+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300 bg-white">
          
          {/* Column 1 */}
          <div className="flex justify-center items-center p-10 lg:p-14 text-gray-600 text-center">
            <p>Zero Conflict model</p>
          </div>

          {/* Column 2 */}
          <div className="flex justify-center items-center p-10 lg:p-14 text-gray-600 text-center">
            <p>Same-day deployment</p>
          </div>

          {/* Column 3 */}
          <div className="flex justify-center items-center p-10 lg:p-14 text-gray-600 text-center">
            <p>OEM Supplier</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeFooter;