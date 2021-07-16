import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import { CloseOutline } from "react-ionicons";
import { colorWhite } from "../Variables";

const Alert = ({ message, color, bgcolor }) => {
  const [close, setClose] = useState(false);

  return (
    !close && (
      <StyledAlert color={color} background={bgcolor}>
        <StyledMessage>{message}</StyledMessage>
        <CloseOutline onClick={() => setClose(!close)} />
      </StyledAlert>
    )
  );
};

const AlertAnim = keyframes`
    from {
        transform: translateY(2rem);
        opacity: 0;
    }

    to {
        transform: translate(0);
        opacity: 1;
    }
`;

const StyledAlert = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 30rem;
  height: auto;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  letter-spacing: 0.1rem;
  padding: 1rem 1.5rem;
  overflow: hidden;
  transition: all 0.5s ease-out;
  animation: ${AlertAnim} 0.5s ease-out;

  svg {
    cursor: pointer;
    position: absolute;
    top: 2%;
    right: 2%;
    width: 1.5rem;
    height: 1.5rem;
    color: ${colorWhite};
  }
`;

const StyledMessage = styled.span`
  font-size: 1.5rem;
`;

export default Alert;
