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
    box-sizing: border-box;
    width: 700px;
    height: 100%;
    padding: 0 20px;
    font-size: 16px;
    background: #f0edf2;
    border: 2px solid #d5a8f9;
    border-radius: 20px;
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
  }
`;

export default Search;
