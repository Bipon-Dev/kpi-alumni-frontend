import React, { useState } from "react";
import AdmJobsPageHeader from "./components/AdmJobsPageHeader";
import { SearchCriteria } from "./components/table-comps/Search";
import AdmJobsPageTableSection from "./components/AdmJobsPageTableSection";

const AdmJobsPage: React.FC = () => {
  const [searchCriteria, setSearchCriteria] = useState<SearchCriteria>({});
  // Function to handle search criteria update

  return (
    <div className=" bg-white p-4 rounded-lg shadow-md">
      <AdmJobsPageHeader onSearch={setSearchCriteria} />
      <AdmJobsPageTableSection searchCriteria={searchCriteria} />
      {/* <TableBodyComp searchCriteria={searchCriteria} /> */}
    </div>
  );
};

export default AdmJobsPage;
