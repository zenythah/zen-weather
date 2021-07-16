import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;

         @media only screen and (max-width: 1340px) {
            font-size: 50%;
        }

         @media only screen and (max-width: 500px) {
            font-size: 40%;
        }
    }

    body {
        font: 300 1.8rem 'Clash Display', sans-serif;
    }

    button {
        cursor: pointer;
    }

    input {
        &:focus {
            outline: 0;
        }
    }

`;

export default GlobalStyles;
