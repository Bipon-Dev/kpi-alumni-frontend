import { Button } from "@/lib/ui/button";
import { FC } from "react";

const IndexNewsListComp: FC = () => {
  return (
    <div className="flex flex-col gap-2 my-5 border-b border-primary-200 pb-5 text-wrap">
      <span className=" text-primary-200 text-xs">08-24-2014</span>
      <span className=" text-sm text-primary">
        U-M School of Public Health, Detroit partners aim to improve air quality
        in the city
      </span>
    </div>
  );
};
const IndexNewsHeadComp: FC = () => {
  return (
    <div className=" flex flex-col justify-between m-5">
      <span className="text-3xl font-medium underline">News</span>
      <div>
        {[1, 2, 3].map((item) => (
          <IndexNewsListComp key={item} />
        ))}
      </div>
      <Button variant="link" className="flex justify-start max-w-24 ">
        All News
      </Button>
    </div>
  );
};
const IndexNewsPage: FC = () => {
  return (
    <div className="w-92">
      <IndexNewsHeadComp />
    </div>
  );
};

export default IndexNewsPage;
