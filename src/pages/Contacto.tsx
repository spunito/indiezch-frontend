import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare } from "lucide-react"

export const Contacto = () => {
  return (
    <div className="min-h-screen">

      {/* Encabezado */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Contacto</h1>
          <p className="text-lg text-muted-foreground">
            Ponte en contacto con nosotros
          </p>
        </div>
      </section>
      
      {/* Contenido */}
      <div className="max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-3">

          {/* LEFT SECTION */}
          <div className="pl-5">
            <h1 className="text-3xl font-bold mb-5">Estamos aquí para ayudarte</h1>

            <div className="space-y-6">
              
              {/* Email */}
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-600 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>

                  <div>
                    <h1 className="font-bold text-lg">Email</h1>
                    <p className="text-muted-foreground">contacto@gmail.com</p>
                    <p className="text-muted-foreground">info@indiez.ch</p>
                  </div>
                </div>
              </Card>

              {/* Redes sociales */}
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-600 rounded-lg">
                    <MessageSquare className="text-accent" size={24} />
                  </div>

                  <div>
                    <h1 className="font-bold text-lg">Redes Sociales</h1>
                    <p className="text-muted-foreground">@Indiezch</p>
                  </div>
                </div>
              </Card>

            </div>
          </div>

          {/* RIGHT — FORM */}
          <div>
            <Card className="p-6">
              <h2 className="font-bold text-xl mb-6">Envíanos tu Mensaje</h2>

              <form className="space-y-4">

                {/* Nombre */}
                <div className="flex flex-col gap-2">
                  <label>Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="bg-muted px-4 py-2 rounded-lg text-foreground"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="bg-muted px-4 py-2 rounded-lg text-foreground"
                  />
                </div>

                {/* Asunto */}
                <div className="flex flex-col gap-2">
                  <label>Asunto</label>
                  <select className="bg-muted px-4 py-2 rounded-lg text-foreground">
                    <option>Selecciona un asunto</option>
                    <option>Consulta general</option>
                    <option>Alianzas y colaboraciones</option>
                    <option>Soporte técnico</option>
                    <option>Sugerencias de mejoras</option>
                    <option>Otro</option>
                  </select>
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-2">
                  <label>Mensaje</label>
                  <textarea
                    placeholder="Cuéntanos tu mensaje..."
                    className="bg-muted px-4 py-2 rounded-lg text-foreground"
                    rows={4}
                  />
                </div>

                {/* Submit */}
                <Button size="lg" className="w-full">
                  Enviar Mensaje
                </Button>

              </form>
            </Card>
          </div>

        </div>
      </div>

    </div>
  )
}
