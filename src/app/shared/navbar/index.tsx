import { logo } from "@/utils/icons";

const NavbarMenu = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo.mainLogo} alt="Face Search AI Logo" className="h-10 w-10" />
          <h1 className="ml-3 text-2xl font-bold text-gray-800">KPI Alumni</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-gray-700 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-700 hover:text-blue-500">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-700 hover:text-blue-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-500">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavbarMenu;
