import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  Share2Icon,
  UsersIcon,
  ArrowLeftIcon,
  ExternalLinkIcon,
} from "lucide-react";

import { eventData } from "@/lib/data/Events";
import { EventCardProps } from "@/lib/types/data";
import { Button } from "@/lib/ui/button";
import { DialogHeader, DialogTrigger } from "@/lib/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/lib/ui/input";

const SingleEvent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventCardProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      try {
        const foundEvent = eventData.find((event) => event.id === Number(id));
        if (foundEvent) {
          setEvent(foundEvent);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event?.title,
          text: event?.description,
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      toast({
        title: "Sharing not supported",
        description:
          "Your browser doesn't support native sharing. You can copy the URL manually.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">
          Loading event details...
        </p>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Event not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4 md:py-8 py-6">
        <Button variant="ghost" className="mb-4" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Events
        </Button>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {event.title}
              </h1>
              <div className="flex items-center text-white/90">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>{event.date}</span>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 md:p-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center text-center">
                <ClockIcon className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">{event.time}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <MapPinIcon className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">{event.location}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <UsersIcon className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">
                  {event.attendees} Attendees
                </span>
              </div>
              <div
                className="flex flex-col items-center text-center cursor-pointer"
                onClick={handleShare}
              >
                <Share2Icon className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium">Share Event</span>
              </div>
            </div>
            <p className="text-muted-foreground sm:text-base text-sm mb-8 px-0 sm:px-4">
              {event.description}
            </p>
            <div className="flex flex-col  sm:flex-row justify-between ">
              <div className="mb-4 sm:mb-0 px-0 md:px-4">
                <h2 className="text-lg font-semibold mb-1">Organized by</h2>
                <p className="text-muted-foreground">{event.organizer}</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full sm:w-auto text-white">
                    Register Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Register for {event.title}</DialogTitle>
                    <DialogDescription>
                      Fill in your details to register for this event.
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                      e.preventDefault();
                      toast({
                        title: "Registration Successful",
                        description:
                          "You have successfully registered for the event.",
                      });
                    }}
                    className="space-y-4"
                  >
                    <Input placeholder="Full Name" required />
                    <Input type="email" placeholder="Email" required />
                    <Button type="submit" className="w-full">
                      Complete Registration
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              event.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            View on Google Maps <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
