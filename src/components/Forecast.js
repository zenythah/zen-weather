import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

import ForecastDay from "./ForecastDay";

const Forecast = () => {
  const forecastDay = useSelector(
    (state) => state.forecast.forecast.forecastday
  );

  return (
    <StyledForecast>
      {forecastDay
        ? forecastDay.map((forecast) => (
            <ForecastDay forecast={forecast} key={uuid()} id={uuid()} />
          ))
        : null}
    </StyledForecast>
  );
};

const StyledForecast = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 400px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Forecast;
