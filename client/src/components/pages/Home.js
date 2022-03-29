import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCreated,
  filterType,
  getPokemons,
  getTypes,
  orderByAttack,
  orderByName,
} from "../../redux/actions";
import Card from "../organisms/Card";
import CardDetail from "../organisms/CardDetail";
import Pagination from "../organisms/Pagination";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import styled from "styled-components";

const Home = () => {
  // ------------------------- useDispatch ------------------------- //
  const dispatch = useDispatch();

  // ------------------------- useState ------------------------- //
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [detail, setDetail] = useState({
    // Hover section
    key: "",
    name: "",
    image: "",
    types: [],
    health: "",
    attack: "",
    defense: "",
    speed: "",
  });
  // Filters
  const [, setOrden] = useState("");

  // ------------------------- useSelector ------------------------- //
  const pokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);

  // ------------------------- useEffect ------------------------- //
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    // useEffect for hover in Home
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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ------------------------- Handlers for filters ------------------------- //
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  function handleSortAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleFilterType(e) {
    e.preventDefault();
    dispatch(filterType(e.target.value));
    setCurrentPage(1);
    setOrden(` ${e.target.value}`);
  }

  return (
    <div>
      <Header />
      <Container>
        {pokemons.length === 0 && (
          <Gif>
            <img src="/images/Pikachu.gif" alt="pikachu gif" />
          </Gif>
        )}
        {pokemons.length > 0 && (
          <HomeContent>
            <HomeGallery>
              <Gallery>
                {currentPosts.length > 0 ? (
                  currentPosts.map((pokemon, index) => {
                    return pokemon === "noData" ? (
                      <h2 key={index} style={{ gridColumn: "none" }}>
                        We didn't find any Pokémon created by you, click Create
                        Pokémon :{")"}
                      </h2>
                    ) : typeof pokemon === "string" ? (
                      <h2 key={index} style={{ gridColumn: "none" }}>
                        Pokemon with the name {pokemon} was not found :/
                      </h2>
                    ) : (
                      <Card
                        key={index}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprite}
                        types={pokemon.types}
                        health={pokemon.health}
                        attack={pokemon.attack}
                        defense={pokemon.defense}
                        speed={pokemon.speed}
                        setDetail={setDetail}
                      />
                    );
                  })
                ) : (
                  <p>cargando</p>
                )}
              </Gallery>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={pokemons.length}
                paginate={paginate}
              />
            </HomeGallery>
            <Detail>
              <CardDetail
                key={detail.key}
                image={detail.image}
                name={detail.name}
                health={detail.health}
                attack={detail.attack}
                defense={detail.defense}
                speed={detail.speed}
              />

              <PokeTypes>
                <select onChange={(e) => handleSort(e)}>
                  <option>ORDER BY NAME</option>
                  <option value="asc">Ascending order</option>
                  <option value="desc">Descending order</option>
                </select>

                <select
                  onChange={(e) => {
                    handleSortAttack(e);
                  }}
                >
                  <option>STRENGTH</option>
                  <option value="strong">Stronger attack</option>
                  <option value="weak">Weaker attack</option>
                </select>

                <select
                  onChange={(e) => {
                    handleFilterType(e);
                  }}
                >
                  <option>BY TYPE</option>

                  {types?.map((e) => (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  ))}
                </select>

                <select onChange={(e) => handleFilterCreated(e)}>
                  <option>CREATOR</option>
                  <option value="all">Show all...</option>
                  <option value="api">Reals</option>
                  <option value="created">Created</option>
                </select>
              </PokeTypes>
            </Detail>
          </HomeContent>
        )}
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  display: flex;
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
  height: 450px;
  width: 550px;
  margin: auto;
  border-radius: 20px;
  animation: bgcolor 3s ease-in-out infinite;

  @keyframes bgcolor {
    0% {
      background-color: #9816ff80;
    }
    50% {
      background-color: #353ab080;
    }

    100% {
      background-color: #9816ff80;
    }
  }

  img {
    width: 350px;
    border-radius: 20px;
  }
`;

const Detail = styled.div``;
const PokeTypes = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 90px;
  background: linear-gradient(#efdefc, #dbcffa);
  border-radius: 20px;

  select {
    background-color: red;
    height: 60px;
    background-color: #d5a8f9;
    font-family: "Lato";
    border: solid #9816ff80;
    outline: none;

    &:first-child {
      border-radius: 20px 0 0 20px;
      border-right: 0;
    }

    &:nth-child(2) {
      border-right: 0;
      border-left: 0;
    }
    &:nth-child(3) {
      border-right: 0;
      border-left: 0;
    }

    &:last-child {
      border-radius: 0 20px 20px 0;
      border-left: 0;
    }
  }
`;

export default Home;
