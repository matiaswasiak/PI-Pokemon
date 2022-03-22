import styled from "styled-components";

const Search = () => {
  return (
    <SearchBar>
      <input type="text" placeholder="Search for pokemons..." />
      <input type="submit" />
    </SearchBar>
  );
};

const SearchBar = styled.form`
  display: flex;
  height: 50px;

  input:first-child {
    position: relative;
    width: 700px;
    height: 100%;
    border: 2px solid #d5a8f9;
    box-sizing: border-box;
    border-radius: 20px;
    background: #f0edf2;
    padding: 0 20px;
    font-size: 16px;
  }

  input:last-child {
    margin-left: -20px;
    width: 120px;
    height: 50px;
    background: #d5a8f9;
    border: 2px solid #d5a8f9;
    border-radius: 0px 20px 20px 0px;
    color: #ffffff;
    font-size: 18px;
  }
`;

export default Search;
