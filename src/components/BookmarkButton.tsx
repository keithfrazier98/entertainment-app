import { useContext } from "react";
import { IContentData } from "../types/types";
import { classNames } from "../utils/utils";
import { GlobalContext } from "./GlobalContext";
import { BookmarkEmptyIcon, BookmarkFullIcon } from "../Icons";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as BookmarkSolid } from "@heroicons/react/20/solid";

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
        <BookmarkSolid className=" w-5 h-5 fill-white group-hover:invert" />
      ) : (
        <BookmarkIcon className=" w-5 h-5 stroke-white group-hover:invert" />
      )}
    </button>
    // </div>
  );
}
