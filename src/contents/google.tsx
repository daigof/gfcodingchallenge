import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchorList
} from "plasmo";
import type { FC } from "react";

import { useStorage } from "@plasmohq/storage/hook";

import { WEBSITES_DATA, type ApiResultType } from "~background";
import { cleanUrl } from "~utils/cleanUrl";

// Inject styles to the webpage itself
import "./google.css";

import SearchResultNotification from "~components/SearchResultNotification";

//
// TESTING: Inject styles into the ShadowDOM
//
// export const getStyle = () => {
//   const style = document.createElement("style");
//   style.textContent = cssText;
//   return style;
// };

//
// Google Search Result Page Matcher
//
export const config: PlasmoCSConfig = {
  matches: ["https://www.google.com/search*"]
};

//
// TESTING: OnLoad event Listner
//
// window.addEventListener("load", () => {
//   const q = document.querySelectorAll("#search a:not(.l)");
//   console.log(q);
// });

//
// TESTING: Playing with Overlay anchor option
//
// export const getOverlayAnchorList: PlasmoGetOverlayAnchorList = async () => {
//   return document.querySelectorAll("#search a:not(.l,.fl)");
// };

//
// USE INLINE ANCHOR TO FETCH ALL POSSIBLE RESULT
//
export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () => {
  const nodeList = document.querySelectorAll("#search a:not(.l,.fl)");

  //
  // Played around over the idea of filtering the list here instead of in the CSUI component below for efficiency
  // both could work just decided to go with in CSUI filtering for simplicity/readability sake
  //
  // nodeList.forEach((n) => console.log(n.getAttribute("href")));
  return nodeList;
};

const CustomSearchResultLink: FC<PlasmoCSUIProps> = ({ anchor }) => {
  const [websites] = useStorage<ApiResultType>(WEBSITES_DATA);

  if (!websites) {
    return null;
  }

  const websitesUrl = websites.map((w) => cleanUrl(w.url));
  const anchorUrl = cleanUrl(anchor.element.getAttribute("href"));

  if (websitesUrl.includes(anchorUrl)) {
    anchor.element.classList.add("ext-custom-search-result-bordered-result");
    const websiteInfo = websites.find((w) => w.url === anchorUrl);
    return <SearchResultNotification websiteInfo={websiteInfo} />;
  }

  return null;
};

export default CustomSearchResultLink;
