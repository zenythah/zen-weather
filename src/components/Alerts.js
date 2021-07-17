import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Alert from "./Alert";
import {
  dangerColor,
  dangerColorBg,
  successColor,
  successColorBG,
} from "../Variables";

const Alerts = ({ message, type }) => {
  const visible = useSelector((state) => state.visible);

  return (
    visible && (
      <StyledAlerts>
        {type === "error" ? (
          message.toLowerCase() === "request failed with status code 400" ? (
            <Alert
              color={dangerColor}
              bgcolor={dangerColorBg}
              message="Incorrect Location, try another location"
            />
          ) : (
            <Alert
              color={dangerColor}
              bgcolor={dangerColorBg}
              message="Please connect to the internet"
            />
          )
        ) : (
          <Alert
            color={successColor}
            bgcolor={successColorBG}
            message={message}
          />
        )}
      </StyledAlerts>
    )
  );
};

const StyledAlerts = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  height: 6rem;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default Alerts;
