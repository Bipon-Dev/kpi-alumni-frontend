import { TableBody, TableCell, TableRow } from "@/lib/ui/table";
import React from "react";
// import { dummyEventData } from "./tableDummyData";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/lib/ui/dropdown-menu";
import { useAdmEvent } from "../context/AdmEventProvider";
import useModelStore from "@/lib/stores/useModelStore";
import { GetDate } from "@/app/shared/utils/date";
import { deleteEvent } from "../AdmEventOperation";

const TableBodyComp: React.FC = () => {
  const { data, refetch } = useAdmEvent();
  const { openModel } = useModelStore();

  const handleDelete = (id: number) => {
    deleteEvent(id);
    refetch();
  };

  return (
    <TableBody>
      {data.map((event, index) => (
        <TableRow key={index} className="even:bg-secondary-50 !border-b-0">
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
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger className="bg-secondary-200 text-secondary border border-secondary-50 rounded-[5px]">
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <button
                      onClick={() => openModel("edit-event", event)}
                      className="w-full"
                    >
                      Edit
                    </button>
                  </DropdownMenuLabel>
                  <DropdownMenuLabel>
                    <button
                      onClick={() =>
                        (window.location.href = `/manage/event/${event.id}/info`)
                      }
                      className="w-full"
                    >
                      Details
                    </button>
                  </DropdownMenuLabel>
                  <DropdownMenuLabel>
                    <button
                      className="w-full"
                      onClick={() => handleDelete(event.id)}
                    >
                      Delete
                    </button>
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyComp;
