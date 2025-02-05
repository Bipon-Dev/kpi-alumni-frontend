import { Button } from "@/lib/ui/button";
import { FC, useState } from "react";

const ProfileToggleSection: FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className="mr-5 flex h-fit bg-gray-200 rounded-full p-1.5 w-60 cursor-pointer transition-transform duration-700"
      onClick={() => setIsToggled(!isToggled)}
    >
      <div className="flex text-nowrap bg-white rounded-full">
        <div
          className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${
            isToggled ? "bg-secondary text-white" : "bg-white text-secondary"
          }`}
        >
          Open For Work
        </div>
        <span
          className={` px-4 py-2 font-medium ${
            isToggled ? " text-secondary bg-white" : "bg-secondary text-white"
          } rounded-full transition-all duration-300`}
        >
          Hiring
        </span>
      </div>
    </div>
  );
};

export default ProfileToggleSection;
