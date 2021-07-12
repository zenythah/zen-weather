const initState = {};

const forecastReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_FORECAST_PENDING":
      return { ...state, pending: true };

    case "FETCH_FORECAST_SUCCESS":
      return { ...action.payload, pending: false };

    case "FETCH_FORECAST_ERROR":
      return { ...state, pending: false, error: action.payload };

    default:
      return { ...state };
  }
};

export default forecastReducer;
