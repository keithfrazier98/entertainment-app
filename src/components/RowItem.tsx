import { IContentData } from "../types/types";
import { classNames } from "../utils/utils";
import BookmarkButton from "./BookmarkButton";
import {
  BookmarkEmptyIcon,
  NavMoviesIcon,
  NavTVIcon,
  PlayIcon,
} from "../Icons";
import PlayButton from "./PlayButton";
import ContentDescription from "./ContentDescription";

export default function RowItem({
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
      className="min-w-[22rem] flex justify-between flex-col mr-8 rounded-lg relative"
    >
      <button className="group">
        <img
          src={`../thumbnails/${item.thumbnail.trending?.large}`}
          alt={`${item.title}-cover`}
          className={classNames(
            "rounded-lg w-[22rem] group-hover:brightness-50 brightness-75 transition-all"
          )}
        />
        <PlayButton />
      </button>
      <div className="absolute right-5 top-5 z-10 flex justify-between flex-col text-white">
        <div className="w-full flex justify-end rounded-md">
          <button className="w-8 h-8 bg-black bg-opacity-25 flex justify-center items-center rounded-full">
            <BookmarkButton item={item} />
          </button>
        </div>
      </div>

      <div className="absolute left-5 bottom-5 z-10 flex justify-between flex-col text-gray-400">
        <ContentDescription item={item} textSize="lg"/>
      </div>
    </div>
  );
}
