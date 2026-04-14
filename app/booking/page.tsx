"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Page = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("Tue 14 Apr");
  const [selectedTime, setSelectedTime] = useState("4:30 PM");
  const [isBooked, setIsBooked] = useState(false);

  const dates = [
    { day: "Tue", date: "14", month: "Apr", available: true },
    { day: "Wed", date: "15", month: "Apr", available: true },
    { day: "Thu", date: "16", month: "Apr", available: true },
    { day: "Fri", date: "17", month: "Apr", available: false },
    { day: "Sat", date: "18", month: "Apr", available: false },
    { day: "Sun", date: "19", month: "Apr", available: false },
    { day: "Mon", date: "20", month: "Apr", available: true },
  ];

  const timeSlots = [
    "4:30 PM","5:30 PM","6:30 PM","7:30 PM",
    "8:30 PM","9:30 PM","10:30 PM","11:30 PM"
  ];

  const handleBooking = () => {
    const appointment = {
      date: selectedDate,
      time: selectedTime,
      bookedAt: new Date().toISOString(),
    };
    console.log("Schedule Booked:", appointment);
    setIsBooked(true);
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-[--section-py]"
      style={{
        background: `
          radial-gradient(circle at top right, rgba(0,162,233,0.15), transparent 40%),
          linear-gradient(135deg, #0a1628 0%, #284c87 50%, #162f5c 100%)
        `,
      }}
    >
      <div
        className="w-full max-w-175 rounded-[40px] p-8 lg:p-14 text-center backdrop-blur-xl"
        style={{
          background: "rgba(15, 31, 61, 0.75)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 80px rgba(0,0,0,0.4)",
        }}
      >

        {!isBooked ? (
          <>
            {/* HEADER */}
            <header className="mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                What time works best for a quick call?
              </h2>
              <p className="text-white/60">
                Please book your slot by selecting a date and time.
              </p>
            </header>

            {/* DATE SELECTOR */}
            <div className="flex justify-between items-center border border-white/10 rounded-xl overflow-hidden mb-8">
              {dates.map((item, idx) => {
                const dateKey = `${item.day} ${item.date} ${item.month}`;
                const isSelected = selectedDate === dateKey;

                return (
                  <button
                    key={idx}
                    disabled={!item.available}
                    onClick={() => setSelectedDate(dateKey)}
                    className={`flex-1 py-5 flex flex-col items-center transition-all duration-300
                      ${!item.available
                        ? "opacity-20 cursor-not-allowed grayscale"
                        : "hover:bg-white/10"}
                      ${isSelected
                        ? "bg-[var(--color-secondary)] text-white shadow-lg shadow-[rgba(0,162,233,0.4)]"
                        : "text-white/70"}
                    `}
                  >
                    <span className="text-sm text-white/60">{item.day}</span>
                    <span className="text-xl font-bold my-1">{item.date}</span>
                    <span className="text-sm uppercase text-white/60">{item.month}</span>
                  </button>
                );
              })}
            </div>

            {/* TIME GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all
                    ${selectedTime === time
                      ? "bg-[var(--color-secondary)] text-white border-[var(--color-secondary)] shadow-lg shadow-[rgba(0,162,233,0.4)]"
                      : "border-white/10 text-white/70 hover:border-[var(--color-secondary)] hover:text-white"}
                  `}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* CTA BUTTON */}
            <button
              onClick={handleBooking}
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-light)] text-white px-12 py-4 rounded-full font-bold text-lg transition-all active:scale-95 shadow-[0_10px_40px_rgba(0,162,233,0.5)]"
            >
              Get Started
            </button>
          </>
        ) : (
         <div className="py-12 animate-in fade-in zoom-in duration-500">

  {/* 🤝 HANDSHAKE ICON */}
  {/* <div className="w-20 h-20 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">

    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 transition-transform duration-500 group-hover:scale-110"
    >
      <path d="M11 14l2-2a2 2 0 012.8 0l2.2 2.2a2 2 0 010 2.8l-.8.8a2 2 0 01-2.8 0L12 16" />
      <path d="M7 10l-2.2-2.2a2 2 0 010-2.8l.8-.8a2 2 0 012.8 0L12 8" />
      <path d="M7 14l4 4" />
      <path d="M17 10l-4-4" />
    </svg>

  </div> */}
   <DotLottieReact
      src="https://lottie.host/a32d6163-8bdb-42ad-b2c9-4a07a6453687/NgE8vnjX4M.lottie"
      loop
      autoplay
    />

  <h3 className="text-2xl font-bold text-white mb-2">
    Schedule Confirmed!
  </h3>

  <p className="text-white/60 mb-8">
    We will call you on <strong>{selectedDate}</strong> at{" "}
    <strong>{selectedTime}</strong>.
  </p>

  <button
    onClick={() => router.push("/")}
    className="text-[var(--color-secondary)] cursor-pointer font-semibold hover:underline"
  >
    Go to home page
  </button>

</div>
        )}

      </div>
    </section>
  );
};

export default Page;