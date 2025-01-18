import { Button } from "@/lib/ui/button";
import { FC } from "react";
const IndexAboutHeadComp: FC = () => {
  return (
    <div className=" flex flex-col justify-between m-5">
      <span className="text-3xl font-medium underline">About Our Alumni</span>
      <div>
        <img
          src="@/assets/images/kpi-main-photo.jpeg"
          alt=""
          className="w-92 h-auto bg-cover"
        />
      </div>
      <Button variant="link" className="flex justify-start max-w-24 ">
        All News
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
