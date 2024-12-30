import { create } from "zustand";
import { toast } from "react-toastify";
import AxiosApi from "@/utils/axios";
import { TApiResponse } from "../types/response";
import { firebaseAuth, googleProvider } from "../google/firebase";
import { signInWithPopup, User } from "firebase/auth";
import axios from "axios";
import { getApiUrl } from "@/utils/env";

import useModelStore from "./useModelStore";

interface IFormData {
  FullName: string;
  Email: string;
  Password1: string;
  Password2: string;
  AcceptTc: boolean;
}

interface IRegistration {
  firebaseUser: User | null;
  loading: boolean;
  regWithEmailPassword: (formData: IFormData) => Promise<void>;
  registrationWithGoogle: () => Promise<void>;
}

const useRegistrationStore = create<IRegistration>((set) => ({
  loading: false,
  firebaseUser: null,
  regWithEmailPassword: async (formData) => {
    set({ loading: true });

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.Email)) {
      set({ loading: false });
      toast.error("Invalid email format");
      return;
    }

    try {
      const { data }: { data: TApiResponse<any> } = await AxiosApi.setPath("/api/v1/registration/with-email").post(
        formData
      );

      set({ loading: false });
      console.log("Email Password registration response: ", data);
      if (data.error !== 0) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
      }
    } catch (error) {
      set({ loading: false });
      throw new Error("Email Password registration error: " + error);
    }
  },
  registrationWithGoogle: async () => {
    set({ loading: true });
    toast.info("Logging in with Google...", { hideProgressBar: true, autoClose: 3000 });

    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");
    googleProvider.addScope("profile");
    googleProvider.addScope("email");
    googleProvider.addScope("openid");

    signInWithPopup(firebaseAuth, googleProvider)
      .then(({ user }) => {
        set({ firebaseUser: user });
        if (user) {
          const headers = {
            "refresh-token": `${user.refreshToken}`,
            "user-uid": `${user.uid}`,
          };
          axios
            .post(`${getApiUrl()}/api/v1/registration/with-provider`, {}, { headers })
            .then(({ data }) => {
              if (data.error === 0) {
                localStorage.setItem("refresh-token", user.refreshToken);
                localStorage.setItem("user-uid", user.uid);
              } else {
                useModelStore.getInitialState().openModel(data.reference);
              }
            })
            .catch((ex: any) => {
              toast.error(ex.message);
            })
            .finally(() => {
              set({ loading: false });
            });
        }
      })
      .catch((error) => {
        throw new Error("Google login error: " + error);
      })
      .finally(() => {
        set({ loading: false });
      });
  },
}));

export default useRegistrationStore;
