import React from "react";
import styled from "styled-components";
import { secondaryFont } from "../Variables";

const ForecastDay = ({ forecast }) => {
  return (
    <StyledForecastDay>
      <StyledForecastDate>
        {new Date(forecast.date).toDateString()}
      </StyledForecastDate>
      <StyledForecastIcon>
        <img src={forecast.day.condition.icon} alt="icon" />
      </StyledForecastIcon>
      <StyledForecastTemp>{forecast.day.avgtemp_c} C</StyledForecastTemp>
    </StyledForecastDay>
  );
};

const StyledForecastDay = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 1rem 2rem;
`;

const StyledForecastDate = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
`;

const StyledForecastTemp = styled.div`
  grid-area: 2 / 1 / -1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 500 3rem ${secondaryFont};
`;

const StyledForecastIcon = styled.div`
  grid-area: 2 / 2 / -1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ForecastDay;
