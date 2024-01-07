import "./style.css";

const IndexNewtab = () => {
  return (
    <div
      className="new-tab"
      style={{
        padding: 16,
        display: "flex",
        flexDirection: "column"
      }}>
      <h1>Welcome to Give freely coding challenge Extension!</h1>
      <section>
        This is the <strong>new tab</strong> content
      </section>
      <br />
      <footer>Crafted by Fortes Diego</footer>
    </div>
  );
};

export default IndexNewtab;
