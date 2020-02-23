import React from 'react';
import InfoCard from '../InfoCard';
import './styles.css';
import logo from '../../assets/images/logo-querobolsa.svg';

function Header() {
    return (
        <div className="top-bar">
            <header className="top-bar__header">
                <InfoCard icon="info-circle">
                    <span className="info-card__label--mobile">
                        Ajuda
                    </span>
                    <span className="info-card__label--desktop">
                        Como funciona
                    </span>
                </InfoCard>
                <div className="header__logo-whats">
                    <InfoCard icon="whatsapp" specialClass="whats">
                        <span className="info-card__label--desktop">
                            <p>0800 123 2222</p>
                            Envie mensagem ou ligue
                        </span>
                    </InfoCard>
                    <img src={logo} alt="logo" />
                </div>
                <InfoCard icon="user-circle" specialClass="justify-end">
                    <span className="info-card__label--mobile">
                        Conta
                    </span>
                    <span className="info-card__label--desktop">
                        Nome sobrenome
                    </span>
                </InfoCard>
            </header>
            <nav className="top-bar__nav-bar">
            </nav>
        </div>
    )
}

export default Header;