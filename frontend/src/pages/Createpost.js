import React from "react";
import BannerMain from "../components/Banner-main";
import Formpost from "../components/Form-create";

function Createp() {
  return (
    <div className="page-global">
      <BannerMain />
      <div className="page-inf-create">
        <Formpost />;
      </div>
    </div>
  );
}

export default Createp;
