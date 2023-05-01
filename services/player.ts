import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API;
const apiVersion = "api/v1";

export async function getFeaturedGame() {
  const response = await axios.get(
    `${apiUrl}/${apiVersion}/player/landingpage`
  );
  return response.data.data;
}

export async function getDetailVoucher() {}
