"use client";

import React, {
  useState,
  MouseEvent,
} from "react";

import { useRouter } from "next/navigation";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import "../css/schedule-booking.css";

interface UserDetails {
  name: string;
  email: string;
  mobile: string;
  countryCode: string;
  orgName: string;
}

interface ScheduleBookingProps {
  userDetails: UserDetails;
  onComplete: () => void;
}

interface DateItem {
  day: string;
  date: string;
  month: string;
  available: boolean;
}

const ScheduleBooking: React.FC<
  ScheduleBookingProps
> = ({ userDetails, onComplete }) => {
  const router = useRouter();

  const [selectedDate, setSelectedDate] =
    useState<string>("Tue 14 Apr");

  const [selectedTime, setSelectedTime] =
    useState<string>("4:30 PM");

  const [isBooked, setIsBooked] =
    useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] =
    useState<boolean>(false);

  const dates: DateItem[] = [
    {
      day: "Tue",
      date: "14",
      month: "Apr",
      available: true,
    },
    {
      day: "Wed",
      date: "15",
      month: "Apr",
      available: true,
    },
    {
      day: "Thu",
      date: "16",
      month: "Apr",
      available: true,
    },
    {
      day: "Fri",
      date: "17",
      month: "Apr",
      available: false,
    },
    {
      day: "Sat",
      date: "18",
      month: "Apr",
      available: false,
    },
    {
      day: "Sun",
      date: "19",
      month: "Apr",
      available: false,
    },
    {
      day: "Mon",
      date: "20",
      month: "Apr",
      available: true,
    },
  ];

  const timeSlots: string[] = [
    "4:30 PM",
    "5:30 PM",
    "6:30 PM",
    "7:30 PM",
    "8:30 PM",
    "9:30 PM",
    "10:30 PM",
    "11:30 PM",
  ];

  const handleBooking = (
    e: MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();

    setIsSubmitting(true);

    const appointment = {
      name: userDetails.name,
      email: userDetails.email,
      mobile: `${userDetails.countryCode} ${userDetails.mobile}`,
      organization: userDetails.orgName,
      date: selectedDate,
      time: selectedTime,
      bookedAt: new Date().toISOString(),
    };

    // Simulate API call
    setTimeout(() => {
      console.log(
        "Schedule Booked:",
        appointment
      );

      setIsSubmitting(false);

      setIsBooked(true);

      onComplete();
    }, 1500);
  };

  return (
    <section className="schedule-booking__section">
      <div
        className="schedule-booking__container"
        style={{
          background: "var(--color-bg-alt)",
          border:
            "1px solid var(--color-border)",
        }}
      >
        {!isBooked ? (
          <>
            {/* HEADER */}
            <header className="schedule-booking__header">
              <div className="schedule-booking__header-content">
                <h2 className="schedule-booking__title">
                  What time works best for a
                  quick call?
                </h2>

                <p className="schedule-booking__subtitle">
                  Please book your slot by
                  selecting a date and time.
                  We all call{" "}
                  <strong>
                    {userDetails.name}
                  </strong>{" "}
                  on the selected date.
                </p>
              </div>
            </header>

            {/* DATE SELECTOR */}
            <div className="schedule-booking__date-selector">
              <label className="schedule-booking__date-label">
                Select Date{" "}
                <span className="schedule-booking__required">
                  *
                </span>
              </label>

              <div className="schedule-booking__dates-grid">
                {dates.map((item, idx) => {
                  const dateKey = `${item.day} ${item.date} ${item.month}`;

                  const isSelected =
                    selectedDate === dateKey;

                  return (
                    <button
                      key={idx}
                      disabled={!item.available}
                      onClick={() =>
                        setSelectedDate(
                          dateKey
                        )
                      }
                      className={`schedule-booking__date-btn ${
                        isSelected
                          ? "schedule-booking__date-btn--selected"
                          : ""
                      } ${
                        !item.available
                          ? "schedule-booking__date-btn--disabled"
                          : ""
                      }`}
                      title={
                        !item.available
                          ? "Not available"
                          : dateKey
                      }
                    >
                      <span className="schedule-booking__date-day">
                        {item.day}
                      </span>

                      <span className="schedule-booking__date-date">
                        {item.date}
                      </span>

                      <span className="schedule-booking__date-month">
                        {item.month}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TIME SELECTOR */}
            <div className="schedule-booking__time-selector">
              <label className="schedule-booking__time-label">
                Select Time{" "}
                <span className="schedule-booking__required">
                  *
                </span>
              </label>

              <div className="schedule-booking__times-grid">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() =>
                      setSelectedTime(time)
                    }
                    className={`schedule-booking__time-btn ${
                      selectedTime === time
                        ? "schedule-booking__time-btn--selected"
                        : ""
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* SUMMARY */}
            <div className="schedule-booking__summary">
              <div className="schedule-booking__summary-item">
                <span className="schedule-booking__summary-label">
                  Name:
                </span>

                <span className="schedule-booking__summary-value">
                  {userDetails.name}
                </span>
              </div>

              <div className="schedule-booking__summary-item">
                <span className="schedule-booking__summary-label">
                  Email:
                </span>

                <span className="schedule-booking__summary-value">
                  {userDetails.email}
                </span>
              </div>

              <div className="schedule-booking__summary-item">
                <span className="schedule-booking__summary-label">
                  Organization:
                </span>

                <span className="schedule-booking__summary-value">
                  {userDetails.orgName}
                </span>
              </div>

              <div className="schedule-booking__summary-item">
                <span className="schedule-booking__summary-label">
                  Call Date:
                </span>

                <span className="schedule-booking__summary-value">
                  {selectedDate}
                </span>
              </div>

              <div className="schedule-booking__summary-item">
                <span className="schedule-booking__summary-label">
                  Call Time:
                </span>

                <span className="schedule-booking__summary-value">
                  {selectedTime}
                </span>
              </div>
            </div>

            {/* CTA BUTTON */}
            <button
              onClick={handleBooking}
              disabled={isSubmitting}
              className="schedule-booking__submit-btn"
            >
              {isSubmitting ? (
                <>
                  <span className="schedule-booking__spinner"></span>
                  Booking...
                </>
              ) : (
                "Confirm & Book Call"
              )}
            </button>
          </>
        ) : (
          <div className="schedule-booking__success">
            {/* SUCCESS ANIMATION */}
            <DotLottieReact
              src="https://lottie.host/a32d6163-8bdb-42ad-b2c9-4a07a6453687/NgE8vnjX4M.lottie"
              loop
              autoplay
            />

            <h3 className="schedule-booking__success-title">
              Schedule Confirmed!
            </h3>

            <p className="schedule-booking__success-message">
              We will call you on{" "}
              <strong>{selectedDate}</strong>{" "}
              at{" "}
              <strong>{selectedTime}</strong>.
            </p>

            <p className="schedule-booking__success-details">
              A confirmation has been sent to{" "}
              <strong>
                {userDetails.email}
              </strong>
            </p>

            <div className="schedule-booking__success-actions">
              <button
                onClick={() =>
                  router.push("/")
                }
                className="schedule-booking__home-btn"
              >
                Go to home page
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScheduleBooking;