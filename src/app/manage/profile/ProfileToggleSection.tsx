import { FC, useState } from "react";

const ToggleComp: FC<{ options: string[]; width: string }> = ({
  options,
  width,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className=" bg-gray-200 w-fit p-1 rounded-full mr-5">
      <div
        className={` flex h-fit bg-white rounded-full  w-${width} cursor-pointer transition-transform duration-700 ease-in-out `}
        onClick={() => setIsToggled(!isToggled)}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={`px-3 py-1 text-nowrap font-medium rounded-full transition-all duration-300 ${
              isToggled === (index === 1)
                ? "bg-secondary text-white"
                : "bg-white text-secondary"
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfileToggleSection: FC = () => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <ToggleComp options={["Open For Work", "Job Holder"]} width="57" />
      <ToggleComp options={["Ready Donate", "Donated"]} width="65" />
      <ToggleComp options={["Active", "Inactive"]} width="[170px]" />
    </div>
  );
};

export default ProfileToggleSection;
