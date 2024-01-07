import { useStorage } from "@plasmohq/storage/hook";

import { WEBSITES_DATA, type ApiResultType } from "~background";

const IndexPopup = () => {
  const [websites] = useStorage<ApiResultType>(WEBSITES_DATA);
  console.log(websites);
  if (!websites) {
    return <div>Loading sites...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: "400px"
      }}>
      <h1>Welcome to Give freely coding challenge Extension!</h1>
      <h3>This is the list of companies</h3>
      <ul>
        {websites.map((website) => {
          return <li key={website.name}>{website.name}</li>;
        })}
      </ul>
      <br />
      <footer>Crafted by Fortes Diego</footer>
    </div>
  );
};

export default IndexPopup;
