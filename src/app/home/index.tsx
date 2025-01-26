import AcademicLifePage from "./components/academic/AcademicLifePage";
import FooterPage from "./components/footer/FooterPage";
import IndexAboutPage from "./components/index-about/IndexAboutPage";
import IndexEventsPage from "./components/index-event/IndexEventsPage";
import IndexJoinPage from "./components/index-join/IndexJoinPage";
import IndexNewsPage from "./components/index-news/IndexNewsPage";
import PartnerDonorsPage from "./components/partners/PartnerDonorsPage";
import TestinomialsPage from "./components/testinomials/TestinomialsPage";

const HomePage = () => {
  return (
    <div className="home-Page pt-[50px] scrollbar-hide">
      {/* <HeroSection />
      <Events />
      <News /> */}
      <IndexJoinPage />
      <div className=" container mx-auto flex flex-wrap justify-center gap-5 py-9">
        <IndexNewsPage />
        <IndexEventsPage />
        <IndexAboutPage />
      </div>
      <TestinomialsPage />

      <AcademicLifePage />
      <PartnerDonorsPage />
      <FooterPage />
    </div>
  );
};

export default HomePage;
