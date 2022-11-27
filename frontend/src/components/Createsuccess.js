import "../styles/createsuccess.css";

function CreateSuccess() {
  return (
    <div className="page-logout">
      <div className="bloc-logout">
        <h1>Votre compte a bien été crée</h1>
        <p>Cliquez sur le bouton ci-dessous pour vous authentifier.</p>
        <a className="button-return" href="/">
          <button className="button-anim1" href="/">
            Revenir à la page d'accueil
          </button>
        </a>
      </div>
    </div>
  );
}
export default CreateSuccess;
