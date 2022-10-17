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
        "content-type": "multipart/form-data",
      },

      body: JSON.stringify(data),
    }).then(function (response) {
      if (response.ok) {
        console.log(data);
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
        <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
          <div className="form-elem">
            <div className="div-elem-form">
              <label htmlFor="titre">
                Titre de l'article:
                <input
                  type="text"
                  autoComplete="nope"
                  {...register("titre", {
                    required: true,
                    minLength: 10,
                  })}
                />
                {errors.title && (
                  <p>Veuillez saisir un titre de 10 caractères minimun</p>
                )}
              </label>
            </div>
            <div className="div-elem-form">
              <label htmlFor="description">
                Article:
                <input
                  type="text"
                  autoComplete="nope"
                  {...register("description", {
                    required: true,
                    minLength: 50,
                  })}
                />
                {errors.article && (
                  <p>Veuillez saisir un article de 50 caractères minimun</p>
                )}
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">
                Insérer une image
                <input
                  type="file"
                  name="image"
                  accept="image/jpg, image/jpeg, image/png"
                  autoComplete="nope"
                  {...register("image", {
                    required: true,
                  })}
                />
              </label>
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
