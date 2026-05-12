import React from "react";
import Link from "next/link";
interface ContactPopupProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Contactpage = ({ isOpen, setIsOpen }: ContactPopupProps) => {
  return (
    <section className="relative w-full bg-[#0f2137] py-20 px-6 md:py-28 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Elements (Optional - to match the subtle curves in the image) */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#52dca7] rounded-full translate-x-16 translate-y-16 opacity-80" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Top Label */}
          <span className="flex items-center gap-3 text-[#ffb300] text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6">
            <span className="w-8 h-[2px] bg-[#ffb300]"></span>
            Contact Us
          </span>

          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-12 max-w-3xl">
            It almost always{" "}
            <span className="font-bold block md:inline text-[#ffb300]">
              begins with a conversation.
            </span>
          </h1>

          {/* Contact Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#ffb300] text-[#0f2137] px-10 py-4 rounded-full text-base font-black uppercase tracking-wider shadow-lg hover:shadow-[#ffb300]/40 hover:-translate-y-1 hover:bg-white transition-all duration-300 ease-in-out active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
