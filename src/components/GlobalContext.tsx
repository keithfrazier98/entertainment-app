import { createContext, PropsWithChildren, useReducer, useState } from "react";
import { IDataContext, IContentData, FilterFunction } from "../types/types";
import _data from "../utils/data.json";

function dataReducer(
  state: IContentData[],
  action: {
    type: "updateItem" | "filter";
    filter?: FilterFunction;
    newItem?: IContentData;
  }
) {
  let { type, newItem, filter } = action;

  switch (type) {
    case "updateItem":
      if (!newItem) {
        throw new Error(
          "A new item needs to be passed with the 'updateItem' action type."
        );
      } else {
        return state.map((item) => {
          if (item.title === newItem?.title) {
            return newItem;
          } else {
            return item;
          }
        });
      }

    case "filter":
      if (!filter) {
        return _data;
      }
      return _data.filter(filter);

    default:
      throw new Error("Invalid action type.");
  }
}

export const GlobalContext = createContext({} as IDataContext);

export const GlobalProvider = ({
  children,
}: {
  children: PropsWithChildren<{}>;
}) => {
  //Initialize all the data and provide as a global variable
  const [data, dispatch] = useReducer(dataReducer, _data);
  const [searchInput, setSearchInput] = useState("");

  return (
    <GlobalContext.Provider
      value={{ data, dispatch, searchInput, setSearchInput }}
    >
      {<>{children}</>}
    </GlobalContext.Provider>
  );
};
