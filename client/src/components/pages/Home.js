import { useEffect } from "react";
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
                {pokemons.map((pokemon) => {
                  return (
                    <Card
                      key={pokemon.id}
                      name={pokemon.name}
                      image={pokemon.sprite}
                      types={pokemon.types}
                    />
                  );
                })}
              </Gallery>
              <Pagination />
            </HomeGallery>
            {pokemons.length > 0 && (
              <CardDetail
                image={pokemons[5].sprite}
                name={pokemons[5].name}
                health={pokemons[5].health}
                attack={pokemons[5].attack}
                defense={pokemons[5].defense}
                speed={pokemons[5].speed}
              />
            )}
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
