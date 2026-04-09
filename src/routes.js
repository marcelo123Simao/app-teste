import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Poesias from "./pages/Poesias";
import Livros from "./pages/Livros";
import Sobre_mim from "./pages/Sobre_mim";
import Contacto from "./pages/Contacto";
function Approutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poesias" element={<Poesias />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/sobre mim" element={<Sobre_mim />}></Route>
        <Route path="/Contacto" element={<Contacto />}></Route>
        
      </Routes>

    </BrowserRouter>
  );
}
export default Approutes;
