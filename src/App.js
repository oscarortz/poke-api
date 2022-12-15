import "./App.css";
import FetchPokemons from "./componentes/FetchPokemons";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./componentes/NotFound";
import PokemonDescription from "./componentes/PokemonDescription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FetchPokemons />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/description/:name" element={<PokemonDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
