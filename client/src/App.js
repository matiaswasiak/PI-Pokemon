import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePokemon from "./components/pages/CreatePokemon";
import DetailPokemon from "./components/pages/DetailPokemon";
import Error404 from "./components/pages/Error404";
import Home from "./components/pages/Home";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<DetailPokemon />} />
          <Route path="/create" element={<CreatePokemon />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
