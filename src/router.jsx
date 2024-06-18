import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layout/auth-layout/auth-layout";
import Home from "./pages/home";
import DashboardLayout from "./layout/dahboard-layout/dashboard-layout";
import SignIn from "./pages/sign-in";
import Dashboard from "./pages/dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
