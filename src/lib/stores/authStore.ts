/* eslint-disable no-useless-catch */
import { create } from "zustand";
import { signInWithEmailAndPassword, signInWithPopup, signOut, User } from "firebase/auth";
import { firebaseAuth, githubProvider, googleProvider } from "../google/firebase";
import { toast } from "react-toastify";
import AxiosApi from "@/utils/axios";
import axios from "axios";
import { getApiUrl } from "@/utils/env";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loginMessage: string;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  userInfo: any;
  setUserInfo: (userInfo: any) => void;
  loading: boolean;
  verifyLogin: (user?: User) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGitHub: () => Promise<void>;
  loginWithEmailPassword: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

import useModelStore from "./useModelStore";

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  isAuthenticated: false,
  loginMessage: "",
  setIsAuthenticated: (isAuthenticated) => {
    set({ isAuthenticated });
  },
  //--Set User Info
  userInfo: {},
  setUserInfo: (data) => {
    set({ userInfo: data });
  },
  //--Verify login
  verifyLogin: async () => {
    set({ loading: true, isAuthenticated: false });
    const headers = {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("Authorization")}`,
    };

    try {
      const { data }: { data: any } = await axios.get(`${getApiUrl()}/api/v1/auth`, { headers });

      if (data.error !== 0) {
        set({ isAuthenticated: false, loading: false });
        throw new Error(data.message);
      }
      set({ userInfo: data, loading: false, isAuthenticated: true });
    } catch (ex: any) {
      throw ex;
    }
  },
  //--Login with Google
  loginWithGoogle: async () => {
    set({ loading: true });
    toast.info("Logging in with Google...", { hideProgressBar: true, autoClose: 3000 });

    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");
    googleProvider.addScope("https://www.googleapis.com/auth/userinfo.email");
    googleProvider.addScope("profile");
    googleProvider.addScope("email");
    googleProvider.addScope("openid");

    signInWithPopup(firebaseAuth, googleProvider)
      .then(({ user }) => {
        if (user) {
          const headers = {
            "refresh-token": `${user.refreshToken}`,
            "user-uid": `${user.uid}`,
          };
          axios
            .post(`${getApiUrl()}/api/v1/auth`, {}, { headers })
            .then(({ data }) => {
              if (data.error === 0) {
                localStorage.setItem("refresh-token", user.refreshToken);
                localStorage.setItem("user-uid", user.uid);
                set({ user: user, loading: false });
              } else {
                set({ user: user, loading: false });
                useModelStore.getInitialState().openModel(data.reference);
              }
            })
            .catch((ex: any) => {
              toast.error(ex.message);
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

  //--Login with Github
  loginWithGitHub: async () => {
    set({ loading: true });
    toast.info("Logging in with Github...", { hideProgressBar: true, autoClose: 3000 });

    githubProvider.addScope("user:email");
    try {
      const { user } = await signInWithPopup(firebaseAuth, githubProvider);
      set({ user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Github login error: " + error);
    }
  },
  //--Login with Email and Password
  loginWithEmailPassword: async (email, password) => {
    set({ loading: true });

    //--valid email using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      set({ loading: false });
      toast.error("Invalid email format");
      return;
    }

    if (password.length < 6) {
      set({ loading: false });
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const loginInfo = await AxiosApi.setPath("api/v1/login").post({ type: "email", email: email });

      if (loginInfo.data.Error !== 0) {
        toast.error(loginInfo.data.Message);
        return;
      }

      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);
      set({ user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw new Error("Email and Password login error: " + error);
    }
  },
  //--Logout
  logout: async () => {
    set({ loading: true });

    try {
      await signOut(firebaseAuth);
      localStorage.removeItem("refresh-token");
      localStorage.removeItem("user-uid");
    } catch (error) {
      set({ loading: false });
      throw new Error("Logout error: " + error);
    }
  },
}));

export default useAuthStore;
