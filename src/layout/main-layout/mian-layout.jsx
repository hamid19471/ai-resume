import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container grid grid-rows-[80px_1fr_auto] h-screen w-full">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
