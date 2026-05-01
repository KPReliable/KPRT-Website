import React from 'react';
import Link from 'next/link';

const ContactBanner = () => {
  return (
    <section className="relative w-full bg-[#0f2137] py-20 px-6 md:py-32 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Elements (Optional - to match the subtle curves in the image) */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#52dca7] rounded-full translate-x-16 translate-y-16 opacity-80" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          
          {/* Top Label */}
          <span className="text-[#ffb300] text-xl md:text-2xl font-medium mb-6 lowercase tracking-tight">
            contact us
          </span>

          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-12">
            It almost always begins with a conversation.
          </h1>

          {/* Contact Button */}
          <Link 
            href="/contact"
            className="bg-[#ffb300] text-[#0f2137] px-8 py-3 rounded-full text-sm font-bold hover:bg-white transition-colors duration-300 ease-in-out"
          >
            contact us
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;