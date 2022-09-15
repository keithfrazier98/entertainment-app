import { useContext } from "react";
import FilterSection from "./FilterSection";
import { GlobalContext } from "./GlobalContext";
import GridContent from "./GridContent";

export default function SearchContent() {
  const { data, searchInput } = useContext(GlobalContext);
  return (
    <GridContent
      title={`Found ${data.length} results for ‘${searchInput}’`}
      content={data}
    />
  );
}
