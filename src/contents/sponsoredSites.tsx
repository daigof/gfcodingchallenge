import styleText from "data-text:./sponsoredSites.css";
import type { PlasmoGetStyle } from "plasmo";

import { useStorage } from "@plasmohq/storage/hook";

import { WEBSITES_DATA, type ApiResultType } from "~background";
import { cleanUrl, pickRandomStringFromArray } from "~utils";

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style");
  style.textContent = styleText;
  return style;
};

const SponsoredSiteBanner = () => {
  const [websites] = useStorage<ApiResultType>(WEBSITES_DATA);

  if (!websites) {
    return null;
  }

  const currentSiteDomain = cleanUrl(window.location.hostname);
  const websiteMatch = websites.find((w) => w.url === currentSiteDomain);
  if (!websiteMatch) {
    return null;
  }

  document.body.style.marginTop = "50px";
  return (
    <div className="banner-wrapper">
      {pickRandomStringFromArray(websiteMatch.messages)}
    </div>
  );
};

export default SponsoredSiteBanner;
