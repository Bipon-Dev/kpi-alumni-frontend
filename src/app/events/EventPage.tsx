import EventCardListSection from "./EventCardListSection";

const EventPage = () => {
  return (
    <div className="home-Page pt-[70px] h-screen scrollbar-hide bg-gray-100">
      <div className="text-center text-4xl  font-bold my-10 text-primary flex justify-center">
        <h1 className="border-b-4 pb-4 border-primary">
          Khulna Polytechnic Institute Alumni Events
        </h1>
      </div>

      <div className="flex flex-wrap justify-center h-full gap-8">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <EventCardListSection key={index} />
          ))}
      </div>
    </div>
  );
};

export default EventPage;
