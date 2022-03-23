import styled from "styled-components";

const Card = ({ image, name }) => {
  return (
    <Container>
      <CardImage>
        {/* <img src="/images/Bulbasaur.png" alt="" /> */}
        <img src={image} alt="imagen" />
      </CardImage>
      <CardInfo>
        <CardTitle>
          <h3>{name}</h3>
        </CardTitle>
        <CardTypes>
          <p>grass</p>
          <p>poison</p>
        </CardTypes>
      </CardInfo>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 350px;
  padding: 20px;
  background-color: #fffffc90;
  border: 2px #c27ec0 solid;
  border-radius: 20px;
`;
const CardImage = styled.div`
  img {
    width: 206px;
    height: 206px;
  }
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardTitle = styled.div`
  h3 {
    margin: 0;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    text-transform: uppercase;
  }
`;
const CardTypes = styled.div`
  display: flex;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 35px;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    background-color: #c27ec0;
    border-radius: 0px 20px 20px 0px;
  }

  p:first-child {
    background-color: #a6da88;
    border-radius: 20px 0px 0px 20px;
  }
`;

export default Card;
