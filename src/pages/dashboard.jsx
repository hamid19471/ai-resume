import { useAppContext } from "@/context/app-context/app-context";
import { getUserResumes } from "@/core/HttpService";
import CreateResume from "@/feature/create-resume/create-resume";
import ResumeList from "@/feature/resume-list/resume-list";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    if (user) {
      GetAllResumes();
    }
  }, [user]);
  const GetAllResumes = async () => {
    const { data } = await getUserResumes(
      user?.primaryEmailAddress.emailAddress
    );
    setResumeList(data.data);
  };
  return (
    <div className="container mt-12 ">
      <div className="flex items-center justify-between bg-white/20 p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="font-bold text-3xl ">My Resumes</h2>
          <p className="font-semibold text-sm">Create or edit your resumes.</p>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
      <CreateResume />
      <div>
        <ResumeList resumeList={resumeList} />
      </div>
    </div>
  );
};
export default Dashboard;
