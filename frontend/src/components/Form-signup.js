import "../styles/form.css";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function FormSignup() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    fetch("http://localhost:3001/signup", {
      ContentType: "application/x-www-form-urlencoded",
      method: "POST",
      body: new URLSearchParams(data),
    }).then(function (response) {
      if (response.ok) {
        navigate("/createsuccess");
        console.log("fait");
      } else {
        alert("Il semblerait que votre compte existe déjà");
      }
    });
  }

  return (
    <div className="full-form">
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Inscription</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="email"
                placeholder="Adresse e-mail"
                autocomplete="nope"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && <p>Adresse invalide</p>}
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Mot de passe"
                autocomplete="new-password"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password && (
                <p>
                  Merci de saisir un mot de passe valide, au minimun 8
                  caractères
                </p>
              )}
            </div>
          </div>
          <div className="action">
            <button className="register-btn">Inscrivez-vous</button>
          </div>
        </form>
        <div className="no-account"></div>
      </div>
    </div>
  );
}

export default FormSignup;
