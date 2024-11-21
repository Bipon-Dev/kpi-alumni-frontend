import { FC } from "react";
import { Link } from "react-router-dom";

const LoginPage: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-300 relative overflow-hidden">
      {/* Floating Squares */}
      <ul className="absolute w-full h-full flex flex-wrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <li
            key={i}
            className="w-22 h-22 bg-white bg-opacity-30 rounded-md"
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
      <div className="bg-white bg-opacity-5 shadow-lg rounded-lg p-8 w-[435px] relative">
        <header className="flex justify-center gap-10 items-center mb-16">
          <img
            src="/src/assets/images/kpi-alumni-logo.png"
            alt="Logo"
            className="w-12 h-12 "
          />
          <h1 className="text-[40px] font-semibold text-white">Login</h1>
        </header>
        <form className="flex flex-col gap-6">
          <input
            type="email"
            placeholder="Username"
            className="border bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="border bg-white outline-none bg-opacity-15 border-gray-300 rounded-md p-3 !text-white placeholder:text-white"
          />
          <Link to="" className=" text-center text-blue-700 font-medium">
            Forgot password?
          </Link>
          <button
            type="submit"
            className="bg-white text-2xl font-semibold rounded-md py-2 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          >
            Submit
          </button>
          <div className=" text-center !font-normal text-white ">
            Don't have an account?
            <Link
              to="/signup"
              className="font-semibold rounded-md py-2 text-blue-700 underline"
            >
              {" "}
              Signup
            </Link>
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

export default LoginPage;
