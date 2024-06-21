import Divider from "@/components/ui/divider";

const EducationInformation = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="font-semibold text-lg  tracking-wide"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h2>
      <ul>
        {resumeInfo?.education?.map((item) => (
          <li key={item.id}>
            <h2 className="font-bold text-xl mt-6">{item.universityName}</h2>
            <div className="flex items-center justify-between gap-3 mb-3">
              <h3 className="font-light text-md">
                <span className="font-light">
                  {item.degree} in {item.major}
                </span>
                , {item.city}
              </h3>
              <h4 className="font-light text-sm ">
                {item.startDate} - {item.endDate}
              </h4>
            </div>
            <ul className="font-light text-md text-justify">
              <li>{item.description}</li>
            </ul>
          </li>
        ))}
      </ul>
      <Divider resumeInfo={resumeInfo} />
    </div>
  );
};
export default EducationInformation;
