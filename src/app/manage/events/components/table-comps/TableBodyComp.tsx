import React from "react";
import { TableBody, TableCell, TableRow } from "@/lib/ui/table";
import { useAdmEvent } from "../context/AdmEventProvider";
import useModelStore from "@/lib/stores/useModelStore";
import { GetDate } from "@/app/shared/utils/date";
import { deleteEvent } from "../AdmEventOperation";
import { Option } from "@/app/shared/features/Options";

const TableBodyComp: React.FC = () => {
  const { data, refetch } = useAdmEvent();
  const { openModel } = useModelStore();
  const events = data.events;

  const handleDelete = (id: number) => {
    deleteEvent(id);
    refetch();
  };

  return (
    <TableBody>
      {events?.map((event: any) => (
        <TableRow key={event.id} className="even:bg-secondary-50 !border-b-0">
          <TableCell>{event.id}</TableCell>
          <TableCell>{event.title}</TableCell>
          <TableCell className="">{event.description}</TableCell>
          <TableCell>{event.organizer}</TableCell>
          <TableCell className="!pb-1 !pt-2.5 line-clamp-1">
            {event.location}
          </TableCell>
          <TableCell className="text-center">
            {GetDate(event.dateStart)}
          </TableCell>{" "}
          <TableCell className="text-center">
            {GetDate(event.dateEnd)}
          </TableCell>
          <TableCell>{event.status}</TableCell>
          <TableCell>
            <div className="flex justify-end items-center">
              <Option>
                <button
                  onClick={() => openModel("edit-event", event)}
                  className="w-full"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    (window.location.href = `/events/${event.id}/details`)
                  }
                  className="w-full"
                >
                  Details
                </button>
                <button
                  className="w-full"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>
              </Option>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyComp;
