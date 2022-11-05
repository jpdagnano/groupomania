import React, { useState, useEffect } from "react";
import "../styles/post.css";

function PostUser() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/userpost", {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    }).then((response) =>
      response.json().then((data) => {
        setPost(data);
      })
    );
  }, []);

  return post.map((element) => (
    <div className="article-global">
      <a className="click-article" id={element._id} href="/updatepost">
        <div className="lien-image">
          <div className="image-global">
            <img src={element.image} alt="article" className="image-solo" />
          </div>
          <h2 className="article-titre">{element.titre}</h2>

          <p className="article-texte">{element.description}</p>
        </div>
      </a>
    </div>
  ));
}

export default PostUser;
