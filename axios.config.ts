import axios from "axios";
import { SignUpInputType } from "./typings";

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
