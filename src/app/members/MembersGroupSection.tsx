import { Link } from "react-router-dom";
import { technology, users } from "./constants";
import { MembersEditBtnComp } from "./MembersEditBtnComp";
import MembersSearch from "./MembersSearch";
import { Button } from "@/lib/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";

const MembersGroupsSections = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-4 rounded-xl h-full">
      <div className=" flex w-full items-center justify-between">
        <h1 className="text-xl font-bold text-secondary ">127 Users</h1>
        <div className="flex items-center gap-5 m-5">
          <MembersSearch />
          <div className=" min-w-48 outline-none ">
            <Select
              onValueChange={() => ({} as React.ChangeEvent<HTMLInputElement>)}
            >
              <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Select Technology" />
              </SelectTrigger>
              <SelectContent>
                {technology?.map((option, index: number) => (
                  <SelectItem key={index} value={option?.technology}>
                    {option?.technology}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button title="Invite" variant="secondary" className=" text-white">
            Invite
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full border-collapse  rounded-lg">
          <div className="bg-secondary-200 rounded-tl-2xl rounded-tr-2xl flex">
            {[
              "Username",
              "Email",
              "Member Since",
              "Memberships",
              "Membership Statuses",
              "Action",
            ].map((header, index) => (
              <div key={index} className="py-5 text-center font-medium flex-1">
                {header}
              </div>
            ))}
          </div>
          {users.map((user, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "bg-secondary-50" : "bg-secondary-100"
              } hover:bg-gray-50 cursor-pointer`}
            >
              <Link to="/manage/ProfilePage">
                <div className="p-3 flex items-center font-medium flex-1">
                  <img
                    src={user.image}
                    alt={user.username}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  {user.username}
                </div>
              </Link>
              <div className="p-10 text-center text-sm flex-1">
                {user.email}
              </div>
              <div className="p-7 text-center flex-1">{user.memberSince}</div>
              <div className="p-7 text-center flex-1">{user.memberships}</div>
              <div className="p-7 text-center flex-1">{user.status}</div>
              <div className="p-7 text-center flex-1">
                <MembersEditBtnComp />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersGroupsSections;
