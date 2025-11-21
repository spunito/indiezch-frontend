import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader } from "@/components/ui/card"
import { artistas } from "@/data/artistas"
import { Button } from "@/components/ui/button"

export const FirstComponent = () => {
  const artista = artistas[0]; 

  return (
    <section className="min-h-screen py-16 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 items-center">
        

        
        <Tabs defaultValue="art-of-day">

        <div className="mx-auto"> 
          <TabsList className="flex space-x-4 bg-muted/40 rounded-lg p-1">
            <TabsTrigger className="rounded-md" value="art-of-day">
              Artista del Día
            </TabsTrigger>

            <TabsTrigger className="rounded-md" value="new-artist">
              Nuevos artistas
            </TabsTrigger>
          </TabsList>
          </div>

          {/* ------- Artista del día ------- */}
          <TabsContent value="art-of-day" className="w-full mt-8">
            <h1 className="font-bold pb-4 text-xl text-foreground">
              Artista del día
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              {/* Imagen principal */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={artista.imageUrl}
                  alt={artista.name}
                  className="w-full h-full rounded-xl object-cover transition-transform duration-300 hover:scale-105 shadow-md dark:shadow-lg"
                />
              </div>

              {/* Información del artista */}
              <div className="flex flex-col">
                <div className="flex gap-2 mb-4">
                  <Badge variant="secondary">{artista.location}</Badge>
                  <Badge>{artista.genre}</Badge>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  {artista.name}
                </h2>

                <p className="text-md text-muted-foreground">
                  {artista.description}
                </p>
              </div>

            </div>
          </TabsContent>

          {/* ------- Lista de artistas ------- */}
          <TabsContent value="new-artist" className="w-full mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              {artistas.map((art) => (
                <Card 
                  key={art.id} 
                  className="p-0 overflow-hidden rounded-xl shadow-md dark:shadow-lg transition bg-card"
                >
                  {/* Imagen */}
                  <div className="h-48 w-full overflow-hidden rounded-t-lg">
                    <img
                      src={art.imageUrl}
                      alt={art.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Nombre */}
                  <CardHeader className="text-center text-foreground">
                    {art.name}
                  </CardHeader>

                  {/* Botón */}
                  <div className="flex justify-center pb-4">
                    <Button 
                      variant="outline" 
                      className="cursor-pointer"
                    >
                      Explorar
                    </Button>
                  </div>
                </Card>
              ))}

            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};
