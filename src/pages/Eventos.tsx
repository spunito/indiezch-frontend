import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { eventos } from "@/data/eventos"

export const Eventos = () => {
  
  return (
      <section className="w-full min-h-screen">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Eventos</h1>
          <p className="text-lg text-muted-foreground">Entérate de todos los siguientes Eventos en IndiesChz</p>
        </div>
      </section>

        <div className="max-w-7xl mx-auto h-96 bg-zinc-800 rounded-lg flex justify-center items-center">

        {
          eventos.map((e) => 
          <Card key={e.id} className="w-60 h-80 bg-zinc-900 rounded-lg m-4 p-4 flex flex-col justify-between">
              <div className="w-full h-40 bg-zinc-700 rounded-lg mb-4"> 
                <img src={e.image} alt={e.name} className="w-full h-full object-cover rounded-lg"/>
              </div>
              <div className="flex flex-col gap-2">
                <CardContent className="text-lg font-semibold text-white">{e.name}</CardContent>
                <CardContent className="text-white">{e.lugar}</CardContent>
                <CardDescription className="text-sm text-zinc-400">{e.date}</CardDescription>
              </div>
          </Card>
                
              
        )}


        </div>
      </section>
  )
}
