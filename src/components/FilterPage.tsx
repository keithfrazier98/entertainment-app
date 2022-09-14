import SearchBar from "./SearchBar";
import GridContent from "./GridContent";
import useFilterContent from "../hooks/useFilterContent";
import { FilterFunction } from "../types/types";

export default function FilterPage({
  title,
  filter,
}: {
  title: string;
  filter: FilterFunction;
}) {
  const [category] = useFilterContent(filter);

  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden no-scrollbar ">
      <SearchBar data={category} placeholder="Search for movies" />
      <main className="flex-1 relative overflow-y-auto focus:outline-none  no-scrollbar">
        <div className="mt-1 no-scrollbar">
          <div className="max-w-7xl mx-auto pl-4 no-scrollbar">
            <div className="mt-5">
              <GridContent title={title} content={category} />
            </div>
          </div>
        </div>{" "}
      </main>
    </div>
  );
}
