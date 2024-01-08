import clsx from "clsx";

import { useStorage } from "@plasmohq/storage/hook";

import { WEBSITES_DATA, type ApiResultType } from "~background";

import "./index.css";

import { useState } from "react";

import type { Unpacked } from "~utils";

const IndexPopup = () => {
  const [selectedSite, setSelectedSite] =
    useState<Unpacked<ApiResultType>>(null);

  const [websites] = useStorage<ApiResultType>(WEBSITES_DATA);

  if (!websites) {
    return <div>Loading sites...</div>;
  }

  const companyClickHandler = (website: Unpacked<ApiResultType>) => {
    setSelectedSite(website);
  };

  return (
    <div className="main-wrapper">
      <h1>Welcome to Give freely coding challenge Extension!</h1>

      <div className="animated-container">
        <div
          className={clsx("companies-list", {
            show: !selectedSite,
            hide: selectedSite
          })}>
          <h3>This is the list of companies, please select one</h3>
          <ul>
            {websites.map((website) => {
              return (
                <li
                  key={website.name}
                  onClick={() => companyClickHandler(website)}>
                  {website.name}
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className={clsx("websites-messages", {
            show: selectedSite,
            hide: !selectedSite
          })}>
          {selectedSite ? (
            <>
              <h3>{selectedSite.name} messages:</h3>
              <ul>
                {selectedSite.messages.map((m) => {
                  return <li key={m}>{m}</li>;
                })}
              </ul>
              <button
                type="button"
                onClick={() => setSelectedSite(null)}
                className="go-back-btn">
                Go back
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default IndexPopup;
