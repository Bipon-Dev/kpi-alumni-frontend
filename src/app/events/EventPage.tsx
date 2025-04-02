// import AdmEventProvider from "../manage/events/components/context/AdmEventProvider";
// import EventPageHeaderSection from "./components/EventPageHeaderSection";
import eventBg from "@/assets/images/kpi-event-bg.webp";

const EventPageHeader = () => {
  return (
    <div className=" w-64 border h-100 p-4 rounded-lg shadow-lg">
      <div className=" text-center font-medium text-xl pb-4">hello</div>
      <div>
        <img src={eventBg} alt="eventBg" className=" rounded-md" />
      </div>
      <div className=" text-ellipsis overflow-hidden line-clamp-4 text-sm pt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
        reiciendis sint cumque, cum voluptas velit ipsum? Dignissimos,
        necessitatibus quisquam modi autem qui nesciunt ipsam reiciendis,
        recusandae sunt, delectus labore sint.
      </div>
    </div>
  );
};

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

      <div className="flex justify-center h-full gap-8">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <EventPageHeader key={index} />
          ))}
      </div>
    </div>
  );
};

export default EventPage;
