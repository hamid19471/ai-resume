import Divider from "@/components/ui/divider";

const ExperienceInformation = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="font-semibold text-lg  tracking-wide"
        style={{ color: resumeInfo?.themeColor }}
      >
        Experience
      </h2>
      <ul>
        {resumeInfo?.experience?.map((item) => (
          <li key={item.id}>
            <h2 className="font-bold text-2xl mt-6">{item.title}</h2>
            <div className="flex items-center justify-between gap-3 mb-3">
              <h3 className="font-light text-md">
                <span className="font-semibold">{item.companyName}</span>,{" "}
                {item.city}
              </h3>
              <h4 className="font-light text-sm ">
                {item.startDate} - {item.endDate ? item.endDate : "Present"}
              </h4>
            </div>
            <ul className="font-light text-md text-justify">
              <li>{item.workSummery}</li>
            </ul>
          </li>
        ))}
      </ul>
      <Divider resumeInfo={resumeInfo} />
    </div>
  );
};
export default ExperienceInformation;
