import React, { useState, useEffect } from "react";
const pageIdWindow = window.location.search;
const longId = new URLSearchParams(pageIdWindow);
const pageId = longId.get("_id");

function ActualPost() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/updatepost?_id=" + pageId, {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    }).then((response) =>
      response.json().then((data) => {
        setPost(data);
      })
    );
  }, []);

  return (
    <div className="article-global article-global-modify">
      <div className="lien-image">
        <div className="image-global">
          <img src={post.image} alt="article" className="image-solo" />
        </div>
        <h2 className="article-titre">{post.titre}</h2>

        <p className="article-texte">{post.description}</p>

        <div></div>
      </div>
    </div>
  );
}
export default ActualPost;
