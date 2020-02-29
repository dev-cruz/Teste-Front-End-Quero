import React from 'react';
import './styles.css';

function ModalForm(props) {
    const {setCity, setCourse, setPresencial, setRemotely, setPrice} = props.filtersSetters;

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

    return (
        <form className="modal-frame__modal-form">
        <div className="modal-form__form-select modal-form__div">
            <label htmlFor="cities" className="form-label">SELECIONE SUA CIDADE</label>
            <select name="city" id="cities" className="form-select__select" onChange={e => setCity(e.target.value)}>
                <option value="all">Todas as cidades</option>
                {renderCityOptions()}
            </select>
        </div>
        <div className="modal-form__form-select modal-form__div">
            <label htmlFor="courses" className="form-label">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
            <select name="city" id="courses" className="form-select__select" onChange={e => setCourse(e.target.value)}>
                <option value="all">Todos os cursos</option>
                {renderCoursesOptions()}
            </select>
        </div>
        <div className="modal-form__course-kind modal-form__div">
            <label htmlFor="kinds" className="form-label">COMO VOCÊ QUER ESTUDAR?</label>
            <div className="course-kind__kinds" id="kinds">
                <input type="checkbox" name="presencial" id="presencial" defaultChecked={presential} onChange={e => setPresencial(e.target.checked)} />
                <label htmlFor="presencial">Presencial</label>
                <input type="checkbox" name="ead" id="distancia" defaultChecked={remotely} onChange={e => setRemotely(e.target.checked)} />
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
    </form>
    )
}

export default ModalForm;