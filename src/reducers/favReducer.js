const initState = { favs: [] };

const favReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, ...state.favs.push(action.payload) };
    case "REM_FAVORITE":
      return { favs: state.favs.filter((fav) => fav !== action.payload) };
    default:
      return { ...state };
  }
};

export default favReducer;
