import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getNamePokemons } from "../../redux/actions";
import styled from "styled-components";

const Search = ({ setCurrentPage }) => {
  // ------------------------- useDispatch ------------------------- //
  const dispatch = useDispatch();

  // ------------------------- useState ------------------------- //
  const [name, setName] = useState("");

  // ------------------------- useParams ------------------------- //
  const { id } = useParams();

  // ------------------------- useLocation ------------------------- //
  let location = useLocation();

  // ------------------------- Handlers ------------------------- //
  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentPage(1);
    localStorage.setItem("page", 1);
    dispatch(getNamePokemons(name));
  }

  return (
    <SearchBar>
      {id || location.pathname === "/create" ? (
        <></>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search for pokemons..."
            onChange={(e) => handleInputChange(e)}
          />
          <input type="submit" onClick={(e) => handleSubmit(e)} />
        </>
      )}
    </SearchBar>
  );
};

const SearchBar = styled.form`
  display: flex;
  height: 50px;
  width: 40%;

  input:first-child {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    font-size: 16px;
    background: #f0edf2;
    border: 2px solid #d5a8f9;
    border-radius: 20px;

    &:focus {
      font-size: 18px;
      outline: 0 solid #d5a8f9;
      background-color: #fbf7fc;
    }
  }

  input:last-child {
    margin-left: -20px;
    width: 120px;
    height: 50px;
    font-size: 18px;
    color: #ffffff;
    background: #d5a8f9;
    border: 2px solid #d5a8f9;
    border-radius: 0px 20px 20px 0px;
    cursor: pointer;

    &:hover {
      background-color: #9816ff80;
    }
  }

  @media (max-width: 1020px) {
    display: none;
  }
`;

export default Search;
