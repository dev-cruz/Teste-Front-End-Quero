import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './styles.css';
import ModalForm from '../ModalForm';
import ScholarshipOptions from '../ScholarshipOptions';
import ModalActions from '../../../../store/actions/modal';

function Modal({ shouldRender, closeModal, dispatch }) {
    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/quero-edu/front-end-test-quero/master/db.json')
            .then(resp => dispatch(ModalActions.updateData(resp.data)));
    }, [])

    if (!shouldRender) {
        dispatch(ModalActions.resetState());
        return null;
    }
    return (
        <div className="modal-overlay">
            <button className="modal-overlay__close-button" onClick={closeModal}>
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
                <div className="modal-frame__buttons">
                    <button className="btn btn-blue" onClick={closeModal}>Cancelar</button>
                    <button className="btn btn-yellow" disabled={false}>Adicionar bolsa(s)</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.modal.data,
})

export default connect(mapStateToProps)(Modal);