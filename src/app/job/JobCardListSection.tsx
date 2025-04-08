import jobBg from "@/assets/images/kpia-job-card.png";
import { FC, useEffect, useState } from "react";
import axios from "axios";
const JobCardListBody: FC<{ data: any }> = ({ data }) => (
  <div className="w-64 border h-100 p-4 rounded-lg shadow-lg">
    <div className="text-start font-medium text-xl mb-4 line-clamp-1">
      {data?.title || "Khulna Polytechnic Institute Alumni Jobs"}
    </div>
    <img src={jobBg} alt="eventBg" className="rounded-md" />
    <div className="text-xs pt-4">
      Company: <span className="font-semibold">{data?.companyName}</span>
    </div>
    <div className="text-xs">
      Category: <span className="font-semibold">{data?.category}</span>
    </div>
    <div className="text-xs">
      Address: <span className="font-semibold">{data?.companyAddress}</span>
    </div>
    <div className="text-xs">
      Salary: <span className="font-semibold">{data?.salary}</span>
    </div>
  </div>
);

const JobCardListSection = () => {
  const [jobData, setJobData] = useState<any[]>([]);

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/v1/job");
        setJobData(response.data.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, []);
  return (
    <div className="flex flex-wrap justify-between gap-4">
      {jobData.map((job, index) => (
        <JobCardListBody key={index} data={job} />
      ))}
    </div>
  );
};
export default JobCardListSection;
