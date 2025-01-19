import useAuthStore from "@/lib/stores/authStore";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import RegistrationModal from "./RegistrationModal";
import { toast } from "react-toastify";
import { getApiUrl } from "@/utils/env";
import axios from "axios";

const FormSection = () => {
  const { loginWithGoogle, loginWithGitHub, userInfo } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data }: { data: any } = await axios.post(`${getApiUrl()}/api/v1/auth/login`, formData);

      console.log(data);
      if (data.error !== 0) {
        toast.error(data.message);
        return;
      }

      localStorage.setItem("Authorization", data.data.token);
      window.location.href = "/manage";
      toast.success(data.message);
    } catch (ex: any) {
      toast.error(ex.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("userInfo", userInfo);
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        type="email"
        name="Email"
        value={formData.Email}
        onChange={handleChange}
        placeholder="Enter your Email"
        className=" bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <Input
        type="password"
        name="Password"
        value={formData.Password}
        onChange={handleChange}
        placeholder="Enter your Password"
        className=" bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <Link to="" className="text-right text-white font-normal">
        Forgot password?
      </Link>
      <Button
        disabled={loading}
        className="bg-white text-secondary text-lg py-1 hover:bg-secondary-100 transition-[background]"
      >
        Login
      </Button>
      <div className="flex items-center justify-center gap-2">
        <div className="w-1/4 h-0.5 bg-white bg-opacity-50"></div>
        <span className="text-white">or</span>
        <div className="w-1/4 h-0.5 bg-white bg-opacity-50"></div>
      </div>

      {/* Login With Google Button */}
      <Button onClick={loginWithGoogle} disabled={loading} className="bg-secondary-200 text-primary hidden">
        <span>G</span>
        <span>Login with Google</span>
      </Button>
      {/* Login With Github Button */}
      <Button onClick={loginWithGitHub} disabled={loading} className="bg-secondary-200 text-primary hidden">
        <span>G</span>
        <span>Login with Github</span>
      </Button>

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
  if (isAuthenticated) {
    window.location.href = "/";
  }
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
