import NewsCard from "@/app/shared/card/NewsCard";
import { newsAndNotices } from "@/lib/data/News";
import { Button } from "@/lib/ui/button";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          News and Notices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsAndNotices.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="text-center mt-8 mb-12 text-white">
        <Link to="/news">
          <Button size="lg">View All News and Notices</Button>
        </Link>
      </div>
    </section>
  );
};

export default News;
