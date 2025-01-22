import { Button } from "@/lib/ui/button";
import { FC } from "react";
import mainPhoto from "@/assets/images/kpi-main-photo.jpeg";
const IndexAboutHeadComp: FC = () => {
  return (
    <div className=" flex flex-col justify-between m-5">
      <span className="text-3xl font-medium underline">About Our Alumni</span>
      <div className="pt-7">
        <img src={mainPhoto} alt="" className="w-92 !h-28 bg-cover" />
      </div>
      <p className="text-xs font-normal text-gray-500 pt-6">
        <span className="text-sm text-primary">Welcome o Universo. </span>
        Premium HTML Template for schools, universieties and other educational
        institutes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec laoreet semper tincidunt. Interdum et malesuada fames ac ante
        ipsum primis in faucibus.
      </p>
      <Button variant="link" className="flex justify-start max-w-24 pt-32">
        Read More
      </Button>
    </div>
  );
};
const IndexAboutPage: FC = () => {
  return (
    <div className="w-92">
      <IndexAboutHeadComp />
    </div>
  );
};

export default IndexAboutPage;
