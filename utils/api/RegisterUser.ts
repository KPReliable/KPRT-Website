import { registeruser } from "@/network/public/register/RegisterUser.api";
import { RegisterRequest ,RegisterResponse,RegisterCallback} from "@/network/public/register/RegisterUser.interface"; 
import { Dispatch, SetStateAction } from "react";

// import { customAuthorizationConfig } from "../../../network/FetchRequest";
function createUser(setApiResponse:Dispatch<SetStateAction<RegisterResponse|undefined>>,setApiError:Dispatch<SetStateAction<Error|undefined>>,req:RegisterRequest){
    
const handleUserInfoResponse:RegisterCallback= (  response: RegisterResponse | null, error: Error | null | undefined) => {
    if (error) {
      console.error("Error while fetching user info:", error);
      setApiError(error)
    }
    console.log(response);
    if(response)
    {
    //   customAuthorizationConfig.kb_authorization=response.data;
      setApiResponse(response)
    }
   
  };

const sendOtp=async ()=>{
//   console.log(data);
  
   
    try{
        await registeruser(req, handleUserInfoResponse);
        // sessionStorage.clear();  
        

      } catch (error) {
        console.error("Error in submitting user data:", error);
      }
}
sendOtp()
}
export default createUser;