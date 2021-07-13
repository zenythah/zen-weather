//importing react and its siblings
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

//components imports
import GlobalStyles from "./components/GlobalStyles";
import Aside from "./components/Aside";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications";

function App() {
  const location = useLocation();

  const theme = useSelector((state) => state.theme);

  return (
    <StyledApp className={theme ? "dark-theme" : null}>
      <GlobalStyles />
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
    background: #121212;
    color: #fff;
  }

  width: 100%;
  max-height: 100vh;
  display: flex;
  transition: all 0.5s ease-out;
`;

export default App;
