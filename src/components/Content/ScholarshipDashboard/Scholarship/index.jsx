import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import ScholarshipsDashBoardActions from "../../../../store/actions/scholarshipsDashboard";

function Scholarship({ scholarship, dispatch }) {
  function generateScore(score) {
    let newScore = score;
    const starsClasses = [];
    for (let i = 1; i <= 5; i++) {
      if (newScore >= 1) starsClasses.push("star");
      else if (newScore > 0) starsClasses.push("star-half");
      else starsClasses.push("star star-off");
      newScore--;
    }
    return (
      <div className="stars-score">
        <span>{score}</span>
        <i className={`fa fa-${starsClasses[0]}`}></i>
        <i className={`fa fa-${starsClasses[1]}`}></i>
        <i className={`fa fa-${starsClasses[2]}`}></i>
        <i className={`fa fa-${starsClasses[3]}`}></i>
        <i className={`fa fa-${starsClasses[4]}`}></i>
      </div>
    );
  }

  return (
    <div className="scholarship">
      <div className="scholarship__info-top">
        <div className="info-top__logo">
          <img src={scholarship.university.logo_url} alt="Logo" />
        </div>
        <div className="info-top__title">
          <h2 className="title__university-name">
            {scholarship.university.name.toUpperCase()}
          </h2>
          <h2 className="title__course-name">{scholarship.course.name}</h2>
        </div>
        <div className="info-top__score-rating">
          {generateScore(scholarship.university.score)}
        </div>
      </div>
      <hr className="divider"></hr>
      <div className="scholarship__course-info">
        <h3 className="course-info__kind-shift">
          {scholarship.course.kind.toUpperCase()} &bull;{" "}
          {scholarship.course.shift.toUpperCase()}
        </h3>
        <p className="course-info__start-date">
          Início das aulas em: {scholarship.start_date}
        </p>
      </div>
      <hr className="divider"></hr>
      <div className="scholarship__offer-info">
        <h4 className="offer-info__title">Mensalidade com o Quero Bolsa:</h4>
        <p className="offer-info__full-price">R$ {scholarship.full_price}</p>
        <p className="offer-info__offered-price">
          R$ {scholarship.price_with_discount}
          <small className="per-month">/mês</small>
        </p>
      </div>
      <div className="scholarship__buttons">
        <button
          className="btn btn-blue"
          onClick={e =>
            dispatch(
              ScholarshipsDashBoardActions.removeFavoriteScholarship(
                scholarship
              )
            )
          }
        >
          Excluir
        </button>
        <button
          className={`btn ${
            scholarship.enabled ? "btn-yellow" : "btn-disabled"
          }`}
        >
          {scholarship.enabled ? "Ver oferta" : "Indisponível"}
        </button>
      </div>
    </div>
  );
}

export default connect()(Scholarship);
