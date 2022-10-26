import React, { useState, useEffect } from "react";
import image200 from "../assets/image200x200.png";
import OnePost from "./Post-solo";
import "../styles/post.css";

function Post() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/main").then((response) =>
      response.json().then((data) => {
        setPost(data);
      })
    );
  }, []);

  let artTitre = document.getElementsByClassName("article-titre");
  post.forEach((element) => {
    <div className="article-global">
      <div className="lien-image">
        <div className="image-global">
          <img src={image200} alt="article" className="image-solo" />
        </div>
        <h2 className="article-titre">{post.titre}</h2>

        <p className="article-texte">{post.description}</p>
        <div className="article-date">
          <div className="date">June 24, 2020</div>
        </div>
        <div>
          <div className="likes">
            <i className="fa-regular fa-thumbs-up"></i>
            <div className="number-likes">{post.like}</div>
          </div>
        </div>
      </div>
    </div>;
    console.log(element);
  });
}

export default Post;
