import { createContext, PropsWithChildren } from "react";
import useFilterContent from "../hooks/useFilterContent";
import { IDataContext } from "../types/types";

export const GlobalContext = createContext({} as IDataContext);

export const GlobalProvider = ({
  children,
}: {
  children: PropsWithChildren<{}>;
}) => {
  //Initialize all the data and provide as a global variable
  const [data, setData] = useFilterContent();
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {<>{children}</>}
    </GlobalContext.Provider>
  );
};
