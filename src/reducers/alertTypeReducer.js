const alertTypeReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_ALERT_TYPE":
      return (state = action.payload);

    default:
      return state;
  }
};

export default alertTypeReducer;
