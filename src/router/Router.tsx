import { IndiezchHome } from "@/IndiezchHome"
import { Routes , Route} from "react-router-dom"

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<IndiezchHome/>} ></Route>
    </Routes>
  )
}
