import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Moon, Sun, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-provider";
import { Button } from '@/components/ui/button';
import { useState } from "react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pb-16">
      <nav className="fixed top-0 left-0 z-50 w-full 
        bg-background/70 backdrop-blur-md shadow-xl 
        border-b border-border">

        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://github.com/spunito.png"
                alt="Logo"
                className="object-cover"
              />
            </Avatar>
            <span className="text-lg font-semibold text-foreground">
              IndiezCh
            </span>
          </Link>

          {/* Links desktop */}
          <div className="hidden md:flex gap-6 text-sm text-foreground">
            <Link to="/artistas" className="hover:text-emerald-400 transition-colors">Artistas</Link>
            <Link to="/categorias" className="hover:text-emerald-400 transition-colors">Categorias</Link>
            <Link to="/eventos" className="hover:text-emerald-400 transition-colors">Eventos</Link>
            <Link to="/contacto" className="hover:text-emerald-400 transition-colors">Contacto</Link>
          </div>

          {/* Hamburguesa móvil */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Button asChild>
              <Link to="/envia-tu-musica">Envía tu música</Link>
            </Button>
          </div>
        </div>

        {/* MENÚ MÓVIL (fuera del flex principal) */}
        {isOpen && (
          <div className="md:hidden px-6 py-4 flex flex-col gap-4 bg-background border-t border-border">
            <Link to="/artistas" className="hover:text-emerald-400 transition-colors">Artistas</Link>
            <Link to="/categorias" className="hover:text-emerald-400 transition-colors">Categorias</Link>
            <Link to="/eventos" className="hover:text-emerald-400 transition-colors">Eventos</Link>
            <Link to="/contacto" className="hover:text-emerald-400 transition-colors">Contacto</Link>
            <Link to="/envia-tu-musica">Envía tu música</Link>
            

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 w-10 rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              
            </div>
          </div>
        )}

      </nav>
    </div>
  );
};
