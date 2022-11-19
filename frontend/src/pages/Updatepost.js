import React from "react";
import BannerMain from "../components/Banner-main";
import ModifyPost from "../components/Form-modify";
import ActualPost from "../components/update-actual-post";
import DeleteButton from "../components/Delete-button";

function UpdatePost() {
  return (
    <div>
      <BannerMain /> <ModifyPost />
      <ActualPost />
      <DeleteButton />
    </div>
  );
}

export default UpdatePost;
