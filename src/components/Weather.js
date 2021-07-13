import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { StarOutline } from "react-ionicons";
import {
  grey,
  greyDark,
  greyLight,
  longShadow,
  secondaryFont,
} from "../Variables";
import Forecast from "./Forecast";
import { addfavorite, remfavorite } from "../Api";

const Weather = () => {
  const location = useSelector((state) => state.weather.location);
  const current = useSelector((state) => state.weather.current);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const dateAndTime = (date) => {
    const fullDate = date.split(" ");
    const time = fullDate[1];

    const newDate = new Date(fullDate[0]).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return [time, newDate];
  };

  const checkFav = (location) => {
    //checking if there are favs and if the location exists in the favs
    if (favorites.favs.length >= 0 && favorites.favs.includes(location)) {
      dispatch(remfavorite(location));
    } else if (favorites.favs.length <= 0) {
      //checking if favs is empty
      dispatch(addfavorite(location));
    } else if (favorites.favs.filter((fav) => fav !== location).length >= 0) {
      dispatch(addfavorite(location));
    }
  };

  const [time, newDate] = dateAndTime(location.localtime);

  return (
    <StyledWeather>
      <StyledLocation>
        <StyledName>
          <h3>{location.name}</h3>
          <h4>{location.country}</h4>
        </StyledName>
        <StyledDate>
          <h3>{newDate}</h3>
          <h3>
            {current.is_day > 0 ? "Day" : "Night"}, {time}
          </h3>
        </StyledDate>
        <StyledFavIcon
          onClick={() => checkFav(location.name)}
          className={favorites.favs.includes(location.name) ? "active" : null}
        >
          <StarOutline width="3rem" height="3rem"></StarOutline>
        </StyledFavIcon>
      </StyledLocation>
      <StyledConditions>
        <StyledTemperature>
          <span>{Math.round(current.temp_c)}</span>
        </StyledTemperature>
        <StyledCondition>
          <StyledStatus className="status">
            <img src={current.condition.icon} alt="icon" />
            <h5>{current.condition.text}</h5>
          </StyledStatus>
          <StyledOthers>
            <div className="status">
              <h4>UV Index</h4> <span>{current.uv}</span>
            </div>
            <div className="status">
              <h4>Pressure</h4> <span>{current.pressure_mb} mb</span>
            </div>
            <div className="status">
              <h4>Humidity</h4> <span>{current.humidity}</span>
            </div>
            <div className="status">
              <h4>Wind Speed</h4> <span>{current.wind_mph} mph</span>
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
  padding: 1rem;
  text-align: center;

  h3 {
    font: 500 3.5rem ${secondaryFont};
  }

  h4 {
    font-size: 1.6rem;
    color: ${greyLight};
  }
`;

const StyledDate = styled.div`
  flex: 0 0 55%;
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-left: 8rem;

  h3 {
    font-size: 1.8rem;
    color: ${grey};
    letter-spacing: 1.6px;
  }
`;

const StyledFavIcon = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    color: ${greyLight};
  }

  &.active svg {
    color: orange;
  }
`;

const StyledConditions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 95%;
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
      background: ${greyDark};
      transform: translate(50%, 20%);
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

    span {
      color: ${greyDark};
    }
  }
`;

const StyledStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    font: 500 2.5rem ${secondaryFont};
  }
`;

const StyledOthers = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
`;

export default Weather;
