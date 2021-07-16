import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Notifications = () => {
  const toggle = useSelector((state) => state.toggle);

  return (
    <StyledNotification className={toggle ? "active" : null}>
      <h1>Notifications</h1>
    </StyledNotification>
  );
};

const StyledNotification = styled.div`
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
