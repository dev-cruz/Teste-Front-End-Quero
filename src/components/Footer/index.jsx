import React from "react";
import "./styles.css";
import InfoCard from "../InfoCard";

function Footer() {
  return (
    <footer className="footer">
      <InfoCard
        icon="whatsapp"
        specialClass="info-card-footer info-card-footer__whats"
      >
        <h4 className="info-card-footer__label-title">0800 123 2222</h4>
        <p className="info-card-footer__label">Segunda a sexta de 8h às 22h</p>
      </InfoCard>
      <div className="footer__middle-container">
        <InfoCard
          icon="comments"
          specialClass="info-card-footer middle-container__info-card"
        >
          <h4 className="info-card__label--mobile">Chat</h4>
          <h4 className="info-card__label--desktop">Nome sobrenome</h4>
        </InfoCard>
        <InfoCard
          icon="envelope"
          specialClass="info-card-footer middle-container__info-card"
        >
          <h4 className="info-card__label--mobile">E-mail</h4>
          <h4 className="info-card__label--desktop">Nome sobrenome</h4>
        </InfoCard>
        <InfoCard
          icon="info-circle"
          specialClass="info-card-footer middle-container__info-card"
        >
          <h4 className="info-card__label--mobile">Ajuda</h4>
          <h4 className="info-card__label--desktop">Como funciona</h4>
        </InfoCard>
      </div>
      <div className="made-with-love">
        <span>
          Feito com <i className="fa fa-heart"></i> pela Quero Educação
        </span>
      </div>
    </footer>
  );
}

export default Footer;
