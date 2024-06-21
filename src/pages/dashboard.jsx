import { useAppContext } from "@/context/app-context/app-context";
import { getUserResumes } from "@/core/HttpService";
import CreateResume from "@/feature/create-resume/create-resume";
import ResumeList from "@/feature/resume-list/resume-list";
import { useUser } from "@clerk/clerk-react";
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
      <h2 className="font-bold text-3xl ">My Resumes</h2>
      <p className="font-semibold text-sm">View and edit your resumes.</p>
      <CreateResume />
      <div>
        <ResumeList resumeList={resumeList} />
      </div>
    </div>
  );
};
export default Dashboard;
