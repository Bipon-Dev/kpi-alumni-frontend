import NavbarMenu from "@/app/shared/navbar";
import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

const ClientLayout: FC = (): ReactElement => {
  return (
    <div className="layout">
      <NavbarMenu />
      {<Outlet />}
    </div>
  );
};

export default ClientLayout;
