import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { isSignedIn, isLoaded } = useUser();
  if (!isSignedIn && isLoaded) return <Navigate to={"/sign-in"} />;
  return (
    <div className="h-screen flex items-center justify-center font-bold text-7xl">
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
