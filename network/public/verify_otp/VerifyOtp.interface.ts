export interface VerifyOTPRequest {
  verificationId: string;
  otp: string;
}

export interface VerifyOTPResponseData {
  userId: string;
  email: string;
  mobile: string;
  isVerified: boolean;
}

export interface VerifyOTPResponse {
  status: string;
  message: string;
  data: VerifyOTPResponseData;
}

export type VerifyOTPCallback = (
  response: VerifyOTPResponse | null,
  error: Error | null | undefined
) => void;