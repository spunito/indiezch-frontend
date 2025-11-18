import { IndiezchHome } from "@/pages/IndiezchHome"
import { Artistas } from "@/pages/Artistas"
import { Categorias } from "@/pages/Categorias"
import { Contacto } from "@/pages/Contacto"
import { Eventos } from "@/pages/Eventos"
import { Routes , Route} from "react-router-dom"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<IndiezchHome/>} ></Route>
      <Route path="/artistas" element={<Artistas/>} ></Route>
      <Route path="/categorias" element={<Categorias/>} ></Route>
      <Route path="/eventos" element={<Eventos/>} ></Route>
      <Route path="/contacto" element={<Contacto/>} ></Route>
    </Routes>
  )
}
