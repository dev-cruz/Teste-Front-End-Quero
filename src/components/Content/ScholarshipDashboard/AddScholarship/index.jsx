import React, { useState } from 'react';
import './styles.css';
import Modal from '../Modal';

function AddScholarship() {
    const [renderModal, setRenderModal] = useState(false);

    function toggleRenderModal() {
        const newRender = renderModal ? false : true;
        setRenderModal(newRender);
    }

    return (
        <>
            <button onClick={toggleRenderModal} className="add-scholarship">
                <i className="add-scholarship__icon fa fa-plus-circle"></i>
                <div className="add-scholarship__description">
                    <h3>Adicionar bolsa</h3>
                    <span>Clique para adicionar bolsas de cursos do seu interesse</span>
                </div>
            </button>
            <Modal shouldRender={renderModal} closeModal={toggleRenderModal}/>
        </>
    )
}

export default AddScholarship;