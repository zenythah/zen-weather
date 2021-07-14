import { combineReducers } from "redux";

import favReducer from "./favReducer";
import forecastReducer from "./forecastReducer";
import themeReducer from "./themeReducer";
import weatherReducer from "./weatherReducer";

const allReducers = combineReducers({
  theme: themeReducer,
  weather: weatherReducer,
  forecast: forecastReducer,
  favorites: favReducer,
});

export default allReducers;
