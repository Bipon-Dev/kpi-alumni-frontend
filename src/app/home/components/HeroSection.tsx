import { Button } from "@/lib/ui/button";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="/src/assets/images/banner.jpg"
          alt="Khulna Polytechnic Institute Campus"
          className="filter brightness-75 w-full md:object-cover bg-contain h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B3168]/80 via-[#1B3168]/70 to-[#1B3168]/80">
          <div className="container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                KPI Alumni Association
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl drop-shadow-md">
              Stay connected with your roots and the people who share your
              journey. Join our alumni community and be part of a tradition of
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={"/join"}>
                <Button
                  size="lg"
                  className="bg-[#1B3168] hover:bg-[#284282] text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-white/10"
                >
                  Join Alumni Network
                </Button>
              </Link>
              <Link to={"/events"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white hover:bg-white/90 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 border-2"
                >
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#1B3168]/90 backdrop-blur-sm py-4 px-4 border-t-2 border-white/80">
        <p className="text-white text-center text-sm md:text-base font-semibold">
          Established 1961 | Empowering Students for Over 60 Years
        </p>
      </div>
    </>
  );
};

export default HeroSection;
