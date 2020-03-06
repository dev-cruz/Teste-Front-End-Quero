const initialState = {
  data: [],
  filteredData: [],
  modalFilters: {
    city: "all",
    course: "all",
    presential: true,
    remotely: true,
    price: 10000
  },
  isLoading: false,
  selectedScholarships: {}
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_CITY":
      return {
        ...state,
        modalFilters: { ...state.modalFilters, city: action.city }
      };
    case "UPDATE_COURSE":
      return {
        ...state,
        modalFilters: { ...state.modalFilters, course: action.course }
      };
    case "UPDATE_PRESENTIAL":
      return {
        ...state,
        modalFilters: { ...state.modalFilters, presential: action.presential }
      };
    case "UPDATE_REMOTELY":
      return {
        ...state,
        modalFilters: { ...state.modalFilters, remotely: action.remotely }
      };
    case "UPDATE_PRICE":
      return {
        ...state,
        modalFilters: { ...state.modalFilters, price: action.price }
      };
    case "UPDATE_DATA":
      return {
        ...state,
        data: action.data,
        filteredData: action.data
      };
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: action.isLoading
      };
    case "RESET_STATE":
      return {
        ...initialState,
        data: state.data
      };
    case "FILTER_DATA":
      const filterByCity = scholarships => {
        if (state.modalFilters.city === "all") return scholarships;
        return scholarships.filter(
          scholarship => scholarship.campus.city === state.modalFilters.city
        );
      };
      const filterByCourse = scholarships => {
        if (state.modalFilters.city === "all") return scholarships;
        return scholarships.filter(
          scholarship => scholarship.course.name === state.modalFilters.course
        );
      };
      const filterByPresential = scholarships => {
        if (!state.modalFilters.presential) {
          return scholarships.filter(
            scholarship => scholarship.course.kind !== "Presencial"
          );
        }
        return scholarships;
      };
      const filterByRemotely = scholarships => {
        if (!state.modalFilters.remotely) {
          return scholarships.filter(
            scholarship => scholarship.course.kind !== "EaD"
          );
        }
        return scholarships;
      };
      /*const filterByPrice = scholarships =>
        scholarships.filter(
          scholarship =>
            scholarship.price_with_discount <= state.modalFilters.price
        );*/
      const newFilteredData = state.data
        .map(filterByCity)
        .map(filterByCourse)
        .map(filterByPresential)
        .map(filterByRemotely);
      //.map(filterByPrice);
      return {
        ...state,
        filteredData: newFilteredData
      };

    default:
      return state;
  }
}
