import React from "react";
import styled from "styled-components";
import { SearchOutline } from "react-ionicons";
import { shortShadow } from "../Variables";

const Search = () => {
  return (
    <StyledSearch>
      <StyledForm>
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

const StyledSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    font-size: 1.7rem;
    padding: 1.5rem 3rem;
    width: 80%;
    border-radius: 0.8rem;
    border: 0;
    box-shadow: ${shortShadow};
  }

  button {
    margin-left: -5%;
    background: transparent;
    border: 0;
  }
`;

export default Search;
