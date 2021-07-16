const initState = {};

const favforecastReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_FAVFORECAST_PENDING":
      return { ...state, pending: true };
    case "FETCH_FAVFORECAST_SUCCESS":
      return { ...state, fav: { ...action.payload }, pending: false };
    case "FETCH_FAVFORECAST_ERROR":
      return { ...state, error: action.payload, pending: false };
    default:
      return { ...state };
  }
};

export default favforecastReducer;
