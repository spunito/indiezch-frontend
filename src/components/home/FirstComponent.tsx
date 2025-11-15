import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const FirstComponent = () => {
  const artista = {
    name: 'Patio Solar',
    genre: 'Indie Rock',
    location: 'Santiago',
    description: 'Patio Solar es una banda chilena de indie rock conocida por su sonido fresco y letras introspectivas. Formada en 2015, han lanzado varios álbumes que han sido bien recibidos por la crítica y el público.',
    imageUrl: 'https://www.musicapopular.cl/wp-content/uploads/2016/09/patiosolar-1.jpg'
  }
  return (
    <section className="w-full min-h-screen py-16">
      <div className="flex justify-center max-w-7xl mx-auto px-4 items-center">
        <Tabs defaultValue="art-of-day">
          <TabsList className="flex space-x-4 bg-transparent">
            <TabsTrigger className="rounded-md " value="art-of-day">Artista del Día</TabsTrigger>
            <TabsTrigger className="rounded-md" value="new-artist">Nuevos artistas</TabsTrigger>
          </TabsList>

          <TabsContent value="art-of-day" className="w-full mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg  ">
                <img src={artista.imageUrl} alt={artista.name}
                className="w-full h-full rounded-xl hover:scale-120 object-cover transition-transform duration-300" 
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-3xl font-bold mb-4">{artista.name}</h2>
                <p className="text-lg mb-2"><strong>Género:</strong> {artista.genre}</p>
                <p className="text-lg mb-2"><strong>Ubicación:</strong> {artista.location}</p>
                <p className="text-md">{artista.description}</p>
              </div>

            </div>


          </TabsContent>
        </Tabs>
        

        
      
       
      
      </div>
    </section>
  )
}
