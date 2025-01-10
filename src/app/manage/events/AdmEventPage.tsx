import React from "react";
import AdmEventPageHeader from "./components/AdmEventPageHeader";
import AdmEventPageTableSection from "./components/AdmEventPageTableSection";
import ModalAddEvent from "./components/modals/ModalAddEvent";

const AdmEventPage: React.FC = () => {
  return (
    <div className="">
      <AdmEventPageHeader />
      <AdmEventPageTableSection />

      {/* modals */}
      <ModalAddEvent />
    </div>
  );
};

export default AdmEventPage;
