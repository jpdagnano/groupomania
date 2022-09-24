import "../styles/form.css";

function Form() {
  return (
    <div className="full-form">
      <div className="login-form">
        <form>
          <h1>Connexion</h1>
          <div className="content">
            <div className="input-field">
              <input
                type="email"
                placeholder="Adresse e-mail"
                autocomplete="nope"
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                placeholder="Mot de passe"
                autocomplete="new-password"
              />
            </div>
          </div>
          <div className="action">
            <button>Inscrivez-vous</button>
            <button>Se connecter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
