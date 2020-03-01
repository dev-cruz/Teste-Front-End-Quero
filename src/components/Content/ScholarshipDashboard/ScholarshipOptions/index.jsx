import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

function ScholarshipOptions({ data, modalFilters }) {
    return (
        <div className="scholarship-options">
            {data.map((data, index) => (
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
                                    Bolsa de <span className="price--discount-text">{data.discount_percentage}%</span>
                                </p>
                                <p className="price--discount-text">
                                    R$ {parseInt(data.price_with_discount)}/mês
                            </p>
                            </div>
                        </div>
                    </div>
                </>
            ))}
            <hr className="divider"></hr>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.modal.data,
    modalFilters: state.modal.modalFilters
})

export default connect(mapStateToProps)(ScholarshipOptions);