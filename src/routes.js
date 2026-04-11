import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Poesias from "./pages/Poesias/Poesias";
import Livros from "./pages/Livros/Livros";
import SobreMim from "./pages/SobreMim/SobreMim";
import Contacto from "./pages/Contacto/Contacto";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/poesias" element={<Poesias />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/sobreMim" element={<SobreMim />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/poesias" element={<Poesias />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;