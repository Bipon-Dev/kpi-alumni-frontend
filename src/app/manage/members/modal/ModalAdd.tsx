/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/lib/ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/lib/ui/dialog";
import { FC, useState } from "react";
import { addMember } from "../MembersSectionOeration";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { AnimateTextArea } from "@/lib/ui/inputFilds";

export const technology = ["CSE", "EEE", "ME", "CE", "TE", "Arch", "ChemE"];
const ModalBody: FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const [message, setMessage] = useState<string | null>(null);

  const updateStatus = (payload: any) => {
    setLoading(true);
    setMessage("Updating...");
    addMember({
      name: payload.name,
      email: payload.email,
      shift: payload.shift,
      department: payload.department || "CSE",
      session: payload.session,
    })
      .then(({ message, error }) => {
        if (!error) {
          closeModal();
        }
        setMessage(message);
      })
      .catch((err) => {
        setMessage(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    updateStatus(formData);
  };
  const handleStatusChange = (value: string) => {
    setFormData((prev: any) => ({ ...prev, department: value }));
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
      <div className=" flex justify-between w-full items-center">
        <AnimateTextArea
          formData={formData}
          name="name"
          label="Your Name..."
          type="text"
          className="h-[50px] !w-full"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Select value={formData.department} onValueChange={handleStatusChange}>
          <SelectTrigger className="w-1/2 focus:ring-0 focus:ring-offset-0 h-[50px] text-sm font-medium text-primary-700">
            <SelectValue placeholder="Select Currency" />
          </SelectTrigger>
          <SelectContent className="text-sm font-medium text-primary-700">
            {technology.map((option: any) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <AnimateTextArea
        formData={formData}
        name="email"
        label="Your Email..."
        type="email"
        className="h-[50px] !w-full"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <div className="flex justify-between w-full gap-2">
        <AnimateTextArea
          formData={formData}
          name="shift"
          label="Your Shift..."
          type="text"
          className="h-[50px] !w-full"
          onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
        />
        <AnimateTextArea
          formData={formData}
          name="session"
          label=" Your Session..."
          type="text"
          className="h-[50px] !w-full"
          onChange={(e) =>
            setFormData({ ...formData, session: e.target.value })
          }
        />
      </div>

      <div className="w-full flex justify-end items-center gap-2 mb-2">
        <Button
          variant="ghost"
          title="Cancel"
          className="w-[100px] h-10"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          variant="secondary"
          title="Save"
          className="px-3 py-2  text-white  "
          type="submit"
          // loading={loading}
        >
          Save
        </Button>
      </div>
    </form>
  );
};

const ModalAdd: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  return (
    <Dialog open={true} onOpenChange={closeModal}>
      <DialogContent aria-describedby={undefined} className="modal-container">
        <DialogHeader>
          <DialogTitle>Add Member</DialogTitle>
        </DialogHeader>
        <DialogBody className="!min-h-1 ">
          <ModalBody closeModal={closeModal} />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAdd;
