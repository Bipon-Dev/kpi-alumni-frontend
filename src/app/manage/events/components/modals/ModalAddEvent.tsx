import useModelStore from "@/lib/stores/useModelStore";
import { Button } from "@/lib/ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/lib/ui/dialog";
import { Input } from "@/lib/ui/input";
import { useState } from "react";
import { useAdmEvent } from "../context/AdmEventProvider";
import { createEvent } from "../AdmEventOperation";
import { InputDate, InputField } from "@/app/shared/features/InputField";

interface TProps {
  closeModel: () => void;
}
const defaultFormData = {
  title: "",
  organizer: "",
  description: "",
  dateStart: 0,
  dateEnd: 0,
  location: "",
};
const ModalBody: React.FC<TProps> = ({ closeModel }) => {
  const [formData, setFormData] = useState<any>(defaultFormData);
  const { refetch } = useAdmEvent();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEvent(formData);
      refetch();
    } catch (error) {
      console.error("Error creating event:", error);
      return;
    }
    closeModel();
  };

  return (
    <form className="flex flex-col gap-3 mt-1" onSubmit={handleSubmit}>
      <InputField
        placeholder="Title"
        name="title"
        onChange={handleChange}
        formData={formData}
        label=""
      />
      <div className="grid grid-cols-2 gap-2">
        <label className=" text-primary font-medium ">Date Start</label>
        <label className=" text-primary font-medium ">Date End</label>
        <InputDate
          formData={formData}
          name="dateStart"
          setFormData={setFormData}
        />
        <InputDate
          formData={formData}
          name="dateEnd"
          setFormData={setFormData}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <InputField
          placeholder="Add Location"
          name="location"
          formData={formData}
          label=""
          onChange={handleChange}
        />
        <InputField
          placeholder="Organizer"
          name="organizer"
          onChange={handleChange}
          formData={formData}
          label=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="description"
          className="text-base font-medium text-primary"
        >
          Description
        </label>
        <Input
          className="w-full h-[100px] "
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button
          type="button"
          className=" w-[100px] text-white bg-error"
          onClick={closeModel}
        >
          Cancel
        </Button>
        <Button type="submit" className="w-[100px] text-white bg-secondary">
          Add Event
        </Button>
      </div>
    </form>
  );
};

const ModalAddEvent = () => {
  const { closeModel, modalName } = useModelStore();

  return (
    <Dialog open={modalName === "add-event"} onOpenChange={closeModel}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-primary">
            Add Event
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <ModalBody closeModel={closeModel} />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAddEvent;
