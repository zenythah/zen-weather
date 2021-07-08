import React from "react";
// import { motion } from "framer-motion";
import styled from "styled-components";

// import { slider } from "../animations";
import Search from "../components/Search";
import Weather from "../components/Weather";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Search />
      <Weather />
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
