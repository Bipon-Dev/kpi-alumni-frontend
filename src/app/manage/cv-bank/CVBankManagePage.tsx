import { FC, useState } from "react";
import ModalEdit from "../members/modal/ModalEdit";
import { InstOption } from "../members/components/inst-option/InstOption";
import { Link } from "react-router-dom";
import CVBankProvider, { useCVBankContext } from "./context/CVBankProvider";
const TableBody: FC<{ data: any }> = ({ data }) => {
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
          {data.name}
        </Link>
      </td>
      <td>
        <span>{data.email}</span>
      </td>
      <td>
        <span>{data.phone}</span>
      </td>
      <td>
        <span>{data.institute}</span>
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
      <h1 className="text-xl font-bold text-secondary "># CV Bank</h1>
      <div className="m-5"></div>
    </div>
  );
};

const TableHeaderComp: FC = () => {
  return (
    <thead>
      <tr>
        <th className="w-[100px]">ID</th>
        <th className="w-[320px] text-left">Name</th>
        <th className="w-[320px] text-left">Email</th>
        <th className="w-[320px] text-left">Phone</th>
        <th className="w-[320px] text-left">Institute</th>
        <th className="w-[320px] text-left"> Department List</th>
        <th className="w-[100px] text-left">Status</th>
        <th className="w-[80px]">#</th>
      </tr>
    </thead>
  );
};
const ManageTable: FC = () => {
  const { cVBankData } = useCVBankContext();

  return (
    <div className="  rounded-md h-full bg-white p-4">
      <TableTopHeader />
      <table className="table-container">
        <TableHeaderComp />
        <tbody>
          {cVBankData.map((item: any) => (
            <TableBody key={item.id} data={item} />
          ))}
          {cVBankData.length === 0 && (
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

const CVBankManagePage: FC = () => {
  return (
    <CVBankProvider>
      <ManageTable />
    </CVBankProvider>
  );
};

export default CVBankManagePage;
