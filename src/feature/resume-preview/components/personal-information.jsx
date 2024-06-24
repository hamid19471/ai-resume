import Divider from "@/components/ui/divider";

const PersonalInformation = ({ resumeInfo }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h2 className="font-bold text-2xl">
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <div className="flex items-center justify-between w-full mb-5">
        <h3
          className="font-semibold text-lg  tracking-wide"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.jobTitle}
        </h3>
        {/* <div className="flex items-center justify-center gap-2">
          {resumeInfo?.social.map((item) => (
            <a
              href={item.link}
              key={item.id}
              target="_blank"
              className="grayscale"
            >
              <img src={item.icon} alt={item.name} width={20} height={20} />
            </a>
          ))}
        </div> */}
      </div>
      <div className="flex items-center justify-between w-full gap-2">
        <h3 className="font-light text-md flex flex-col text-sm">
          <span
            className="font-semibold text-sm"
            style={{ color: resumeInfo?.themeColor }}
          >
            Email:{" "}
          </span>
          {resumeInfo?.email}
        </h3>
        <h3 className="font-light text-md flex flex-col text-sm">
          <span
            className="font-semibold text-sm"
            style={{ color: resumeInfo?.themeColor }}
          >
            Phone Number:{" "}
          </span>
          {resumeInfo?.phone}
        </h3>
        <h3 className="font-light text-md flex flex-col text-sm">
          <span
            className="font-semibold text-sm"
            style={{ color: resumeInfo?.themeColor }}
          >
            Location:{" "}
          </span>
          {resumeInfo?.location}
        </h3>
      </div>
      <Divider resumeInfo={resumeInfo} />
    </div>
  );
};
export default PersonalInformation;
