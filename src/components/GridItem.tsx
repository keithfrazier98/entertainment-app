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
  return (
    <div
      key={`trending_${index}`}
      className="flex min-w-[10rem] justify-between flex-col mb-4 mr-8 rounded-lg w-fit relative"
    >
      <button aria-label={"grid item " + item.title} className="group">
        <img
          src={`../thumbnails/${item.thumbnail.regular?.small}`}
          alt={`${item.title}-cover`}
          className="rounded-lg brightness-75 group-hover:brightness-50"
        />

        <PlayButton className="scale-75 -translate-y-3/4" />
      </button>
      <div className="absolute top-5 right-5 z-10 flex justify-between flex-col text-white">
        <BookmarkButton item={item} />
      </div>
      <div className="text-gray-400 mt-2">
        <ContentDescription item={item} size="sm" />
      </div>
    </div>
  );
}
