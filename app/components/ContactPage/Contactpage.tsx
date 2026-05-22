import React from "react";
import Link from "next/link";

interface ContactPopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Contactpage = ({ isOpen, setIsOpen }: ContactPopupProps) => {
  return (
    // CHANGED: Handled section spacing using fluid multi-tier layout markers to prevent horizontal scroll splitting
    <section className="relative w-full bg-[#0f2137] py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden flex items-center">
      
      {/* Background Decorative Elements (Optional - to match the subtle curves in the image) - KEPT SAME */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#52dca7] rounded-full translate-x-16 translate-y-16 opacity-80" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-start max-w-4xl text-left">
          
          {/* Top Label */}
          <span className="flex items-center gap-3 text-[#ffb300] text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-4 sm:mb-6 select-none">
            <span className="w-6 sm:w-8 h-[2px] bg-[#ffb300] flex-shrink-0"></span>
            Contact Us
          </span>

          {/* Main Heading */}
          {/* CHANGED: Swapped strict text sizes for fluid responsive tiers matching screen bounds */}
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15] md:leading-[1.1] mb-8 sm:mb-12 max-w-3xl tracking-tight">
            It almost always{" "}
            <span className="font-bold block md:inline text-[#ffb300]">
              begins with a conversation.
            </span>
          </h1>

          {/* Contact Button - KEPT SAME PROPERTIES */}
          {/* CHANGED: Rounded setting added to prevent button text bleed on narrow layout containers */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#ffb300] text-[#0f2137] px-8 sm:px-10 py-3.5 sm:py-4 rounded-xs text-sm sm:text-base font-black uppercase tracking-wider shadow-lg hover:shadow-[#ffb300]/40 hover:-translate-y-1 hover:bg-white transition-all duration-300 ease-in-out active:scale-95 flex-shrink-0"
          >
            Contact Us
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Contactpage;