"use client";

import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  ClipboardEvent,
} from "react";

import "../css/otp-verfication.css";

import { submitOtp } from "@/utils/api/ValidateOtpApiWrapper";

interface UserDetails {
  otp: string;
  verificationId: string;
}

interface OTPVerificationProps {
  userDetails: UserDetails;
  onSuccess: (data: UserDetails) => void;
  onBack: () => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  userDetails,
  onSuccess,
  onBack,
}) => {
  const [otp, setOtp] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [isVerifying, setIsVerifying] =
    useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const [resendCount, setResendCount] =
    useState<number>(0);

  const [resendTimer, setResendTimer] =
    useState<number>(0);

  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    []
  );

  const MAX_RESEND_ATTEMPTS = 3;
  const RESEND_COOLDOWN = 30;

  // Timer countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleOtpChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const value = e.target.value;

    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    // Clear error
    if (error) {
      setError("");
    }

    // Focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    e: ClipboardEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();

    const paste = e.clipboardData
      .getData("text")
      .trim();

    // Auto-fill if 6 digits
    if (/^\d{6}$/.test(paste)) {
      const digits = paste.split("");

      setOtp(digits);

      inputRefs.current[5]?.focus();
    }
  };

  
const handleVerify = async (): Promise<void> => {
  const otpString = otp.join("");

  // VALIDATE OTP
  if (otpString.length !== 6) {
    setError("Please enter a valid 6-digit OTP");
    return;
  }

  if (isVerifying) return;

  setError("");
  setIsVerifying(true);

  try {
    // API PAYLOAD
    const payload = {
      verificationId:
        userDetails.verificationId,

      otp: otpString,
    };

    // API CALL
    const result = await submitOtp(
      payload
    );

    // HANDLE FAILED RESPONSE
    if (!result.success) {
      if (result.error) {
        throw result.error;
      }

      throw new Error(
        "OTP verification failed"
      );
    }

    // SUCCESS
    onSuccess(userDetails);
  } catch (error) {
    // NETWORK ERROR
    if (
      error instanceof TypeError &&
      error.message.includes("fetch")
    ) {
      setError(
        "Network error. Please check your internet connection."
      );
    }

    // NORMAL ERROR
    else if (error instanceof Error) {
      setError(
        error.message ||
          "Failed to verify OTP"
      );
    }

    // UNKNOWN ERROR
    else {
      setError(
        "Something went wrong. Please try again."
      );
    }
  } finally {
    setIsVerifying(false);
  }
};
  const handleResend = (): void => {
    if (resendCount >= MAX_RESEND_ATTEMPTS) {
      setError(
        "Maximum resend attempts exceeded. Please contact support."
      );

      return;
    }

    setResendCount((prev) => prev + 1);

    setResendTimer(RESEND_COOLDOWN);

    setOtp(["", "", "", "", "", ""]);

    setError("");

    inputRefs.current[0]?.focus();

  };

  return (
    <section className="otp-verification__section">
      <div className="otp-verification__container">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="otp-verification__back-btn"
          title="Go back to user details"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Header */}
        <div className="otp-verification__header">
          <h2 className="otp-verification__title">
            Verify Your Account
          </h2>
        </div>

        {/* OTP Inputs */}
        <div className="otp-verification__inputs-wrapper">
          <div className="otp-verification__inputs-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  handleOtpChange(e, index)
                }
                onKeyDown={(e) =>
                  handleBackspace(e, index)
                }
                onPaste={handlePaste}
                className={`otp-verification__input ${
                  error
                    ? "otp-verification__input--error"
                    : ""
                }`}
                aria-label={`OTP digit ${
                  index + 1
                }`}
              />
            ))}
          </div>

          {/* Error */}
          {error && (
            <div className="otp-verification__error">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                ></circle>

                <line
                  x1="12"
                  y1="8"
                  x2="12"
                  y2="12"
                ></line>

                <line
                  x1="12"
                  y1="16"
                  x2="12.01"
                  y2="16"
                ></line>
              </svg>

              <span>{error}</span>
            </div>
          )}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={
            isVerifying ||
            otp.join("").length !== 6
          }
          className="otp-verification__verify-btn"
        >
          {isVerifying ? (
            <>
              <span className="otp-verification__spinner"></span>
              Verifying...
            </>
          ) : (
            "Verify & Continue"
          )}
        </button>

        {/* Resend */}
        <div className="otp-verification__resend-section">
          <p className="otp-verification__resend-text">
            Did not receive the code?
          </p>

          {resendTimer > 0 ? (
            <div className="otp-verification__resend-timer">
              <span>
                Resend in {resendTimer}s
              </span>
            </div>
          ) : (
            <button
              onClick={handleResend}
              disabled={
                resendCount >=
                MAX_RESEND_ATTEMPTS
              }
              className="otp-verification__resend-btn"
            >
              {resendCount >=
              MAX_RESEND_ATTEMPTS
                ? "Resend limit exceeded"
                : "Resend Code"}
            </button>
          )}

          {resendCount > 0 &&
            resendCount <
              MAX_RESEND_ATTEMPTS && (
              <p className="otp-verification__resend-count">
                {MAX_RESEND_ATTEMPTS -
                  resendCount}{" "}
                attempt
                {MAX_RESEND_ATTEMPTS -
                  resendCount >
                1
                  ? "s"
                  : ""}{" "}
                remaining
              </p>
            )}
        </div>

        {/* Info */}
        <div className="otp-verification__info-box">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            ></circle>

            <line
              x1="12"
              y1="16"
              x2="12"
              y2="12"
            ></line>

            <line
              x1="12"
              y1="8"
              x2="12.01"
              y2="8"
            ></line>
          </svg>

          <p>
            Code expires in 10 minutes. You can
            paste the 6-digit code here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OTPVerification;