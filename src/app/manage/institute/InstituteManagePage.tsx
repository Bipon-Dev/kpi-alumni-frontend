"use client";
import { FC, useState } from "react";
import ModalEdit from "../members/modal/ModalEdit";
import { InstOption } from "../members/components/inst-option/InstOption";
import { Link } from "react-router-dom";

const TableBody: FC<{ data: any }> = ({ data }) => {
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
        <span className="text-green-500">{data.status || "Active"}</span>
      </td>
      <td className="float-right">
        <InstOption>
          <button type="button" onClick={() => setIsModalOpen(true)}>
            Update
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
const TableTopHeader: FC = () => {
  return (
    <div className=" flex w-full items-center justify-between">
      <h1 className="text-xl font-bold text-secondary "># Institute List</h1>

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

const TableHeaderComp: FC = () => {
  return (
    <thead>
      <tr>
        <th className="w-[100px]">ID</th>
        <th className="w-[720px] text-left">Name</th>
        {/* <th className="w-[320px] text-left">Email</th> */}
        <th className="w-[520px] text-left"> Department List</th>
        <th className="w-[100px] text-left">Status</th>
        <th>#</th>
      </tr>
    </thead>
  );
};
const ManageTable: FC = () => {
  return (
    <div className="  rounded-md h-full bg-white p-4">
      <TableTopHeader />
      <table className="table-container">
        <TableHeaderComp />
        <tbody>
          {/* {memberData
            .filter((item) => item.role === "teacher")
            .map((item) => (
              <MemberBody key={item.id} data={item} />
            ))} */}
          {/* {institute.filter((item) => item.role === "institute").length === */}
          {/* 0 && ( */}
          <tr>
            <td
              colSpan={10}
              rowSpan={7}
              className="text-center !text-[32px] text-primary-200 relative top-16"
            >
              No data found !
            </td>
          </tr>
          {/* )} */}
        </tbody>
      </table>
    </div>
  );
};

const InstituteManagePage: FC = () => {
  return <ManageTable />;
};

export default InstituteManagePage;
