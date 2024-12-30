import useRegistrationStore from "@/lib/stores/registrationStore";
import useModelStore from "@/lib/stores/useModelStore";
import { Button } from "@/lib/ui/button";
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTitle } from "@/lib/ui/dialog";
import { Input } from "@/lib/ui/input";
import { getApiUrl } from "@/utils/env";
import axios from "axios";
import { FC, ReactElement, useState } from "react";
import { toast } from "react-toastify";

const RegistrationForm = () => {
  const { closeModel } = useModelStore();
  const { firebaseUser } = useRegistrationStore();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    FullName: "",
    Session: "",
    Department: "",
    Shift: "",
    Semester: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data }: { data: any } = await axios.post(`${getApiUrl()}/api/v1/registration`, formData);

      if (data.error !== 0) {
        toast.error(data.message);
      } else {
        closeModel();
        toast.success(data.message);
      }
    } catch (ex: any) {
      toast.error(ex.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    closeModel();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="border flex gap-2 rounded-xl p-2 py-2">
        <div className="w-16 aspect-[1]  rounded-full overflow-hidden">
          <img src={firebaseUser?.photoURL || ""} alt={firebaseUser?.displayName || "User"} className="w-full" />
        </div>
        <div className="flex flex-col justify-center">
          <h6 className="font-medium text-xl">{firebaseUser?.displayName}</h6>
          <p>{firebaseUser?.email}</p>
        </div>
      </div>

      <Input
        type="text"
        value={formData.FullName}
        name="FullName"
        onChange={handleChange}
        placeholder="Full Name"
        className="focus-visible:ring-0"
      />

      <Input
        type="text"
        value={formData.Session}
        name="Session"
        onChange={handleChange}
        placeholder="Session"
        className="focus-visible:ring-0"
      />

      <Input
        type="text"
        value={formData.Department}
        name="Department"
        onChange={handleChange}
        placeholder="Department"
        className="focus-visible:ring-0"
      />
      <Input
        type="text"
        value={formData.Shift}
        name="Shift"
        onChange={handleChange}
        placeholder="Enter Shift"
        className="focus-visible:ring-0"
      />
      <Input
        type="text"
        value={formData.Semester}
        name="Semester"
        onChange={handleChange}
        placeholder="Enter Semester"
        className="focus-visible:ring-0"
      />
      <div className="flex justify-end gap-2">
        <Button type="button" onClick={handleCancel} disabled={loading} className="bg-gray-300">
          Cancel
        </Button>
        <Button type="submit" className="bg-secondary text-white" disabled={loading}>
          Submit
        </Button>
      </div>
    </form>
  );
};

const RegistrationModal: FC = (): ReactElement => {
  const { modalName, closeModel } = useModelStore();

  return (
    <Dialog onOpenChange={closeModel} open={modalName === "PromptForRegistration"}>
      <DialogContent onInteractOutside={(ev) => ev.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create New Account your account</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <RegistrationForm />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
