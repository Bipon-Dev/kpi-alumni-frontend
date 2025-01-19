import { Button } from "@/lib/ui/button";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import { GiHamburgerMenu } from "react-icons/gi";
//import styles 👇
import "react-modern-drawer/dist/index.css";
import { navItems } from "@/lib/data/Navitem";
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Button className="text-white px-3" onClick={toggleDrawer}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="flex flex-col ">
          {navItems?.map((nav) => (
            <Link
              onClick={toggleDrawer}
              to={nav.path}
              className="p-3 hover:bg-blue-700 hover:text-white"
            >
              {nav.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNav;
