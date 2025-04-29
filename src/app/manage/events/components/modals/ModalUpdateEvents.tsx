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
import { updateEvent } from "../AdmEventOperation";
import { TEventType } from "../AdmEventTypes";
import { SelectField } from "@/app/shared/features/SelectField";
import {
  AnimatedInputField,
  DateInputField,
  AnimatedTextArea,
} from "@bikiran/inputs";
import dayjs from "dayjs";

interface TProps {
  closeModel: () => void;
  modalData: TEventType;
}
type TUpdateEventPayload = {
  title: string;
  dateStart: number;
  dateEnd: number;
  location: string;
  organizer: string;
  description: string;
  status: string;
};

const ModalBody: React.FC<TProps> = ({ closeModel, modalData }) => {
  const defaultFormData: TUpdateEventPayload = {
    title: modalData?.title || "",
    dateStart: modalData?.dateStart || 0,
    dateEnd: modalData?.dateEnd || 0,
    location: modalData?.location || "",
    organizer: modalData?.organizer || "",
    description: modalData?.description || "",
    status: modalData?.status || "",
  };

  const [formData, setFormData] =
    useState<TUpdateEventPayload>(defaultFormData);
  const { refetch, data } = useAdmEvent();

  const statusOptions = data.eventStatus;

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
      await updateEvent(modalData.id, payLoad);
      refetch();
    } catch (error) {
      console.error("Error creating event:", error);
      return;
    }
    closeModel();
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
      <div className="flex gap-2">
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
      <div>
        <SelectField
          formData={formData}
          onChange={handleChange}
          label="Status"
          name="status"
          options={statusOptions.map((status, index) => ({
            id: index,
            title: status,
            value: status,
          }))}
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
          Update
        </Button>
      </div>
    </form>
  );
};

const ModalUpdateEvents = () => {
  const { closeModel, modalName, modalData } = useModelStore();
  return (
    <Dialog open={modalName === "edit-event"} onOpenChange={closeModel}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium text-primary">
            Edit Event
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <ModalBody closeModel={closeModel} modalData={modalData} />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default ModalUpdateEvents;
