import callAPI from "@/config/api";
import { SignInTypes } from "./data-types";
const apiUrl = process.env.NEXT_PUBLIC_API;
const apiVersion = "api/v1";

export async function setSignUp(data: FormData) {
  const url = `${apiUrl}/${apiVersion}/auth/signup`;
  return callAPI({
    url,
    method: "PUST",
    data,
  });
}

export async function setSignIn(data: SignInTypes) {
  const url = `${apiUrl}/${apiVersion}/auth/signin`;
  return callAPI({
    url,
    method: "POST",
    data,
  });
}
