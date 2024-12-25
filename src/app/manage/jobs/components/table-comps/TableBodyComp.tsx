import React, { useEffect, useState } from "react";
import { TableBody, TableRow, TableHead } from "@/lib/ui/table";
import { EllipsisVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/lib/ui/dropdown-menu";
import { getJobs, deleteJob,searchJobs } from "./jobsApi"; // Import the API service
import ModalUpdateJob from "../modals/ModalUpdateJob";
import { SearchCriteria } from "./Search";
import ModalInviteJob from "../modals/ModalInviteJob";

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
  jobLink:string;
}

const TableBodyComp: React.FC<{ searchCriteria: SearchCriteria }> = ({ searchCriteria }) => {
  const [jobs, setJobs] = useState<JobDto[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobDto | null>(null);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

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

  // Handle Edit
  const handleEdit = (job: JobDto) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };
// handle search
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let jobData = [];
        if (Object.values(searchCriteria).some((val) => val)) {
          // Perform search
          jobData = await searchJobs(searchCriteria);
        } else {
          // Fetch all jobs if no search criteria
          jobData = await getJobs();
        }
        setJobs(jobData);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, [searchCriteria]);
//email invite
  const handleInvite = (job: JobDto) => {
    setSelectedJob(job);
    setIsInviteModalOpen(true);
    //console.log("Invite Modal Triggered for Job:", job);
  };

  return (
    <>
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
            <TableHead>{job.jobLink}</TableHead>
            <TableHead>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <EllipsisVertical />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel onClick={() => handleEdit(job)}>Edit Job</DropdownMenuLabel>
                  <DropdownMenuLabel onClick={() => handleDelete(job.id)}>Delete Job</DropdownMenuLabel>
                  <DropdownMenuLabel onClick={() => handleInvite(job)}>Invite</DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>
          </TableRow>
        ))}
      </TableBody>
      {isModalOpen && selectedJob && (
        <ModalUpdateJob
          closeModal={() => setIsModalOpen(false)}
          jobId={selectedJob.id}
        />
      )}

     {isInviteModalOpen && selectedJob && (
        <ModalInviteJob
         closeModal={() => setIsInviteModalOpen(false)} job={selectedJob} />
      )}
    </>
  );
};

export default TableBodyComp;
