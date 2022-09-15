import SearchBar from "./SearchBar";
import data from "../utils/data.json";
import RowContent from "./RowContent";
import GridContent from "./GridContent";
import useFilterContent from "../hooks/useFilterContent";
import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import SearchContent from "./SearchContent";

export default function Home() {
  const [trendingContent] = useFilterContent((item) => item.isTrending);
  const [recommendedContent] = useFilterContent((item) => !item.isTrending);
  const { dispatch, searchInput } = useContext(GlobalContext);

  return (
    <div className="flex flex-col pl-4 lg:pl-0 flex-1 overflow-hidden no-scrollbar ">
      <SearchBar
        dispatch={dispatch}
        placeholder="Search for movies or TV series"
        filter={(item) =>
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        }
      />
      <main className="flex-1 relative overflow-y-auto focus:outline-none  no-scrollbar">
        {searchInput ? (
          <SearchContent />
        ) : (
          <div className="mt-1 no-scrollbar">
            <div className="max-w-7xl mx-auto no-scrollbar">
              <RowContent title="trending" content={trendingContent} />
              <div className="mt-5">
                <GridContent
                  title="Recommended for you"
                  content={recommendedContent}
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
