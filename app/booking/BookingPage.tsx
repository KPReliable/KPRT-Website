"use client";

import { useState } from "react";

import UserDetailsForm from "./component/user-details-form";
import OTPVerification from "./component/otp-verification";
import ScheduleBooking from "./component/schedule-booking";


interface UserDetails {
  name: string;
  orgName: string;
  email: string;
  mobile: string;
  countryCode: string;
}

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState("user-details"); // "user-details" | "otp" | "schedule"
  const [userDetails, setUserDetails] =
  useState<UserDetails | null>(null);

const handleUserDetailsSuccess = (
  details: UserDetails
): void => {
  setUserDetails(details);
  setCurrentStep("otp");
};

const handleOTPSuccess = (
  details: UserDetails
): void => {
  setCurrentStep("schedule");
};

  const handleBackFromOTP = () => {
    setCurrentStep("user-details");
  };

  const handleScheduleComplete = () => {
    // Handle schedule completion - maybe redirect to home
    console.log("Booking completed!", { userDetails });
  };

  return (
    <div className="booking__page">
      {currentStep === "user-details" && (
        <UserDetailsForm onSuccess={handleUserDetailsSuccess} />
      )}

      {currentStep === "otp" && userDetails && (
        <OTPVerification
          userDetails={userDetails}
          onSuccess={handleOTPSuccess}
          onBack={handleBackFromOTP}
        />
      )}

      {currentStep === "schedule" && userDetails && (
        <ScheduleBooking
          userDetails={userDetails}
          onComplete={handleScheduleComplete}
        />
      )}
    </div>
  );
};

export default BookingPage;