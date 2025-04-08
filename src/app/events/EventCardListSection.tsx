import eventBg from "@/assets/images/kpi-event-bg.webp";

const EventCardListSection = () => {
  return (
    <div className=" w-64 border h-100 p-4 rounded-lg shadow-lg">
      <div className=" text-start font-medium text-xl mb-4 line-clamp-1 overflow-hidden">
        Khulna Polytechnic Institute Alumni Events
      </div>
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
export default EventCardListSection;
