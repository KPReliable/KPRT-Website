export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone : string 
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface RegisterResponse {
  status: string;
  message: string;
}

export type RegisterCallback = (
    response: RegisterResponse | null,
    error: Error | null | undefined
  ) => void;
  