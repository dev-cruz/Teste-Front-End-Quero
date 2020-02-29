import React, { useState, useEffect } from 'react';
import './styles.css';
import ModalForm from '../ModalForm';
import data from './data.json.js.js';

function Modal({ shouldRender, closeModal }) {
    const [city, setCity] = useState('all');
    const [course, setCourse] = useState('all');
    const [presential, setPresencial] = useState(true);
    const [remotely, setRemotely] = useState(true);
    const [price, setPrice] = useState(10000);
    const [scholarships, setScholarships] = useState(data);

    if (!shouldRender) return null;
    return (
        <div className="modal-overlay">
            <button className="modal-overlay__close-button" onClick={closeModal}>
                <i className="close-button__icon fa fa-times"></i>
            </button>
            <div className="modal-overlay__modal-frame">
                <h3>Adicionar bolsas</h3>
                <span>Filtre e adicione bolsas de seu interesse</span>
                <ModalForm filtersSetters={{setCity, setCourse, setPresencial, setRemotely, setPrice}}/>
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
            </div>
        </div>
    )
}

export default Modal;