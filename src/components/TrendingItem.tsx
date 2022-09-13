import { IContentData } from "../types/types";
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as Bookmark } from "../assets/icon-nav-bookmark.svg";

export default function TrendingItem({
  item,
  index,
}: {
  item: IContentData;
  index: number;
}) {
  const getThumbnail = (path?: string) => {
    if (!path) return "";
    try {
        const url = "beyond-earth"
      const img = require(""+`../assets/thumbnails/beyond-earth/trending/small.jpg`);
    //   const img = require(`.${path}`).default;
      return img;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      key={`trending_${index}`}
      className="h-48 w-full flex-grow max-w-md flex justify-between flex-col p-4 rounded-lg relative"
    >
      <div className="absolute right-0 left-0 top-0 bottom-0">
        <img
          src={getThumbnail(item.thumbnail.trending?.large)}
          alt={`${item.title}-cover`}
        />
      </div>
      <div className="w-full flex justify-end">
        <Bookmark />
      </div>
      <div className="text-gray-400 ">
        <div className="capitalize w-min grid grid-flow-col gap-2 items-center text-xs font-thin">
          <span>{item.year}</span>
          <div className="w-1 h-1 rounded-full bg-white" />
          <div className="flex">
            <MovieIcon />
            <span className="ml-1">{item.category}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white" />
          <span>{item.rating}</span>
        </div>
        <h5>{item.title}</h5>
      </div>
    </div>
  );
}
