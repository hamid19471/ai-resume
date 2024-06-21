const Divider = ({ resumeInfo }) => {
  return (
    <hr
      className="h-1 my-2 w-full"
      style={{ backgroundColor: resumeInfo?.themeColor }}
    />
  );
};
export default Divider;
