import React, { useState } from "react";
import { Button } from "@/lib/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/lib/ui/dialog";
import { Input } from "@/lib/ui/input";
import axios from "axios";

const ModalAddJob: React.FC<{ closeModal: () => void }> = ({ closeModal }) => {
    const [companyId, setCompanyId] = useState<number | null>(null);
    const [companyDetails, setCompanyDetails] = useState<any | null>(null);
    const [formData, setFormData] = useState({
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
        jobLink:""
    });
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const fetchCompanyDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:5050/api/v1/company/${companyId}`);
            setCompanyDetails(response.data.data);
            setError(null);
        } catch (err) {
            setCompanyDetails(null);
            setError("Company not found. Please try a valid Company ID.");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!companyId || !companyDetails) {
            setError("Please select a valid company before creating the job.");
            return;
        }

        try {
            const response = await axios.post(`http://localhost:5050/api/v1/job/${companyId}`, formData);
            alert(response.data.message || "Job created successfully!");
            closeModal();
        } catch (error: any) {
            console.error("Error:", error.response?.data);
            setError(error.response?.data?.message || "An unexpected error occurred. Please try again.");
        }
    };

    return (
        <Dialog open={true} onOpenChange={closeModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-medium text-primary">Add Job</DialogTitle>
                </DialogHeader>
                {error && <div className="text-red-500">{error}</div>}
                
                <div className="flex items-center gap-2 mb-4">
                    <Input 
                        type="number"
                        placeholder="Enter Company ID"
                        value={companyId || ""}
                        onChange={(e) => setCompanyId(Number(e.target.value))}
                    />
                    <Button className="w-[100px] text-white"  onClick={fetchCompanyDetails}>Search</Button>
                </div>

                {companyDetails && (
                    <div className="mb-4">
                        <p ><strong>Company Name:</strong> {companyDetails.name}</p>
                        {/* <p><strong>Location:</strong> {companyDetails.location}</p> */}
                    </div>
                )}

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input name="title" placeholder="Job Title" value={formData.title} onChange={handleInputChange} required />
                    <Input name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} required />
                    <div className="flex gap-2">
                        <select name="jobType" value={formData.jobType} onChange={handleInputChange} className="w-full border rounded-md">
                            <option value="Full-time">PartTime</option>
                            <option value="Part-time">FullTime</option>
                        </select>
                        <Input name="salary" type="number" placeholder="Salary" value={formData.salary} onChange={handleInputChange} />
                        <select name="salaryType" value={formData.salaryType} onChange={handleInputChange} className="w-full border rounded-md">
                            <option value="Monthly">Monthly</option>
                            <option value="Annually">Annually</option>
                        </select>
                    </div>
                    <Input name="experience" type="number" placeholder="Experience (years)" value={formData.experience} onChange={handleInputChange} />
                    <Input name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} required />
                    <Input name="joinDate" type="date" value={formData.joinDate} onChange={handleInputChange} required />
                    <Input name="deadline" type="date" value={formData.deadline} onChange={handleInputChange} required />
                    <Input name="reference" placeholder="Reference" value={formData.reference} onChange={handleInputChange} />
                    <textarea name="aboutJob" placeholder="About the Job" value={formData.aboutJob} onChange={handleInputChange} className="w-full h-24 border rounded-md"></textarea>
                    <Input name="jobLink" placeholder="Job Link" value={formData.jobLink} onChange={handleInputChange} />
                    <div className="flex justify-end gap-2">
                        <Button type="button" className="w-[100px] text-white bg-error" onClick={closeModal}>Cancel</Button>
                        <Button type="submit" className="w-[100px] text-white bg-secondary">Create</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ModalAddJob;
