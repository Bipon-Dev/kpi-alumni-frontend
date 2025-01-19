import useAuthStore from "@/lib/stores/authStore";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { FC } from "react";
import { Link } from "react-router-dom";
import RegistrationModal from "./RegistrationModal";

const FormSection = () => {
  const { loginWithGoogle, loginWithGitHub, loading, userInfo, logout } = useAuthStore();

  console.log("userInfo", userInfo);
  return (
    <form className="flex flex-col gap-4">
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        className=" bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <Input
        type="password"
        name="password"
        placeholder="Enter your password"
        className=" bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <Link to="" className="text-right text-white font-normal">
        Forgot password?
      </Link>
      <Button className="bg-white text-secondary text-lg py-1 hover:bg-secondary-100 transition-[background]">
        Submit
      </Button>
      <div className="flex items-center justify-center gap-2">
        <div className="w-1/4 h-0.5 bg-white bg-opacity-50"></div>
        <span className="text-white">or</span>
        <div className="w-1/4 h-0.5 bg-white bg-opacity-50"></div>
      </div>

      {/* Login With Google Button */}
      <Button onClick={loginWithGoogle} disabled={loading} className="bg-secondary-200 text-primary">
        <span>G</span>
        <span>Login with Google</span>
      </Button>
      {/* Login With Github Button */}
      <Button onClick={loginWithGitHub} disabled={loading} className="bg-secondary-200 text-primary">
        <span>G</span>
        <span>Login with Github</span>
      </Button>

      <button onClick={logout} type="button" className="bg-secondary-200 text-primary">
        Logout
      </button>

      {/* Signup Link */}
      <div className=" text-center !font-normal text-white ">
        Don't have an account?
        <Link to="/signup" className="font-semibold rounded-md py-2 text-blue-700 underline">
          {" "}
          Signup
        </Link>
      </div>
    </form>
  );
};

const LoginPage: FC = () => {
  const { isAuthenticated } = useAuthStore();
  // if (isAuthenticated) {
  //   window.location.href = "/";
  // }
  return (
    <div className="h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Login Container */}
      <div className="bg-secondary-700 shadow-lg rounded-lg p-8 w-[435px] relative">
        <header className="flex justify-center gap-10 items-center mb-16">
          <img src="/src/assets/images/kpi-alumni-logo.png" alt="Logo" className="w-12 h-12 " />
          <h1 className="text-[40px] font-semibold text-white">Login</h1>
        </header>
        <FormSection />
      </div>
      <RegistrationModal />
    </div>
  );
};

export default LoginPage;
