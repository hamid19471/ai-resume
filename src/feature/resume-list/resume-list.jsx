import ResumeCartItem from "./resume-cart-item";

const ResumeList = ({ resumeList }) => {
  if (resumeList.length === 0)
    return <div className="text-center w-full mt-12">No Resume</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {resumeList.length > 0 &&
        resumeList.map((item) => (
          <div key={item.id}>
            <ResumeCartItem item={item} />
          </div>
        ))}
    </div>
  );
};
export default ResumeList;
