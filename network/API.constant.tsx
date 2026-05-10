// import ENV from '../../env.json'
const BASE_URL = "https://kp-backend-ruddy.vercel.app";
// const BASE_URL = "http://localhost:7438/api";
export const API_KEYS: Record<string, string> = {
  TEST: "test",
};

type FetchFunction = (...params: string[]) => string;


export const API_ENDPOINTS: Record<string, FetchFunction> = {
  REGISTER: () => `${BASE_URL}/api/v1/register`,
  GET_RECIPT :(paymentId)=>`${BASE_URL}/public/order/receipt/${paymentId}`
}