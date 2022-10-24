import logo from "../assets/logo-header-main.jpg";
import "../styles/banner-main.css";
import "../styles/button-main.css";

function BannerMain() {
  return (
    <header id="header-main">
      <div className="div-logo-main">
        <img src={logo} alt="logo Groupomania" className="groupo-logo-main" />
      </div>
      <div className="button-banner ">
        <div className="button-all-post bttn-pill bttn-lg bttn-primary">
          <a className="focus-button" href="/main">
            Tous les posts
          </a>
        </div>
        <div className="button-all-post bttn-pill bttn-lg bttn-primary">
          <a className="focus-button" href="/updatepost">
            Modifier mes posts
          </a>
        </div>
        <div className="button-create-post bttn-pill bttn-lg bttn-primary">
          <a className="focus-button" href="/createpost">
            Créer un post
          </a>
        </div>
        <div className="button-logout bttn-pill bttn-lg bttn-primary">
          <a className="focus-button" href="/logout">
            Se déconnecter
          </a>
        </div>
      </div>
    </header>
  );
}

export default BannerMain;
