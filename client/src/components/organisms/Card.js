import styled from "styled-components";

const Card = ({
  key,
  name,
  image,
  types,
  health,
  attack,
  defense,
  speed,
  setDetail,
}) => {
  const colours = {
    normal: "#A8A77Aaa",
    fire: "#EE8130aa",
    water: "#6390F0aa",
    electric: "#F7D02Caa",
    grass: "#7AC74Caa",
    ice: "#96D9D6aa",
    fighting: "#C22E28aa",
    poison: "#A33EA1aa",
    ground: "#E2BF65aa",
    flying: "#A98FF3aa",
    psychic: "#F95587aa",
    bug: "#A6B91Aaa",
    rock: "#B6A136aa",
    ghost: "#735797aa",
    dragon: "#6F35FCaa",
    dark: "#705746aa",
    steel: "#B7B7CEaa",
    fairy: "#D685ADaa",
  };

  return (
    <Container
      onMouseEnter={() =>
        setDetail({ key, name, image, types, health, attack, defense, speed })
      }
    >
      <CardImage>
        <img src={image} alt="imagen" />
      </CardImage>
      <CardInfo>
        <CardTitle>
          <h3>{name}</h3>
        </CardTitle>
        <CardTypes>
          {types.length ? (
            types.map((t, index) => {
              return (
                <p key={index} style={{ backgroundColor: `${colours[t]}` }}>
                  {t}
                </p>
              );
            })
          ) : (
            <p>unknown</p>
          )}
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
  cursor: pointer;
`;
const CardImage = styled.div`
  img {
    width: 100%;
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

  p:only-child {
    border-radius: 20px;
  }
`;

export default Card;
