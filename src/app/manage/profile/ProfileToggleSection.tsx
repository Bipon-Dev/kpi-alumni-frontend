import { FC, useState } from "react";

const ToggleComp: FC<{ options: string[]; width: string }> = ({
  options,
  width,
}) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div
      className={`mr-5 flex h-fit bg-gray-200 rounded-full p-1 w-${width} cursor-pointer transition-transform duration-700 ease-in-out `}
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
  );
};

const ProfileToggleSection: FC = () => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <ToggleComp options={["Active", "Inactive"]} width="[170px]" />
      <ToggleComp options={["Open For Work", "JOb Holder"]} width="57" />
      <ToggleComp options={["Ready Donate", "Donated"]} width="65" />
    </div>
  );
};

export default ProfileToggleSection;
