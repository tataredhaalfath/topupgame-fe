import callAPI from "@/config/api";
import axios from "axios";
import { CheckOutTypes } from "./data-types";
const apiUrl = process.env.NEXT_PUBLIC_API;
const apiVersion = "api/v1";

export async function getFeaturedGame() {
  const response = await axios.get(
    `${apiUrl}/${apiVersion}/player/landingpage`
  );
  return response.data.data;
}

export async function getDetailVoucher(id: string) {
  const response = await axios.post(`${apiUrl}/${apiVersion}/player/detail`, {
    id,
  });
  return response.data.data;
}

export async function getGameCategory() {
  const response = await axios.get(`${apiUrl}/${apiVersion}/player/category`);
  return response.data.data;
}

export async function setCheckOut(data: CheckOutTypes) {
  const url = `${apiUrl}/${apiVersion}/player/checkout`;
  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}

export async function getMemberOverview() {
  const url = `${apiUrl}/${apiVersion}/player/dashboard`;
  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
