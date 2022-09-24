import React from "react";
import ReactDOM from "react-dom";
import Banner from "../components/Banner";
import Form from "../components/Form";

function Home() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <div>
        <Banner /> <Form />;
      </div>
    </React.StrictMode>
  );
}

export default Home;
