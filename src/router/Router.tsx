import { Artistas, Categorias, Contacto, DetallesArtistas, Eventos, Home } from "@/pages"
import { Routes , Route} from "react-router-dom"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/artistas" element={<Artistas/>} ></Route>
      <Route path="/artistas/:id" element={<DetallesArtistas/>} ></Route>
      <Route path="/categorias" element={<Categorias/>} ></Route>
      <Route path="/eventos" element={<Eventos/>} ></Route>
      <Route path="/contacto" element={<Contacto/>} ></Route>
    </Routes>
  )
}
