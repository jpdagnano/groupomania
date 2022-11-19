import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { DateTime } from "luxon";

const pageIdWindow = window.location.search;
const longId = new URLSearchParams(pageIdWindow);
const pageId = longId.get("_id");

function ModifyPost() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    let formdata = new FormData();
    formdata.append("titre", data.titre);
    formdata.append("description", data.description);
    formdata.append("image", data.image[0]);
    formdata.append("userId", localStorage.getItem("userId"));
    console.log(data.image);
    fetch("http://localhost:3001/updatepost?_id=" + pageId, {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
      method: "PUT",

      body: formdata,
    }).then(function (response) {
      if (response.ok) {
        console.log(data);
        navigate("/userpost");
        console.log("fait");
      } else {
        alert("Champ manquant/erreur avec l'image");
      }
    });
  }

  return (
    <div className="bloc-form">
      <div className="div-full-form">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                  accept="image/jpg, image/jpeg, image/png"
                  autoComplete="nope"
                  {...register("image")}
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
export default ModifyPost;
