//importing react and its siblings
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

//components imports
import GlobalStyles from "./components/GlobalStyles";
import Aside from "./components/Aside";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications";

import { ReorderThreeOutline, CloseOutline } from "react-ionicons";
import { toggleAside } from "./actions/action";
import { colorWhite, grey, StyledToggle } from "./Variables";

function App() {
  const location = useLocation();

  const theme = useSelector((state) => state.theme);
  const toggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();

  return (
    <StyledApp className={theme ? "dark-theme" : null}>
      <GlobalStyles />
      <StyledToggle
        className={theme ? "dark-theme" : null || toggle ? "active" : null}
        onClick={() => dispatch(toggleAside())}
      >
        {toggle ? <CloseOutline /> : <ReorderThreeOutline />}
      </StyledToggle>
      <Aside />
      <Switch location={location} key={location.keyname}>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/fav" exact>
          <Favorites />
        </Route>
        <Route path="/notifications" exact>
          <Notifications />
        </Route>
      </Switch>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  &.dark-theme {
    background: ${grey};
    color: ${colorWhite};
  }

  width: 100%;
  max-height: 100vh;
  display: flex;
  transition: all 0.5s ease-out;
  overflow-y: scroll;
  overflow-x: hidden;

  @media only screen and (max-width: 600px) {
    position: relative;
  }
`;

export default App;
