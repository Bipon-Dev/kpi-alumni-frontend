import { Table } from "@/lib/ui/table";
import React from "react";
import TableHeaderComp from "./table-comps/TableHeaderComp";
import TableBodyComp from "./table-comps/TableBodyComp";

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
