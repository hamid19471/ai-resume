import { File } from "lucide-react";
import { Link } from "react-router-dom";

const ResumeCartItem = ({ item }) => {
  return (
    <div>
      <Link to={`/dashboard/resume/${item.documentId}/edit`} className="group">
        <div className=" mt-6 px-12 py-24 border border-slate-600/40 bg-white/20 flex items-center justify-center rounded-t-xl shadow-md cursor-pointer group-hover:scale-105 duration-150 transition-all ease-in-out group-hover:shadow-2xl">
          <File />
          <h2>Edite Resume</h2>
        </div>
        <div className="text-center py-2 bg-violet-600 text-white group-hover:scale-105 duration-150 transition-all rounded-b-xl group-hover:shadow-2xl">
          {item.title}
        </div>
      </Link>
    </div>
  );
};
export default ResumeCartItem;
