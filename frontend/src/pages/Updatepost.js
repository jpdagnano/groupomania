import React from "react";
import BannerMain from "../components/Banner-main";
import Formpost from "../components/Form-create";
import ActualPost from "../components/update-actual-post";

function UpdatePost() {
  return (
    <div>
      <BannerMain /> <Formpost />
      <ActualPost /> ;
    </div>
  );
}

export default UpdatePost;
