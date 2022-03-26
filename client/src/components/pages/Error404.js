import { Link } from "react-router-dom";
import styled from "styled-components";

const Error404 = () => {
  return (
    <Container>
      <Card>
        <CardInfo>
          <img src="/images/404.svg" alt="404 Snorlax" />
          <p>
            <span>Oops!</span> A wild Snorlax has blocked your path!
          </p>
          <StyledLink to="/home">Go Back</StyledLink>
        </CardInfo>
      </Card>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#4f7c8b, #26444f);
`;

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 1200px;
  height: 600px;
  margin: auto;
  background: linear-gradient(#244049, #20353c);
  border-radius: 20px;
  box-shadow: 0px 4px 55px rgba(0, 0, 0, 0.25);
`;

const CardInfo = styled.div`
  position: absolute;
  display: inherit;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 60%;
  color: #fbffff;

  img {
    height: 360px;
  }

  p {
    margin: 10px 0 36px 0;
    font-size: 32px;
    line-height: 42px;

    span {
      color: #ecc92a;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 40%;
  height: 75px;
  font-size: 30px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #ffcb04;
  color: #000;
  border: none;
  border-radius: 110px;
  cursor: pointer;
`;

export default Error404;
