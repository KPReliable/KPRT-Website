import { verify_otp } from "@/network/public/verify_otp/VerifyOtp.api";
import { VerifyOTPRequest, VerifyOTPResponse, VerifyOTPCallback } from "@/network/public/verify_otp/VerifyOtp.interface";
// import { Dispatch, SetStateAction } from "react";

/**
 * ✅ IMPROVED: Proper promise-based API wrapper
 * 
 * Instead of passing setState functions (anti-pattern),
 * this now returns a Promise that resolves with the response
 * or rejects with an error.
 */

export interface ApiCallResult {
  success: boolean;
  data?: VerifyOTPResponse;
  error?: Error;
}


export const submitOtp = async (
  request: VerifyOTPRequest
): Promise<ApiCallResult> => {
  return new Promise((resolve) => {
    const handleUserInfoResponse: VerifyOTPCallback = (
      response: VerifyOTPResponse | null,
      error: Error | null | undefined
    ) => {
      if (error) {
        console.error("Error while registering user:", error);
        resolve({
          success: false,
          error: error || new Error("Unknown error occurred"),
        });
        return;
      }

      if (response) {
        console.log("User registration successful:", response);
        resolve({
          success: true,
          data: response,
        });
        return;
      }

      // Neither response nor error (shouldn't happen)
      resolve({
        success: false,
        error: new Error("No response received from server"),
      });
    };

    try {
      verify_otp(request, handleUserInfoResponse);
    } catch (error) {
      console.error("Error in submitting user data:", error);
      resolve({
        success: false,
        error: error instanceof Error 
          ? error 
          : new Error("Failed to submit registration"),
      });
    }
  });
};

