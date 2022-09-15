import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
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
  const { data, searchInput, setSearchInput } = useContext(GlobalContext);
  const [selection, setSelection] = useState<IContentData[]>([]);

  const location = useLocation();

  // const callback = useCallback(filter, [])

  useEffect(() => {
    setSelection([...data.filter(filter)]);

    /**
     * the location in dep array is a workaround for infinate
     * render when having the filter function in the dep array
     *
     * useCallback cant work because the conditional in the filter
     * is what needs to trigger a rerender
     */
  }, [data, location.pathname]);

  return [selection, setSelection];
}
