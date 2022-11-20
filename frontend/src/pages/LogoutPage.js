import React from "react";
import Logout from "../components/Logout";
import Banner from "../components/Banner";

function LogoutPage() {
  return (
    <div className="page-global">
      <Banner />{" "}
      <div className="page-infer">
        <Logout />;
      </div>
    </div>
  );
}

export default LogoutPage;
