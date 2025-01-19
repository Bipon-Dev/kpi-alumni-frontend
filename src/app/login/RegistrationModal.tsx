import useAuthStore from "@/lib/stores/authStore";
import useModelStore from "@/lib/stores/useModelStore";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/lib/ui/alert-dialog";
import { Button } from "@/lib/ui/button";
import { getApiUrl } from "@/utils/env";
import axios from "axios";
import { FC, ReactElement, useState } from "react";
import { toast } from "react-toastify";

const RegistrationModal: FC = (): ReactElement => {
  const [loading, setLoading] = useState(false);
  const { user, logout, setIsAuthenticated } = useAuthStore();
  const { modalName, closeModel } = useModelStore();

  const handleCancel = () => {
    closeModel();
    logout();
  };
  const handleCreateAccount = async () => {
    setLoading(true);
    const headers = {
      "content-type": "application/json",
      "refresh-token": `${user?.refreshToken}`,
      "user-uid": `${user?.uid}`,
    };
    axios
      .post(`${getApiUrl()}/api/v1/registration/with-provider`, { UserUid: user?.uid }, { headers })
      .then(({ data }) => {
        if (data.error === 0) {
          closeModel();
          localStorage.setItem("refresh-token", user?.refreshToken || "");
          localStorage.setItem("user-uid", user?.uid || "");
          toast.success(data.message);
          setIsAuthenticated(true);
          window.location.href = "/";
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <AlertDialog open={modalName === "PromptForRegistration"}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>We can't find your account</AlertDialogTitle>
          <AlertDialogDescription>Do you want to create a new one with your Google account?</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <Button variant="secondary" className="bg-error text-white" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="secondary" className="text-white" onClick={handleCreateAccount} disabled={loading}>
            Yes, Create Account
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RegistrationModal;
