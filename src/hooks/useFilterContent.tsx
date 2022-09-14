import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { GlobalContext } from "../components/DataContext";
import { IContentData } from "../types/types";
import _data from "../utils/data.json";

/**
 * This hook returns data filtered against a provided filter. If no filter
 * is given it will return all of the data.
 * @param filter - a function to filter the data with
 * @returns
 */
export default function useFilterContent(
  filter: (item: IContentData) => boolean = () => true
): [IContentData[], Dispatch<SetStateAction<IContentData[]>>] {
  const { data } = useContext(GlobalContext);

  const [selection, setSelection] = useState<IContentData[]>([]);

  useEffect(() => {
    if (!selection.length) {
      data?.length
        ? setSelection([...data.filter(filter)])
        : setSelection([..._data.filter(filter)]);
    }
  }, [data, selection, filter]);

  return [selection, setSelection];
}
