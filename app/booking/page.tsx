"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


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
    "4:30 PM",
    "5:30 PM",
    "6:30 PM",
    "7:30 PM",
    "8:30 PM",
    "9:30 PM",
    "10:30 PM",
    "11:30 PM",
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
      className="min-h-screen flex items-center justify-center px-4 py-[--section-py] bg-[linear-gradient(180deg,rgba(40,76,135,0.42)_0%,rgba(40,76,135,0.16)_30%,rgba(40,76,135,0.06)_60%,#ffffff_100%)]"
      // style={{ background: "var(--color-secondary)" }}
    >
      <div
        className="w-full max-w-[700px] rounded-[24px] p-8 lg:p-12 text-center"
        style={{
          background: "var(--color-bg-alt)",
          border: "1px solid var(--color-border)",
        }}
      >
        {!isBooked ? (
          <>
            {/* HEADER */}
            <header className="mb-10">
              <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-3">
                What time works best for a quick call?
              </h2>
              <p className="text-[var(--color-text-muted)] text-sm">
                Please book your slot by selecting a date and time.
              </p>
            </header>

            {/* DATE SELECTOR */}
            <div className="flex justify-between items-center border border-[var(--color-border)] rounded-lg overflow-hidden mb-8">
              {dates.map((item, idx) => {
                const dateKey = `${item.day} ${item.date} ${item.month}`;
                const isSelected = selectedDate === dateKey;

                return (
                  <button
                    key={idx}
                    disabled={!item.available}
                    onClick={() => setSelectedDate(dateKey)}
                    className={`flex-1 py-4 flex flex-col items-center transition
                      ${
                        !item.available
                          ? "opacity-30 cursor-not-allowed"
                          : "hover:bg-[var(--color-primary-light)]"
                      }
                      ${
                        isSelected
                          ? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)]"
                          : "text-[var(--color-text-muted)]"
                      }
                    `}
                  >
                    <span className="text-xs">{item.day}</span>
                    <span className="text-lg font-semibold my-1">
                      {item.date}
                    </span>
                    <span className="text-xs uppercase">{item.month}</span>
                  </button>
                );
              })}
            </div>

            {/* TIME GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 px-4 rounded-md border text-sm font-medium transition
                    ${
                      selectedTime === time
                        ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                        : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* CTA BUTTON */}
            <button
              onClick={handleBooking}
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-10 py-3 rounded-md font-semibold text-sm transition"
            >
              Get Started
            </button>
          </>
        ) : (
          <div className="py-10">
            {/* SUCCESS ANIMATION */}
            <DotLottieReact
              src="https://lottie.host/a32d6163-8bdb-42ad-b2c9-4a07a6453687/NgE8vnjX4M.lottie"
              loop
              autoplay
            />

            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
              Schedule Confirmed!
            </h3>

            <p className="text-[var(--color-text-muted)] mb-6 text-sm">
              We will call you on <strong>{selectedDate}</strong> at{" "}
              <strong>{selectedTime}</strong>.
            </p>

            <button
              onClick={() => router.push("/")}
              className="text-[var(--color-primary)] font-semibold text-sm hover:underline"
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