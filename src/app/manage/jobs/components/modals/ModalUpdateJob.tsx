import React, { useState, useEffect } from "react";
import { Button } from "@/lib/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/lib/ui/dialog";
import { Input } from "@/lib/ui/input";
import axios from "axios";

interface JobUpdateData {
  title: string;
  category: string;
  jobType: "FullTime" | "PartTime";
  salary: number;
  salaryType: "Monthly" | "Annually";
  experience: number;
  location: string;
  joinDate: string;
  deadline: string;
  reference: string;
  aboutJob: string;
}

const ModalUpdateJob: React.FC<{ closeModal: () => void; jobId: number }> = ({ closeModal, jobId }) => {
  const [formData, setFormData] = useState<JobUpdateData>({
    title: "",
    category: "",
    jobType: "FullTime",
    salary: 0,
    salaryType: "Monthly",
    experience: 0,
    location: "",
    joinDate: "",
    deadline: "",
    reference: "",
    aboutJob: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Fetch job data when the modal is opened (jobId changes)
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/v1/job/${jobId}`);
        const data = response.data.data;
        //console.log("API Response:", response.data);
       

        // Ensure correct data mapping
        setFormData({
            title: data.title || "",
            category: data.category || "",
            jobType: data.jobType || "FullTime", 
            salary: data.salary || 0,
            salaryType: data.salaryType || "Monthly", 
            experience: data.experience || 0,
            location: data.location || "",
            joinDate: data.joinDate ? new Date(data.joinDate).toISOString().split("T")[0] : "",
            deadline: data.deadline ? new Date(data.deadline).toISOString().split("T")[0] : "",
            reference: data.reference || "",
            aboutJob: data.aboutJob || "",
          });
        setError(null);
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to fetch job details. Please try again.");
      }
    };

    if (jobId) fetchJobDetails();
  }, [jobId]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit the update request
  const handleSubmit = async () => {
    try {
      const updatedFields = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "" && value !== 0)
      );

      if (Object.keys(updatedFields).length === 0) {
        setError("No changes detected.");
        return;
      }

      const response = await axios.put(`http://localhost:5050/api/v1/job/${jobId}`, updatedFields);
     // console.log("Job updated successfully:", response.data);

      setSuccessMessage("Job updated successfully.");
      setError(null);

      setTimeout(() => {
        setSuccessMessage(null);
        closeModal(); // Close modal after success
      }, 2000);
    } catch (err) {
      console.error("Error updating job:", err);
      setError("Failed to update job. Please try again.");
    }
  };

  return (
    <Dialog open={true} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Job</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          {/* Form Fields */}
          <label>
            Title:
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Category:
            <Input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </label>
          <label>
            Job Type:
            <select name="jobType" value={formData.jobType} onChange={handleChange}>
              <option value="FullTime">Full-Time</option>
              <option value="PartTime">Part-Time</option>
            </select>
          </label>
          <label>
            Salary:
            <Input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </label>
          <label>
            Salary Type:
            <select name="salaryType" value={formData.salaryType} onChange={handleChange}>
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </label>
          <label>
            Experience:
            <Input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Join Date:
            <Input
              type="date"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Deadline:
            <Input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
            />
          </label>
          <label>
            Reference:
            <Input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
            />
          </label>
          <label>
            About Job:
            <textarea
              name="aboutJob"
              value={formData.aboutJob}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md"
            />
          </label>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <Button className="w-[100px] text-white bg-secondary" onClick={handleSubmit}>Update</Button>
          <Button className="w-[100px] text-white bg-error" onClick={closeModal}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalUpdateJob;
