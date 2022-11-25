import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./Delete-button";
import "../styles/modifypost.css";

const pageIdWindow = window.location.search;
const longId = new URLSearchParams(pageIdWindow);
const pageId = longId.get("_id");

function ModifyPost() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    let formdata = new FormData();
    formdata.append("titre", data.titre);
    formdata.append("description", data.description);
    formdata.append("image", data.image[0]);
    formdata.append("userId", localStorage.getItem("userId"));
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
                <input
                  className="titre-modify"
                  type="text"
                  autoComplete="nope"
                  placeholder="Titre de l'article"
                  {...register("titre", {
                    required: true,
                  })}
                />
              </label>
            </div>
            <div className="div-elem-form">
              <label htmlFor="description">
                <textarea
                  className="textarea-modify"
                  type="text"
                  autoComplete="nope"
                  placeholder="contenu du post"
                  {...register("description", {
                    required: true,
                  })}
                />
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
              <button className="login-btn send-btn-modify">Envoyer</button>
              {DeleteButton()}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ModifyPost;
