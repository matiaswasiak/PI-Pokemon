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
          <button>Go Back</button>
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
  border-radius: 20px;
  box-shadow: 0px 4px 55px rgba(0, 0, 0, 0.25);
  background: linear-gradient(#244049, #20353c);
`;

const CardInfo = styled.div`
  position: absolute;
  display: inherit;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 60%;
  color: #fbffff;
  font-family: "Lato";

  img {
    height: 360px;
  }

  p {
    font-size: 32px;
    line-height: 42px;
    margin: 10px 0 36px 0;

    span {
      color: #ecc92a;
    }
  }

  button {
    margin: 0 auto;
    width: 40%;
    height: 75px;
    background-color: #ffcb04;
    border-radius: 110px;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 30px;
    cursor: pointer;
  }
`;

export default Error404;
