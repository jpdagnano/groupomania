import React from "react";
import BannerMain from "../components/Banner-main";
import Post from "../components/Post";

function Main() {
  return (
    <div className="page-global">
      <BannerMain />
      <div className="page-inferieure">
        <div className="ensemble-posts">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Main;
