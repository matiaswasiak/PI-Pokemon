import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../organisms/Search";

const Header = () => {
  return (
    <Container>
      <Navbar>
        <StyledLink to="/home">
          <h1 className="header__title">Pokemon Wiki</h1>
        </StyledLink>
        <Search />
        <StyledLink to="/create">
          <p className="header__button">Create Pokemon</p>
        </StyledLink>
      </Navbar>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  height: 100px;
  background: linear-gradient(#fbf7fc, #eee2fa);
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 60px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:active {
    color: #9816ff80;
  }

  h1 {
    font-size: 45px;
    font-weight: 600;
    line-height: 54px;
    text-transform: uppercase;
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
  }
`;

export default Header;
