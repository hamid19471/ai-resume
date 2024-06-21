import { useAppContext } from "@/context/app-context/app-context";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonalInformation from "./components/personal-information";
import SummeryInformation from "./components/summery-information";
import ExperienceInformation from "./components/experience-information";
import EducationInformation from "./components/education-information";
import SkillsInformation from "./components/skills-information";

const ResumePreview = () => {
  const { resumeId } = useParams();
  const { resumeInfo, ResumeById } = useAppContext();
  // useEffect(() => {
  //   resumeId && ResumeById(resumeId);
  // }, [resumeId]);
  return (
    <div
      className="bg-white w-full p-8 flex flex-col border-t-[20px] "
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <PersonalInformation resumeInfo={resumeInfo} />
      <SummeryInformation resumeInfo={resumeInfo} />
      <ExperienceInformation resumeInfo={resumeInfo} />
      <EducationInformation resumeInfo={resumeInfo} />
      <SkillsInformation resumeInfo={resumeInfo} />
    </div>
  );
};
export default ResumePreview;
