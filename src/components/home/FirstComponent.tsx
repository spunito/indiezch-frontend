import chile from "../../assets/images/chile.png";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const FirstComponent = () => {
  return (
    <div className="w-full min-h-screen bg-[#445A14] py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
        
        {/* Imagen Chile */}
        <img 
          className="h-80 md:h-96 transition-transform duration-300 ease-in-out hover:scale-110" 
          src={chile} 
          alt="Mapa de Chile" 
        />
        
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-white border-b-2 pb-4 text-center">
          Artista Destacado
        </h1>
        
        {/* Card */}
        <Card className="bg-transparent border-0 shadow-none w-full md:w-3/4 lg:w-2/3">
          <CardHeader className="flex flex-col md:flex-row gap-6 items-center">
            
            {/* Imagen artista */}
            <img 
              className="w-full md:w-1/3 h-64 md:h-48 object-cover rounded-xl" 
              src="https://www.musicapopular.cl/wp-content/uploads/2016/09/patiosolar-1.jpg" 
              alt="Patio Solar" 
            />

            {/* Contenido */}
            <div className="flex flex-col flex-1 text-white">
              <CardTitle className="text-2xl md:text-3xl font-bold pb-2">
                Patio Solar
              </CardTitle>
              <CardContent className="flex flex-col gap-1 text-left">
                <p>Año Salida: 2013</p>
                <p>Región Origen: Metropolitana</p>
                <p>Álbum Destacado: Temporada</p>
                <p>Género: Indie Rock</p>
              </CardContent>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
