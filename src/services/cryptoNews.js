import axios from "axios";

export const instanceNews = axios.create({
  baseURL: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
  headers: {
    "X-RapidAPI-Key": "31ba874080mshd238b009d98da6dp170e52jsn746510a63ca9",
    "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
  },
});

export const fetchNews = () => {
  const response = instanceNews.get();
  return response;
};
