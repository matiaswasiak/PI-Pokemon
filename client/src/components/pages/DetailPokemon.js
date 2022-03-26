import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getDetails } from "../../redux/actions";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const DetailPokemon = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const details = useSelector((state) => state.details);
  const { id } = useParams();

  const pokemonById =
    allPokemons.filter(
      (p) => p.id === (id.length > 10 ? id : parseInt(id))
    )[0] || details[0];

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const numberId = id.padStart(3, "0");

  return (
    <div>
      <Header />
      <Container>
        <Card>
          <CardDetail>
            <div>
              <img src={pokemonById?.sprite} alt={pokemonById?.name} />
            </div>
            <InfoDetail>
              <div>
                <h2>
                  {pokemonById?.name} N.°{numberId}
                </h2>
              </div>
              <StatsDetail>
                <PrincipalDetail>
                  <p>
                    Height: <span>{pokemonById?.height / 10} m</span>
                  </p>
                  <p>
                    Weight: <span>{pokemonById?.weight / 10} kg</span>
                  </p>
                </PrincipalDetail>
                <SecondaryDetail>
                  <label>
                    <div>
                      <p>Health:</p>
                      <p>{pokemonById?.health}%</p>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pokemonById?.health}
                    />
                  </label>
                  <label>
                    <div>
                      <p>Attack:</p>
                      <p>{pokemonById?.attack}%</p>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pokemonById?.attack}
                    />
                  </label>
                  <label>
                    <div>
                      <p>Defense:</p>
                      <p>{pokemonById?.defense}%</p>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pokemonById?.defense}
                    />
                  </label>
                  <label>
                    <div>
                      <p>Speed:</p>
                      <p>{pokemonById?.speed}%</p>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pokemonById?.speed}
                    />
                  </label>
                </SecondaryDetail>
              </StatsDetail>
            </InfoDetail>
          </CardDetail>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  display: flex;
  background: linear-gradient(#e0cfeb, #c9b7fa);
  height: calc(100vh - 160px);
`;

const Card = styled.div`
  display: flex;
  width: 1200px;
  height: 700px;
  margin: auto;
  padding: 0 50px;
  box-sizing: border-box;
  background: linear-gradient(#efdffd, #dbcffa);
  border-radius: 20px;
`;

const CardDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;

  div {
    img {
      width: 500px;
      height: 500px;
    }
  }
`;

const InfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: #ffffff50;
  border-radius: 20px;

  div {
    h2 {
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      line-height: 48px;
      text-transform: uppercase;
    }
  }
`;
const StatsDetail = styled.div`
  width: 340px;
`;
const PrincipalDetail = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;

    span {
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
    }
  }
`;
const SecondaryDetail = styled.div`
  label {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p:first-child {
        font-size: 16px;
        font-weight: 600;
      }

      p:last-child {
        font-size: 14px;
        font-weight: 300;
      }
    }

    input[type="range"] {
      -webkit-appearance: none;
      width: 100%;
    }

    input[type="range"]::-webkit-slider-runnable-track {
      width: 300px;
      height: 5px;
      background: #b971f5;
      border: none;
      border-radius: 3px;
    }

    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #9c27b0;
      margin-top: -4px;
    }

    input[type="range"]:focus {
      outline: none;
    }

    input[type="range"]:focus::-webkit-slider-runnable-track {
      background: #ccc;
    }
  }
`;

export default DetailPokemon;
