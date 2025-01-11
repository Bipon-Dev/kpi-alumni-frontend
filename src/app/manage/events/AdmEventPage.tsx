import React from "react";
import AdmEventPageHeader from "./components/AdmEventPageHeader";
import AdmEventPageTableSection from "./components/AdmEventPageTableSection";
import ModalAddEvent from "./components/modals/ModalAddEvent";
import AdmEventProvider from "./components/context/AdmEventProvider";

const AdmEventPage: React.FC = () => {
  return (
    <AdmEventProvider >
      <AdmEventPageHeader />
      <AdmEventPageTableSection />

      {/* modals */}
      <ModalAddEvent />
    </AdmEventProvider>
  );
};

export default AdmEventPage;
