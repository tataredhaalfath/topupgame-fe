import callAPI from "@/config/api";
const apiUrl = process.env.NEXT_PUBLIC_API;
const apiVersion = "api/v1";

export async function getMemberOverview() {
  const url = `${apiUrl}/${apiVersion}/player/dashboard`;
  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getMemberTransaction(valueParams: string ) {
  let params = ""
  if(valueParams === "all"){
    params = ""
  }else {
    params= `?status=${valueParams}`
  }
  const url = `${apiUrl}/${apiVersion}/player/history${params}`;
  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}
