import { FC, useEffect, useState } from "react";
import eventLogo from "@/assets/logo/logo.png";
import axios from "axios";

const IndexEventsListComp: FC<{ data: any }> = ({ data }) => {
  return (
    <div className="flex  gap-2 my-5 text-wrap">
      <div>
        <img src={eventLogo} alt="" className="!size-16" />
      </div>
      <div className="flex flex-col gap-1.5 w-[calc(100%-64px)]">
        <span className=" text-sm text-primary">{data.title}</span>
        <span className=" text-primary-200 text-xs line-clamp-2">
          {data.description}
        </span>
      </div>
    </div>
  );
};
const IndexEventsHead: FC = () => {
  const [eventData, setEventData] = useState<any[]>([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/event");
        setEventData(response.data.data.events);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, []);

  return (
    <div className=" flex flex-col justify-between m-5">
      <span className="text-2xl font-normal underline">Events</span>
      <div>
        {eventData.slice(0, 3).map((event) => (
          <IndexEventsListComp key={event.id} data={event} />
        ))}
      </div>
      <a href="/events" className="flex justify-start max-w-24 border-b ">
        All Events
      </a>
    </div>
  );
};
const IndexEventsPage: FC = () => {
  return (
    <div className="w-92">
      <IndexEventsHead />
    </div>
  );
};

export default IndexEventsPage;
