import MemberProvider from "./context/MemberProvider";
import { FC } from "react";
import MembersGroupsSections from "./MembersGroupSection";

const AdmMembersPage: FC = () => {
  return (
    <div>
      {/* <AdmMembersPageHeader />
      <AdmMembersPageTableSection /> */}
      <MemberProvider>
        <MembersGroupsSections />
      </MemberProvider>
    </div>
  );
};

export default AdmMembersPage;
