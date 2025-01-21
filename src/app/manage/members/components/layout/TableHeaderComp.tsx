import { TableHead, TableHeader, TableRow } from "@/lib/ui/table";
import React from "react";

const TableHeaderComp: React.FC = () => {
    return (
        <TableHeader>
            <TableRow className="!border-b-0 h-[50px]">
                <TableHead className="w-[150px] text-primary bg-primary-100 font-medium text-left rounded-l-[15px]">Banner</TableHead>
                <TableHead className="w-[100px] text-primary bg-primary-100 font-medium text-left">Event ID</TableHead>
                <TableHead className="w-[151px] text-primary bg-primary-100 font-medium text-left">Title</TableHead>
                <TableHead className="w-[300px] text-primary bg-primary-100 font-medium text-justify">Description</TableHead>
                <TableHead className="w-[200px] text-primary bg-primary-100 font-medium text-left">Event Time</TableHead>
                <TableHead className="w-[175px] text-primary bg-primary-100 font-medium text-left">Location/Link</TableHead>
                <TableHead className="w-[90px] text-primary bg-primary-100 font-medium text-left">Status</TableHead>
                <TableHead className="w-[65px] text-primary bg-primary-100 font-medium text-left rounded-r-[15px]">Action</TableHead>
            </TableRow>
        </TableHeader>
    );
};

export default TableHeaderComp;
