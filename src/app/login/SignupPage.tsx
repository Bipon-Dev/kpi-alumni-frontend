import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const options = [
    { value: "1 ", label: "Select your department " },
    { value: "2", label: "Civil" },
    { value: "3", label: "Computer" },
    { value: "4", label: "Power " },
    { value: "5", label: "Mechanical " },
    { value: "6", label: "Electronics " },
    { value: "7", label: "Electrical " },
  ];

  const [selectedOption, setSelectedOption] = useState<string>("option1");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
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
      <div className="bg-white bg-opacity-5 shadow-lg rounded-lg p-8 w-auto relative">
        <header className="flex justify-center gap-10 items-center mb-16">
          <img
            src="/src/assets/images/kpi-alumni-logo.png"
            alt="Logo"
            className="w-12 h-12"
          />
          <h1 className="text-[40px] font-semibold text-white">Signup</h1>
        </header>
        <form className="flex  gap-6 ">
          <div className="w-full flex flex-col gap-6 pr-6 mb-30 border-r">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First Name"
                className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
              />
            </div>
            <input
              type="number"
              placeholder="Phone Number"
              className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
            />{" "}
            <input
              type="text"
              placeholder="Date of Birth"
              className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
            />{" "}
            <div className="flex gap-3">
              {" "}
              <input
                type="password"
                placeholder="Password"
                className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
              />
              <input
                type="password"
                placeholder="Confirm Password "
                className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
              />
            </div>
          </div>
          <div className=" w-full flex flex-col gap-6">
            <input
              type="text"
              placeholder="Session "
              className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
            />
            <select
              value={selectedOption}
              onChange={handleChange}
              className="form-select text-white outline-none h-10  bg-white bg-opacity-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="text-black"
                >
                  {option.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Passing Year"
              className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
            />
            <input
              type="text"
              placeholder="Current Position"
              className="border-b bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
            />
            <div className="text-white text-sx mt-10">
              <input type="checkbox" className="outline-none bg-transparent" />{" "}
              I do accept the Terms and Conditions of your site.
            </div>
            <button
              type="submit"
              className="bg-white text-2xl font-semibold rounded-md py-2 text-blue-500 transition"
            >
              Signup
            </button>
            <div className=" text-center !font-normal text-white ">
              You have an account?
              <Link
                to="/login"
                className="font-semibold rounded-md py-2 text-blue-700 underline"
              >
                {" "}
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>

      <style>{`
    @keyframes moveSquare {
      0% {
        transform: translate(0, 0);
      }
      25% {
        transform: translate(
          ${Math.random() * 100}%,
          ${Math.random() * 100}%
        );
      }
      50% {
        transform: translate(
          ${Math.random() * 100}%,
          ${Math.random() * 100}%
        );
      }
      75% {
        transform: translate(
          ${Math.random() * 100}%,
          ${Math.random() * 100}%
        );
      }
      100% {
        transform: translate(0, 0);
      }
    }
  `}</style>
    </div>
  );
};

export default SignupPage;
