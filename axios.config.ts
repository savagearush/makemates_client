import axios from "axios";
import { LoginInputType, SignUpInputType } from "./typings";

const API_ENDPOINT = "http://localhost:5000";

export async function CreateNewUser(inputData: SignUpInputType) {
  let config = {
    url: API_ENDPOINT + "/user/register",
    method: "post",
    data: inputData,
    headers: {
      "Content-Type": "application/json",
    },
  };
  return axios(config);
}

export async function SignInUser(inputData: LoginInputType) {
  let config = {
    url: API_ENDPOINT + "/user/login",
    method: "post",
    data: inputData,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials : true
  };
  return axios(config);
}

export async function getUserById(id:{_id : number}) {
  let config = {
    url: API_ENDPOINT + "/user/me",
    method: "post",
    data: id,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  return axios(config);
}
