import axios from "axios";

const globalAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default globalAxios;
