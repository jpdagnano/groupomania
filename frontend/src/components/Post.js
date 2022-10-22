import React from "react";
import image200 from "../assets/image200x200.png";
import "../styles/post.css";

function Post() {
  fetch("http://localhost:3001/main").then((response) =>
    response.json().then((data) => {
      console.log(data);

      data.forEach(function (donneesPost) {
        let artComplet = document.getElementsById("root");
        let articleGlobal = document.createElement("div");

        articleGlobal.appendChild(artComplet);
      });
    })
  );
}

export default Post;
