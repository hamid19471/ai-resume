const ExperienceInformation = ({ resumeInfo }) => {
  return (
    <div>
      <h2>Experience</h2>
      <ul>
        {resumeInfo?.experience?.map((item) => (
          <li key={item.id}>
            <h2>{item.companyName}</h2>
            <div className="flex items-center gap-3">
              <h3>{item.title}</h3>
              <h4>
                {item.startDate} - {item.endDate ? item.endDate : "Present"}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ExperienceInformation;
