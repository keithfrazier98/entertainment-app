import { useState } from "react";
import TrendingItem from "./TrendingItem";

export default function TrendingContent() {
  const [trendingContent, setTrendingContent] = useState([]);
  return (
    <div>
      {trendingContent.map((item) => {
        <TrendingItem item={item} />;
      })}
    </div>
  );
}
