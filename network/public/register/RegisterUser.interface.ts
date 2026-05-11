export interface RegisterRequest {
  name: string;
  email: string;
  mobile: string;
  countryCode: string;
  orgName: string;
}

export interface RegisterResponseData {
  userId: string;
  verificationId: string;
  otp?: string;
}

export interface RegisterResponse {
  status: string;
  message: string;
  data: RegisterResponseData;
}

export type RegisterCallback = (
  response: RegisterResponse | null,
  error: Error | null | undefined
) => void;