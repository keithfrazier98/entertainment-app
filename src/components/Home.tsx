import SearchBar from "./SearchBar";
import data from "../utils/data.json";
import RowContent from "./RowContent";
import GridContent from "./GridContent";
import useFilterContent from "../hooks/useFilterContent";

export default function Home() {
  const [trendingContent] = useFilterContent((item) => item.isTrending);
  const [recommendedContent] = useFilterContent((item) => !item.isTrending);

  return (
    <div className="flex flex-col px-6   flex-1 overflow-hidden no-scrollbar ">
      <SearchBar data={data} placeholder="Search for movies or TV series" />
      <main className="flex-1 relative overflow-y-auto focus:outline-none  no-scrollbar">
        <div className="mt-1 no-scrollbar">
          <div className="max-w-7xl mx-auto pl-4 no-scrollbar">
            <RowContent title="trending" content={trendingContent} />
            <div className="mt-5">
              <GridContent
                title="Recommended for you"
                content={recommendedContent}
              />
            </div>
          </div>
        </div>{" "}
      </main>
    </div>
  );
}
