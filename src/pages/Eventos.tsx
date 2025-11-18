import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { eventos } from "@/data/eventos"

export const Eventos = () => {
  
  return (
    <section className="pt-20">
      <div className="w-full min-h-screen">
        <div className="flex flex-col w-full justify-center items-center gap-4 mb-10">
          <h1>EVENTOS</h1>
          
          <span>Entérate de todos los siguientes Eventos en IndiesChz</span>
        </div>

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
        
        

      </div>

    </section>
  )
}
