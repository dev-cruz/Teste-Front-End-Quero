import React, { useState } from 'react';
import { connect } from 'react-redux';
import './styles.css';

function ScholarshipOptions({ data, modalFilters }) {
    const [filteredData, setFilteredData] = useState([]);

    const filterByCity = scholarships => {
        if (modalFilters.city === 'all') return scholarships;
        return scholarships.filter(scholarship => scholarship.campus.city === modalFilters.city);
    };
    
    const filterByCourse = scholarships => {
        if (modalFilters.course === 'all') return scholarships;
        return scholarships.filter(scholarship => scholarship.course.name === modalFilters.course);
    };
    
    const filterByPresential = scholarships => {
        if (!modalFilters.presential) {
            return scholarships.filter(scholarship => scholarship.course.kind !== 'Presencial');
        }
        return scholarships;
    };
    
    const filterByRemotely = scholarships => {
        if (!modalFilters.remotely) {
            return scholarships.filter(scholarship => scholarship.course.kind !== 'EaD');
        }
        return scholarships;
    };
    
    const filterByPrice = scholarships =>
        scholarships.filter(scholarship => scholarship.price_with_discount <= modalFilters.price);

    function filterScholarships() {
        return new Promise(resolve => {
            resolve(data);
        })
    };

    async function applyFilters() {
        const initialData = await filterScholarships();
        const filteredByCity = await filterByCity(initialData);
        const filteredByCourse = await filterByCourse(filteredByCity);
        const filteredByPresential = await filterByPresential(filteredByCourse);
        const filteredByRemotely = await filterByRemotely(filteredByPresential);
        const finalFilter = await filterByPrice(filteredByRemotely);
        setFilteredData(finalFilter);
    }

    if(!data) {
        return (
            <p>Os dados não puderam ser carregados</p>
        )
    }
    applyFilters();
    return (
        <div className="scholarship-options">
            {
                filteredData.map((data, index) => (
                    <>
                        <hr className="divider"></hr>
                        <div key={index} className="scholarship-option">
                            <div className="scholarship-option__checkbox">
                                <input type="checkbox" />
                                <label></label>
                            </div>
                            <div className="scholarship-option__logo">
                                <img src={data.university.logo_url} alt="" />
                            </div>
                            <div className="scholarship-option__description">
                                <div className="description__title">
                                    <p className="title__course-name">{data.course.name}</p>
                                    <small className="title__course-level">{data.course.level}</small>
                                </div>
                                <div className="description__price">
                                    <p>
                                        scholarship de <span className="price--discount-text">{data.discount_percentage}%</span>
                                    </p>
                                    <p className="price--discount-text">
                                        R$ {parseInt(data.price_with_discount)}/mês
                                            </p>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
            <hr className="divider"></hr>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.modal.data,
    modalFilters: state.modal.modalFilters
})

export default connect(mapStateToProps)(ScholarshipOptions);