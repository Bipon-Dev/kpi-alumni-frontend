import { TableBody, TableHead, TableRow } from "@/lib/ui/table";
import React from "react";
import { dummyEventData } from "./tableDummyData";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/lib/ui/dropdown-menu";
const TableBodyComp: React.FC = () => {
  return (
    <TableBody>
      {dummyEventData.map((event, index) => (
        <TableRow
          key={index}
          className="h-[70px] even:bg-primary-50 !border-b-0"
        >
          <TableHead>
            <div className="h-16 my-1 bg-red-400 "></div>
          </TableHead>
          <TableHead>{event.eventId}</TableHead>
          <TableHead>{event.title}</TableHead>
          <TableHead>{event.description}</TableHead>
          <TableHead>{event.eventDateTime}</TableHead>
          <TableHead>{event.location}</TableHead>
          <TableHead>{event.eventStatus}</TableHead>
          <TableHead>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Edit Event</DropdownMenuLabel>
                <DropdownMenuLabel>Details</DropdownMenuLabel>
                <DropdownMenuLabel>Delete Event</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableHead>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyComp;
