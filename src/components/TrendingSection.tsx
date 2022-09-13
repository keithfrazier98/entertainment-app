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
    <div>
      <h2 className="text-white mb-4 text-xl font-extralight">Trending</h2>
      <div className="w-content overflow-x-scroll flex">
        {trendingContent.map((item, index) => (
          <TrendingItem item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
