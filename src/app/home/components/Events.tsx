import EventCard from "@/app/shared/card/EventCard";
import { eventData } from "@/lib/data/Events";
import { Button } from "@/lib/ui/button";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {eventData.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
      <div className="text-center mt-8 mb-12">
        <Link to="/events">
          <Button size="lg" className="text-white">
            View All Events
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Events;
