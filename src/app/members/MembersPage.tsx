import React from "react";
import MembersGroupsSections from "../manage/members/MembersGroupSection";
import MembersListSection from "./MembersListSection";

const MembersPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-4 rounded-xl h-full">
      <MembersListSection />
      {/* <MembersGroupsSections /> */}
    </div>
  );
};

export default MembersPage;
