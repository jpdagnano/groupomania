import React from "react";
import BannerMain from "../components/Banner-main";
import FormUser from "../components/Post-user.js";

function userPost() {
  return (
    <div className="page-global">
      <BannerMain />
      <div className="page-inf">
        <div className="ensemble-posts">
          <FormUser />
        </div>
      </div>
    </div>
  );
}

export default userPost;
