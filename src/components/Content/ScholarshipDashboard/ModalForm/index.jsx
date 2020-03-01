import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import ModalActions from '../../../../store/actions/modal';

function ModalForm({ filters, data, dispatch }) {

    function renderCityOptions() {
        const citiesNames = data.map(d => d.campus.city);
        const uniqueNames = [...new Set(citiesNames)];
        return uniqueNames.map(city => (
            <option value={city} key={city}>
                {city}
            </option>
        ))
    }

    function renderCourseOptions() {
        const coursesNames = data.map(d => d.course.name);
        const uniqueNames = [...new Set(coursesNames)];
        return uniqueNames.map(course => (
            <option value={course} key={course}>
                {course}
            </option>
        ))
    }

    return (
        <form className="modal-form">
            <div className="modal-form__form-select modal-form__div">
                <label htmlFor="cities" className="form-label">SELECIONE SUA CIDADE</label>
                <select name="city" id="cities" className="form-select__select"
                    onChange={e => dispatch(ModalActions.updateCity(e.target.value))}>
                    <option value="all">Todas as cidades</option>
                    {renderCityOptions()}
                </select>
            </div>
            <div className="modal-form__form-select modal-form__div">
                <label htmlFor="courses" className="form-label">SELECIONE O CURSO DE SUA PREFERÊNCIA</label>
                <select name="city" id="courses" className="form-select__select"
                    onChange={e => dispatch(ModalActions.updateCourse(e.target.value))}>
                    <option value="all">Todos os cursos</option>
                    {renderCourseOptions()}
                </select>
            </div>
            <div className="modal-form__course-kind modal-form__div">
                <label htmlFor="kinds" className="form-label">COMO VOCÊ QUER ESTUDAR?</label>
                <div className="course-kind__kinds" id="kinds">
                    <input type="checkbox" name="presencial"
                        id="presencial" defaultChecked={filters.presential}
                        onChange={e => dispatch(ModalActions.updatePresential(e.target.checked))} />
                    <label htmlFor="presencial">Presencial</label>
                    <input type="checkbox" name="ead"
                        id="distancia" defaultChecked={filters.remotely}
                        onChange={e => dispatch(ModalActions.updateRemotely(e.target.checked))} />
                    <label htmlFor="distancia">A distância</label>
                </div>
            </div>
            <div className="modal-form__price-range modal-form__div">
                <label htmlFor="prices" className="form-label">ATÉ QUANTO PODE PAGAR?</label>
                <span>R$ {filters.price}</span>
                <input type="range" name="prices" className="price-range"
                    value={filters.price}
                    onChange={e => dispatch(ModalActions.updatePrice(e.target.value))}
                    min="0" max="10000"
                    step="50"
                />
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    filters: state.modal.modalFilters,
    data: state.modal.data
})

export default connect(mapStateToProps)(ModalForm);