import React from 'react';
import './styles.css';

function InfoCard(props) {
    return (
        <div className={`info-card ${props.specialClass || ''}`}>
            <i className={`info-card__icon fa fa-${props.icon}`}></i>
            <div className="info-card__label">
                {props.children}
            </div>
        </div>
    )
}

export default InfoCard;
