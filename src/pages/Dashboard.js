import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

import Search from "../components/Search";
import Weather from "../components/Weather";
// import { slider } from "../animations";

const Dashboard = () => {
  const location = useSelector((state) => state.weather.location);

  return (
    <StyledDashboard>
      <Search />
      {location && <Weather />}
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
