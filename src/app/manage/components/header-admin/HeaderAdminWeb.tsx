import { ChevronRight } from "lucide-react";
import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

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
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="web-header flex gap-20 h-18 w-full text-4xl font-medium overflow-x-hidden border-b border-b-primary-100 px-7 py-3.5">
      <h1> KPI ALUMNI</h1>
      <div className="flex justify-between w-[calc(100%-280px)]">
        <div className="header_left  text-2xl font-medium capitalize text-primary py-2">
          <HeaderAdminWebComp />
        </div>
        <div
          className="border-secondary border-2 rounded-full size-12 items-center justify-center flex cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <img
            alt="profile"
            src="https://github.com/shadcn.png"
            className="size-11 rounded-full"
          />
        </div>
        {showModal && (
          <div className="modal absolute top-20 right-5 bg-white shadow-2xl rounded-xl p-6 z-50">
            <div className="modal-content w-96 min-h-[450px] flex flex-col justify-between">
              <div className=" border-b-2">
                <span
                  className="close float-end cursor-pointer border-2 border-primary rounded-full  px-2"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </span>
                <p className=" text-nowrap  pb-3 text-ellipsis overflow-hidden">
                  Elon Reeve Musk
                </p>
              </div>
              <div>hello!</div>
              <div className=" border-t-2 pt-3 ">
                <div className="text-sm flex gap-5 float-right ">
                  <Link to={"/"} className=" ">
                    login
                  </Link>
                  <Link to={"/"}>Sing up</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAdminWeb;
