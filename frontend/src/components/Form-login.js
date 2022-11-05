import "../styles/form.css";
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProtectedRoutes from "../services/PrivateRoutes";
import axios from "axios";
import { useEffect } from "react";

function FormLogin() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          alert("Adresse mail ou mot de passe incorrect");
        }
      })
      .then(function (infores) {
        localStorage.setItem("userId", infores.userId);
        localStorage.setItem("token", infores.token);

        ProtectedRoutes();
        navigate("/main");
      });
  }

  return (
    <div className="full-form">
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)} encType="application/json">
          <h1>Connexion</h1>
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
            <button className="login-btn">Se connecter</button>
          </div>
        </form>
        <div className="no-account">
          <p>
            Pas encore inscrit ? cliquez{" "}
            <a href="http://localhost:3000/signup">ici</a> pour accéder au
            formulaire
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
