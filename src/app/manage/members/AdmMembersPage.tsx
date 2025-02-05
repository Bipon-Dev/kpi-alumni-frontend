import MemberProvider from "./context/MemberProvider";
import { FC } from "react";
import MembersGroupsSections from "./MembersGroupSection";

const AdmMembersPage: FC = () => {
  return (
    <div className="p-4 h-full bg-white rounded-md">
      {/* <AdmMembersPageHeader />
      <AdmMembersPageTableSection /> */}
      <MemberProvider>
        <MembersGroupsSections />
      </MemberProvider>
    </div>
  );
};

export default AdmMembersPage;
