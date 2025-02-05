"use client";
import { FC, useState } from "react";
import MemberProvider, {
  useMemberContext,
} from "../members/context/MemberProvider";
import { Button } from "@/lib/ui/button";
import ModalAdd from "../members/modal/ModalAdd";
import FilterBar from "@/app/members/filter-bar/FilterBar";
import ModalEdit from "../members/modal/ModalEdit";
import { InstOption } from "../members/components/inst-option/InstOption";
import { Link } from "react-router-dom";
import { TFilterField } from "@/app/members/filter-bar/filterBarTypes";

const filterFields: TFilterField[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Ex: John Doe",
  },
  {
    label: "Session",
    name: "session",
    type: "text",
    placeholder: "Ex: 20-21",
  },
  { label: "Email", name: "email", type: "text", placeholder: "Ex:@gmail.com" },
  {
    label: "Department",
    name: "department",
    type: "text",
    placeholder: "Ex: CST",
  },
  {
    label: "Status",
    name: "status",
    type: "select",
    options: ["Active", "Inactive"],
  },
];

const MemberBody: FC<{ data: any }> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <tr>
      <td>{data.id}</td>
      <td>
        <img src={data.photo} alt="" />
        <Link to={`/manage/members/profilePage/${data.id}`}>
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
        <span>{data.role}</span>
      </td>
      {/* <td>
        <span>{data.session || "--"}</span>
      </td>
      <td>
        <span>{data.roll || "--"}</span>
      </td>
      <td>
        <span>{data.registration || "--"}</span>
      </td> */}
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className=" flex w-full items-center justify-between pb-2">
      <h1 className="text-xl font-bold text-secondary "># Teachers</h1>

      <div className="min-w-[500px] max-w-[700px] w-full">
        <FilterBar
          fields={filterFields}
          onSearch={(val: Record<string, any>) => console.log(val)}
        />
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

const MembersGroupsHeaderComp: FC = () => {
  return (
    <thead>
      <tr>
        <th className="w-[100px]">ID</th>
        <th className="w-[420px] text-left">Name</th>
        <th className="w-[320px] text-left">Email</th>
        <th className="w-[320px] text-left"> Department</th>
        <th className="w-[320px] text-left">Shift</th>
        <th className="w-[220px] text-left">Role</th>
        {/* <th className="w-[220px] text-left">Session</th>
        <th className="w-[220px] text-left">Roll</th>
        <th className="w-[220px] text-left">Reg NO.</th> */}
        <th className="w-[220px] text-left">Status</th>
        <th>#</th>
      </tr>
    </thead>
  );
};
const TeachersTable: FC = () => {
  const memberContext = useMemberContext();
  const memberData = memberContext?.memberData || [];
  return (
    <div className=" rounded-md h-full bg-white p-4">
      <MembersGroupsTopHeader />
      <table className="table-container">
        <MembersGroupsHeaderComp />
        <tbody>
          {memberData
            .filter((item) => item.role === "teacher")
            .map((item) => (
              <MemberBody key={item.id} data={item} />
            ))}
          {memberData.filter((item) => item.role === "teacher").length ===
            0 && (
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

const TeachersPage = () => {
  return (
    <MemberProvider>
      <TeachersTable />
    </MemberProvider>
  );
};

export default TeachersPage;
