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
  InputDate,
  InputField,
  InputTextareaField,
} from "@/app/shared/features/InputField";

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
    try {
      await updateEvent(modalData.id, formData);
      refetch();
    } catch (error) {
      console.error("Error creating event:", error);
      return;
    }
    closeModel();
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <InputField
        formData={formData}
        label="Title"
        name="title"
        onChange={handleChange}
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
      <div className="flex gap-2">
        <InputField
          formData={formData}
          label="Add location"
          name="location"
          onChange={handleChange}
        />
        <InputField
          formData={formData}
          label="Organizer"
          name="organizer"
          onChange={handleChange}
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
        <InputTextareaField
          formData={formData}
          label="Description"
          name="Description"
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
