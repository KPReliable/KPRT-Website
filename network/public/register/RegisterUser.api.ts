
import { API_ENDPOINTS } from "@/network/API.constant";
import { RegisterRequest, RegisterCallback, RegisterResponse } from "./RegisterUser.interface";
import { fetchRequest } from "@/network/FetchRequest";



export async function registeruser(
  userinfoRequest: RegisterRequest,
  callback: RegisterCallback
): Promise<RegisterResponse | Error> {
  const url = API_ENDPOINTS.REGISTER();
  try {
    // Add Validation for each field as required , email validation, mobile number validation
    // Assuming fetchRequest is a function that wraps fetch and returns a parsed JSON response
    const responseData = await fetchRequest(url, "POST", userinfoRequest);
    console.log('API response:', responseData);
    if (responseData instanceof Error) {

      callback(null, responseData);
    } else {
      // if(responseData.data.token != null){
      //   customAuthorizationConfig.kb_authorization = responseData.data.token
      // }
      callback(responseData, null);
    }
    return responseData;
  } catch (error) {
    console.log(
      "Error Message:",
      error instanceof Error ? error.message : String(error)
    );
    callback(null, error instanceof Error ? error : new Error(String(error)));
    throw error instanceof Error ? error : new Error(String(error));
  }
}
