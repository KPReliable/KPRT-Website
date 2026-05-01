import Image from 'next/image';

export default function AsymmetricGridLayout() {
  return (
    // Changed to bg-white and added 'relative' to contain the absolute grid
    <main className="relative min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      
      {/* Subtle Dark Blue Background Grid Pattern (Copied from HeroSection) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1e40af 1px, transparent 1px),
            linear-gradient(to bottom, #1e40af 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px', // Adjust size of the grid squares here
        }}
      />

      {/* Added relative and z-10 so the images render ABOVE the background grid */}
      <div className="relative z-10 max-w-7xl w-full">
        
        {/* Main Grid Container 
          Mobile: 1 column
          Desktop: 5 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          
          {/* Column 1: Far Left */}
          <div className="col-span-1 flex flex-col gap-4 lg:gap-6">
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-800 rounded-sm shadow-lg">
              <Image
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777372734/Raj14_nrnzmh.svg"
                alt="Plastic Moulding Operations"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* The peek image at the bottom */}
            <div className="relative w-full aspect-square overflow-hidden bg-gray-800 rounded-sm shadow-lg">
              <Image
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777372735/Raj12_ih8sdj.svg"
                alt="Rubber Components"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Column 2: Mid Left (Pushed down) */}
          <div className="col-span-1 pt-0 md:pt-24 lg:pt-32">
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-800 rounded-sm shadow-lg">
              <Image
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777367132/Raj9_cjzabf.svg"
                alt="Heavy Forging Process"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Column 3 & 4: The Center Cluster */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4 lg:gap-6">
            {/* Top Wide Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-800 rounded-sm shadow-lg">
              <Image
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777361417/Raj3_xi7obm.svg"
                alt="Fabrication and Welding"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            
            {/* Bottom Two Split Images */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-800 rounded-sm shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777280660/Ram97_wjkxmz.svg"
                  alt="Surface Treatment"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-800 rounded-sm shadow-lg">
                <Image
                  src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777278376/Ram86_g9vg5z.svg"
                  alt="Electronics Assembly"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Column 5: Far Right */}
          <div className="col-span-1 pt-0 md:pt-12 lg:pt-16">
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-800 rounded-sm shadow-lg">
              <Image
                src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777372734/Raj13_hhykda.svg"
                alt="CNC Machining"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}