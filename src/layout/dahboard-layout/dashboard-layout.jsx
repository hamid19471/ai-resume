import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { isSignedIn, isLoaded } = useUser();
  if (!isSignedIn && isLoaded) return <Navigate to={"/sign-in"} />;
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
