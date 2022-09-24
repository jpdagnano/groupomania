import "../styles/createsuccess.css";

function CreateSuccess() {
  return (
    <div className="page-success">
      <div className="bloc-success">
        <h1>Votre compte à bien été crée</h1>
        <p>Cliquez sur le bouton ci-dessous pour vous authentifier.</p>
        <a className="button-return" href="/">
          <button href="/">Revenir à la page d'accueil</button>
        </a>
      </div>
    </div>
  );
}
export default CreateSuccess;
