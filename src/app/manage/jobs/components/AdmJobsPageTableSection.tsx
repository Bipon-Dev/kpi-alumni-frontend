import { Table } from "@/lib/ui/table";
import React from "react";
import TableHeaderComp from "./table-comps/TableHeaderComp";
import TableBodyComp from "./table-comps/TableBodyComp";
import { SearchCriteria } from "./table-comps/Search";

// Define props for AdmJobsPageTableSection
interface AdmJobsPageTableSectionProps {
  searchCriteria: SearchCriteria; // Accept searchCriteria as a prop
}

const AdmJobsPageTableSection: React.FC<AdmJobsPageTableSectionProps> = ({ searchCriteria }) => {
  return (
    <div className="mt-3">
      <Table>
        <TableHeaderComp  />
        {/* Pass searchCriteria to TableBodyComp */}
        <TableBodyComp searchCriteria={searchCriteria} />
      </Table>
    </div>
  );
};

export default AdmJobsPageTableSection;
