import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { GlobalContext } from "../components/GlobalContext";
import { FilterFunction, IContentData } from "../types/types";
import _data from "../utils/data.json";

/**
 * This hook returns data filtered against a provided filter.
 * @param filter - a function to filter the data with
 * @returns
 */
export default function useFilterContent(
  filter: FilterFunction = () => true
): [IContentData[], Dispatch<SetStateAction<IContentData[]>>] {
  const { data } = useContext(GlobalContext);
  const [selection, setSelection] = useState<IContentData[]>([]);
console.log("yo");

  useEffect(() => {
    setSelection([...data.filter(filter)]);
  }, [data, filter]);

  return [selection, setSelection];
}
