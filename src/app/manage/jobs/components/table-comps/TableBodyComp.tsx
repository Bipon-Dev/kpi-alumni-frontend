import React, { useEffect, useState } from "react";
import { TableBody, TableRow, TableHead } from "@/lib/ui/table";
import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/lib/ui/dropdown-menu";
import { getJobs, deleteJob } from "./jobsApi"; // Import the API service

interface JobDto {
  id: number;
  title: string;
  companyName?: string;
  companyAddress?: string;
  category: string;
  jobType?: "PartTime" | "FullTime";
  salary: number;
  salaryType?: "Monthly" | "Annually";
  experience: number;
  location: string;
  joinDate: string;
  deadline: string;
  reference: string;
  aboutJob: string;
  skillNames: string[];
}

const TableBodyComp: React.FC = () => {
  const [jobs, setJobs] = useState<JobDto[]>([]);

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobData = await getJobs();
        setJobs(jobData);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  // Handle Delete
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete job with ID ${id}?`);
    if (!confirmDelete) return;

    try {
      await deleteJob(id);
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id)); // Remove the deleted job from state
      alert("Job deleted successfully.");
    } catch (error) {
      console.error("Failed to delete job:", error);
      alert("Failed to delete job.");
    }
  };

  return (
    <TableBody>
      {jobs.map((job) => (
        <TableRow key={job.id} className="h-[70px] even:bg-primary-50 !border-b-0">
          <TableHead>{job.id}</TableHead>
          <TableHead>{job.title}</TableHead>
          <TableHead>{job.companyName}</TableHead>
          <TableHead>{job.category}</TableHead>
          <TableHead>{job.jobType}</TableHead>
          <TableHead>{job.salary}</TableHead>
          <TableHead>{job.salaryType}</TableHead>
          <TableHead>{job.experience}</TableHead>
          <TableHead>{job.location}</TableHead>
          <TableHead>{job.joinDate}</TableHead>
          <TableHead>{job.deadline}</TableHead>
          <TableHead>{job.reference}</TableHead>
          <TableHead>{job.aboutJob}</TableHead>
          <TableHead>{job.skillNames.join(", ")}</TableHead>
          <TableHead>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Edit Job</DropdownMenuLabel>
                <DropdownMenuLabel>Details</DropdownMenuLabel>
                <DropdownMenuLabel onClick={() => handleDelete(job.id)}>Delete Job</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableHead>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyComp;
