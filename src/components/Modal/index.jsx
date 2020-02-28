import React, { useState, useEffect } from 'react';
import './styles.css';
import data from './data.json';

function Modal({ shouldRender, closeModal }) {
    const [city, setCity] = useState('São José dos Campos');
    const [course, setCourse] = useState('all');
    const [kinds, setKinds] = useState({presencial: true, ead: true});
    const [price, setPrice] = useState(10000);

    function changeKinds(e) {
        const name = e.target.name;
        const newKinds = kinds;
        newKinds[name] = e.target.checked;
        setKinds(newKinds);
    }

    useEffect(() => {
        console.log({city, course, kinds, price})
    }, [city, course, kinds, price])

    function renderCityOptions() {
        const cities = data.map(d => d.campus.city);
        return cities.map((city, index) =>
            <option className="modal-option" key={index} value={city}>
                {city}
            </option>
        )
    }

    function renderCoursesOptions() {
        const courses = data.map(d => d.course.name);
        return courses.map((course, index) =>
            <option className="modal-option" key={index} value={course}>
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
                    <div className="modal-form__form-select modal-form__div">
                        <label htmlFor="cities" className="form-label">SELECIONE SUA CIDADE</label>
                        <select name="city" id="cities" className="form-select__select" onChange={e => setCity(e.target.value)}>
                            {renderCityOptions()}
                        </select>
                    </div>
                    <div className="modal-form__form-select modal-form__div">
                        <label htmlFor="courses" className="form-label">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
                        <select name="city" id="courses" className="form-select__select" onChange={e => setCourse(e.target.value)}>
                            <option value="all"></option>
                            {renderCoursesOptions()}
                        </select>
                    </div>
                    <div className="modal-form__course-kind modal-form__div">
                        <label htmlFor="kinds" className="form-label">COMO VOCÊ QUER ESTUDAR?</label>
                        <div className="course-kind__kinds" id="kinds">
                            <input type="checkbox" name="presencial" id="presencial"checked onChange={e => changeKinds(e)}/>
                            <label htmlFor="presencial">Presencial</label>
                            <input type="checkbox" name="ead" id="distancia" checked onChange={e => changeKinds(e)}/>
                            <label htmlFor="distancia">A distância</label>
                        </div>
                    </div>
                    <div className="modal-form__price-range modal-form__div">
                        <label htmlFor="prices" className="form-label">ATÉ QUANTO PODE PAGAR?</label>
                        <span>R$ {price}</span>
                        <input type="range" name="prices" className="price-range"
                         min="0" max="10000" onChange={e => setPrice(e.target.value)}
                         step="50" 
                         />
                    </div>
                    <div className="modal-form__offers-sort">
                        <span>Resultado:</span>
                        <div className="offers-sort">
                            <label htmlFor="offers-sort__select">Ordenar por</label>
                            <select name="offers-sort__select" id="offers-sort__select">
                                <option value="univerisityName">Nome da Faculdade</option>
                                <option value="courseName">Nome do Curso</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;