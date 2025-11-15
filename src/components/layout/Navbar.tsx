import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 ">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://github.com/spunito.png"
              alt="Logo"
              className="object-cover"
            />
          </Avatar>
          <span className="text-lg font-semibold">IndiezCh</span>
        </a>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-emerald-400 transition-colors">Artistas</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Categorias</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Eventos</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contacto</a>
        </div>
      </div>
    </nav>
  );
};