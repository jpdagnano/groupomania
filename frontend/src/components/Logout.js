import "../styles/logout.css";

function Logout() {
  return (
    <div className="page-logout">
      <div className="bloc-logout">
        <h1>Vous êtes désormais déconnecté</h1>
        <p>
          Cliquez sur le bouton ci-dessous pour retourner à la page d'accueil.
        </p>
        <a className="button-return" href="/">
          <button href="/" className="button-anim1">
            Revenir à la page d'accueil
          </button>
        </a>
      </div>
    </div>
  );
}
export default Logout;
