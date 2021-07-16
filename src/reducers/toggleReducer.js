const toggleReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_TOGGLE":
      return !state;
    default:
      return state;
  }
};

export default toggleReducer;
