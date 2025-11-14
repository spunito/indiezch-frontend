import chile from "../../assets/images/chile.png";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
export const FirstComponent = () => {

  return (
    <div className="pt-15 w-full min-h-screen bg-[#445A14]">
      <div className="max-w-7xl h-64 mx-auto mt-20 flex-wrap items-center justify-center">
        <img className="h-80 transition-transform duration-300 ease-in-out hover:scale-120" src={chile} alt="" />
        <h1 className="text-4xl text-center text-bold text-white border-b-2 pb-4">Artista Destacado</h1>
        <Card className="bg-transparent border-0 shadow-none">
          <CardHeader className="flex flex-row gap-4">
            <img className="object-cover rounded-xl" src="https://www.musicapopular.cl/wp-content/uploads/2016/09/patiosolar-1.jpg" alt="" />
          <div className="flex flex-col">
            <CardTitle className="text-2xl font-bold text-white pb-4">Patio Solar</CardTitle>
      
          <CardContent className="flex flex-col gap-2 text-white text-left">

            <p className="text-left">Año Salida : 2013</p>
            <p className="text-left">Region Origen : Metropolitana</p>
            <p className="text-left">Albúm Destacado : Temporada</p>
            <p className="text-left">Año Salida :2013</p>
            
          </CardContent>
          </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
