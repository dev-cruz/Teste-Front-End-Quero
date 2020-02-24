import React, {useState} from 'react';
import './styles.css';
import Filter from '../Filter/index.jsx';

function ScholarshipDashboard() {
    const [favScholarships, setScholarship] = useState([]);
    const [filter, setFilter] = useState('all');

    return (
        <div className="scholarship-dashboard">
            <Filter handleChange={setFilter} current={filter}/>
        </div>
    )
}

export default ScholarshipDashboard;