import React, {useState} from 'react';
import './styles.css';
import Filter from './Filter/index.jsx';
import AddScholarship from './AddScholarship';

function ScholarshipDashboard() {
    return (
        <div className="scholarship-dashboard">
            <Filter handleChange={setFilter} current={filter}/>
            <AddScholarship />
        </div>
    )
}

export default ScholarshipDashboard;