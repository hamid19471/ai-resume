import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <header className="flex items-center justify-between w-full bg-white px-4 mt-2 rounded-xl shadow-md">
      <div className="flex items-center">
        <span className="w-2 h-2 rounded-full bg-violet-700 mr-1"></span>
        <h2 className="font-bold text-xl uppercase">Resume</h2>
        <span className="text-[8px] font-semibold rotate-90 ">CHI</span>
        <span className="w-2 h-2 rounded-full bg-violet-700"></span>
      </div>
      <div>
        {isSignedIn ? (
          <Link
            to={"/dashboard"}
            className="flex items-center justify-center gap-2"
          >
            <Button variant="default">Dashboard</Button>
            <span>|</span>
            <UserButton />
          </Link>
        ) : (
          <Link to={"/sign-in"}>
            <Button variant="default">Get Start</Button>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
