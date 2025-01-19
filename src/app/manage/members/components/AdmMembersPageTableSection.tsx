import { Table } from "@/lib/ui/table";
import React from "react";
import TableHeaderComp from "./layout/TableHeaderComp";
import TableBodyComp from "./layout/TableBodyComp";

const AdmMembersPageTableSection: React.FC = () => {
  return (
    <div className="mt-3">
      <Table>
        <TableHeaderComp />
        <TableBodyComp />
      </Table>
    </div>
  );
};

export default AdmMembersPageTableSection;
