import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// import { v4 as uuid } from "uuid";

import { greyLight, primaryColor } from "../Variables";
// import ForecastDay from "../components/ForecastDay";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favs);

  return (
    <StyledFavorites>
      {favorites.length > 0 ? (
        favorites.map((fav) => (
          //making forecast calls for all the favorites
          <h1>{fav}</h1>
          // <ForecastDay forcast={fav} key={uuid()} id={uuid()} />
        ))
      ) : (
        <div>
          {" "}
          <h1>You have no favorites, try adding some </h1> <br />
          <span>Written by "Kwaame"😉</span>
        </div>
      )}
    </StyledFavorites>
  );
};

const StyledFavorites = styled.div`
  width: 100%;
  max-height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 5rem 10rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
    background-color: ${greyLight};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${primaryColor};
  }
`;

export default Favorites;
