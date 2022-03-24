import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPokemons } from "../../redux/actions";
import Card from "../organisms/Card";
import CardDetail from "../organisms/CardDetail";
import Pagination from "../organisms/Pagination";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const Home = () => {
  let pokemons = useSelector((state) => state.pokemons);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const [detail, setDetail] = useState({
    key: "",
    name: "",
    image: "",
    types: [],
    health: "",
    attack: "",
    defense: "",
    speed: "",
  });

  useEffect(() => {
    setDetail({
      key: pokemons[0]?.id,
      name: pokemons[0]?.name,
      image: pokemons[0]?.sprite,
      types: pokemons[0]?.types,
      health: pokemons[0]?.health,
      attack: pokemons[0]?.attack,
      defense: pokemons[0]?.defense,
      speed: pokemons[0]?.speed,
    });
  }, [pokemons]);

  return (
    <div>
      <Header />
      <Container>
        {pokemons.length === 0 && (
          <Gif>
            <iframe
              src="https://giphy.com/embed/vsyKKf1t22nmw"
              width="480"
              height="480"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </Gif>
        )}
        {pokemons.length > 0 && (
          <HomeContent>
            <HomeGallery>
              <Gallery>
                {pokemons.map((pokemon) => (
                  <Card
                    key={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.sprite}
                    types={pokemon.types}
                    health={pokemon.health}
                    attack={pokemon.attack}
                    defense={pokemon.defense}
                    speed={pokemon.speed}
                    setDetail={setDetail}
                  />
                ))}
              </Gallery>
              <Pagination />
            </HomeGallery>

            <CardDetail
              key={detail.key}
              image={detail.image}
              name={detail.name}
              health={detail.health}
              attack={detail.attack}
              defense={detail.defense}
              speed={detail.speed}
            />
          </HomeContent>
        )}
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  box-sizing: border-box;
  height: calc(100vh - 160px);
  padding: 60px;
  background: linear-gradient(#e0cfeb, #c9b7fa);
`;

const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const HomeGallery = styled.div`
  width: 1210px;
  height: 100%;
  background: linear-gradient(#efdefc, #dbcffa);
  border-radius: 20px;
`;

const Gallery = styled.div`
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, min-content);
  gap: 30px;
  width: 1210px;
  height: calc(100% - 60px);
  padding: 40px 0;
  overflow-x: hidden;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #fefffc80;
    border-radius: 20px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(#9816ff50, #353ab050);
    border-radius: 20px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(#9816ff80, #353ab080);
  }
`;

const Gif = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;
