import logo from "../assets/logo-header-main.jpg";
import "../styles/banner-main.css";
import "../styles/button-main.css";

function removeLs() {
  localStorage.removeItem("token");
}
function BannerMain() {
  return (
    <header id="header-main">
      <div className="div-logo-main">
        <img src={logo} alt="logo Groupomania" className="groupo-logo-main" />
      </div>
      <div className="button-banner ">
        <button className="button-header">
          <a className="focus-button" href="/main">
            Tous les posts
          </a>
        </button>
        <button className="button-header">
          <a className="focus-button" href="/userpost">
            Modifier mes posts
          </a>
        </button>
        <button className="button-header">
          <a className="focus-button" href="/createpost">
            Créer un post
          </a>
        </button>
        <button onClick={removeLs} className=" button-header">
          <a className="focus-button" href="/logout">
            Se déconnecter
          </a>
        </button>
      </div>
    </header>
  );
}

export default BannerMain;
