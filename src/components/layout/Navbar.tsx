import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { NavigationMenu, NavigationMenuList } from "@radix-ui/react-navigation-menu";

export const Navbar = () => {
  return (
    <NavigationMenu className="fixed top-1 left-1/2 -translate-x-1/2 mx-auto z-50 rounded-xl w-7xl  bg-[#1E1E1E] opacity-90 shadow-md">
      <NavigationMenuList className="flex items-center justify-between p-4 text-white">
        

        <a href="/" className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage
              className="w-10 h-10 rounded-full object-cover"
              src="https://github.com/spunito.png"
              alt="Logo"
            />
          </Avatar>
          <span className="text-xl font-semibold">IndiezCh</span>
        </a>

        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

      </NavigationMenuList>
    </NavigationMenu>
  );
};
