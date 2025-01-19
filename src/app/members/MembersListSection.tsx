import React from "react";
import MembersSearch from "./MembersSearch";
import { MembersAddBtnComp } from "./MembersAddBtnComp";
import { sections, users } from "./constants";
import { Link } from "react-router-dom";

const MembersListSection: React.FC = () => {
  return (
    <div className="">
      <MembersSearch />
      <div className=" flex w-full items-center justify-between">
        <h1 className="text-xl font-bold text-secondary ">Members</h1>
        <div className=" m-5">
          <MembersAddBtnComp />
        </div>
      </div>

      <Link to="/MembersGroupSection" className="w-full flex  gap-3.5">
        {sections.map((section, index) => (
          <div
            key={index}
            className="w-full border rounded-xl bg-secondary-50 p-4"
          >
            <div className="font-medium text-secondary text-lg">
              {section.title}
            </div>
            <div className="font-medium text-primary text-sm">
              {section.subtitle}
            </div>
            <div className="flex items-center space-x-[-10px] mt-5">
              {users.map((user, userIndex) => (
                <div
                  key={userIndex}
                  className="relative size-7 border-2 border-white rounded-full overflow-hidden"
                >
                  <img
                    src={user.image}
                    alt={user.username}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default MembersListSection;
