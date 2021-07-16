import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Search from "../components/Search";
import Weather from "../components/Weather";
import Alerts from "../components/Alerts";
import { Loader } from "../Variables";

const Dashboard = () => {
  const weather = useSelector((state) => state.weather);
  const theme = useSelector((state) => state.theme);
  const toggle = useSelector((state) => state.toggle);
  const [visible, setVisible] = useState(false);

  return (
    <StyledDashboard className={toggle ? "active" : null}>
      <Search />
      {weather.error ? (
        <Alerts
          setVisible={setVisible}
          visible={visible}
          time="5000"
          message={weather.error.message}
        />
      ) : null}

      {weather.pending ? (
        <Loader className={theme ? "dark-theme" : null}>
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

const StyledDashboard = styled(motion.div)`
  flex: 1;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 12vh 1fr;
  transition: all 0.5s ease-out;
  position: relative;

  &.active {
    transform: translateX(5rem);
    overflow: hidden;
  }
`;

export default Dashboard;
