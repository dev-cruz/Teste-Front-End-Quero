import React, { useState } from "react";
import "./styles.css";
import Filter from "./Filter/index.jsx";
import AddScholarship from "./AddScholarship";
import Scholarship from "./Scholarship";
import { connect } from "react-redux";
import ScholarshipsDashBoardActions from "../../../store/actions/scholarshipsDashboard";

function ScholarshipDashboard({ favoriteScholarships, dispatch }) {
  const [filter, setFilter] = useState("all");

  function renderScholarships() {
    if (filter === "all") {
      return favoriteScholarships.map(scholarship => (
        <Scholarship scholarship={scholarship} />
      ));
    }
    const scholarships = favoriteScholarships.filter(
      scholarship => scholarship.enrollment_semester === filter
    );
    return scholarships.map(scholarship => (
      <Scholarship scholarship={scholarship} />
    ));
  }

  return (
    <div className="scholarship-dashboard">
      <Filter handleChange={setFilter} current={filter} />
      <div className="scholarship-dashboard__scholarship-list">
        <AddScholarship />
        {renderScholarships()}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  favoriteScholarships: state.scholarshipsDashboard
});

export default connect(mapStateToProps)(ScholarshipDashboard);
