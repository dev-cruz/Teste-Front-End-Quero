import React from "react";
import "./styles.css";
import InfoCard from "../InfoCard";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cards">
        <InfoCard
          icon="whatsapp"
          specialClass="info-card-footer info-card-footer__whats"
        >
          <h4 className="info-card-footer__label-title">0800 123 2222</h4>
          <p className="info-card-footer__label">
            Segunda a sexta de 8h às 22h
          </p>
          <p className="label__desktop-whats">Seg-Sex 8h-22h</p>
        </InfoCard>
        <div className="footer__middle-container">
          <InfoCard
            icon="comments"
            specialClass="info-card-footer middle-container__info-card chat"
          >
            <h4 className="info-card__label--mobile">Chat</h4>
            <h4 className="info-card__label--desktop">Chat ao vivo</h4>
            <p className="label__desktop">Seg-Sex 8h-22h</p>
          </InfoCard>
          <InfoCard
            icon="envelope"
            specialClass="info-card-footer middle-container__info-card"
          >
            <h4 className="info-card__label--mobile">E-mail</h4>
            <h4 className="info-card__label--desktop">Mande um e-mail</h4>
            <p className="label__desktop">Respondemos rapidinho</p>
          </InfoCard>
          <InfoCard
            icon="info-circle"
            specialClass="info-card-footer middle-container__info-card"
          >
            <h4 className="info-card__label--mobile">Ajuda</h4>
            <h4 className="info-card__label--desktop">Central de ajuda</h4>
            <p className="label__desktop">Encontre todas as respostas</p>
          </InfoCard>
        </div>
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
