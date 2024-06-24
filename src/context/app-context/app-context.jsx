import { getResumeById } from "@/core/HttpService";
// import dummy from "@/data/dummy";
import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [resumeInfo, setResumeInfo] = useState({});

  const ResumeById = async (documentId) => {
    const { data } = await getResumeById(documentId);
    setResumeInfo(data.data);
  };
  return (
    <AppContext.Provider value={{ resumeInfo, setResumeInfo, ResumeById }}>
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
