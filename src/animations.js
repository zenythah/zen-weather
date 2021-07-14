import { keyframes } from "styled-components";

export const slider = {
  hidden: { y: "10rem", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75 },
  },
};

export const loader = keyframes`
from {
  transform: translate(0);
}

to {
  transform: translate(100%, 100%);
}
`;
