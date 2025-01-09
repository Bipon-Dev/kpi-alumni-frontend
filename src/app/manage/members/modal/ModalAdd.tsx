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

const ModalBody: FC<{
  closeModal: () => void;
}> = ({ closeModal }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
  const [message, setMessage] = useState<string | null>(null);

  const updateStatus = (payload: any) => {
    setLoading(true);
    setMessage("Updating...");
    addMember()
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

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
      <div className="w-full flex flex-col justify-between items-center">
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
        <input
          type="text"
          className="border"
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
        />
      </div>

      <input
        formData={formData}
        name="note"
        label="Note"
        type="text"
        className="h-[115px] "
        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
      />

      <div className="w-full flex justify-end items-center gap-2 mb-2">
        <Button
          variant="secondary"
          title="Cancel"
          className="px-3 py-2 text-white"
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          variant="secondary"
          title="Save"
          className="px-3 py-2 text-white"
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
