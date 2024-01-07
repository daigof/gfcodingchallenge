import { Storage } from "@plasmohq/storage";

console.log("Welcome to Give freely coding challenge Extension!");
console.log("This is the background scripts");

export const API_URL = "https://api.jsonbin.io/v3/b/64678cf09d312622a36121b8";

export const REQUEST_OPTIONS = {
  method: "GET",
  headers: {
    "X-Access-Key":
      "$2b$10$QhrtefF/jKDbKgauF5trL.SK6VAk69VSIcHMhGaEs8ZViK.xBh0Om"
  }
};

export type ApiResultType = Array<{
  name: string;
  url: string;
  messages: Array<string>;
}>;

export const WEBSITES_DATA = "WEBSITES_DATA";
async function ss() {
  const storage = new Storage();
  try {
    const response = await fetch(API_URL, REQUEST_OPTIONS);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const res = await response.json();
    await storage.set(WEBSITES_DATA, res.record.websites);
  } catch (error) {
    await storage.set(WEBSITES_DATA, null);
  }
}
ss();
