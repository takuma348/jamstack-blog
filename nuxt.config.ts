import { defineNuxtConfig } from "nuxt/config";
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  runtimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
});