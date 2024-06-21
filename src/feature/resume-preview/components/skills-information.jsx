const SkillsInformation = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="font-semibold text-lg  tracking-wide mb-8"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <ul className="grid grid-cols-2">
        {resumeInfo?.skills?.map((item) => (
          <li key={item.id}>
            <div className="flex items-center justify-between gap-3 mb-3">
              <h3 className="font-light text-md">
                <span className="font-semibold">{item.name}</span>
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SkillsInformation;
