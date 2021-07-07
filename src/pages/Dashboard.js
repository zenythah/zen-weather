import React from "react";
// import { motion } from "framer-motion";
import styled from "styled-components";

import { Hide } from "../Variables";
// import { slider } from "../animations";
import Search from "../components/Search";
import Weather from "../components/Weather";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <Hide>
        <Search />
        <Weather />
      </Hide>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  flex: 1;
`;

export default Dashboard;
