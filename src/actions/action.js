const DARK_MODE = "DARK_MODE";
const LIGHT_MODE = "LIGHT_MODE";
const FETCH_WEATHER_PENDING = "FETCH_WEATHER_PENDING";
const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
const FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR";
const FETCH_FORECAST_PENDING = "FETCH_FORECAST_PENDING";
const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
const FETCH_FORECAST_ERROR = "FETCH_FORECAST_ERROR";

export const darkmode = () => {
  return {
    type: DARK_MODE,
  };
};

export const lightmode = () => {
  return {
    type: LIGHT_MODE,
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
