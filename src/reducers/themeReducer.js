const themeReducer = (state = false, action) => {
  switch (action.type) {
    case "DARK_MODE":
      return !state;
    case "LIGHT_MODE":
      return !state;
    default:
      return state;
  }
};

export default themeReducer;
