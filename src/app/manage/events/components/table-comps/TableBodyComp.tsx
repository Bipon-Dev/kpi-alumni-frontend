import { TableBody, TableCell, TableRow } from "@/lib/ui/table";
import React from "react";
// import { dummyEventData } from "./tableDummyData";
import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/lib/ui/dropdown-menu";
import { useAdmEvent } from "../context/AdmEventProvider";

const TableBodyComp: React.FC = () => {
    const { data } = useAdmEvent();

    return (
        <TableBody>
            {data.map((event, index) => (
                <TableRow key={index} className="h-[100px] even:bg-secondary-50 !border-b-0">
                    <TableCell>
                        <div className="h-[90px] w-[200px] my-1 bg-red-400 "></div>
                    </TableCell>
                    <TableCell>{event.id}</TableCell>
                    <TableCell>{event.title}</TableCell>
                    <TableCell>{event.description}</TableCell>
                    {/* <TableCell>{event}</TableCell> */}
                    <TableCell>{event.location}</TableCell>
                    <TableCell>{event.status}</TableCell>
                    <TableCell >
                        <div className="flex justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    className="bg-secondary-200 text-secondary border border-secondary-50 rounded-[5px]">
                                    <EllipsisVertical />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>
                                        <button>Edit</button>
                                    </DropdownMenuLabel>
                                    <DropdownMenuLabel>
                                        <button
                                            onClick={() => window.location.href = `/manage/event/${event.id}/info`}
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
                    </TableCell>
                </TableRow>
            ))
            }
        </TableBody >
    );
};

export default TableBodyComp;
