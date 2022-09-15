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
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";

export default function RowItem({
  item,
  index,
  itemId,
}: {
  item: IContentData;
  index: number;
  itemId: string;
}) {
  //TODO: Bookmark logic
  //TODO: Tv series OR Movie icon
  const visibility = useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      id={itemId}
      key={`trending_${index}`}
      className="min-w-[16rem] lg:min-w-[22rem] flex justify-between flex-col mr-8 rounded-lg relative"
    >
      <button className="group">
        <img
          src={`../thumbnails/${item.thumbnail.trending?.large}`}
          alt={`${item.title}-cover`}
          className={classNames(
            "rounded-lg hidden lg:block group-hover:brightness-50 brightness-75 transition-all"
          )}
        />{" "}
        <img
          src={`../thumbnails/${item.thumbnail.trending?.small}`}
          alt={`${item.title}-cover`}
          className={classNames(
            "rounded-lg  lg:hidden group-hover:brightness-50 brightness-75 transition-all"
          )}
        />
        <PlayButton />
      </button>
      <div className="absolute right-5 top-5 z-10 flex justify-between flex-col text-white">
        <div className="w-full flex justify-end rounded-md">
          <BookmarkButton item={item} />
        </div>
      </div>

      <div className="absolute left-4 bottom-3 z-10 flex justify-between flex-col text-gray-400">
        <ContentDescription item={item} size="lg" />
      </div>
    </div>
  );
}
