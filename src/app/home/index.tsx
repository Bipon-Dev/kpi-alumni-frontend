import IndexAboutPage from "./components/index-about/IndexAboutPage";
import IndexEventsPage from "./components/index-event/IndexEventsPage";
import IndexJoinPage from "./components/index-join/IndexJoinPage";
import IndexNewsPage from "./components/index-news/IndexNewsPage";

const HomePage = () => {
  return (
    <div className="home-Page">
      {/* <HeroSection />
      <Events />
      <News /> */}
      <IndexJoinPage />
      <div className=" container mx-auto flex flex-wrap justify-center gap-5">
        <IndexNewsPage />
        <IndexEventsPage />
        <IndexAboutPage />
      </div>
    </div>
  );
};

export default HomePage;
