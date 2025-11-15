import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Github, Twitter, Instagram, SproutIcon as Spotify } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-green-900 py-10">

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex flex-wrap max-w-7xl mx-auto justify-center items-start gap-10 px-6 text-white">

        {/* LOGO + INFO */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-xs">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://avatars.githubusercontent.com/u/83663289?s=48&v=4" />
            </Avatar>
            <p className="font-bold text-2xl">IndiezCh</p>
          </div>

          <p className="text-sm opacity-90 leading-relaxed">
            Visibilizando la escena indie chilena desde 2024.
          </p>
        </div>

        {/* SECCIÓN RECURSOS 1 */}
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-lg font-semibold mb-3">Recursos</h1>
          <ul className="space-y-1 opacity-90">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Artistas</a></li>
          </ul>
        </div>

        {/* SECCIÓN RECURSOS 2 */}
        <div className="flex flex-col text-center sm:text-left">
          <h1 className="text-lg font-semibold mb-3">Comunidad</h1>
          <ul className="space-y-1 opacity-90">
            <li><a href="#" className="hover:underline">Eventos</a></li>
            <li><a href="#" className="hover:underline">Categorías</a></li>
          </ul>
        </div>

        {/* REDES SOCIALES */}
        <div className="flex flex-col text-center sm:text-left">
          <h4 className="font-semibold mb-3">Síguenos</h4>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a href="#" className="hover:opacity-80 transition-opacity"><Instagram size={22} /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><Twitter size={22} /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><Spotify size={22} /></a>
            <a href="#" className="hover:opacity-80 transition-opacity"><Github size={22} /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-10 pt-6">
        <p className="text-sm opacity-80 text-center text-white">
          © 2025 IndiezCh. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
};
