const SET_THEME = "SET_THEME";
const FETCH_WEATHER_PENDING = "FETCH_WEATHER_PENDING";
const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";
const FETCH_FORECAST_PENDING = "FETCH_FORECAST_PENDING";
const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
const FETCH_FORECAST_ERROR = "FETCH_FORECAST_ERROR";
const FETCH_FAVFORECAST_PENDING = "FETCH_FAVFORECAST_PENDING";
const FETCH_FAVFORECAST_SUCCESS = "FETCH_FAVFORECAST_SUCCESS";
const FETCH_FAVFORECAST_ERROR = "FETCH_FAVFORECAST_ERROR";
const ADD_FAVORITE = "ADD_FAVORITE";
const REM_FAVORITE = "REM_FAVORITE";
const SET_TOGGLE = "SET_TOGGLE";
const SET_VISIBLE = "SET_VISIBLE";
const SET_ALERT_TYPE = "SET_ALERT_TYPE";

export const setTheme = () => {
  return {
    type: SET_THEME,
  };
};

export const fetchWeatherPending = () => {
  return {
    type: FETCH_WEATHER_PENDING,
  };
};

export const fetchWeatherSuccess = (weather) => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: weather,
  };
};

export const fetchWeatherError = (err) => {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: err,
  };
};

export const fetchForecastPending = () => {
  return {
    type: FETCH_FORECAST_PENDING,
  };
};

export const fetchForecastSuccess = (forecast) => {
  return {
    type: FETCH_FORECAST_SUCCESS,
    payload: forecast,
  };
};

export const fetchForecastError = (err) => {
  return {
    type: FETCH_FORECAST_ERROR,
    payload: err,
  };
};

export const addFavorite = (location) => {
  return {
    type: ADD_FAVORITE,
    payload: location,
  };
};

export const remFavorite = (location) => {
  return {
    type: REM_FAVORITE,
    payload: location,
  };
};

export const fetchFavforecastPending = (forecast) => {
  return {
    type: FETCH_FAVFORECAST_PENDING,
  };
};

export const fetchFavforecastSuccess = (forecast) => {
  return {
    type: FETCH_FAVFORECAST_SUCCESS,
    payload: forecast,
  };
};

export const fetchFavforecastError = (err) => {
  return {
    type: FETCH_FAVFORECAST_ERROR,
    payload: err,
  };
};

export const toggleAside = () => {
  return {
    type: SET_TOGGLE,
  };
};

export const setVisible = () => {
  return { type: SET_VISIBLE };
};

export const setAlertType = (alert) => {
  return {
    type: SET_ALERT_TYPE,
    payload: alert,
  };
};
