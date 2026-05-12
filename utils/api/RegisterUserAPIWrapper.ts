import { registeruser } from "@/network/public/register/RegisterUser.api";
import {
  RegisterRequest,
  RegisterResponse,
  RegisterCallback,
} from "@/network/public/register/RegisterUser.interface";

import { FormData } from "@/app/booking/interface/Form.interface";
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
  data?: RegisterResponse;
  error?: Error;
}


interface UserDetails {
  otp: string;
  verificationId: string;
}


export const submitRegisterUser = async (
  request: RegisterRequest,
  onSuccess: (payload: {details:UserDetails,data:FormData}) => void
): Promise<ApiCallResult> => {
  return new Promise((resolve) => {
    const handleUserInfoResponse: RegisterCallback = (
      response: RegisterResponse | null,
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
        const otp = response.data.otp;
        const verificationId = response.data.verificationId;

        if (typeof otp !== "string" || typeof verificationId !== "string") {
          resolve({
            success: false,
            error: new Error("Missing OTP or verificationId in response"),
          });
          return;
        }

        onSuccess({ details: { otp, verificationId }, data: request });
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
      registeruser(request, handleUserInfoResponse);
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

