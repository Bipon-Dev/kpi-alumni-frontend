import HeaderAdminWeb from "@/app/manage/components/header-admin/HeaderAdminWeb";
import SidebarAdminWeb from "@/app/manage/components/sidebar-admin/SidebarAdminWeb";
import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

const LayoutComp: FC = (): ReactElement => {
  return (
    <div className="layout">
      <HeaderAdminWeb />
      <main className="flex">
        <SidebarAdminWeb />
        <div className="page-content h-[calc(100vh_-_70px)]  w-full p-2 md:p-5 bg-gray-100">
          <div className="page-content-inner h-full md:h-[calc(100vh_-_110px)] print:h-full  overflow-x-auto p-2 md:p-5 shadow-base rounded-lg md:rounded-3xl">
            {<Outlet />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutComp;
