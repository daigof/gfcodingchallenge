import "./style.css";

const IndexNewtab = () => {
  return (
    <div className="new-tab">
      <h1>Welcome to Give freely coding challenge Extension!</h1>
      <section>
        This is the <strong>new tab</strong> content
        <br />
        To demo the solution you may use these links:
        <div>
          <strong>Searh result: </strong>
          <a href="https://www.google.com/search?q=tripadvisor">
            https://www.google.com/search?q=tripadvisor
          </a>
        </div>
        <div>
          <strong>Sposored page: </strong>
          <a href="https://www.tripadvisor.com">https://www.tripadvisor.com</a>
        </div>
        <div>
          <strong>Extension popup: </strong>
          Please click the extension icon in Chrome top bar at the left
        </div>
      </section>
      <br />
      <br />

      <footer>Crafted by Fortes Diego</footer>
    </div>
  );
};

export default IndexNewtab;
