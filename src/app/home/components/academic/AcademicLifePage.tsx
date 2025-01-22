import { Button } from "@/lib/ui/button";
import { FC } from "react";

const AcademicLifePage: FC = () => {
  return (
    <div className=" container mx-auto flex flex-wrap justify-center gap-5 pt-12">
      <div className="w-90">
        <span className="text-2xl font-normal underline">
          Academic Life & Research
        </span>
        <ul className="text-xs list-disc list-inside space-y-2 pt-4">
          <li>
            <a href="">Programs and Areas</a>
          </li>
          <li>
            <a href="">Graduate & Postdoctoral Programs</a>
          </li>
          <li>
            <a href="">Continuing Studies</a>
          </li>
          <li>
            <a href="">International Activities</a>
          </li>
          <li>
            <a href="">Course Calendars & Listings</a>
          </li>
        </ul>
      </div>
      <div className="w-90">
        <span className="text-2xl font-normal underline">Campus Life</span>
        <ul className="text-xs list-disc list-inside space-y-2 pt-4">
          <li>
            <a href="">Athletics & Recreation</a>
          </li>
          <li>
            <a href="">Clubs & Extra-curricular Activities</a>
          </li>
          <li>
            <a href="">Housing & Residence</a> <a href="">Arts & Culture</a>
          </li>
          <li>
            <a href="">Student IT Services</a>
          </li>
        </ul>
      </div>
      <div className="w-90">
        <span className="text-2xl font-normal underline">Newsletter</span>
        <div className=" border border-primary-200 flex  justify-between items-center rounded-md">
          <input
            type="email"
            className="outline-none pl-5 "
            placeholder="Your mail..."
          />
          <Button variant="secondary" className=" text-white">
            Send
          </Button>
        </div>
        <p className="text-xs  pt-4">
          Ut tincidunt, quam in tincidunt vestibulum, turpis ipsum porttitor
          nisi, et fermentum augue lit eu neque. In at tempor dolor, sit amet
          dictum lacus. Praesent porta orci eget laoreet ultrices.
        </p>
      </div>
    </div>
  );
};

export default AcademicLifePage;
