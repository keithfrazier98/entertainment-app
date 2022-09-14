import { IContentData } from "../types/types";
import BookmarkButton from "./BookmarkButton";
import {
  BookmarkEmptyIcon,
  BookmarkFullIcon,
  NavMoviesIcon,
} from "./IconLibrary";
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
      <img
        src={`../thumbnails/${item.thumbnail.regular?.small}`}
        alt={`${item.title}-cover`}
        className="rounded-lg brightness-75"
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 z-10 flex justify-between flex-col p-5 text-white">
        <BookmarkButton item={item} index={index} />
      </div>
      <div className="text-gray-400  mt-2">
        <div className="capitalize w-max grid grid-flow-col gap-2 items-center font-thin text-gray-300 text-sm">
          <span>{item.year}</span>
          <div className="w-1 h-1 rounded-full bg-white" />
          <div className="flex">
            <NavMoviesIcon />
            <span className="ml-1">{item.category}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white" />
          <span>{item.rating}</span>
        </div>
        <h5 className="text-white text-xl">{item.title}</h5>
      </div>
    </div>
  );
}
