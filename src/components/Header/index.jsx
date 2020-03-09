import React, { useState } from "react";
import InfoCard from "../InfoCard";
import "./styles.css";
import logo from "../../assets/images/logo-querobolsa.svg";

function Header() {
  const [dropMenu, setDropMenu] = useState(false);

  function toggleMenu() {
    const toggle = dropMenu ? false : true;
    setDropMenu(toggle);
  }

  return (
    <div className="top-bar">
      <header className="top-bar__header">
        <InfoCard icon="info-circle">
          <h4 className="info-card__label--mobile">Ajuda</h4>
          <h4 className="info-card__label--desktop">Como funciona</h4>
        </InfoCard>
        <div className="header__logo-whats">
          <InfoCard icon="whatsapp green" specialClass="desktop">
            <span className="info-card__label--desktop">
              <h4 className="logo-whats__title">0800 123 2222</h4>
              <p className="logo-whats__desc">Envie mensagem ou ligue</p>
            </span>
          </InfoCard>
          <img src={logo} alt="logo" />
        </div>
        <InfoCard icon="user-circle" specialClass="reverse-flexbox">
          <h4 className="info-card__label--mobile">Conta</h4>
          <h4 className="info-card__label--desktop">Nome sobrenome</h4>
        </InfoCard>
      </header>
      <nav className="nav-bar">
        <div className="top-bar__nav-bar">
          <h2 className="nav-bar__title">Minha conta</h2>
          <div className="nav-bar__menu">
            <div className="menu__nav-links">
              <button className="nav-links__menu" onClick={toggleMenu}>
                Menu
                <i className="fa fa-caret-down"></i>
              </button>
              <ul
                className={`nav-links__links ${
                  dropMenu ? "show-nav-links" : ""
                }`}
              >
                <li>Pré-matrículas</li>
                <li>Bolsas favoritas</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
