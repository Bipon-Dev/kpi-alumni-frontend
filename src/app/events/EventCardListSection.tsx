import eventBg from "@/assets/images/kpi-event-bg.webp";
import axios from "axios";
import { FC, useEffect, useState } from "react";
const EventCardListBody: FC<{ data: any }> = ({ data }) => {
  return (
    <div className=" w-64 border h-fit p-4 rounded-lg shadow-lg">
      <div className=" text-start font-medium text-xl mb-4 line-clamp-1 overflow-hidden">
        {data?.title || "Khulna Polytechnic Institute Alumni Events"}
      </div>
      <div>
        <img
          src={data?.photoUrl || eventBg}
          alt="eventBg"
          className=" rounded-md"
        />
      </div>
      <div className="text-xs">
        Organizer : <span className="font-semibold">{data?.organizer}</span>
      </div>
      <div className="text-xs">
        Address: <span className="font-semibold">{data?.location}</span>
      </div>
      <div className="text-xs">
        <span className="font-semibold">{data?.description}</span>
      </div>
    </div>
  );
};

const EventCardListSection = () => {
  const [eventData, setEventData] = useState<any[]>([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/event");
        setEventData(response.data.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, []);
  return (
    <div className="flex flex-wrap justify-between gap-8 w-full">
      {eventData.map((event, index) => (
        <EventCardListBody key={index} data={event} />
      ))}
    </div>
  );
};
export default EventCardListSection;
