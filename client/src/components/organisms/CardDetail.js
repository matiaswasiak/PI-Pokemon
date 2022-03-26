import styled from "styled-components";
import Filter from "./Filter";

const CardDetail = ({ image, name, health, attack, defense, speed }) => {
  return (
    <HomeDetail>
      <PokeDetail>
        <img src={image} alt="" />
        <h2>{name}</h2>

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
      <PokeTypes>
        <Filter />
      </PokeTypes>
    </HomeDetail>
  );
};

const HomeDetail = styled.div`
  width: 540px;
  height: 100%;
  background: linear-gradient(#efdefc, #dbcffa);
  border-radius: 20px;
`;

const PokeDetail = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 150px);

  img {
    width: 300px;
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

const PokeTypes = styled.div``;

export default CardDetail;
