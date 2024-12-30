import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./app/home";
import LoginPage from "@/app/login/LoginPage";
import ProtectedRoute from "./lib/auth/protectRoute";
import ManageDashboardPage from "./app/manage/dashboard/ManageDashboardPage";
import LoadingPage from "./lib/loading/loadingPage";
import SignupPage from "./app/login/SignupPage";
import { ToastContainer } from "react-toastify";
import useInitStore from "./lib/stores/initStore";
import { useEffect } from "react";
import LayoutComp from "./lib/layout/LayoutComp";
import AdmEventPage from "./app/manage/events/AdmEventPage";
import MembersPage from "./app/members/MembersPage";
import MembersGroupsSections from "./app/members/MembersGroupSection";
import EventPage from "./app/events/EventPage";
import AdmMembersPage from "./app/manage/members/AdmMembersPage";
import AdmJobsPage from "./app/manage/jobs/AdmJobsPage";
import AdmManageUserPage from "./app/manage/users/AdmManageUserPage";
import useAuthStore from "./lib/stores/authStore";
import JobDetailsPage from "./app/manage/jobs/components/table-comps/JobDetailsPage";

const isAuthenticated = true; // Change this based on real authentication state

const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <div>404 Not Found</div>,
    },
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/members",
      element: <MembersPage />,
    },
    {
      path: "/MembersGroupSection",
      element: <MembersGroupsSections />,
    },
    {
      path: "/events",
      element: <EventPage />,
    },
    {
      path: "/manage",
      element: <LayoutComp />,
      children: [
        {
          path: "/manage",
          element: (
            <ProtectedRoute
              element={<ManageDashboardPage />}
              isAuthenticated={isAuthenticated}
            />
          ),
        },
        {
          path: "/manage/dashboard",
          element: (
            <ProtectedRoute
              element={<ManageDashboardPage />}
              isAuthenticated={isAuthenticated}
            />
          ),
        },
        {
          path: "/manage/event",
          element: (
            <ProtectedRoute
              element={<AdmEventPage />}
              isAuthenticated={isAuthenticated}
            />
          ),
        },
        {
          path: "/manage/user",
          element: (
            <ProtectedRoute
              element={<AdmManageUserPage />}
              isAuthenticated={isAuthenticated}
            />
          ),
        },
        {
          path: "/manage/jobs",
          element: (
            <ProtectedRoute
              element={<AdmJobsPage />}
              isAuthenticated={isAuthenticated}
            />)
        },
        {
          path: "/manage",
          children: [
            {
              path: "jobs/:id", 
              element: <JobDetailsPage />,
            },
          ],
        },
        {
          path: "/manage/members",
          element: (
            <ProtectedRoute
              element={<AdmMembersPage />}
              isAuthenticated={isAuthenticated}
            />)
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
    },
  }
);

export const RouteHandler = () => {
  const { loadInitInfo } = useInitStore();
  const { verifyLogin, setUserInfo, loading } = useAuthStore();

  useEffect(() => {
    (async () => {
      await loadInitInfo();
    })();
  }, [loadInitInfo]);

  useEffect(() => {
    (async () => {
      await verifyLogin();
    })();
  }, [setUserInfo, verifyLogin]);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <>
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true }}
        fallbackElement={<LoadingPage />}
      />
      <ToastContainer
        theme="light"
        pauseOnHover
        position="bottom-left"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
      />
    </>
  );
};
