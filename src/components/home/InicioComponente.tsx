import { Button } from "../ui/button"

export const InicioComponente = () => {
  return (
    <section
      className="
        w-full min-h-[70vh] 
        bg-background 
        text-foreground
        flex items-center justify-center
        bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
        dark:bg-[radial-gradient(#3a3a3a_1px,transparent_1px)]
        [background-size:16px_16px]
      "
    >
      <div className="flex flex-col w-full mx-auto max-w-xl items-center gap-8 px-4">

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center text-balance">
          Descubre la{" "}
          <span className="text-green-600 dark:text-green-400">
            escena indie
          </span>{" "}
          chilena
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center text-balance">
          La plataforma definitiva para visibilizar y promocionar bandas y artistas emergentes.
          Desde nuevos talentos hasta agrupaciones consolidadas buscando mayor difusión.
        </p>

        <div className="flex gap-4">
          <Button className="cursor-pointer bg-green-900 hover:bg-green-800 text-white">
            Explorar Artistas
          </Button>

          <Button variant="outline" className="cursor-pointer">
            Envía tu Música
          </Button>
        </div>

      </div>
    </section>
  )
}
