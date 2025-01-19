import { navItems } from "@/lib/data/Navitem";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import logo from "@/assets/logo/logo.png";
const NavbarMenu = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Face Search AI Logo" className="h-10 w-10" />
          <h1 className=" md:text-2xl sm:text-xl text-lg font-bold text-gray-800">
            KPI Alumni
          </h1>
        </div>
        <nav>
          <ul className="lg:flex gap-6 hidden">
            {navItems?.map((nav) => (
              <NavLink item={nav} isChild={false} />
            ))}
          </ul>
          <div className="lg:hidden ">
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavbarMenu;
