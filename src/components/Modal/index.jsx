import React, { useState } from 'react';
import './styles.css';
import data from './data.json';

function Modal({ shouldRender, closeModal }) {
    const [priceRange, setPriceRange] = useState(10000);

    function renderCityOptions() {
        const cities = data.map(d => d.campus.city);
        return cities.map((city, index) =>
            <option className="modal-option" key={index} value={city.toLowerCase()}>
                {city}
            </option>
        )
    }

    function renderCoursesOptions() {
        const courses = data.map(d => d.course.name);
        return courses.map((course, index) =>
            <option className="modal-option" key={index} value={course.toLowerCase()}>
                {course}
            </option>
        )
    }

    if (!shouldRender) return null;
    return (
        <div className="modal-overlay">
            <button className="modal-overlay__close-button" onClick={closeModal}>
                <i className="close-button__icon fa fa-times"></i>
            </button>
            <div className="modal-overlay__modal-frame">
                <h3>Adicionar bolsas</h3>
                <span>Filtre e adicione bolsas de seu interesse</span>
                <form className="modal-frame__modal-form">
                    <div className="modal-form__form-select">
                        <label htmlFor="cities" className="form-label">SELECIONE SUA CIDADE</label>
                        <select name="city" id="cities" className="form-select__select">
                            {renderCityOptions()}
                        </select>
                    </div>
                    <div className="modal-form__form-select">
                        <label htmlFor="courses" className="form-label">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
                        <select name="city" id="courses" className="form-select__select">
                            <option value="all"></option>
                            {renderCoursesOptions()}
                        </select>
                    </div>
                    <div className="modal-form__course-kind">
                        <label htmlFor="kinds" className="form-label">COMO VOCÊ QUER ESTUDAR?</label>
                        <div className="course-kind__kinds" id="kinds">
                            <input type="checkbox" name="Presencial" value="presencial" id="presencial" />
                            <label htmlFor="presencial">Presencial</label>
                            <input type="checkbox" name="A distância" value="EaD" id="distancia" />
                            <label htmlFor="distancia">A distância</label>
                        </div>
                    </div>
                    <div className="modal-form__price-range">
                        <label htmlFor="prices" className="form-label">ATÉ QUANTO PODE PAGAR?</label>
                        <input type="range" name="prices" id="prices"
                         min="0" max="10000" onChange={e => setPriceRange(e.target.value)}
                         step="100" 
                         />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;