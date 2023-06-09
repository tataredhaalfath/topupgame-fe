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

export async function getMemberTransaction(valueParams: string) {
  let params = "";
  if (valueParams === "all") {
    params = "";
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${apiUrl}/${apiVersion}/player/history${params}`;
  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function getTransactionDetail(id: string, token: string) {
  const url = `${apiUrl}/${apiVersion}/player/history/detail`;
  return callAPI({
    url,
    method: "POST",
    serverToken: token,
    data: {
      id,
    },
  });
}

export async function updateProfile(data: FormData) {
  const url = `${apiUrl}/${apiVersion}/player/profile`;
  return callAPI({
    url,
    method: "PUT",
    token: true,
    data,
  });
}
