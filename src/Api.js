import axios from "axios";

import {
  fetchWeatherError,
  fetchWeatherPending,
  fetchWeatherSuccess,
  fetchForecastError,
  fetchForecastPending,
  fetchForecastSuccess,
} from "./actions/action";

export const fetchWeather = (location) => {
  return (dispatch) => {
    //running an action through the dispatch to set pending
    dispatch(fetchWeatherPending());

    //API fetch request started
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${location}`
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
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=5`
      )
      .then((data) => {
        //calling the action that is responsible for the data
        dispatch(fetchForecastSuccess(data.data));
      })
      //calling the action that is responsible for the error handling
      .catch((err) => dispatch(fetchForecastError(err)));
  };
};
