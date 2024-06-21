const PersonalInformation = ({ resumeInfo }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h2 className="font-bold text-2xl">
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h3
        className="font-semibold text-lg  tracking-wide"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.jobTitle}
      </h3>
      <div className="flex items-center justify-between w-full gap-2">
        <h3 className="font-light text-md flex flex-col">
          <span
            className="font-semibold text-sm"
            style={{ color: resumeInfo?.themeColor }}
          >
            Email:{" "}
          </span>
          {resumeInfo?.email}
        </h3>
        <h3 className="font-light text-md flex flex-col">
          <span
            className="font-semibold text-sm"
            style={{ color: resumeInfo?.themeColor }}
          >
            Phone Number:{" "}
          </span>
          {resumeInfo?.phone}
        </h3>
        <h3 className="font-light text-md flex flex-col">
          <span
            className="font-semibold text-sm"
            style={{ color: resumeInfo?.themeColor }}
          >
            Location:{" "}
          </span>
          {resumeInfo?.location}
        </h3>
      </div>
      <hr
        className="h-2 my-2 w-full"
        style={{ backgroundColor: resumeInfo?.themeColor }}
      />
    </div>
  );
};
export default PersonalInformation;
