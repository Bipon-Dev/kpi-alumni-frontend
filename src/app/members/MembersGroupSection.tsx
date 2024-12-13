import { Dialog, DialogContent, DialogTrigger } from "@/lib/ui/dialog";
import { users } from "./Constants";
import { MembersAddBtnComp } from "./MembersAddBtnComp";
import { MembersEditBtnComp } from "./MembersEditBtnComp";
import MembersSearch from "./MembersSearch";
import MembersProfileComp from "./MembersProfileComp";

const MembersGroupsSections = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 mt-4 rounded-xl h-full">
      <MembersSearch />
      <div className=" flex w-full items-center justify-between">
        <h1 className="text-xl font-bold text-secondary ">127 Users</h1>
        <div className=" m-5">
          <MembersAddBtnComp />
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
              <Dialog>
                <DialogTrigger asChild>
                  <div className="p-3 flex items-center font-medium flex-1">
                    <img
                      src={user.image}
                      alt={user.username}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    {user.username}
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <MembersProfileComp />
                </DialogContent>
              </Dialog>
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
