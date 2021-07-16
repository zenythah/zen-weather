import axios from "axios";

import {
  fetchWeatherError,
  fetchWeatherPending,
  fetchWeatherSuccess,
  fetchForecastError,
  fetchForecastPending,
  fetchForecastSuccess,
  fetchFavforecastError,
  fetchFavforecastPending,
  fetchFavforecastSuccess,
  addFavorite,
  remFavorite,
} from "./actions/action";

export const fetchWeather = (location) => {
  return (dispatch) => {
    //running an action through the dispatch to set pending
    dispatch(fetchWeatherPending());

    //API fetch request started
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`
      )
      .then((data) => {
        //calling the action that is responsible for the data
        dispatch(fetchWeatherSuccess(data.data));
      })
      //calling the action that is responsible for the error handling
      .catch((err) => dispatch(fetchWeatherError(err)));
  };
};

export const fetchForecast = (location) => {
  return (dispatch) => {
    //running an action through the dispatch to set pending
    dispatch(fetchForecastPending());

    //API fetch request started
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=5&alerts=yes`
      )
      .then((data) => {
        //calling the action that is responsible for the data
        dispatch(fetchForecastSuccess(data.data));
      })
      //calling the action that is responsible for the error handling
      .catch((err) => dispatch(fetchForecastError(err)));
  };
};

export const fetchFavforecast = (location) => {
  return (dispatch) => {
    //running an action through the dispatch to set pending
    dispatch(fetchFavforecastPending());

    //API fetch request started
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=5&alerts=yes`
      )
      .then((data) => {
        //calling the action that is responsible for the data
        dispatch(fetchFavforecastSuccess(data.data.forecast));
      })
      //calling the action that is responsible for the error handling
      .catch((err) => dispatch(fetchFavforecastError(err)));
  };
};

export const addfavorite = (location) => {
  return (dispatch) => {
    dispatch(addFavorite(location));
  };
};

export const remfavorite = (location) => {
  return (dispatch) => {
    dispatch(remFavorite(location));
  };
};
