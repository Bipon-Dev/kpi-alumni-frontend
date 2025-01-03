import { TableHead, TableHeader, TableRow } from "@/lib/ui/table";
import React from "react";


const TableHeaderComp: React.FC = () => {
    return (
        <TableHeader>
            <TableRow className="!border-b-0 h-[50px]">
                
                <TableHead className="w-[100px] text-primary bg-primary-100 font-medium text-left">Job ID</TableHead>
                <TableHead className="w-[151px] text-primary bg-primary-100 font-medium text-left">Title</TableHead>
                <TableHead className="w-[180px] text-primary bg-primary-100 font-medium text-justify">Company Name</TableHead>
                <TableHead className="w-[150px] text-primary bg-primary-100 font-medium text-left">Category</TableHead>
                <TableHead className="w-[150px] text-primary bg-primary-100 font-medium text-left">Job Type</TableHead>
                <TableHead className="w-[150px] text-primary bg-primary-100 font-medium text-left">Salary</TableHead>
                <TableHead className="w-[150px] text-primary bg-primary-100 font-medium text-left">Salary Type</TableHead>
                <TableHead className="w-[120px] text-primary bg-primary-100 font-medium text-left">Experience</TableHead>
                <TableHead className="w-[175px] text-primary bg-primary-100 font-medium text-left">Location</TableHead>
                <TableHead className="w-[150px] text-primary bg-primary-100 font-medium text-left">Join Date</TableHead>
                <TableHead className="w-[120px] text-primary bg-primary-100 font-medium text-left">Deadline</TableHead>
                <TableHead className="w-[90px] text-primary bg-primary-100 font-medium text-left">Reference</TableHead>
                <TableHead className="w-[150px] text-primary bg-primary-100 font-medium text-left">About Job</TableHead>
                <TableHead className="w-[150px] text-primary bg-primary-100 font-medium text-left">Required Skill</TableHead>
                <TableHead className="w-[80px] text-primary bg-primary-100 font-medium text-left">Job Link</TableHead>
                <TableHead className="w-[65px] text-primary bg-primary-100 font-medium text-left rounded-r-[15px]">Action</TableHead>
            </TableRow>
        </TableHeader>
    );
};

export default TableHeaderComp;
