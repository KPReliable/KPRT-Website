import React from 'react';
import Image from 'next/image';

const CareerStats: React.FC = () => {
  return (
    // Added bg-neutral-950 so it seamlessly continues the dark color from the Hero section
    <section className="relative w-full py-24 flex items-center justify-center min-h-[600px] bg-neutral-950">
      
      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Image Collage Container */}
        <div className="flex flex-col lg:flex-row gap-4 items-start justify-center w-full">

          {/* Column 1 (Far Left) */}
          <div className="flex flex-col gap-4 w-full lg:w-[25%]">
            <div className="relative w-full aspect-[4/5]">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776506531/Ram45_b1dipl.svg" alt="Team selfie" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-video">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776506531/Ram45_b1dipl.svg" alt="Speaker presentation" fill className="object-cover" />
            </div>
          </div>

          {/* Column 2 (Mid Left) - Offset downwards using lg:mt-24 */}
          <div className="flex flex-col gap-4 w-full lg:w-[20%] lg:mt-24">
            <div className="relative w-full aspect-[3/4]">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776506531/Ram45_b1dipl.svg" alt="Employees playing" fill className="object-cover" />
            </div>
          </div>

          {/* Column 3 (Mid Right) - Complex column with a nested row */}
          <div className="flex flex-col gap-4 w-full lg:w-[35%]">
            <div className="relative w-full aspect-[16/10]">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776506531/Ram45_b1dipl.svg" alt="Team at table" fill className="object-cover" />
            </div>
            {/* Nested Row for the two bottom images */}
            <div className="flex flex-row gap-4 w-full">
              <div className="relative w-[45%] aspect-[4/3]">
                <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776506531/Ram45_b1dipl.svg" alt="VR headset" fill className="object-cover" />
              </div>
              <div className="relative w-[55%] aspect-[3/4]">
                <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776506531/Ram45_b1dipl.svg" alt="Cyclist in office" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Column 4 (Far Right) - Offset downwards using lg:mt-12 */}
          <div className="flex flex-col gap-4 w-full lg:w-[20%] lg:mt-12">
            <div className="relative w-full aspect-[3/4]">
              <Image src="https://res.cloudinary.com/dinnmia6e/image/upload/v1776506531/Ram45_b1dipl.svg" alt="Office meeting" fill className="object-cover" />
            </div>
          </div>
           
        </div>

        {/* --- NEW TEXT SECTION BELOW IMAGES --- */}
        <div className="mt-16 md:mt-24 text-center max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Uncompromised Quality
          </h3>
          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed">
            At KP Reliable Technique India, quality is not just a metric; it is our guarantee. We provide highly trained and strictly certified Quality Inspectors and Engineers tailored to your specific industry needs. Our professionals bring deep domain expertise and a meticulous eye for detail, ensuring that every inspection meets the highest global standards of compliance and excellence
          </p>
        </div>

      </div>
    </section>
  );
};

export default CareerStats;