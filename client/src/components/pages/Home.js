import styled from "styled-components";
import Filter from "../filters/Filter";
import Card from "../organisms/Card";
import Pagination from "../organisms/Pagination";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <HomeContent>
          <HomeGallery>
            <Gallery>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Gallery>
            <Pagination />
          </HomeGallery>
          <HomeDetail>
            <PokeDetail>
              <img src="/images/Bulbasaur.png" alt="" />
              <h2>Bulbasaur</h2>
              <PokeStats>
                <div>
                  <p>
                    <img src="/images/Health.svg" alt="" />
                    50%
                  </p>
                  <p>
                    <img src="/images/Defense.svg" alt="" />
                    50%
                  </p>
                </div>
                <div>
                  <p>
                    <img src="/images/Attack.svg" alt="" />
                    50%
                  </p>
                  <p>
                    <img src="/images/Speed.svg" alt="" />
                    50%
                  </p>
                </div>
              </PokeStats>
            </PokeDetail>
            <PokeTypes>
              <Filter />
            </PokeTypes>
          </HomeDetail>
        </HomeContent>
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

export default Home;
