import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export const EnviaTuMusica = () => {
  return (
    <div className="min-h-screen">

      {/* HEADER */}
      <section className="border-b border-border py-10 px-4">
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Envía tu Música
          </h1>
          <p className="text-lg text-muted-foreground">
            Comparte tu talento con la comunidad indie chilena. 
            Solo completa el formulario y nos pondremos en contacto.
          </p>
        </div>
      </section>

      {/* FORMULARIO */}
      <div className="max-w-3xl mx-auto px-4 pt-10">
        <Card className="p-6">
          <form className="space-y-4">

            <div className="flex flex-col gap-2">
              <label>Nombre del Artista / Banda</label>
              <input 
                className="bg-muted px-4 py-2 rounded-lg text-foreground" 
                type="text" 
                placeholder="Nombre del artista o banda"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input 
                className="bg-muted px-4 py-2 rounded-lg text-foreground" 
                type="email" 
                placeholder="tu@ejemplo.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Género Musical</label>
              <select className="bg-muted px-4 py-2 rounded-lg text-foreground">
                <option value="">Selecciona una opción</option>
                <option>Indie Rock</option>
                <option>Indie Pop</option>
                <option>Dream Pop</option>
                <option>Folk / Alternativo</option>
                <option>Otros</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label>Link de Spotify<span className="text-red-500"> *</span></label>
              <input 
                type="text" 
                className="bg-muted px-4 py-2 rounded-lg text-foreground" 
                placeholder="https://open.spotify.com/..."
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Cuéntanos sobre tu música</label>
              <textarea 
                className="bg-muted px-4 py-2 rounded-lg text-foreground" 
                placeholder="Describe tu estilo, influencias e historia"
                rows={4}
              />
            </div>

            <Button className="w-full">Enviar tu Música</Button>

          </form>
        </Card>

        {/* CARDS DE INFORMACIÓN */}
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-10">

          <Card className="p-5 hover:shadow-xl hover:scale-105 transition">
            <h1 className="text-accent text-3xl font-bold">24h</h1>
            <p className="text-foreground font-semibold mt-1">Revisión Rápida</p>
            <p className="text-sm text-muted-foreground mt-1">
              Revisamos todas las solicitudes en menos de 24 horas.
            </p>
          </Card>

          <Card className="p-5 hover:shadow-xl hover:scale-105 transition">
            <h1 className="text-accent text-3xl font-bold">∞</h1>
            <p className="text-foreground font-semibold mt-1">Alcance Global</p>
            <p className="text-sm text-muted-foreground mt-1">
              Tu música puede llegar a miles de oyentes alrededor del mundo.
            </p>
          </Card>

          <Card className="p-5 hover:shadow-xl hover:scale-105 transition">
            <h1 className="text-accent text-3xl font-bold">100%</h1>
            <p className="text-foreground font-semibold mt-1">Gratuito</p>
            <p className="text-sm text-muted-foreground mt-1">
              Enviar tu música es totalmente gratis.
            </p>
          </Card>

        </div>
      </div>

    </div>
  )
}
