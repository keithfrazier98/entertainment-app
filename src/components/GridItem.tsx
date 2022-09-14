import { IContentData } from "../types/types";
import BookmarkButton from "./BookmarkButton";
import ContentDescription from "./ContentDescription";

import PlayButton from "./PlayButton";
export default function GridItem({
  item,
  index,
}: {
  item: IContentData;
  index: number;
}) {
  //TODO: Bookmark logic
  //TODO: Tv series OR Movie icon

  return (
    <div
      key={`trending_${index}`}
      className="flex justify-between flex-col mr-8 rounded-lg relative"
    >
      <button className="group relative">
        <img
          src={`../thumbnails/${item.thumbnail.regular?.small}`}
          alt={`${item.title}-cover`}
          className="rounded-lg brightness-75 group-hover:brightness-50"
        />
        <PlayButton />
      </button>
      <div className="absolute top-5 right-5 z-10 flex justify-between flex-col text-white">
        <BookmarkButton item={item} />
      </div>
      <div className="text-gray-400 mt-2">
        <ContentDescription item={item} textSize="sm" />
      </div>
    </div>
  );
}
