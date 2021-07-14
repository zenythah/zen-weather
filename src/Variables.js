import styled from "styled-components";
import { loader } from "./animations";

export const primaryColor = "#0496FF";
export const greyDark = "#121212";
export const grey = "#555";
export const greyLight = "#a1a1a1";

export const Hide = styled.div`
  overflow: hidden;
`;

export const Loader = styled.div`
  width: 5rem;
  height: 5rem;
  margin: auto auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span {
    background: ${grey};
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    transition: 0.75s ease-out;

    &:nth-child(1) {
      transform: translate(0);
      animation: ${loader} 1s 0.5s ease-out alternate infinite;
    }

    &:nth-child(2) {
      transform: translate(0, 50%);
      animation: ${loader} 1s 0.75s ease-out alternate infinite;
    }

    &:nth-child(3) {
      animation: ${loader} 1s 1s ease-out alternate infinite;
      transform: translate(0, 90%);
    }
  }
`;

export const secondaryFont = "'Nippo', sans-serif";

export const shortShadow =
  "0 1px 1px #9696961c, 0 2px 2px #9696961c, 0 4px 4px #9696961c, 0 6px 8px #9696961c,0 8px 16px #9696961c";

export const longShadow =
  "0 1px 2px #9696961c, 0 2px 4px #9696961c, 0 4px 8px #9696961c, 0 8px 16px #9696961c,0 16px 32px #9696961c, 0 32px 64px #9696961c";
