import { useEffect, useState } from "react";
import TrendingItem from "./TrendingItem";
import data from "../utils/data.json";
import { IContentData } from "../types/types";

export default function TrendingContent() {
  const [trendingContent, setTrendingContent] = useState<IContentData[]>([]);
  useEffect(() => {
    if (!trendingContent.length && data) {
      console.log(
        "Setting Data",
        data.filter((item) => item.isTrending)
      );
      setTrendingContent([...data.filter((item) => item.isTrending)]);
    }
  }, [data, trendingContent]);
  return (
  //TODO: Scroll horizontal on hover scroll 

    <div className="">
      <div className="flex flex-col">
        <h2 className="text-white mb-4 text-3xl font-extralight">Trending</h2>
        <div className="overflow-x-scroll no-scrollbar h-fit overflow-y-hidden flex flex-grow">
          {trendingContent.map((item, index) => (
            <TrendingItem item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
