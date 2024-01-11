import axios from "axios";
import { LoginInputType, SignUpInputType } from "./typings";

const API_ENDPOINT = "http://localhost:5000";

export async function CreateNewUser(inputData: SignUpInputType) {
    const {data} = await axios.post(API_ENDPOINT+ "/user/register", inputData);
    return data;
}



export async function SignInUser(inputData: LoginInputType) {
  const response = await axios.post(API_ENDPOINT+ "/user/login", inputData, {withCredentials : true});
  return response.data;
}

export async function getUserById(currentUser : {_id : number}) {
  const {data} = await axios.post(API_ENDPOINT+ "/user/me", currentUser);
  
  return data;
}
