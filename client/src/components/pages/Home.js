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

  let localS = localStorage.getItem("page");
  // console.log(currentPage, localStorage.getItem("page"));

  useEffect(() => {
    if (localS !== null) {
      setCurrentPage(Number(localS));
    }
  }, []);

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
    localStorage.setItem("page", 1);
    setOrden(`Ordered ${e.target.value}`);
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
    localStorage.setItem("page", 1);
    setType();
  }

  function handleSortAttack(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    localStorage.setItem("page", 1);
    setOrden(`Ordered ${e.target.value}`);
  }

  function handleFilterType(e) {
    e.preventDefault();
    let createdApiDb = document.getElementById("createdApiDb").value;
    dispatch(filterType(e.target.value, createdApiDb));
    setCurrentPage(1);
    localStorage.setItem("page", 1);
    setOrden(`Ordered ${e.target.value}`);
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function setType() {
    document.getElementById("allTypes").value = "all";
  }

  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
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
                    return typeof pokemon === "string" ? (
                      <h2 key={index} style={{ gridColumn: "none" }}>
                        Pokemon with the name {pokemon} was not found :/
                      </h2>
                    ) : (
                      <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprite}
                        types={
                          pokemon.createdInDb
                            ? pokemon.Types[0]?.name
                            : pokemon.types
                        }
                        health={pokemon.health}
                        attack={pokemon.attack}
                        defense={pokemon.defense}
                        speed={pokemon.speed}
                        setDetail={setDetail}
                        createdInDb={pokemon.createdInDb}
                        Types={pokemon.Types}
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
                currentPage={currentPage}
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
                types={detail.types}
                createdInDb={detail.createdInDb}
                Types={detail.Types}
              />

              <PokeTypes>
                <select onChange={(e) => handleSort(e)}>
                  <option value="all">BY NAME</option>
                  <option value="asc">Ascending order</option>
                  <option value="desc">Descending order</option>
                </select>

                <select
                  onChange={(e) => {
                    handleSortAttack(e);
                  }}
                >
                  <option value="all">BY ATTACK</option>
                  <option value="strong">Stronger attack</option>
                  <option value="weak">Weaker attack</option>
                </select>

                <select
                  id="allTypes"
                  onChange={(e) => {
                    handleFilterType(e);
                  }}
                >
                  <option value="all">BY TYPE</option>

                  {types?.map((e) => (
                    <option key={e.id} value={e.name}>
                      {capitalizeFirstLetter(e.name)}
                    </option>
                  ))}
                </select>

                <select
                  id="createdApiDb"
                  onChange={(e) => handleFilterCreated(e)}
                >
                  <option disabled>CREATOR</option>
                  <option value="all">ALL</option>
                  <option value="api">API</option>
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
  min-width: 410px;
  min-height: 650px;
  height: calc(100vh - 160px);
  padding: 60px;
  background: linear-gradient(#e0cfeb, #c9b7fa);
`;

const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  min-height: 650px;
  max-width: 1710px;
  margin: 0 auto;
`;

const HomeGallery = styled.div`
  max-width: 1210px;
  width: 100%;
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

  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, min-content);
  }

  @media (max-width: 1410px) {
    grid-template-columns: repeat(2, min-content);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, min-content);
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(2, min-content);
  }

  @media (max-width: 690px) {
    grid-template-columns: repeat(1, min-content);
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

const Detail = styled.div`
  background: linear-gradient(#efdefc, #dbcffa);
  border-radius: 20px;
  min-height: 650px;
  min-width: 450px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const PokeTypes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 90px;
  border-radius: 20px;

  select {
    background-color: red;
    height: 60px;
    background-color: #d5a8f9;
    font-family: "Lato";
    text-align: center;
    border: 1px solid #9816ff80;
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
  }
`;

export default Home;
