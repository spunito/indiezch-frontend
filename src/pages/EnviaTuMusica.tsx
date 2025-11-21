import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"


export const EnviaTuMusica = () => {
  return (
    <div className="min-h-screen">

        <section className="border-b border-border pt-20 pb-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Envia tu Musica</h1>
                <p className="text-lg text-muted-foreground">
                    Comparte tu talento con la comunidad indie chilena. 
                    Solo completá el formulario y nos pondremos en contacto.
                </p>
            </div>
        </section>

        <div className="max-w-3xl mx-auto pt-10">
            <Card className="p-6">

                <form className="space-y-4">

                    <div className="flex flex-col gap-3">
                        <label>Nombre del Arista / Banda</label>
                        <input className="bg-muted px-4 py-2 rounded-lg text-foreground" type="text" placeholder="..." />
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <label>Email</label>
                        <input className="bg-muted px-4 py-2 rounded-lg text-foreground" type="text" placeholder="tu@ejemplo.com" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label htmlFor="">Genero Musical</label>
                        <select className="bg-muted px-4 py-2 rounded-lg text-foreground">
                            <option value="1">Selecciona una opción</option>
                            <option value="2">Indie Rock</option>
                            <option value="3">Indie Pop</option>
                            <option value="4">Dream Pop</option>
                            <option value="5">Otros</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-3">
                        <label>Link de Spotify<span> °</span></label>
                        <input type="text" className="bg-muted px-4 py-2 rounded-lg text-foreground" placeholder="tu@ejemplo.com" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label>Cuéntanos sobre tu musica</label>
                        <textarea className="bg-muted px-4 py-2 rounded-lg text-foreground" placeholder="Describe tu estilo, influencias e historias como artista" />
                    </div>

                    <Button className="w-full">Enviar Tu musica</Button>

                    
                </form>    
            
            </Card>
            
            <div className="pt-10 grid grid-cols-3 gap-8">
                <Card className="">
                    <div className="flex mx-auto">
                        <h1 className="text-accent text-2xl font-bold mb-2">24h</h1>
                    </div>
                </Card>

                <Card className="">
                    <h1 className="text-accent text-2xl font-bold mb-2">100%</h1>
                </Card>

                <Card className="">
                    <h1 className="text-accent text-2xl font-bold mb-2">24h</h1>
                </Card>

            </div>

            
        </div>



    </div>
  )
}
