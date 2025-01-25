import { cn } from "@/utils/cn";
import { Briefcase, Building2, CalendarDays, LayoutDashboard, UserRound, UsersRound } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SidebarAdminWeb: React.FC = () => {
  return (
    <div className="min-w-68 w-68 sidebar-admin border-r border-primary-100 h-[calc(100vh_-_70px)]">
      <ul className={cn("overflow-hidden p-4 pl-2.5 overflow-y-auto")}>
        <li className="mb-1 min-w-60">
          <Link
            to="/manage/dashboard"
            className="group/link hover:text-white w-full flex justify-center items-center gap-2 py-[7px] px-2.5 bg-white hover:bg-secondary text-primary-700 hover:text-white-100 rounded-md transition relative z-20"
          >
            <div className="flex flex-row items-center w-full gap-4">
              <span>{<LayoutDashboard size={20} />}</span>
              <span className="text-base font-normal capitalize menu-title">Dashboard</span>
            </div>
          </Link>
        </li>
        <li className="mb-1 min-w-60">
          <Link
            to="/manage/event"
            className="group/link hover:text-white w-full flex justify-center items-center gap-2 py-[7px] px-2.5 bg-white hover:bg-secondary text-primary-700 hover:text-white-100 rounded-md transition relative z-20"
          >
            <div className="flex flex-row items-center w-full gap-4">
              <span>{<CalendarDays size={20} />}</span>
              <span className="text-base font-normal capitalize menu-title">Event</span>
            </div>
          </Link>
        </li>
        <li className="mb-1 min-w-60">
          <Link
            to="/manage/user"
            className="group/link hover:text-white w-full flex justify-center items-center gap-2 py-[7px] px-2.5 bg-white hover:bg-secondary text-primary-700 hover:text-white-100 rounded-md transition relative z-20"
          >
            <div className="flex flex-row items-center w-full gap-4">
              <span>{<UserRound size={20} />}</span>
              <span className="text-base font-normal capitalize menu-title">User</span>
            </div>
          </Link>
        </li>
        <li className="mb-1 min-w-60">
          <Link
            to="/manage/jobs"
            className="group/link hover:text-white w-full flex justify-center items-center gap-2 py-[7px] px-2.5 bg-white hover:bg-secondary text-primary-700 hover:text-white-100 rounded-md transition relative z-20"
          >
            <div className="flex flex-row items-center w-full gap-4">
              <span>{<Briefcase size={20} />}</span>
              <span className="text-base font-normal capitalize menu-title">Jobs</span>
            </div>
          </Link>
        </li>
        <li className="mb-1 min-w-60">
          <Link
            to="/manage/members"
            className="group/link hover:text-white w-full flex justify-center items-center gap-2 py-[7px] px-2.5 bg-white hover:bg-secondary text-primary-700 hover:text-white-100 rounded-md transition relative z-20"
          >
            <div className="flex flex-row items-center w-full gap-4">
              <span>{<UsersRound size={20} />}</span>
              <span className="text-base font-normal capitalize menu-title">Members</span>
            </div>
          </Link>
        </li>
        <li className="mb-1 min-w-60">
          <Link
            to="/manage/institute"
            className="group/link hover:text-white w-full flex justify-center items-center gap-2 py-[7px] px-2.5 bg-white hover:bg-secondary text-primary-700 hover:text-white-100 rounded-md transition relative z-20"
          >
            <div className="flex flex-row items-center w-full gap-4">
              <span>{<Building2 size={20} />}</span>
              <span className="text-base font-normal capitalize menu-title">Institute</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdminWeb;
