import React from "react";
import CreateSuccess from "../components/Createsuccess";
import Banner from "../components/Banner";

function Validcreation() {
  return (
    <div className="page-global">
      <Banner />
      <div className="page-infer">
        <CreateSuccess />;
      </div>
    </div>
  );
}

export default Validcreation;
