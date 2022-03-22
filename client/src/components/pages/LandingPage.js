import styled from "styled-components";

const LandingPage = () => {
  return (
    <Container>
      <LandingImage>
        <LandingInfo>
          <img src="/images/Pokemon.png" alt="Pokemon text" />
          <a href="/">Home</a>
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
`;
const LandingImage = styled.div`
  width: 600px;
  height: 600px;
  margin: auto;
  background: url("/images/Circle.png");
  background-size: contain;
  background-repeat: no-repeat;
`;
const LandingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    width: 130%;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 200px;
    height: 80px;
    font-size: 50px;
    font-weight: 800;
    line-height: 88px;
    text-transform: uppercase;
    text-decoration: none;
    color: #01a297;
    background-color: #fefffc;
    border-radius: 20px;
  }
`;

export default LandingPage;
