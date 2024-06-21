import ResumeForm from "@/feature/resume-form/resume-form";
import ResumePreview from "@/feature/resume-preview/resume-preview";

const EditResume = () => {
  return (
    <div className="container mt-12 grid grid-cols-1 lg:grid-cols-2">
      <ResumeForm />
      <ResumePreview />
    </div>
  );
};
export default EditResume;
