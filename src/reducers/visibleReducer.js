const visibleReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_VISIBLE":
      return !state;

    default:
      return state;
  }
};

export default visibleReducer;
