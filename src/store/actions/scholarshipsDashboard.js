const scholarshipsDashboardActions = {
  addFavoriteScholarship(data) {
    return {
      type: "ADD_FAVORITE_SCHOLARSHIP",
      data
    };
  },
  removeFavoriteScholarship(data) {
    return {
      type: "REMOVE_FAVORITE_SCHOLARSHIP",
      data
    };
  }
};

export default scholarshipsDashboardActions;
