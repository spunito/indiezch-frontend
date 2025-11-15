import { Button } from "../ui/button"

export const InicioComponente = () => {
  return (
    <section className="w-full min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex items-center justify-center pt-20">
      <div className="flex flex-col w-full mx-auto max-w-xl items-center gap-8 px-4">

        <h1 className="text-3xl font-bold text-foreground mb-6 text-center text-balance">
          Descubre la <span className="text-green-800">escena indie</span> chilena
        </h1>

        <p className="text-xl text-center max-w-3xl">
          La plataforma definitiva para visibilizar y promocionar bandas y artistas emergentes.
          Desde nuevos talentos hasta agrupaciones consolidadas buscando mayor difusión.
        </p>

        <div className="flex gap-4">
          <Button className="cursor-pointer bg-green-900 hover:bg-green-800">Explorar Artistas</Button>
          <Button>Envía tu Música</Button>
        </div>

      </div>
    </section>
  )
}
