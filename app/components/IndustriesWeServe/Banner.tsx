import React from 'react';

export default function Banner() {
  return (
    <div className="grid mt-8 mb-8 grid-cols-1 md:grid-cols-[2fr_4fr_4fr] min-h-[450px] w-full max-w-7xl mx-auto overflow-hidden font-sans">
      
      {/* --- Left Section --- */}
      <div className="grdient-bg p-10 flex flex-col justify-between min-h-[300px] md:min-h-full">
        <div className="text-lg font-medium text-white">c-suite</div>
        <button className="self-start px-6 py-2.5 border border-[#c2c5ce] bg-transparent rounded-full text-sm text-white cursor-pointer transition-colors duration-300 hover:bg-[#e2e4ea]">
          Know more
        </button>
      </div>

      {/* --- Middle Section --- */}
      <div 
        className="relative p-10 flex flex-col justify-end text-white min-h-[300px] md:min-h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(16, 16, 50, 0.7), rgba(80, 20, 80, 0.4)), url('https://res.cloudinary.com/dinnmia6e/image/upload/v1777456950/Raj21_uzdwd8.png')`
        }}
      >
        

        <h2 className="text-[1.4rem] font-medium leading-relaxed">
          AI Agents: The next frontier for enterprise decision-makers
        </h2>
      </div>

      {/* --- Right Section --- */}
      <div 
        className="p-10 flex flex-col justify-end text-white min-h-[300px] md:min-h-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('https://res.cloudinary.com/dinnmia6e/image/upload/v1776189683/Ram34_ymldjn.svg')`
        }}
      >
        <h2 className="text-[1.4rem] font-medium leading-relaxed">
          AI Agents: The next frontier for enterprise decision-makers
        </h2>
      </div>

    </div>
  );
}