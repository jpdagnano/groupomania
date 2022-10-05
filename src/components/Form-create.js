import "../styles/createpost.css";

function CreatePost() {
  return (
    <form className="bloc-form">
      <div className="div-full-form">
        <div className="div-elem-form">
          <label for="titre">Titre de l'article:</label>
          <input type="text" className="input-content"></input>
        </div>
        <div className="div-elem-form">
          <label for="description">Article:</label>
          <input type="text" className="input-content"></input>
        </div>
        <div class="form-group">
          <laber for="image">Insérer une image</laber>
          <input type="file" accept="image/*" />
        </div>
      </div>
    </form>
  );
}

export default CreatePost;
