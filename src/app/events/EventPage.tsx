import AdmEventProvider from "../manage/events/components/context/AdmEventProvider";
import EventPageHeaderSection from "./components/EventPageHeaderSection";

const EventPage = () => {
  return (
    // <AdmEventProvider>
    //     <EventPageHeaderSection />
    // </AdmEventProvider>
    <div className="home-Page pt-[70px] h-screen scrollbar-hide bg-gray-100">
      <div className="text-center text-4xl  font-bold my-10 text-primary flex justify-center">
        <h1 className="border-b-4 pb-4 border-primary">
          Khulna Polytechnic Institute Alumni Events
        </h1>
      </div>
    </div>
  );
};

export default EventPage;
