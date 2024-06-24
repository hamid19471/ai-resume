const SkillsInformation = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="font-semibold text-lg  tracking-wide mb-8"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <ul className="grid grid-cols-2 ">
        {resumeInfo?.skills?.map((item) => (
          <li key={item.id}>
            <div className="flex items-center justify-between gap-3 mb-3">
              <ul className="font-light text-md list-disc">
                <li className="font-semibold text-sm">{item.name}</li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SkillsInformation;
