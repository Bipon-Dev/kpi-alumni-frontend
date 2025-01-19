import { NavItem } from "@/lib/data/Navitem";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({
  item,
  isChild = false,
}: {
  item: NavItem;
  isChild?: boolean;
}) => {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`${
        isChild ? "pl-8" : ""
      } flex items-center px-4 py-2 text-sm font-medium rounded-md ${
        isActive
          ? "bg-primary text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      {item.icon && (
        <item.icon className={`${isChild ? "hidden" : "mr-3 h-5 w-5"}`} />
      )}
      {item.label}
    </Link>
  );
};

export default NavLink;
