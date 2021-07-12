import React from "react";
import styled from "styled-components";
import * as variables from "../Variables";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { lightmode, darkmode } from "../actions/action";

import {
  AlbumsOutline,
  HeartOutline,
  MoonOutline,
  NotificationsOutline,
  SunnyOutline,
} from "react-ionicons";

const Aside = () => {
  const { pathname } = useLocation();

  //intializing the dispatch for the redux
  const dispatch = useDispatch();

  //using the selector to identify the state
  const theme = useSelector((state) => state.theme);

  return (
    <StyledNav>
      <StyledMain>
        <Link to="/" className={pathname === "/" ? "active" : null}>
          <AlbumsOutline color="#fff" width="3rem" height="3rem" />
        </Link>
        <Link to="/fav" className={pathname === "/fav" ? "active" : null}>
          <HeartOutline color="#fff" width="3rem" height="3rem" />
        </Link>
        <Link
          to="/notifications"
          className={pathname === "/notifications" ? "active" : null}
        >
          <NotificationsOutline color="#fff" width="3rem" height="3rem" />
        </Link>
      </StyledMain>
      <StyledSecondary>
        <div>
          {theme ? (
            <SunnyOutline
              onClick={() => dispatch(lightmode())}
              color="#fff"
              width="3rem"
              height="3rem"
            />
          ) : (
            <MoonOutline
              onClick={() => dispatch(darkmode())}
              color="#fff"
              width="3rem"
              height="3rem"
            />
          )}
        </div>
      </StyledSecondary>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 100vh;
  width: 6%;
  background: ${variables.primaryColor};
  display: grid;
  grid-template-rows: 80% 20%;
  grid-template-columns: 1fr;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  margin: auto auto;
  transition: all 0.5s ease-out;

  div {
    cursor: pointer;
  }

  .active {
    background: #fff;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: ${variables.primaryColor};
    }
  }
`;

const StyledSecondary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    cursor: pointer;
  }
`;

export default Aside;
