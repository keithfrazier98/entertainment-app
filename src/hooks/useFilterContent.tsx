import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { GlobalContext } from "../components/GlobalContext";
import { IContentData } from "../types/types";
import _data from "../utils/data.json";

/**
 * This hook returns data filtered against a provided filter.
 * @param filter - a function to filter the data with
 * @returns
 */
export default function useFilterContent(
  filter: (item: IContentData) => boolean = () => true
): [IContentData[], Dispatch<SetStateAction<IContentData[]>>] {
  const { data } = useContext(GlobalContext);
  const [selection, setSelection] = useState<IContentData[]>([]);

  useEffect(() => {
    setSelection([...data.filter(filter)]);
  }, [data]);

  return [selection, setSelection];
}
