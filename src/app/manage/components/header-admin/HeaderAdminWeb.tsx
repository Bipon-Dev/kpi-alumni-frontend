import { ChevronRight } from "lucide-react";
import React, { ReactElement } from "react";
import Avatar from "react-avatar";

const HeaderAdminWebComp: React.FC = (): ReactElement => {
  const pathAr = location.pathname.split("/");
  return (
    <div className="hidden flex-row items-center gap-x-2 text-2xl font-medium capitalize text-primary lg:flex">
      {pathAr.map((path, index) => {
        if (
          path === "" ||
          path === "/" ||
          path === null ||
          path === undefined
        ) {
          return null;
        }
        if (Number(path)) {
          return null;
        }

        return (
          <React.Fragment key={path.toString()}>
            {index > 1 && <ChevronRight />}
            <span>{path}</span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const HeaderAdminWeb: React.FC = (): React.ReactElement => {
  return (
    <div className="web-header flex gap-20 h-18 w-full text-4xl font-medium overflow-x-hidden border-b border-b-primary-100 px-7 py-3.5">
      <h1> KPI ALUMNI</h1>
      <div className="flex justify-between w-[calc(100%-280px)]">
        <div className="header_left  text-2xl font-medium capitalize text-primary py-2">
          <HeaderAdminWebComp />
        </div>
        <div className="  border-secondary border-2 rounded-full size-12 items-center justify-center flex ">
          {/* <Avatar googleId="118096717852922241760" size="100" round={true} /> */}
        </div>
      </div>

      {/* <ProfileManage auth={authInfo} loginUrl={loginUrl} logout={logOut} /> */}
    </div>
  );
};

export default HeaderAdminWeb;
