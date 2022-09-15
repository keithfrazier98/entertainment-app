import SearchBar from "./SearchBar";
import GridContent from "./GridContent";
import useFilterContent from "../hooks/useFilterContent";
import { FilterFunction } from "../types/types";
import { GlobalContext } from "./GlobalContext";
import { useContext } from "react";
import SearchContent from "./SearchContent";

export default function FilterSection({
  title,
  placeholder,
  filter,
  searchFilter = () => true,
}: {
  title: string;
  placeholder?: string;
  filter: FilterFunction;
  searchFilter?: FilterFunction;
}) {
  const [category] = useFilterContent(filter);
  const { dispatch, searchInput } = useContext(GlobalContext);
  return (
    <div className="flex flex-col flex-1 overflow-hidden no-scrollbar px-4 lg:pr-6 lg:pl-0">
      {placeholder ? (
        <SearchBar
          filter={searchFilter}
          dispatch={dispatch}
          placeholder={placeholder}
        />
      ) : (
        <></>
      )}
      <main className="flex-1 relative overflow-y-auto focus:outline-none  no-scrollbar">
        {searchInput && placeholder ? (
          <SearchContent />
        ) : searchInput && !placeholder ? (
          <></>
        ) : (
          <div className="mt-1 no-scrollbar">
            <div className="max-w-7xl mx-auto no-scrollbar">
              <div className="mt-5">
                <GridContent title={title} content={category} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
