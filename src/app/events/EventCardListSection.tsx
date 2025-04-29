import eventBg from "@/assets/images/kpi-event-bg.webp";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { TEventAdmData } from "../manage/events/components/AdmEventTypes";
import { Building2, MapPin, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

const EventCardListBody: FC<{ data: any }> = ({ data }) => {
  return (
    <Link
      className="w-64 border h-fit p-4 rounded-lg shadow-lg space-y-2"
      to={`/events/${data?.id}/details`}
    >
      <div className="text-start font-medium text-xl line-clamp-1 overflow-hidden">
        {data?.title || "Khulna Polytechnic Institute Alumni Events"}
      </div>
      <div>
        <img
          src={data?.photoUrl || eventBg}
          alt="eventBg"
          width={100}
          height={100}
          sizes="100vw"
          className="w-full h-50 rounded-md"
        />
      </div>
      <div className="space-y-1">
        <div className="text-base text-nowrap flex items-center gap-1">
          <Building2 className="size-4" />
          <span className="font-semibold">{data?.organizer}</span>
        </div>
        <div className="text-sm text-nowrap flex items-center gap-1">
          <MapPin className="size-4" />
          <span className="font-semibold">{data?.location}</span>
        </div>
        <div className="text-xs text-nowrap flex items-center gap-1">
          <ScrollText className="size-4" />
          <span className="font-semibold">{data?.description}</span>
        </div>
      </div>
    </Link>
  );
};

const EventCardListSection = () => {
  const [eventData, setEventData] = useState<TEventAdmData>({
    events: [],
    eventStatus: [],
  });

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
    <div className="grid grid-cols-4 gap-4">
      {eventData?.events.map((event, index) => (
        <EventCardListBody key={index} data={event} />
      ))}
    </div>
  );
};
export default EventCardListSection;
