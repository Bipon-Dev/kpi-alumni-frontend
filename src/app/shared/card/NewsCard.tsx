import { NewsItemProps } from "@/lib/types/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/ui/card";
import { Badge, CalendarIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NewsCard = ({ id, title, date, category, summary }: NewsItemProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge>{category === "news" ? "News" : "Notice"}</Badge>
        </div>
        <CardDescription className="flex items-center mt-2">
          <CalendarIcon className="h-4 w-4 mr-1" />
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{summary}</p>
      </CardContent>
      <div className="px-6 pb-4">
        <Link
          to={`/news/${id}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Read more
        </Link>
      </div>
    </Card>
  );
};

export default NewsCard;
