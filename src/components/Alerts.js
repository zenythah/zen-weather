import React, { useEffect } from "react";
import styled from "styled-components";

import Alert from "./Alert";
import { dangerColor, dangerColorBg } from "../Variables";

const Alerts = ({ message, time, setVisible, visible }) => {
  useEffect(() => {
    setTimeout(() => {
      setVisible((v) => !v);
    }, time);
  }, [time, setVisible]);

  return (
    <StyledAlerts>
      {message.toLowerCase() === "request failed with status code 400"
        ? !visible && (
            <Alert
              color={dangerColor}
              bgcolor={dangerColorBg}
              message="Incorrect Location, try another location"
            />
          )
        : !visible && (
            <Alert
              color={dangerColor}
              bgcolor={dangerColorBg}
              message="Please connect to the internet"
            />
          )}
    </StyledAlerts>
  );
};

const StyledAlerts = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

export default Alerts;
