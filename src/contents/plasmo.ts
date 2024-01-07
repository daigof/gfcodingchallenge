import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
};

window.addEventListener("load", () => {
  console.log("Welcome to Give freely coding challenge Extension!");
  console.log("This is the content script loaded only in plasmo domain URL");

  console.log("Let's change the background to red");
  document.body.style.background = "red";
});
