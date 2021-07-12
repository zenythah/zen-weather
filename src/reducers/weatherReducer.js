const initState = {};

const weatherReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_PENDING":
      return { ...state, pending: true };

    case "FETCH_WEATHER_SUCCESS":
      return { ...action.payload, pending: false };

    case "FETCH_WEATHER_ERROR":
      return { ...state, pending: false, error: action.payload };

    default:
      return { ...state };
  }
};

export default weatherReducer;
