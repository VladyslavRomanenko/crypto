import axios from "axios";

export const instanceCoins = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "31ba874080mshd238b009d98da6dp170e52jsn746510a63ca9",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    offset: "0",
  },
});

export const fetchCoins = (count) => {
  let limit = count;

  if (limit === undefined) {
    limit = 10;
  }
  const response = instanceCoins.get(`/coins?limit=${limit}`);
  return response;
};

export const fetchCoinById = (id) => {
  const response = instanceCoins.get(`/coin/${id}`);
  return response;
};

fetchCoinById("razxDUgYGNAdQ");
