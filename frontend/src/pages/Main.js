import React from "react";
import BannerMain from "../components/Banner-main";
import Post from "../components/Post";
import OnePost from "../components/Post-solo";

function Main() {
  return (
    <div className="page-global">
      <BannerMain />

      <div className="ensemble-posts">
      <Post />
      </div>
    </div>
  );
}

export default Main;
