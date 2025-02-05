import React from "react";

const ManageDashboardPage: React.FC = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div className="w-full h-80 shadow-lg bg-white rounded-lg p-4 bg-white">
          Approved Member
        </div>
        <div className="w-full h-80 shadow-lg bg-white rounded-lg p-4">
          Total Members
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-full  h-80 shadow-lg bg-white rounded-lg p-4">
          Incoming Events
        </div>
        <div className="w-full  h-80 shadow-lg bg-white rounded-lg p-4">
          New Work join
        </div>
      </div>
    </div>
  );
};

export default ManageDashboardPage;
