import React from "react";
import "./styles.css";
import ScholarshipDashboard from "./ScholarshipDashboard";

function Content() {
  return (
    <div className="content">
      <button className="content__back-button">
        <i className="fa fa-chevron-left"></i>
        Minha conta
      </button>
      <div className="content__breadcrumb">
        <p className="breadcrumb__text">
          <span>Home</span> / <span>Minha conta</span> / Bolsas favoritas
        </p>
      </div>
      <div className="content__title">
        <h1>Bolsas favoritas</h1>
        <p>
          Adicione bolsas de cursos e faculdades do seu interesse e receba
          atualizações com as melhores ofertas disponíveis.
        </p>
      </div>
      <ScholarshipDashboard />
    </div>
  );
}

export default Content;
