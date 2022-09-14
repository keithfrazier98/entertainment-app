import { NavMoviesIcon, NavTVIcon } from "../Icons";
import { IContentData } from "../types/types";
import { classNames } from "../utils/utils";

export default function ContentDescription({
  item,
  textSize,
}: {
  item: IContentData;
  textSize: "sm" | "lg";
}) {
  return (
    <>
      <div
        className={classNames(
          textSize === "lg" ? "text-xs" : "text-xs",
          "items-center font-thin text-gray-300",
          "capitalize w-max grid grid-flow-col gap-2"
        )}
      >
        <span>{item.year}</span>
        <div className="w-1 h-1 rounded-full bg-white" />
        <div className="flex items-center">
          {item.category === "Movie" ? (
            <NavMoviesIcon className="w-4 h-4 fill-gray-300" />
          ) : (
            <NavTVIcon className="w-4 h-4 fill-gray-300" />
          )}
          <span className="ml-1">{item.category}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-white" />
        <span>{item.rating}</span>
      </div>
      <h5
        className={classNames(
          textSize === "lg" ? "text-xl" : "text-sm",
          "text-white "
        )}
      >
        {item.title}
      </h5>
    </>
  );
}
