import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/lib/ui/dialog";
import { FC, useState } from "react";
import { updateMember } from "../MembersSectionOeration";
import { AnimateTextArea } from "@/lib/ui/inputFilds";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { Button } from "@/lib/ui/button";

interface ModalEditProps {
  closeModal: () => void;
  data: any;
}
export const technology = ["CSE", "EEE", "ME", "CE", "TE", "Arch", "ChemE"];
const ModalBody: FC<{
  closeModal: () => void;
  data: any;
}> = ({ closeModal, data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const [message, setMessage] = useState<string | null>(null);

  const updateStatus = (payload: any) => {
    setLoading(true);
    setMessage("Updating...");
    updateMember(
      {
        name: formData.name,
        email: formData.email,
        shift: formData.shift,
        department: formData.department || "--",
        session: formData.session,
      },
      data?.id
    )
      .then(({ message, error }) => {
        if (!error) {
          closeModal();
          window.location.reload();
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
          label={data?.name}
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
        label={data?.email}
        type="email"
        className="h-[50px] !w-full"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <div className="flex justify-between w-full gap-2">
        <AnimateTextArea
          formData={formData}
          name="shift"
          label={data?.shift}
          type="text"
          className="h-[50px] !w-full"
          onChange={(e) => setFormData({ ...formData, shift: e.target.value })}
        />
        <AnimateTextArea
          formData={formData}
          name="session"
          label={data?.session}
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
const ModalEdit: FC<{ closeModal: () => void; data: any }> = ({
  closeModal,
  data,
}) => {
  return (
    <Dialog open={true} onOpenChange={closeModal}>
      <DialogContent aria-describedby={undefined} className="modal-container">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <DialogBody className="!min-h-1 ">
          <ModalBody closeModal={closeModal} data={data} />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default ModalEdit;
