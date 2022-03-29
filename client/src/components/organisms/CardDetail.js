import styled from "styled-components";
import { colours } from "../utils/Colors";
const defaultImage = "/images/Pikachu.gif";

const CardDetail = ({ image, name, types, health, attack, defense, speed }) => {
  return (
    <HomeDetail>
      <PokeDetail>
        <img src={image || defaultImage} alt="" />
        <h2>{name}</h2>
        <CardTypes>
          {types?.length ? (
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

        <PokeStats>
          <div>
            <p>
              <img src="/images/Health.svg" alt="" />
              {health}%
            </p>
            <p>
              <img src="/images/Defense.svg" alt="" />
              {defense}%
            </p>
          </div>
          <div>
            <p>
              <img src="/images/Attack.svg" alt="" />
              {attack}%
            </p>
            <p>
              <img src="/images/Speed.svg" alt="" />
              {speed}%
            </p>
          </div>
        </PokeStats>
      </PokeDetail>
    </HomeDetail>
  );
};

const HomeDetail = styled.div`
  width: 540px;
  height: calc(100% - 120px);
  border-radius: 20px;
`;

const PokeDetail = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 150px);

  img {
    margin-top: 20px;
  }

  img {
    width: 300px;
    margin: 0;
  }

  h2 {
    margin: auto;
    font-size: 45px;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

const PokeStats = styled.div`
  div {
    display: flex;
    background-color: #ffffff80;
    border-top: 2px solid #d7b1f680;
    border-left: 2px solid #d7b1f680;
    border-right: 2px solid #d7b1f680;
    border-radius: 20px 20px 0 0;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 50px;
      margin: 0;
      font-size: 20px;
      font-weight: 400;
      text-transform: uppercase;

      img {
        width: 30px;
        margin-right: 10px;
      }
    }

    p:last-child {
      border-left: 2px solid #d7b1f680;
    }
  }

  div:last-child {
    margin-bottom: 35px;
    border-bottom: 2px solid #d7b1f680;
    border-radius: 0 0 20px 20px;
  }
`;

const CardTypes = styled.div`
  display: flex;
  margin-bottom: 10px;

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

export default CardDetail;
