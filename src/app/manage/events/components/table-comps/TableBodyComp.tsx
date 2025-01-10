import { TableBody, TableHead, TableRow } from "@/lib/ui/table";
import React from "react";
import { dummyEventData } from "./tableDummyData";
import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/lib/ui/dropdown-menu";
import { useAdmEvent } from "../context/AdmEventProvider";

const TableBodyComp: React.FC = () => {

    const { data } = useAdmEvent();

    console.log(data, "eventTable")

    return (
        <TableBody>
            {dummyEventData.map((event, index) => (
                <TableRow key={index} className="h-[100px] even:bg-secondary-50 !border-b-0">
                    <TableHead>
                        <div className="h-[90px] w-[200px] my-1 bg-red-400 "></div>
                    </TableHead>
                    <TableHead>{event.eventId}</TableHead>
                    <TableHead>{event.title}</TableHead>
                    <TableHead>{event.description}</TableHead>
                    <TableHead>{event.eventDateTime}</TableHead>
                    <TableHead>{event.location}</TableHead>
                    <TableHead>{event.eventStatus}</TableHead>
                    <TableHead >
                        <div className="flex justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="border border-secondary rounded-[5px]">
                                    <EllipsisVertical />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <button>Edit</button>
                                    </DropdownMenuLabel>
                                    <DropdownMenuLabel>
                                        <button
                                            onClick={() => window.location.href = `/manage/event/${event.eventId}/info`}
                                        >
                                            Details
                                        </button>
                                    </DropdownMenuLabel>
                                    <DropdownMenuLabel>
                                        <button>Delete</button>
                                    </DropdownMenuLabel>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </TableHead>
                </TableRow>
            ))
            }
        </TableBody >
    );
};

export default TableBodyComp;
