import styled from "styled-components";
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
          <HomeDetail></HomeDetail>
        </HomeContent>
      </Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  box-sizing: border-box;
  background: linear-gradient(#e0cfeb, #c9b7fa);
  height: calc(100vh - 160px);
  padding: 60px;
`;

const HomeContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const HomeGallery = styled.div`
  background: linear-gradient(#efdefc, #dbcffa);
  width: 1210px;
  height: 100%;
  border-radius: 20px;
`;
const HomeDetail = styled.div`
  background: linear-gradient(#efdefc, #dbcffa);
  width: 540px;
  height: 100%;
  border-radius: 20px;
`;

const Gallery = styled.div`
  width: 1210px;
  height: calc(100% - 80px);
`;

export default Home;
