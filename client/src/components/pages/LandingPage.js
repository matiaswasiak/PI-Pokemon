import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Container>
      <LandingImage>
        <LandingInfo>
          <img src="/images/Pokemon.png" alt="Pokemon Title" />
          <Link to="/home">Home</Link>
        </LandingInfo>
      </LandingImage>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url("images/LandingPage.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const LandingImage = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 600px;
  margin: auto;
  background: url("/images/Circle.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 620px) {
    width: 90%;
  }
`;

const LandingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    width: 130%;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 80px;
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
    color: #01a297;
    background-color: #fefffc;
    border-radius: 20px;

    &:hover {
      color: #009a4c;
    }

    @media (max-width: 900px) {
      width: 160px;
      height: 70px;
      font-size: 2.5rem;
    }

    @media (max-width: 400px) {
      width: 120px;
      height: 50px;
      font-size: 1.9rem;
    }
  }
`;

export default LandingPage;
