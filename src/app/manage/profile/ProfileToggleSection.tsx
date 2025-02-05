import { FC, useState } from "react";

const ProfileToggleBloodComp: FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      className="mr-5 flex h-fit bg-gray-200 rounded-full p-1 w-65 cursor-pointer transition-transform duration-700 ease-in-out"
      onClick={() => setIsToggled(!isToggled)}
    >
      <div className="flex text-nowrap bg-white rounded-full">
        <div
          className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${
            isToggled ? "bg-secondary text-white" : "bg-white text-secondary"
          }`}
        >
          Ready Donate
        </div>
        <span
          className={` px-4 py-2 font-medium ${
            isToggled ? " text-secondary bg-white" : "bg-secondary text-white"
          } rounded-full transition-all duration-300`}
        >
          Donated
        </span>
      </div>
    </div>
  );
};

const ProfileToggleWorkComp: FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      className="mr-5 flex justify-between h-fit bg-gray-200 rounded-full p-1 w-65 cursor-pointer transition-transform duration-700 ease-in-out"
      onClick={() => setIsToggled(!isToggled)}
    >
      <div className="flex justify-between text-nowrap bg-white rounded-full">
        <div
          className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${
            isToggled ? "bg-secondary text-white" : "bg-white text-secondary"
          }`}
        >
          Open For Work
        </div>
        <span
          className={` px-4 py-2 font-medium  ${
            isToggled ? " text-secondary bg-white" : "bg-secondary text-white"
          } rounded-full transition-all duration-300`}
        >
          Hiring
        </span>
      </div>
    </div>
  );
};
const ProfileToggleSection: FC = () => {
  return (
    <div className=" flex flex-col gap-4 ">
      <ProfileToggleWorkComp />
      <ProfileToggleBloodComp />
    </div>
  );
};

export default ProfileToggleSection;
