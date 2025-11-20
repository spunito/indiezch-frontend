import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare , } from "lucide-react"


export const Contacto = () => {
  return (
    <div className='min-h-screen'>

      <section className="bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Contacto</h1>
          <p className="text-lg text-muted-foreground">Ponte en contacto con nosotros</p>
        </div>
      </section>
        
      <div className="max-w-7xl mx-auto py-6">
        <div className='grid grid-cols-1 md:grid-cols-2 p-3 gap-12'>
          {/* Vista izquierda */}
          <div className='pl-5'>
            <h1 className='text-3xl font-bold mb-5'>Estamos aquí para ayudarte</h1>
            <div className="space-y-6">
              {/* Email */}

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-600 rounded-lg transition-colors">
                    <Mail className="text-primary " size={24} />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-lg">Email</h1>
                    <p>contacto@gmail.com</p>
                    <p>info@indiez.ch</p>
                  </div>
                </div>
              </Card>

              {/* Redes Sociales */}
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-600 rounded-lg transition-colors">
                    <MessageSquare className="text-accent" size={24} />
                  </div>
                  <div className="">
                    <h1 className="font-bold text-lg">Email</h1>
                    <p>@Indiezch</p> 
                  </div>
                </div>
              </Card>
            </div>
          </div>
          {/* Vista derecha / Input */}
          <div className=''>
            <Card className="p-6">
              <h2 className="font-bold text-xl">Envianos tu Mensaje</h2>
              
              <div className="">
                <form className="space-y-4">             
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="">Nombre</label>
                    <input 
                      type="text" 
                      placeholder="Tu nombre" 
                      className="bg-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Email</label>
                    <input 
                      type="email" 
                      placeholder="Tu email" 
                      className="bg-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Asunto</label>
                    <select className="bg-gray-300 rounded-lg px-4 py-2">
                      <option>Selecciona un asunto</option>
                      <option>Consulta general</option>
                      <option>Alianzas y colaboraciones</option>
                      <option>Soporte técnico</option>
                      <option>Sugerencias de mejoras</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="">Email</label>
                    <textarea 
                       
                      placeholder="Cuéntanos tu mensaje..." 
                      className="bg-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                  <Button size="lg" className="w-full">Enviar Mensaje</Button>
                </form>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}
