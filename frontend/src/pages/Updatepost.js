import React from "react";
import BannerMain from "../components/Banner-main";
import ModifyPost from "../components/Form-modify";
import ActualPost from "../components/update-actual-post";
import "../styles/updatepost.css";

function UpdatePost() {
  return (
    <div className="page-global">
      <BannerMain />{" "}
      <div className="page-inf-update">
        <div className="modifiy-actual">
          <ModifyPost />
          <ActualPost />
        </div>
      </div>
    </div>
  );
}

export default UpdatePost;
