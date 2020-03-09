const initialState = {
  data: [],
  filteredData: [],
  modalFilters: {
    city: "all",
    course: "all",
    presential: true,
    remotely: true,
    price: 2000
  },
  selectedScholarships: []
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
    case "RESET_STATE":
      return {
        ...initialState,
        data: state.data,
        filteredData: state.data
      };
    case "FILTER_DATA":
      const filterByCity = scholarship => {
        if (state.modalFilters.city === "all") return scholarship;
        return scholarship.campus.city === state.modalFilters.city;
      };

      const filterByCourse = scholarship => {
        if (state.modalFilters.course === "all") return scholarship;
        return scholarship.course.name === state.modalFilters.course;
      };
      const filterByPresential = scholarship => {
        if (!state.modalFilters.presential) {
          return scholarship.course.kind !== "Presencial";
        }
        return scholarship;
      };
      const filterByRemotely = scholarship => {
        if (!state.modalFilters.remotely) {
          return scholarship.course.kind !== "EaD";
        }
        return scholarship;
      };
      const filterByPrice = scholarship =>
        scholarship.price_with_discount <= state.modalFilters.price;

      const newFilteredData = state.data
        .filter(filterByCity)
        .filter(filterByCourse)
        .filter(filterByPresential)
        .filter(filterByRemotely)
        .filter(filterByPrice);
      return {
        ...state,
        filteredData: newFilteredData
      };
    case "ADD_SELECTED_SCHOLARSHIP":
      return {
        ...state,
        selectedScholarships: [...state.selectedScholarships, action.data]
      };
    case "REMOVE_SELECTED_SCHOLARSHIP":
      function compareObjects(obj1, obj2) {
        const json1 = JSON.stringify(obj1);
        const json2 = JSON.stringify(obj2);
        if (json1 === json2) return true;
        return false;
      }

      const newSelectedScholarships = state.selectedScholarships.filter(
        scholarship => !compareObjects(scholarship, action.data)
      );
      return {
        ...state,
        selectedScholarships: newSelectedScholarships
      };
    default:
      return state;
  }
}
