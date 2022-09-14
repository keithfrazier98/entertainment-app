import { createContext, PropsWithChildren, useReducer } from "react";
import { IDataContext, IContentData } from "../types/types";
import _data from "../utils/data.json";

function dataReducer(state: IContentData[], newItem: IContentData) {
  console.info("Updating content state!");
  return state.map((item) => {
    if (item.title === newItem.title) {
      return newItem;
    } else {
      return item;
    }
  });
}


export const GlobalContext = createContext({} as IDataContext);

export const GlobalProvider = ({
  children,
}: {
  children: PropsWithChildren<{}>;
}) => {
  //Initialize all the data and provide as a global variable
  const [data, dispatch] = useReducer(dataReducer, _data);

  return (
    <GlobalContext.Provider value={{ data, dispatch }}>
      {<>{children}</>}
    </GlobalContext.Provider>
  );
};