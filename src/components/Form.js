import "../styles/form.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="full-form">
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Connexion</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="email"
                placeholder="Adresse e-mail"
                autocomplete="nope"
                {...register("email", { required: true })}
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
            <button className="login-btn">Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
