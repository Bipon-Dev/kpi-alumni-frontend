import React, { useState } from "react";
import ModalAddJob from "./modals/ModalAddJob";
import Search, { SearchCriteria } from "./table-comps/Search";

const AdmJobsPageHeader: React.FC<{ onSearch: (criteria: SearchCriteria) => void }> = ({ onSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-3 p-3">
        {/* Search bar in its own row */}
        <div className="flex justify-center">
          <Search onSearch={onSearch} />
        </div>
        {/* Title and Add Job button in the same row */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-medium text-primary">Manage Jobs</div>
          <button
            className="px-3 py-2 text-white rounded-md bg-secondary w-[125px] hover:bg-secondary-700"
            onClick={() => setIsModalOpen(true)}
          >
            Add Job
          </button>
        </div>
      </div>
      {isModalOpen && <ModalAddJob closeModal={() => setIsModalOpen(false)} />}
    </>
  );
};

export default AdmJobsPageHeader;
