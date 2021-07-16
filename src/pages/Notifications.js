import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { slider } from "../animations";

const Notifications = () => {
  const toggle = useSelector((state) => state.toggle);

  return (
    <StyledNotification className={toggle ? "active" : null}>
      <motion.h1 variants={slider} initial="hidden" animate="show">
        Notifications
      </motion.h1>
    </StyledNotification>
  );
};

const StyledNotification = styled(motion.div)`
  flex: 1;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;
  transition: all 0.5s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    transform: translateX(5rem);
    overflow: hidden;
  }
`;

export default Notifications;
