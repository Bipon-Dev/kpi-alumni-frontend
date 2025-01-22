import { FC } from "react";
import google from "@/assets/logo/donors/google.png";
import { Button } from "@/lib/ui/button";

const PartnerDonorsPage: FC = () => {
  return (
    <div className="container mx-auto">
      <div className=" flex flex-col m-5">
        <div className="text-3xl font-normal underline underline- px-76 mx-4 flex justify-between">
          <span>Partner & Donors</span>
          <a href="/">
            <Button variant="outline" className="text-2xl">
              Make a Donation
            </Button>
          </a>
        </div>
        <div className="flex justify-center ">
          {[1, 2, 3].map((item) => (
            <div className="w-90">
              <a href="/">
                <img src={google} alt="" className="w-30" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerDonorsPage;
