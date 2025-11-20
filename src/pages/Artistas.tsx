import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { artistas } from "@/data/artistas"
import { useState } from 'react';
import { Link } from 'react-router';

export const Artistas = () => {
  const [buscador, setBuscador] = useState("Patio Solar")
  
  return (
      
      <div className="min-h-screen ">
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Artistas</h1>
          <p className="text-lg text-muted-foreground">Variedad de los artistas que te gustan</p>
        </div>
      </section>
      
      <div className='flex flex-col items-center gap-6 mb-10 '>
        <div className="w-full max-w-2xl px-4 p-6">
          <Input 
            placeholder="Buscar Artistas"
            className=""
            value={buscador}
            onChange={(e) => setBuscador(e.target.value)}

          />
        </div>
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {artistas.map((art) => (
              <Link to={`/artistas/${art.id}`} key={art.id}>
              <Card className="pt-0 pb-0">
                <div className="flex">

                  {/* Imagen con tamaño fijo (ESTO era lo importante) */}
                  <div className="h-48 w-48 overflow-hidden">
                    <img 
                      src={art.imageUrl} 
                      alt={art.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Contenido del Card */}
                  <div className="flex flex-col flex-1">
                    
                    <div className="flex gap-2 px-6 mt-2">
                      <Badge variant="secondary">{art.location}</Badge>
                      <Badge>{art.genre}</Badge>
                    </div>

                    <CardHeader className="font-bold">{art.name}</CardHeader>
                    <CardContent>{art.description}</CardContent>

                    {/* Botón centrado */}
                    <div className="mx-auto mt-auto pb-2">
                      <Button 
                        variant="outline" 
                        className="cursor-pointer bg-green-900 hover:bg-green-800 text-white"
                      >
                        Explorar
                      </Button>                
                    </div> 
                  </div>

                </div>
              </Card>   
              </Link>    
          ))}
        </div>
      </div>
    </div>
  )
}
