import React, { useState, useEffect } from "react";

import "../styles/post.css";

function Post() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/main", {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    }).then((response) =>
      response.json().then((data) => {
        setPost(data);
      })
    );
  }, []);

  return post.map(
    (element, index) => (
      console.log(element),
      (
        <div className="article-global">
          <div className="lien-image">
            <div className="image-global">
              <img src={element.image} alt="article" className="image-solo" />
            </div>
            <h2 className="article-titre">{element.titre}</h2>

            <p className="article-texte">{element.description}</p>
            <div className="article-date">
              <div className="date">{element.date}</div>
            </div>
            <div>
              <div className="likes">
                <i className="fa-regular fa-thumbs-up fa-2x"></i>
                <div className="number-likes">{element.likes}</div>
              </div>
            </div>
          </div>
        </div>
      )
    )
  );
}

export default Post;
