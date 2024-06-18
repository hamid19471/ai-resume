import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="h-screen flex items-center justify-center font-bold text-7xl">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
