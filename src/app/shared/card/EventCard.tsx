import { EventCardProps } from "@/lib/types/data";
import { Button } from "@/lib/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/ui/card";
import { CalendarIcon, MapPinIcon } from "lucide-react";

const EventCard = ({
  title,
  date,
  location,
  description,
  imageUrl,
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-auto">
        <img src={imageUrl} alt={title} />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <MapPinIcon className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent> */}
      <CardFooter>
        <Button className="text-white">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
