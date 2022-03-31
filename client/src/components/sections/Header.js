import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../organisms/Search";

const Header = ({ setCurrentPage }) => {
  return (
    <Container>
      <Navbar>
        <StyledLink to="/home">
          <h1>Pokemon Wiki</h1>
        </StyledLink>
        <Search setCurrentPage={setCurrentPage} />
        <StyledLink to="/create">
          <p>Create Pokemon</p>
        </StyledLink>
      </Navbar>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  height: 100px;
  background: linear-gradient(#fbf7fc, #eee2fa);
  min-width: 410px;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 60px;
  @media (max-width: 670px) {
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:active {
    color: #9816ff80;
  }

  h1 {
    font-size: 44px;
    font-weight: 600;
    line-height: 54px;
    text-transform: uppercase;
    margin: 0;

    @media (max-width: 470px) {
      font-size: 35px;
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
    text-decoration: none;
    color: #ffffff;
    background-color: #d5a8f9;
    border-radius: 20px;

    &:hover {
      background-color: #9816ff80;
    }

    @media (max-width: 670px) {
      display: none;
    }
  }
`;

export default Header;
