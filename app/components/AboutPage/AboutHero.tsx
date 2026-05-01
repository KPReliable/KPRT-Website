import Link from "next/link";
import Image from "next/image";

// Data for the 4 overlapping cards
const featureCards = [
  {
    title: "Company history",
    desc: "We ensure flawless execution with zero-defect standards in every automotive process.",
    // IMAGE OPTION: Add your image path here. If provided, it overrides the SVG icon.
    // Example: image: "/images/precision-img.jpg",
    image: "", 
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    link: "/services/precision"
  },
  {
    title: "Vision & Mission",
    desc: "Rigorous quality checks to maintain consistency, compliance, and confidence.",
    image: "", 
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    link: "/services/inspection"
  },
  {
    title: "Core Value",
    desc: "Backed by industry-trained professionals with deep domain knowledge and technical skills.",
    image: "", 
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    link: "/services/expertise"
  },
  {
    title: "Leadership",
    desc: "Optimized workflows that boost productivity and reduce downtime across operations.",
    image: "", 
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    link: "/services/efficiency"
  }
];

export default function AboutHero() {
  return (
    <>
      <section className="about-hero relative overflow-hidden min-h-[107vh] flex items-center pt-20 pb-40">
        
        {/* Background Image & Overlay Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dinnmia6e/image/upload/v1777281582/Raj1_e8cw4w.svg"
            alt="KPRT Facility Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="about-hero__inner relative z-10 w-full mx-auto px-4">
          <div className="about-hero__grid">
            <div className="about-hero__content">
              {/* Insert your existing Title and Subtitle here */}
              <div className="about-hero__actions mt-8">
                {/* Your action buttons go here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Cards Section */}
      <div className="relative z-20 max-w-[1160px] mx-auto px-4 -mt-24 md:-mt-32 mb-24">
        {/* CHANGED: lg:grid-cols-5 is now lg:grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {featureCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Circle Container for Image OR Icon */}
              {/* Added 'relative overflow-hidden' to ensure uploaded images stay inside the circle */}
              <div className="w-16 h-16 bg-[#2B4469] rounded-full flex items-center justify-center mb-6 relative overflow-hidden">
                {card.image ? (
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-cover"
                  />
                ) : (
                  card.icon
                )}
              </div>
              
              <h3 className="text-[#1A2E4B] text-xl font-bold mb-3">
                {card.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {card.desc}
              </p>
              
              <Link 
                href={card.link}
                className="flex items-center gap-2 text-[#1A2E4B] text-sm font-semibold hover:text-[#E86C31] transition-colors"
              >
                Get started 
                <span className="bg-[#2B4469] text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-[10px]">
                  ➔
                </span>
              </Link>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}