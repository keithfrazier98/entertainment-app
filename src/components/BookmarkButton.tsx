import { IContentData } from "../types/types";
import { BookmarkEmptyIcon, BookmarkFullIcon } from "./IconLibrary";

export default function BookmarkButton({ item }: { item: IContentData }) {
  return (
    <div className="w-full flex justify-end rounded-md">
      <button className="w-8 h-8 bg-black bg-opacity-25 flex justify-center items-center rounded-full">
        {item.isBookmarked ? (
          <BookmarkFullIcon className="scale-150" />
        ) : (
          <BookmarkEmptyIcon className="scale-150 rotate-2" />
        )}
      </button>
    </div>
  );
}
