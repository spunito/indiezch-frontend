import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categoriasArtistasIndies = [
  { nombre: 'Rock Alternativo', descripcion: 'Explora las mejores bandas de rock alternativo indie.' },
  { nombre: 'Pop Indie', descripcion: 'Descubre los éxitos más recientes del pop indie.' },
  { nombre: 'Folk Indie', descripcion: 'Sumérgete en las melodías acústicas del folk indie.' },
  { nombre: 'Electrónica Indie', descripcion: 'Vibra con los ritmos innovadores de la electrónica indie.' },
  { nombre: 'Hip Hop Indie', descripcion: 'Conoce a los artistas emergentes del hip hop indie.' },
  { nombre: 'XD', descripcion: 'Conoce a los artistas emergentes del hip hop indie.' },
];

export const Categorias = () => {
  return (
    <div className='min-h-screen'>

      <section className="bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Categorias</h1>
          <p className="text-lg text-muted-foreground">Variedad de los artistas que te gustan</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto pt-5">

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">


          {categoriasArtistasIndies.map((c,i) => (

            <Card key={i} className="flex flex-col p-0">
              <div className="h-48 w-full shadow-lg">
                <img src="https://images.portaldisc.com/l/discos/430/18016.jpg?t=1763735660" 
                className="w-full h-full object-cover" alt="" />
              </div>
              <div>
                

                <CardHeader className="text-xl font-bold"> {c.nombre}</CardHeader>
                <CardContent>{c.descripcion}</CardContent>

                
              </div>

            </Card>
          ))}






        </div>


      </div>

    </div>
  )
}
