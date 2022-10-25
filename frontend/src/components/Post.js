import React, { useState, useEffect } from "react";
import image200 from "../assets/image200x200.png";
import "../styles/post.css";

function Post() {
  console.log("eee");
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/main").then((response) =>
      response.json().then((data) => {
        let artComplet = document.getElementsByClassName("ensemble-posts");
        let artFull = artComplet[0];
        setPost(data);
        data.forEach(function (donneesPost, index) {
          console.log(index);
          let articleGlobal = document.createElement("div");
          let lienImage = document.createElement("div");
          let imageGlobal = document.createElement("div");
          let imgSolo = document.createElement("img");
          let artTitre = document.createElement("h2");
          let artTexte = document.createElement("div");
          let artDate = document.createElement("div");
          let soloDate = document.createElement("div");
          let likesFull = document.createElement("div");
          let likesIcone = document.createElement("i");
          let numberLike = document.createElement("div");
          articleGlobal.setAttribute("class", "article-global");
          artFull.insertAdjacentElement("beforeend", articleGlobal);
          articleGlobal.insertAdjacentElement("afterbegin", lienImage);
          lienImage.setAttribute("class", "lien-image");
          lienImage.insertAdjacentElement("beforeend", imageGlobal);
          imageGlobal.setAttribute("class", "image-global");
          imageGlobal.insertAdjacentElement("beforeend", imgSolo);
          imgSolo.setAttribute("class", "image-solo");
          lienImage.insertAdjacentElement("beforeend", artTitre);
          artTitre.setAttribute("class", "article-titre");
          lienImage.insertAdjacentElement("beforeend", artTexte);
          artTexte.setAttribute("class", "article-texte");
          lienImage.insertAdjacentElement("beforeend", artDate);
          artDate.setAttribute("class", "article-date");
          artDate.insertAdjacentElement("beforeend", soloDate);
          soloDate.setAttribute("class", "date");
          lienImage.insertAdjacentElement("beforeend", likesFull);
          likesFull.setAttribute("class", "likes");
          likesFull.insertAdjacentElement("beforeend", likesIcone);
          likesIcone.setAttribute("class", "fa fa-2x fa-thumbs-up");
          likesFull.insertAdjacentElement("beforeend", numberLike);
          numberLike.setAttribute("class", "number-likes");

          artTitre.innerHTML = donneesPost.titre;
          artTexte.innerHTML = donneesPost.description;
          imgSolo.src = image200;
          numberLike.innerHTML = Number(donneesPost.likes);
        });
      })
    );
  }, []);
  console.log(post);
}

export default Post;
