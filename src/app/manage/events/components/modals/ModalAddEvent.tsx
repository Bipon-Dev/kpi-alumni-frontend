import useModelStore from "@/lib/stores/useModelStore";
import { Button } from "@/lib/ui/button";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/lib/ui/dialog";
import { useState } from "react";
import { useAdmEvent } from "../context/AdmEventProvider";
import { createEvent } from "../AdmEventOperation";
import {
  AnimatedInputField,
  AnimatedTextArea,
  DateInputField,
} from "@bikiran/inputs";
import dayjs from "dayjs";

interface TProps {
  closeModel: () => void;
}
const defaultFormData = {
  title: "",
  organizer: "",
  description: "",
  dateStart: dayjs().format("YYYY-MM-DD"),
  dateEnd: dayjs().add(7, "day").format("YYYY-MM-DD"),
  location: "",
};
const ModalBody: React.FC<TProps> = ({ closeModel }) => {
  const [formData, setFormData] =
    useState<Record<string, any>>(defaultFormData);
  const { refetch } = useAdmEvent();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payLoad = {
      ...formData,
      dateStart: dayjs(formData.dateStart).startOf("day").valueOf(),
      dateEnd: dayjs(formData.dateEnd).startOf("day").valueOf(),
    };
    try {
      await createEvent(payLoad);
      refetch();
    } catch (error) {
      console.error("Error creating event:", error);
      return;
    }
    closeModel();
  };

  return (
    <form className="flex flex-col gap-3 mt-1" onSubmit={handleSubmit}>
      <AnimatedInputField
        placeholder="Title"
        name="title"
        onChange={handleChange}
        formData={formData}
        label="Title"
        className="mt-2"
      />
      <div className="grid grid-cols-2 gap-2">
        <div className="text-primary font-medium">
          <label htmlFor="">Date Start</label>
          <DateInputField
            formData={formData}
            name="dateStart"
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="text-primary font-medium">
          <label htmlFor="">Date End</label>
          <DateInputField
            formData={formData}
            name="dateEnd"
            onChange={handleChange}
            className=""
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <AnimatedInputField
          placeholder="ex: Dhaka, Bangladesh"
          name="location"
          formData={formData}
          label="Add Location"
          onChange={handleChange}
        />
        <AnimatedInputField
          placeholder="ex: KPI Alumni Association"
          name="organizer"
          onChange={handleChange}
          formData={formData}
          label="Organizer"
        />
      </div>
      <div className="flex flex-col gap-1">
        <AnimatedTextArea
          className="w-full h-[100px] "
          name="description"
          onChange={handleChange}
          formData={formData}
          label="Description"
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
      <DialogContent aria-describedby={undefined} className="max-w-[450px]">
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
