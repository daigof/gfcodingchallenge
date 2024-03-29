import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchorList
} from "plasmo";
import type { FC } from "react";

import { useStorage } from "@plasmohq/storage/hook";

import { WEBSITES_DATA, type ApiResultType } from "~background";

// Inject styles to the webpage itself
import "./google.css";

import SearchResultNotification from "~components/SearchResultNotification";
import { cleanUrl } from "~utils";

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
  // both could work just decided to go with in CSUI filtering for simplicity/readability sake using the storage hook
  //
  // nodeList.forEach((n) => console.log(n.getAttribute("href")));
  return nodeList;
};

const CustomSearchResultLink: FC<PlasmoCSUIProps> = ({ anchor }) => {
  const [websites] = useStorage<ApiResultType>(WEBSITES_DATA);

  if (!websites) {
    return null;
  }

  const anchorUrl = cleanUrl(anchor.element.getAttribute("href"));

  const websiteMatch = websites.find((w) => cleanUrl(w.url) === anchorUrl);

  if (websiteMatch) {
    // adds class to the search result link
    anchor.element.classList.add("ext-custom-search-result-bordered-result");

    // add the Bell notification icon
    return <SearchResultNotification websiteInfo={websiteMatch} />;
  }

  return null;
};

export default CustomSearchResultLink;
