import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { artistas } from "@/data/artistas";
import { Link, useParams } from "react-router-dom";

export const DetallesArtistas = () => {
    const {id} = useParams();
    const artista = artistas.find(a => a.id === Number(id))

    if(!artista) {
        return (
        <div className="flex flex-col w-full min-h-screen pt-20 justify-center items-center">
            <h1 className="font-bold">ARTISTA NO ENCONTRADO</h1>
            <img 
            className="h-48 w-48 flex mx-auto"
            src="https://i.pinimg.com/736x/db/2a/83/db2a836b6182cf7bfd79fb5e84022ec5.jpg" alt="" />
        </div>
        )}
  
    return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

      {/* Imagen */}
      <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg">
        <img 
          src={artista.imageUrl} 
          alt={artista.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-4">
        
        <div className="flex gap-3">
          <Badge variant="secondary">{artista.location}</Badge>
          <Badge>{artista.genre}</Badge>
        </div>

        <h1 className="text-4xl font-bold">{artista.name}</h1>

        <p className="text-lg opacity-80 leading-relaxed">
          {artista.description}
        </p>

        <Button asChild >
          <Link className="bg-green-700 hover:bg-green-800 mt-4 w-fit" to={artista.spotifyUrl}>Escuchar en Spotify</Link>
        </Button>

      </div>

    </section>
  )
}
