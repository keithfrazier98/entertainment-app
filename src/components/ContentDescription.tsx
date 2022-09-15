import { NavMoviesIcon, NavTVIcon } from "../Icons";
import { IContentData } from "../types/types";
import { classNames } from "../utils/utils";

export default function ContentDescription({
  item,
  size,
}: {
  item: IContentData;
  size: "sm" | "lg";
}) {
  return (
    <>
      <div
        className={classNames(
          size === "lg" ? "text-xs" : "text-xs",
          "items-center font-thin text-gray-300",
          "capitalize w-max grid grid-flow-col gap-2"
        )}
      >
        <span>{item.year}</span>
        <div className="w-1 h-1 rounded-full bg-white" />
        <div className="flex items-center">
          {item.category === "Movie" ? (
            <NavMoviesIcon className="lg:w-4 lg:h-4 w-5 h-5 fill-gray-300 scale-75" />
          ) : (
            <NavTVIcon className="lg:w-4 lg:h-4 w-5 h-5 fill-gray-300 scale-75" />
          )}
          <span className="ml-1">{item.category}</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-white" />
        <span>{item.rating}</span>
      </div>
      <p
        className={classNames(
          size === "lg" ? "text-xl" : "text-sm",
          "text-white "
        )}
      >
        {item.title}
      </p>
    </>
  );
}
