import { navItems } from "@/lib/data/Navitem";
import NavLink from "./NavLink";
import MobileNav from "./MobileNav";
import logo from "@/assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const NavbarMenu = () => {
  return (
    <header className="bg-white shadow-md fixed w-full h-[60px]">
      <div className="container mx-auto flex items-center justify-between p-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Face Search AI Logo" className="h-10 w-10" />
          <h1 className=" md:text-2xl sm:text-xl text-lg font-bold text-gray-800">
            KPI Alumni
          </h1>
        </Link>
        <nav>
          <ul className="lg:flex gap-2 hidden">
            {navItems?.map((nav) => (
              <NavLink item={nav} isChild={false} />
            ))}

            <Link to="/login" className="ml-8 px-2 py-2 rounded-full border">
              <FaUser />
            </Link>
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
