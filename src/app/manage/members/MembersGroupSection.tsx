import { Link } from "react-router-dom";
import { MembersEditBtnComp } from "../../members/MembersEditBtnComp";
import { Button } from "@/lib/ui/button";
import { TFilterField } from "../../members/filter-bar/filterBarTypes";
import FilterBar from "../../members/filter-bar/FilterBar";
import { useMemberContext } from "./context/MemberProvider";
import { FC, useState } from "react";
import ModalAdd from "./modal/ModalAdd";
import { InstOption } from "./components/inst-option/InstOption";
import ModalEdit from "./modal/ModalEdit";

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

interface TUser {
  id: number;
  photo: string;
  name: string;
  email: string;
  shift: string;
  session: string;
  status: string;
  roll: number;
  registration: number;
  department: string;
}
const MemberBody: FC<{ data: TUser }> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <tr>
      <td>{data.id}</td>
      <td>
        <img src={data.photo} alt="" />

        <Link to={`/manage/members/profilePage/${data.id}`}>{data.name}</Link>
      </td>
      <td>
        <span>{data.email}</span>
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
const MembersGroupsSections = () => {
  const memberContext = useMemberContext();
  const memberData = memberContext?.memberData || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="  rounded-xl h-full">
      <div className=" flex w-full items-center justify-between">
        <h1 className="text-xl font-bold text-secondary ">
          {memberData.length > 0 ? memberData[memberData.length - 1].id : "N/A"}
          &nbsp; Members
        </h1>

        <div className="min-w-[500px] max-w-[700px] w-full">
          <FilterBar
            fields={filterFields}
            onSearch={(val: Record<string, any>) => console.log(val)}
          />
        </div>
        <div className="flex items-center gap-5 m-5">
          <Button
            title="Invite"
            variant="secondary"
            className="text-white"
            onClick={() => setIsModalOpen(true)}
          >
            + Add Member
          </Button>

          {isModalOpen && <ModalAdd closeModal={() => setIsModalOpen(false)} />}
          <Button title="Invite" variant="secondary" className=" text-white">
            Invite
          </Button>
        </div>
      </div>
      <table className="table-container">
        <thead>
          <tr>
            <th className="w-[100px]">ID</th>
            <th className="w-[220px] text-left">Name</th>
            <th className="w-[220px] text-left">Email</th>
            <th className="w-[220px] text-left"> Department</th>
            <th className="w-[220px] text-left">Shift</th>
            <th className="w-[220px] text-left">Session</th>
            <th className="w-[220px] text-left">Roll</th>
            <th className="w-[220px] text-left">Reg NO.</th>
            <th className="w-[220px] text-left">Status</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {memberData.map((item) => (
            <MemberBody key={item?.id} data={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersGroupsSections;
