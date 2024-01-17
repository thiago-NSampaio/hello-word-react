import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import Post from "paginas/Post";
import PaginaPadrao from "componentes/PaginaPadrao";
import NaoEcontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        
        <Route path="/*" element={<NaoEcontrada />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
      
      <Rodape />
    </BrowserRouter>

  )
}

export default AppRoutes;
