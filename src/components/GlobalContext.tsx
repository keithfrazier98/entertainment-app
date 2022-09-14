import { createContext, PropsWithChildren, useReducer } from "react";
import useFilterContent from "../hooks/useFilterContent";
import { IDataContext, IContentData } from "../types/types";
import _data from "../utils/data.json";

export const GlobalContext = createContext({} as IDataContext);

export const GlobalProvider = ({
  children,
}: {
  children: PropsWithChildren<{}>;
}) => {
  function dispatchReducer(state: IContentData[], newItem: IContentData) {
    return state.map((item) => {
      if (item.title === newItem.title) {
        return newItem;
      } else {
        return item;
      }
    });
  }

  //Initialize all the data and provide as a global variable
  const [data, dispatch] = useReducer(dispatchReducer, _data);
  return (
    <GlobalContext.Provider value={{ data, dispatch }}>
      {<>{children}</>}
    </GlobalContext.Provider>
  );
};
