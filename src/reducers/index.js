import { combineReducers } from "redux";
import FavReducer from "./FavReducer";

import forecastReducer from "./forecastReducer";
import themeReducer from "./themeReducer";
import weatherReducer from "./weatherReducer";

const allReducers = combineReducers({
  theme: themeReducer,
  weather: weatherReducer,
  forecast: forecastReducer,
  favorites: FavReducer,
});

export default allReducers;
