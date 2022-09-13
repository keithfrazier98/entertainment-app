import SearchBar from "./SearchBar";
import data from "../utils/data.json";
import TrendingContent from "./TrendingSection";

export default function Home() {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden no-scrollbar ">
      <SearchBar data={data} />
      <main className="flex-1 relative overflow-y-auto focus:outline-none  no-scrollbar">
        <div className="mt-1 no-scrollbar">
          <div className="max-w-7xl mx-auto pl-4 no-scrollbar">
            <TrendingContent />
          </div>
        </div>{" "}
      </main>
    </div>
  );
}
