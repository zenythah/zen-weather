import React from "react";
import styled from "styled-components";
import { SearchOutline } from "react-ionicons";
import { colorWhite, grey, shortShadow, shortShadowLight } from "../Variables";
import { useDispatch, useSelector } from "react-redux";

import { fetchWeather, fetchForecast } from "../Api";
import { motion } from "framer-motion";

const Search = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const submitForm = (e) => {
    e.preventDefault();
    const searchLocation = e.target.firstChild.value;
    dispatch(fetchWeather(searchLocation));
    dispatch(fetchForecast(searchLocation));

    e.target.reset();
  };

  return (
    <StyledSearch
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <StyledForm className={theme ? "dark-theme" : null} onSubmit={submitForm}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a location..."
        />
        <button type="submit">
          <SearchOutline width="2rem" height="2rem" />
        </button>
      </StyledForm>
    </StyledSearch>
  );
};

const StyledSearch = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 450px) {
    justify-content: flex-start;
    margin-left: 4rem;
  }

  @media only screen and (max-width: 300px) {
    margin-left: 2rem;
  }
`;

const StyledForm = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1340px) {
    width: 70%;
  }

  @media only screen and (max-width: 550px) {
    width: 60%;
  }

  @media only screen and (max-width: 450px) {
    width: 70%;
  }

  @media only screen and (max-width: 300px) {
    width: 75%;
  }

  input {
    font-size: 1.7rem;
    padding: 1.5rem 3rem;
    width: 80%;
    border-radius: 0.8rem;
    border: 0;
    box-shadow: ${shortShadow};
    color: ${grey};
    background-color: ${colorWhite};
    transition: all 0.5s ease-out;

    @media only screen and (max-width: 550px) {
      width: 90%;
    }

    @media only screen and (max-width: 550px) {
      width: 100%;
    }
  }

  button {
    margin-left: -5%;
    background: transparent;
    border: 0;
    svg {
      color: ${grey};
    }
  }

  &.dark-theme {
    input {
      color: ${colorWhite};
      background-color: #7a7a7a;
      box-shadow: ${shortShadowLight};

      &::placeholder {
        color: ${colorWhite};
      }
    }

    button svg {
      color: ${colorWhite};
    }
  }
`;

export default Search;
