import { useContext } from "react";
import { IContentData } from "../types/types";
import { classNames } from "../utils/utils";
import { GlobalContext } from "./GlobalContext";
import { BookmarkEmptyIcon, BookmarkFullIcon } from "./IconLibrary";

export default function BookmarkButton({ item }: { item: IContentData }) {
  const { dispatch } = useContext(GlobalContext);
  function clickHandler() {
    dispatch({ ...item, isBookmarked: !item.isBookmarked });
  }
  return (
    // <div className="w-full flex justify-end rounded-md group">
    <button
      onClick={clickHandler}
      className={classNames(
        "w-8 h-8 bg-black hover:bg-white group",
        "bg-opacity-25 flex justify-center items-center rounded-full"
      )}
    >
      {item.isBookmarked ? (
        <BookmarkFullIcon className="scale-150" />
      ) : (
        <BookmarkEmptyIcon className="scale-150 rotate-2 group-hover:invert" />
      )}
    </button>
    // </div>
  );
}
