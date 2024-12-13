import React from "react";
import AdmJobsPageHeader from "./components/AdmJobsPageHeader";
import AdmJobsPageTableSection from "./components/AdmJobsPageTableSection";

const AdmJobsPage: React.FC = () => {
  return (
    <div>
      <AdmJobsPageHeader />
      <AdmJobsPageTableSection />
    </div>
  );
};

export default AdmJobsPage;
