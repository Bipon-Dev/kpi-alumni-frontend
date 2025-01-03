import React, { useState } from "react";
import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/lib/ui/dialog";
import { sendInvitation } from "../table-comps/jobsApi"; // API service for invitation

interface ModalInviteJobProps {
  closeModal: () => void;
  job: {
    id: number;
    title: string;
    jobLink: string;
  };
}

const ModalInviteJob: React.FC<ModalInviteJobProps> = ({ closeModal, job }) => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendInvite = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    try {
      await sendInvitation(job.id, email); // Call API
      alert(`Invitation sent to ${email}`);
      closeModal();
    } catch (error) {
      console.error("Failed to send invitation:", error);
      alert("Failed to send invitation. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(job.jobLink);
    alert("Job link copied to clipboard!");
  };

  return (
    <Dialog open={true} onOpenChange={closeModal}>
      <DialogContent className="p-6 space-y-6 max-w-lg mx-auto bg-white rounded-lg shadow-xl">
        {/* Dialog Header */}
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Share Job Opportunity
          </DialogTitle>
        </DialogHeader>

        {/* Input Section */}
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Invite a candidate to apply for the job: <span className="font-medium">{job.title}</span>.
          </p>
          <Input
            type="email"
            placeholder="Enter recipient's email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Button Actions */}
        <div className="flex justify-between items-center space-x-4">
          <Button
            className="flex-1 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-200"
            onClick={handleSendInvite}
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Invitation"}
          </Button>
          <Button
            className="flex-1 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
            onClick={handleCopyLink}
          >
            Copy Job Link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalInviteJob;
