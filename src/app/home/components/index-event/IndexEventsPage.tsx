import { Button } from "@/lib/ui/button";
import { FC } from "react";
import eventLogo from "@/assets/logo/logo.png";
const IndexEventsListComp: FC = () => {
  return (
    <div className="flex  gap-2 my-5 text-wrap">
      <div>
        <img src={eventLogo} alt="" className="!size-16" />
      </div>
      <div className="flex flex-col gap-1.5 w-[calc(100%-64px)]">
        <span className=" text-sm text-primary">
          Conservatory Exhibit: The garden of india a country and culture
          revealed
        </span>
        <span className=" text-primary-200 text-xs">
          Matthaei Botanical Gardens
        </span>
      </div>
    </div>
  );
};
const IndexEventsHead: FC = () => {
  return (
    <div className=" flex flex-col justify-between m-5">
      <span className="text-3xl font-medium underline">Events</span>
      <div>
        {[1, 2, 3, 4].map((item) => (
          <IndexEventsListComp key={item} />
        ))}
      </div>
      <Button variant="link" className="flex justify-start max-w-24 ">
        All Events
      </Button>
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
