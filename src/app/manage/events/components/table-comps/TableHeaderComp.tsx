import { TableHead, TableHeader, TableRow } from "@/lib/ui/table";
import React from "react";

const TableHeaderComp: React.FC = () => {
    return (
        <TableHeader>
            <TableRow className="!border-b-0 ">
                <TableHead className="w-[100px] text-primary bg-secondary-100 font-medium text-left rounded-ss-[15px]">Event ID</TableHead>
                <TableHead className="w-[200px] text-primary bg-secondary-100 font-medium text-left">Title</TableHead>
                <TableHead className="font-medium text-justify text-primary bg-secondary-100 ">Description</TableHead>
                {/* <TableHead className="w-[151px]  text-left">Event Time</TableHead> */}
                <TableHead className="w-[200px] text-primary bg-secondary-100 font-medium text-left">Organizer</TableHead>
                <TableHead className="w-[250px] text-primary bg-secondary-100 font-medium text-left">Location/Link</TableHead>
                <TableHead className="w-[100px] text-primary bg-secondary-100 font-medium text-center">Time</TableHead>
                <TableHead className="w-[100px] text-primary bg-secondary-100 font-medium text-left">Status</TableHead>
                <TableHead className="w-[80px] text-primary bg-secondary-100 font-medium text-right rounded-se-[15px]">Action</TableHead>
            </TableRow>
        </TableHeader>
    );
};

export default TableHeaderComp;
