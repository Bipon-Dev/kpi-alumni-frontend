import { Link } from "react-router-dom";

// images
import authImage from "@/assets/images/kpi-alumni-logo.png";

interface NonAuthLayoutWrapperProps {
  children: any;
}

const NonAuthLayoutWrapper = (props: NonAuthLayoutWrapperProps) => {
  return (
    <div className="bg-gray-900 min-h-screen flex">
      <div className="w-full lg:w-1/3 bg-gray-800 flex flex-col p-6 lg:p-10">
        <div className="text-gray-400">
          <h3>
            <Link to="/" className="text-white flex items-center">
              <i className="bx bxs-message-alt-detail text-white text-2xl mr-2"></i>
              Doot
            </Link>
          </h3>
          <p className="text-lg mt-2">Responsive Bootstrap 5 Chat App</p>
        </div>
        <div className="mt-auto">
          <img src={authImage} alt="auth" className="w-full" />
        </div>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col bg-gray-100">
        <div className="flex flex-col h-full px-6 py-6">
          {props.children}

          <div className="mt-auto">
            <div className="text-center text-gray-500 py-4">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Doot. Crafted with{" "}
                <i className="mdi mdi-heart text-red-500"></i> by Themesbrand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonAuthLayoutWrapper;
