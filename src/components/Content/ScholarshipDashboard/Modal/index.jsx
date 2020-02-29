import React from 'react';
import './styles.css';
import ModalForm from '../ModalForm';
import ScholarshipOptions from '../ScholarshipOptions';

function Modal(props) {

    if (!props.shouldRender) return null;
    return (
        <div className="modal-overlay">
            <button className="modal-overlay__close-button" onClick={props.closeModal}>
                <i className="close-button__icon fa fa-times"></i>
            </button>
            <div className="modal-overlay__modal-frame">
                <h3>Adicionar bolsas</h3>
                <span>Filtre e adicione bolsas de seu interesse</span>
                <ModalForm />
                <div className="modal-frame__offers-sort">
                    <span>Resultado:</span>
                    <div className="offers-sort">
                        <label htmlFor="offers-sort__select">Ordenar por</label>
                        <select name="offers-sort__select" id="offers-sort__select">
                            <option value="univerisityName">Nome da Faculdade</option>
                            <option value="courseName">Nome do Curso</option>
                        </select>
                    </div>
                </div>
                <ScholarshipOptions />
            </div>
        </div>
    )
}

export default Modal;