"use client";
import { Button } from "@/lib/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/lib/ui/dialog";

const MembersProfileComp = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
        <p>Position: Software Engineer</p>
      </div>
    </div>
  );
};

export default MembersProfileComp;
