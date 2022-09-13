import SearchBar from "./SearchBar";
import data from "../utils/data.json";
import TrendingContent from "./TrendingSection";

export default function Home() {
  return (
    <div className="flex flex-col w-0 flex-1 overflow-hidden">
      <SearchBar data={data} />
      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        <div className="mt-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <TrendingContent />
          </div>
        </div>{" "}
      </main>
    </div>
  );
}
