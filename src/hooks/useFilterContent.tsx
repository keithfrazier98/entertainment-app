import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IContentData } from "../types/types";
import data from "../utils/data.json";

export default function useFilterContent(
  filter: (item: IContentData) => boolean
): [IContentData[], Dispatch<SetStateAction<IContentData[]>>] {
  const [selection, setSelection] = useState<IContentData[]>([]);

  useEffect(() => {
    if (!selection.length && data) {
      setSelection([...data.filter(filter)]);
    }
  }, [data, selection, filter]);

  return [selection, setSelection];
}
