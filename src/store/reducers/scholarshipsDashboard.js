const initialState = [];

function compareObjects(obj1, obj2) {
  const json1 = JSON.stringify(obj1);
  const json2 = JSON.stringify(obj2);
  return json1 === json2;
}

export default function scholarshipsDashboard(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE_SCHOLARSHIP":
      return [...state, ...action.data];
    case "REMOVE_FAVORITE_SCHOLARSHIP":
      const newFavoriteScholarships = state.filter(
        scholarship => !compareObjects(scholarship, action.data)
      );
      return newFavoriteScholarships;
    default:
      return state;
  }
}
