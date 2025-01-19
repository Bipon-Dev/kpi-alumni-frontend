import React, { useState } from "react";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/lib/ui/dialog";
import { statusChange } from "../table-comps/jobsApi";

interface ModalStatusJobProps {
  closeModal: () => void;
  job: {
    id: number;
    status: string;
  };
  onStatusUpdated: () => void; // Callback to refresh table after update
}

const ModalStatusJob: React.FC<ModalStatusJobProps> = ({ closeModal, job, onStatusUpdated }) => {
  const [statusReason, setStatusReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleStatus = async () => {
    if (!statusReason.trim()) {
      setErrorMessage("Please provide a reason for the status change.");
      return;
    }

    setLoading(true);
    setErrorMessage(null); // Clear previous errors
    try {
      await statusChange(job.id, {
        status: job.status === "Active" ? "Inactive" : "Active", // Toggle status
        reason: statusReason,
      });

      // Success feedback
      alert(`Status successfully updated to ${job.status === "Active" ? "Inactive" : "Active"}`);
      closeModal(); // Close the modal after successful update
      onStatusUpdated();
    } catch (error) {
      console.error("Status update failed:", error);
      setErrorMessage("Failed to change status. Please try again."); // Display error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={closeModal}>
      <DialogContent className="p-6 space-y-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Change Job Status</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Are you sure you want to{" "}
            <span
              className={`font-medium ${
                job.status === "Active" ? "text-red-600" : "text-green-600"
              }`}
            >
              {job.status === "Active" ? "Deactivate" : "Activate"}
            </span>{" "}
            this job?
          </p>
          <Input
            type="text"
            placeholder="Reason for status change"
            value={statusReason}
            onChange={(e) => setStatusReason(e.target.value)}
            className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>
        <div className="flex justify-end space-x-3">
          <Button
            className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg"
            onClick={closeModal}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
            onClick={handleStatus}
            disabled={loading}
          >
            {loading ? "Processing..." : "Confirm"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalStatusJob;
