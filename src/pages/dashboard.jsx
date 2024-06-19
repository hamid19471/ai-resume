import CreateResume from "@/feature/create-resume/create-resume";

const Dashboard = () => {
  return (
    <div className="container mt-12 ">
      <h2 className="font-bold text-3xl ">My Resumes</h2>
      <p className="font-semibold text-sm">View and edit your resumes.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8s">
        <CreateResume />
      </div>
    </div>
  );
};
export default Dashboard;
