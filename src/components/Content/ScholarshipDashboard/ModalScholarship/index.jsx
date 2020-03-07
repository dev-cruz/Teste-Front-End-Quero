import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import ModalActions from "../../../../store/actions/modal";

function ModalScholarship({ data, key, dispatch }) {
  function handleCheckChange(e) {
    const checked = e.target.checked;
    if (checked) {
      dispatch(ModalActions.addSelectedScholarship(data));
    } else {
      dispatch(ModalActions.removeSelectedScholarship(data));
    }
  }

  return (
    <>
      <div key={key} className="scholarship-option">
        <div className="scholarship-option__checkbox">
          <input type="checkbox" onChange={handleCheckChange} />
          <label></label>
        </div>
        <div className="scholarship-option__logo">
          <img src={data.university.logo_url} alt="" />
        </div>
        <div className="scholarship-option__description">
          <div className="description__title">
            <p className="title__course-name">{data.course.name}</p>
            <small className="title__course-level">{data.course.level}</small>
          </div>
          <div className="description__price">
            <p>
              Bolsa de{" "}
              <span className="price--discount-text">
                {data.discount_percentage}%
              </span>
            </p>
            <p className="price--discount-text">
              R$ {parseInt(data.price_with_discount)}/mês
            </p>
          </div>
        </div>
      </div>
      <hr className="divider"></hr>
    </>
  );
}

export default connect()(ModalScholarship);
