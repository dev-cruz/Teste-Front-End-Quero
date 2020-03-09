import React, { useState } from "react";
import { connect } from "react-redux";
import "./styles.css";
import ModalScholarship from "../ModalScholarship";

function ScholarshipOptions({ filteredData, favoriteScholarships }) {
  const [sort, setSort] = useState("university");

  function sortByUniversityName(a, b) {
    if (a.university.name < b.university.name) {
      return -1;
    }
    if (a.university.name > b.university.name) {
      return 1;
    }
    return 0;
  }
  function sortByCourseName(a, b) {
    if (a.course.name < b.course.name) {
      return -1;
    }
    if (a.course.name > b.course.name) {
      return 1;
    }
    return 0;
  }
  function sortByPrice(a, b) {
    if (a.price_with_discount < b.price_with_discount) {
      return -1;
    }
    if (a.price_with_discount > b.price_with_discount) {
      return 1;
    }
    return 0;
  }

  let sortFunction;
  switch (sort) {
    case "university":
      sortFunction = sortByUniversityName;
      break;
    case "course":
      sortFunction = sortByCourseName;
      break;
    case "price":
      sortFunction = sortByPrice;
      break;
    default:
      break;
  }

  function checkScholarships() {
    return filteredData.filter(scholarship => {
      const favorites = JSON.stringify(favoriteScholarships);
      return !favorites.includes(JSON.stringify(scholarship));
    });
  }

  const scholarships = checkScholarships().sort(sortFunction);

  return (
    <div className="scholarship-options">
      <div className="scholarship-options__offers-sort">
        <span>Resultado:</span>
        <div className="offers-sort">
          <label htmlFor="offers-sort__select">Ordenar por</label>
          <select
            name="offers-sort__select"
            id="offers-sort__select"
            onChange={e => setSort(e.target.value)}
          >
            <option value="university">Nome da Faculdade</option>
            <option value="course">Nome do Curso</option>
            <option value="price">Menor Preço</option>
          </select>
        </div>
      </div>
      <hr className="divider"></hr>
      {scholarships.map((data, index) => (
        <ModalScholarship data={data} key={index} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  filteredData: state.modal.filteredData,
  favoriteScholarships: state.scholarshipsDashboard
});

export default connect(mapStateToProps)(ScholarshipOptions);
