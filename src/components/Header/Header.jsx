import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.png";

function Header({ handleAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="" />
      <p className="header__details">{currentDate}</p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__clothes-btn"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
