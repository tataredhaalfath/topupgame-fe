import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API;
const apiVersion = "api/v1";

export async function setSignUp(data: object) {
  const response = await axios
    .post(`${apiUrl}/${apiVersion}/auth/signup`, data)
    .catch((err) => err.response);

  const axiosResponse = response.data;
  if (axiosResponse?.error === 1) {
    return axiosResponse;
  }
  return axiosResponse.data;
}

export async function setLogIn() {
  return null;
}
