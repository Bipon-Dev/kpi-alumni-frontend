import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface JobDetails {
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

const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/v1/job/${id}`);
        setJobDetails(response.data.data); // Adjust based on API response structure
        console.log("job Detail:", response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
        alert("Failed to load job details.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!jobDetails) {
    return <div>Job not found.</div>;
  }

  return (
    <div className="p-6 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 border border-gray-300">
        <h1 className="text-3xl font-semibold text-center mb-4">{jobDetails.title}</h1>
        <div className="space-y-4">
          <p><strong>Company:</strong> {jobDetails.companyName}</p>
          <p><strong>Category:</strong> {jobDetails.category}</p>
          <p><strong>Salary:</strong> {jobDetails.salary} </p>
          <p><strong>Experience:</strong> {jobDetails.experience} years</p>
          <p><strong>Location:</strong> {jobDetails.location}</p>
          <p><strong>Deadline:</strong> {jobDetails.deadline}</p>
          <p><strong>Description:</strong> {jobDetails.aboutJob}</p>
        </div>

        {/* Apply Now Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
