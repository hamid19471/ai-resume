const SummeryInformation = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="font-semibold text-lg  tracking-wide"
        style={{ color: resumeInfo?.themeColor }}
      >
        Summary
      </h2>
      <p className="font-light text-md text-justify mt-2 leading-7">
        {resumeInfo?.summery}
      </p>
      <hr
        className="my-4 h-2"
        style={{ backgroundColor: resumeInfo?.themeColor }}
      />
    </div>
  );
};
export default SummeryInformation;
