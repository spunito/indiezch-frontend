import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"
import { artistas } from "@/data/artistas"
import { Button } from "@/components/ui/button"


export const FirstComponent = () => {
  const artista = artistas[0]; 
  return (
    <section className="w-full min-h-screen py-16">
      <div className="flex justify-center max-w-7xl mx-auto px-4 items-center">
        <Tabs defaultValue="art-of-day">
          <TabsList className="flex space-x-4 bg-transparent">
            <TabsTrigger className="rounded-md " value="art-of-day">Artista del Día</TabsTrigger>
            <TabsTrigger className="rounded-md" value="new-artist">Nuevos artistas</TabsTrigger>
          </TabsList>

          {/* Artista del Día Tab */}

          <TabsContent value="art-of-day" className="w-full mt-8">
            <h1 className="font-bold pb-4 text-xl">Artista del día</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="overflow-hidden rounded-lg">
                <img src={artista.imageUrl} alt={artista.name}
                className="w-full h-full rounded-xl hover:scale-120 object-cover transition-transform duration-300 shadow-md hover:shadow-lg transition" 
                />
              </div>

              <div className="flex flex-col">
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">{artista.location}</Badge>
                  <Badge>{artista.genre}</Badge>
                </div>

                <h2 className="text-3xl font-bold mb-4">{artista.name}</h2>
                <p className="text-md">{artista.description}</p>
              </div>
              
            </div>
          </TabsContent>

          {/* Nuevos Artistas Tab */}
          <TabsContent value="new-artist" className="w-full mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                {artistas.map((art) => (
                  <Card key={art.id} className="p-0 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition pb-3">
                    <div className="h-48 w-full overflow-hidden rounded-t-lg">
                      <img 
                      src={art.imageUrl} 
                      alt={art.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
                    </div>
                    <div>
                      <CardHeader className="text-center">{art.name}</CardHeader>
                    </div>
                    <div className="flex justify-center">

                      <Button variant="outline" className="cursor-pointer" >Explorar</Button>
                    </div>
                  </Card>
                ) )}
                
              </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
