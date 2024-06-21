import { getResumeById } from "@/core/HttpService";
import dummy from "@/data/dummy";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [resumeInfo, setResumeInfo] = useState(dummy);

  // const ResumeById = async (resumeId) => {
  //   const { data } = await getResumeById(resumeId);
  //   setResumeInfo(data.data);
  // };
  return (
    <AppContext.Provider value={{ resumeInfo, setResumeInfo }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppConterxt must be used within a AppContextProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };
