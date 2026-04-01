// import ENV from '../../env.json'
const BASE_URL = "";
// const BASE_URL = "http://localhost:7438/api";
export const API_KEYS: Record<string, string> = {
  TEST: "test",
};

type FetchFunction = (...params: string[]) => string;


export const API_ENDPOINTS: Record<string, FetchFunction> = {
  CHECK_DOMAIN: () => `${BASE_URL}/user/domain/`,
  GET_RECIPT :(paymentId)=>`${BASE_URL}/public/order/receipt/${paymentId}`
}