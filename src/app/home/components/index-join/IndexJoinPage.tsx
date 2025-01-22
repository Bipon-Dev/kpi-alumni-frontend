import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { FC } from "react";
import mainPhoto from "@/assets/images/kpi-main-photo.jpeg";
const IndexJoinInputComp: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl font-normal text-white">
        Join the community of modern <br /> thinking students
      </span>
      <div className=" flex flex-wrap gap-2">
        <div className="max-w-60 flex flex-wrap gap-2">
          <Input type="text" placeholder="Full Name" />
          <Input type="text" placeholder="Email" />
        </div>
        <div className="max-w-60 flex flex-wrap gap-2">
          <Input type="text" placeholder="Department" />
          <Input type="text" placeholder="Shift" />
        </div>
      </div>

      <Button variant="secondary" className="max-w-60">
        Join
      </Button>
    </div>
  );
};
const IndexJoinComp: FC = () => {
  return (
    <div className="flex gap-13 items-center justify-center p-5">
      <img
        src={mainPhoto}
        alt="banner"
        className="w-[555px] h-[320px] bg-cover"
      />
      <IndexJoinInputComp />
    </div>
  );
};

const IndexJoinPage: FC = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto ">
        <IndexJoinComp />
      </div>
    </div>
  );
};

export default IndexJoinPage;
