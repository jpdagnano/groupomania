import React, { useState, useEffect } from "react";

function ActualPost() {
  const [post, setPost] = useState([]);
  const [ident, setIdent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/updatepost", {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        _id: "6366b830e3fcde3dfc27f092",
      }),
    }).then((response) =>
      response.json().then((data) => {
        setPost(data);
      })
    );
  }, []);

  return post.map((element, index) =>
    console.log(element)(
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
              <i className="fa-regular fa-thumbs-up"></i>
              <div className="number-likes">{element.likes}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ActualPost;
