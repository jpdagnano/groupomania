import "../styles/createpost.css";
import "../styles/button-send.css";
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
    let formdata = new FormData();
    formdata.append("titre", data.titre);
    formdata.append("description", data.description);
    formdata.append("image", data.image[0]);
    formdata.append("userId", localStorage.getItem("userId"));
    fetch("http://localhost:3001/createpost", {
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
      method: "POST",

      body: formdata,
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
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="form-elem">
            <div className="div-elem-form">
              <input
                className="input-form"
                type="text"
                autoComplete="nope"
                placeholder="Titre du post"
                {...register("titre", {
                  required: true,
                })}
              />
            </div>
            <div className="div-elem-form">
              <textarea
                className="input-form2"
                type="text"
                autoComplete="nope"
                placeholder="contenu du post"
                {...register("description", {
                  required: true,
                })}
              />
            </div>
            <div className="form-group">
              image:
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                placeholder="Choisir mon image"
                {...register("image")}
              />
            </div>
            <div className="send-create">
              <button className="button-send">Envoyer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreatePost;
