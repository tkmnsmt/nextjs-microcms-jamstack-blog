import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "napple-blog",
    apiKey: process.env.API_KEY,
});
