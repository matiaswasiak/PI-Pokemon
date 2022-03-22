import styled from "styled-components";

const Error404 = () => {
  return (
    <Container>
      <Card>
        <CardInfo>
          <img src="/images/404.png" alt="404 Snorlax" />
          <p>Oops! A wild Snorlax has blocked your path!</p>
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
  width: 60vw;
  height: 60vh;
  margin: auto;
  border-radius: 20px;
  box-shadow: 0px 4px 55px rgba(0, 0, 0, 0.25);
  background: linear-gradient(#244049, #20353c);
  background-color: red;
`;

const CardInfo = styled.div`
  width: 60%;
  height: 100%;
  justify-content: center;
`;

export default Error404;
