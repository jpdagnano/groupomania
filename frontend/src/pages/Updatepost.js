import React from "react";
import BannerMain from "../components/Banner-main";
import ModifyPost from "../components/Form-modify";
import ActualPost from "../components/update-actual-post";

function UpdatePost() {
  return (
    <div>
      <BannerMain />{" "}
      <div className="modifiy-actual">
        <ModifyPost />
        <ActualPost />
      </div>
    </div>
  );
}

export default UpdatePost;
