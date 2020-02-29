import React, {useState} from 'react';
import './styles.css';

function Filter({ handleChange, current }) {
    const [filter, setFilter] = useState(current);

    function handleClick(e) {
        const newFilter = e.target.value;
        handleChange(newFilter);
        setFilter(newFilter);
    }

    function isActive(value) {
        const selectClass = value === filter ? 'filter__button--selected' : '';
        return selectClass;
    }

    return (
        <div className="filter">
            <button onClick={handleClick} className={`filter__button ${isActive('all')}`} value="all">
                Todos os semestres
            </button>
            <button onClick={handleClick} className={`filter__button ${isActive('2019.2')}`} value="2019.2">
                2º semestre de 2019
            </button>
            <button onClick={handleClick} className={`filter__button ${isActive('2020.1')}`} value="2020.1">
                1º semestre de 2020
            </button>
        </div>
    )
}

export default Filter;