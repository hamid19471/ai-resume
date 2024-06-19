import { FacebookIcon, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="text-center bg-violet-500 py-4 text-slate-800 font-bold text-3xl rounded-lg mx-5 translate-y-5">
        All Services in this website are free
      </div>
      <div className=" flex flex-col  justify-center w-full bg-white h-full items-center px-8 rounded-t-lg">
        <h1 className="text-xl font-bold ">About Resume Chi</h1>
        <p className="  mt-4 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          voluptatem corporis quaerat totam. Dolorem et sunt quo, similique
          aspernatur optio provident. Laborum consequuntur voluptatibus
          praesentium, velit odit voluptatum et architecto!
        </p>
        <div className="flex items-start justify-start mt-4 gap-2">
          <FacebookIcon className="w-7 h-6  rounded-lg p-1 text-gray" />
          <Instagram className="w-7 h-6  rounded-lg p-1 text-gray" />
          <Twitter className="w-7 h-6  rounded-lg p-1 text-gray" />
        </div>
      </div>
      <div className="text-center py-2 bg-violet-500 rounded-t-lg text-xs font-bold tracking-widest">
        Allrights Reserved @ 2024 | Developet by: Hamid Asadi
      </div>
    </footer>
  );
};
export default Footer;
