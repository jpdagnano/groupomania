import { element } from "prop-types";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/post.css";

function Post() {
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(0);

  function Like(event) {
    let parameters = `likes=1&_id=${event.target.id}&`;
    let idSelected = event.target.id;

    fetch("http://localhost:3001/main", {
      method: "POST",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: parameters,
    }).then(function (response) {});
    for (let i = 0; i < post.length; i++) {
      if (post[i]._id === idSelected) {
        setLike(post[i].likes + 1);
      }
    }
  }
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
  });

  return post.map((element, index) => (
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
            <i
              className="fa-regular fa-thumbs-up fa-2x"
              id={element._id}
              onClick={Like}
            ></i>
            <div className="number-likes">{element.likes}</div>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Post;
