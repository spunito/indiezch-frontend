import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-provider";
import { Button } from '@/components/ui/button';

export const Navbar = () => {

  const { theme, setTheme } = useTheme()

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

          {/* Links */}
          <div className="flex gap-6 text-sm text-foreground">
            <Link to="/artistas" className="hover:text-emerald-400 transition-colors">Artistas</Link>
            <Link to="/categorias" className="hover:text-emerald-400 transition-colors">Categorias</Link>
            <Link to="/eventos" className="hover:text-emerald-400 transition-colors">Eventos</Link>
            <Link to="/contacto" className="hover:text-emerald-400 transition-colors">Contacto</Link>
          </div>

          {/* Toggle Dark Mode */}
          <div className="flex gap-5">
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
      </nav>
    </div>
  );
};
