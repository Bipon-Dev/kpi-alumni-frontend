export type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  attendees: number;
  id: number;
  organizer: string;
  time: string;
};

export interface NewsItemProps {
  id: number;
  title: string;
  date: string;
  category: "news" | "notice";
  summary: string;
}
