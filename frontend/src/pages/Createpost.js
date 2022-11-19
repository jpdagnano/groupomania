import React from "react";
import Banner from "../components/Banner";
import Formpost from "../components/Form-create";

function Createp() {
  return (
    <div className="page-global">
      <Banner />
      <div className="page-inf-create">
        <Formpost />;
      </div>
    </div>
  );
}

export default Createp;
