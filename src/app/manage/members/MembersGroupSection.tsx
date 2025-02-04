import { Link } from "react-router-dom";
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
  // const memberContext = useMemberContext();
  // const memberData = memberContext?.memberData || [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className=" flex w-full items-center justify-between">
      <h1 className="text-xl font-bold text-secondary ">* Members</h1>

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
  );
};

const MembersGroupsHeaderComp: FC = () => {
  return (
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
        <th className="w-[220px] text-left">Role</th>
        <th className="w-[220px] text-left">Status</th>
        <th>#</th>
      </tr>
    </thead>
  );
};

const MembersGroupsSections = () => {
  const memberContext = useMemberContext();
  const memberData = memberContext?.memberData || [];

  return (
    <div className="rounded-xl h-full">
      <MembersGroupsTopHeader />
      <table className="table-container">
        <MembersGroupsHeaderComp />
        <tbody>
          {memberData
            .filter((item) => item.role === "member")
            .map((item) => (
              <MemberBody key={item?.id} data={item} />
            ))}
          {memberData.filter((item) => item.role === "member").length === 0 && (
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

export default MembersGroupsSections;
