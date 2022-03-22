import styled from "styled-components";
import Footer from "../sections/Footer";
import Header from "../sections/Header";

const CreatePokemon = () => {
  return (
    <div>
      <Header />
      <Container>Hola!</Container>
      <Footer />
    </div>
  );
};

const Container = styled.main`
  background: linear-gradient(#e0cfeb, #c9b7fa);
  height: calc(100vh - 160px);
`;

export default CreatePokemon;
