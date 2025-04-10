import React, { FC, useState } from "react";
import MemberProvider, {
  useMemberContext,
} from "../members/context/MemberProvider";

import { InstOption } from "../members/components/inst-option/InstOption";
import ModalEdit from "../members/modal/ModalEdit";
import { Link } from "react-router-dom";

const MemberBody: FC<{ data: any }> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <tr>
      <td>{data.id}</td>
      <td>
        <img src={data.photo} alt="" />
        <Link
          to={`/manage/members/profilePage/${data.id}`}
          className="text-secondary font-medium"
        >
          {data.fullName}
        </Link>
      </td>
      <td>
        <span>{data.primaryEmail}</span>
      </td>
      <td>
        <span>{data.department}</span>
      </td>
      <td>
        <span>{data.shift}</span>
      </td>
      <td>
        <span>{data.session || "--"}</span>
      </td>
      <td>
        <span>{data.roll || "--"}</span>
      </td>
      <td>
        <span>{data.registration || "--"}</span>
      </td>
      <td>
        <span>{data.role || "--"}</span>
      </td>
      <td>
        <span className="text-green-500">{data.status || "Active"}</span>
      </td>
      <td className="float-right">
        <InstOption>
          <button type="button" onClick={() => setIsModalOpen(true)}>
            Update Profile
          </button>

          <button type="button" onClick={() => setIsModalOpen(true)}>
            Update Status
          </button>
        </InstOption>
        {isModalOpen && (
          <ModalEdit closeModal={() => setIsModalOpen(false)} data={data} />
        )}
      </td>
    </tr>
  );
};
const MembersGroupsTopHeader: FC = () => {
  const memberContext = useMemberContext();
  const memberData = memberContext?.memberData || [];
  // const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className=" flex w-full items-center justify-between">
      <h1 className="text-xl font-bold text-secondary "># User</h1>

      <div className="min-w-[500px] max-w-[700px] w-full">
        {/* <FilterBar
          fields={filterFields}
          onSearch={(val: Record<string, any>) => console.log(val)}
        /> */}
      </div>
      {/* <div className="flex items-center gap-5 m-5">
        <Button
          title="Invite"
          variant="secondary"
          className="text-white"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Teacher
        </Button>

        {isModalOpen && <ModalAdd closeModal={() => setIsModalOpen(false)} />}
        <Button title="Invite" variant="secondary" className=" text-white">
          Invite
        </Button>
      </div> */}
      <div className="m-5"></div>
    </div>
  );
};

const UserGroupsHeaderComp: FC = () => {
  return (
    <thead>
      <tr>
        <th className="w-[100px]">ID</th>
        <th className="w-[420px] text-left">Name</th>
        <th className="w-[320px] text-left">Email</th>
        <th className="w-[320px] text-left"> Department</th>
        <th className="w-[320px] text-left">Shift</th>
        <th className="w-[220px] text-left">Session</th>
        <th className="w-[220px] text-left">Roll</th>
        <th className="w-[220px] text-left">Reg NO.</th>
        <th className="w-[220px] text-left">Role</th>
        <th className="w-[220px] text-left">Status</th>
        <th>#</th>
      </tr>
    </thead>
  );
};
const UserTable: FC = () => {
  const memberContext = useMemberContext();
  const memberData = memberContext?.memberData || [];
  return (
    <div className="  rounded-xl h-full">
      <MembersGroupsTopHeader />
      <table className="table-container">
        <UserGroupsHeaderComp />
        <tbody>
          {memberData.map((item) => (
            <MemberBody key={item.id} data={item} />
          ))}
          {memberData.length === 0 && (
            <tr>
              <td
                colSpan={10}
                rowSpan={7}
                className="text-center !text-[32px] text-primary-200 relative top-16"
              >
                No data found !
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
const AdmManageUserPage: React.FC = () => {
  return (
    <div className="bg-white p-5 h-full rounded-md scrollbar-hide">
      <MemberProvider>
        <UserTable />
      </MemberProvider>
    </div>
  );
};

export default AdmManageUserPage;
