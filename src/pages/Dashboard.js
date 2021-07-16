import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

import Search from "../components/Search";
import Weather from "../components/Weather";
import { Loader } from "../Variables";

const Dashboard = () => {
  const weather = useSelector((state) => state.weather);

  return (
    <StyledDashboard>
      <Search />

      {weather.pending ? (
        <Loader>
          <span></span>
          <span></span>
          <span></span>
        </Loader>
      ) : (
        weather.location && <Weather />
      )}
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  flex: 1;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 12vh 1fr;
`;

export default Dashboard;
