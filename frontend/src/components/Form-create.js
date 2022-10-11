import "../styles/createpost.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    fetch("http://localhost:3001/createpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(function (response) {
      if (response.ok) {
        navigate("/main");
        console.log("fait");
      } else {
        alert("Champ manquant/erreur avec l'image");
      }
    });
  }

  return (
    <div className="bloc-form">
      <div className="div-full-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-elem">
            <div className="div-elem-form">
              <label for="titre">Titre de l'article:</label>
              <input
                type="text"
                autocomplete="nope"
                {...register("titre", {
                  required: true,
                  minLength: 10,
                })}
              />
              {errors.title && (
                <p>Veuillez saisir un titre de 10 caractères minimun</p>
              )}
            </div>
            <div className="div-elem-form">
              <label for="description">Article:</label>
              <input
                type="text"
                autocomplete="nope"
                {...register("description", {
                  required: true,
                  minLength: 50,
                })}
              />
              {errors.article && (
                <p>Veuillez saisir un article de 50 caractères minimun</p>
              )}
            </div>
            <div class="form-group">
              <label for="imageUrl">Insérer une image</label>
              <input
                type="file"
                autocomplete="nope"
                {...register("imageUrl", {
                  required: true,
                })}
              />
            </div>
            <div className="action">
              <button className="login-btn">Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreatePost;
