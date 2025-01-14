import Events from "./components/Events";
import HeroSection from "./components/HeroSection";
import News from "./components/News";

const HomePage = () => {
  return (
    <div className="home-Page">
      <HeroSection />
      <Events />
      <News />
    </div>
  );
};

export default HomePage;
