import React from "react";
import styled from "styled-components";
import { grey, greyLight, longShadow, secondaryFont } from "../Variables";

import Forecast from "./Forecast";

const Weather = () => {
  return (
    <StyledWeather>
      <StyledLocation>
        <StyledName>
          <h3>Tokyo</h3> | <h4>Japan</h4>
        </StyledName>
        <StyledDate>
          <h3>Sunday, 16th July, 2021</h3>
          <h3>Day, 11:20 AM</h3>
        </StyledDate>
      </StyledLocation>
      <StyledConditions>
        <StyledTemperature>
          <span>15</span>
        </StyledTemperature>
        <StyledCondition>
          <StyledStatus className="status">
            <h5>icon</h5>
            <h5>condition name</h5>
          </StyledStatus>
          <StyledOthers>
            <div className="status">
              <h4>UV Index:</h4> <span>32.4</span>
            </div>
            <div className="status">
              <h4>Pressure:</h4> <span>55 P</span>
            </div>
            <div className="status">
              <h4>Humidity:</h4> <span>11</span>
            </div>
            <div className="status">
              <h4>Wind Speed:</h4> <span>2.4mph</span>
            </div>
          </StyledOthers>
        </StyledCondition>
      </StyledConditions>
      <Forecast />
    </StyledWeather>
  );
};

const StyledWeather = styled.div`
  width: 50%;
  height: 75vh;
  margin: auto auto;
  box-shadow: ${longShadow};
  display: grid;
  grid-template-columns: repeat(1fr, 5);
  grid-template-rows: 15% 1fr 30%;
`;

const StyledLocation = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  display: flex;
  width: 90%;
  margin: 0 auto;
`;

const StyledName = styled.div`
  flex: 0 0 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;

  h3 {
    font: 500 3.5rem ${secondaryFont};
  }

  h4 {
    font-size: 1.6rem;
    color: ${greyLight};
  }
`;

const StyledDate = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 0 auto;

  h3 {
    font-size: 1.8rem;
    color: ${grey};
    letter-spacing: 1.6px;
  }
`;

const StyledConditions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 90%;
  margin: 0 auto;
`;

const StyledTemperature = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font: 500 20rem ${secondaryFont};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 20%;
      right: -2rem;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: ${greyLight};
    }
  }
`;

const StyledCondition = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  color: ${greyLight};
  display: grid;
  grid-template-rows: 20% 1fr;

  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span,
    h5 {
      color: ${grey};
    }
  }
`;

const StyledStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 1rem; */
`;

const StyledOthers = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;

export default Weather;
