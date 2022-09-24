import "../styles/createsuccess.css";

function CreateSuccess() {
  return (
    <div ClassName="page-success">
      <h1>Votre compte à bien été crée</h1>
      <p>
        Cliquez sur le bouton ci-dessous pour vous authentifier.
      </p>
      <a href="/">
        <button href="/">Revenir à la page d'accueil</button>
      </a>
    </div>
  );
}
export default CreateSuccess;
