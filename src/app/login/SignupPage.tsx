import { ChangeEvent, useState } from "react";
import { Button } from "@/lib/ui/button";
import { Checkbox } from "@/lib/ui/checkbox";
import { Input } from "@/lib/ui/input";
import { Link } from "react-router-dom";
import useRegistrationStore from "@/lib/stores/registrationStore";

interface IFormData {
  FullName: string;
  Email: string;
  Password1: string;
  Password2: string;
  AcceptTc: boolean;
}

const SignupForm = () => {
  const { loading, regWithEmailPassword } = useRegistrationStore();
  const [formData, setFormData] = useState<IFormData>({
    FullName: "",
    Email: "",
    Password1: "",
    Password2: "",
    AcceptTc: false,
  });

  const handleChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    regWithEmailPassword(formData);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={formData.FullName}
        name="FullName"
        onChange={handleChange}
        placeholder="Full Name"
        className="bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <Input
        type="email"
        value={formData.Email}
        name="Email"
        onChange={handleChange}
        placeholder="Email"
        className="bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <Input
        type="password"
        value={formData.Password1}
        name="Password1"
        onChange={handleChange}
        placeholder="Password"
        className="bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <Input
        type="password"
        value={formData.Password2}
        name="Password2"
        onChange={handleChange}
        placeholder="Confirm Password "
        className="bg-white bg-opacity-15 border-gray-300 !text-white placeholder:text-white focus-visible:ring-0"
      />
      <div className="text-white text-sm flex items-center">
        <Checkbox
          id="tnc"
          className=""
          onChange={() => {
            setFormData((prev) => ({ ...prev, AcceptTc: !prev.AcceptTc }));
          }}
        />
        &nbsp;&nbsp;
        <label htmlFor="tnc" className="text-white-100">
          I agree to the terms and conditions
        </label>
      </div>
      <Button
        disabled={loading}
        type="submit"
        className="bg-white text-secondary text-base py-1 hover:bg-secondary-100 transition-[background]"
      >
        Signup
      </Button>
    </form>
  );
};

const SignupPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 relative overflow-hidden">
      {/* Floating Squares */}
      <ul className="absolute w-full h-full flex flex-wrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className="w-22 h-22 bg-white bg-opacity-15 rounded-md"
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `moveSquare ${Math.random() * 5 + 5}s infinite linear`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></li>
        ))}
      </ul>

      {/* Login Container */}
      <div className="bg-white w-104 bg-opacity-5 shadow-lg rounded-lg p-8 relative">
        <header className="flex justify-center gap-10 items-center mb-4">
          <img src="/src/assets/images/kpi-alumni-logo.png" alt="Logo" className="w-12 h-12" />
          <h1 className="text-[40px] font-semibold text-white">Signup</h1>
        </header>
        <SignupForm />

        <div className="flex items-center justify-center gap-2 my-2 mt-4">
          <div className="w-1/4 h-0.5 bg-white bg-opacity-50"></div>
          <span className="text-white">or</span>
          <div className="w-1/4 h-0.5 bg-white bg-opacity-50"></div>
        </div>
        <div className=" text-center !font-normal text-white ">
          You have an account?&nbsp;
          <Link to="/login" className="font-semibold rounded-md py-2 text-blue-700 underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
