import logo from "../assets/logo-header.jpg";
import "../styles/banner.css";

function Banner() {
  return (
    <header id="header">
      <div className="div-logo">
        <img src={logo} alt="logo Groupomania" className="groupo-logo" />
      </div>
    </header>
  );
}

export default Banner;
