export type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
};

export interface NewsItemProps {
  id: number;
  title: string;
  date: string;
  category: "news" | "notice";
  summary: string;
}
