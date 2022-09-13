import { IContentData } from "../types/types";
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as Bookmark } from "../assets/icon-bookmark-empty.svg";

export default function TrendingItem({
  item,
  index,
}: {
  item: IContentData;
  index: number;
}) {
  //TODO: Bookmark logic
  return (
    <div
      key={`trending_${index}`}
      className="min-w-[28rem] flex justify-between flex-col mr-8 rounded-lg relative"
    >
      <img
        src={`../thumbnails/${item.thumbnail.trending?.large}`}
        alt={`${item.title}-cover`}
        className="rounded-lg w-[28rem] brightness-75"
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 z-10 flex justify-between flex-col p-5 text-white">
        <div className="w-full flex justify-end rounded-md">
          <button className="w-8 h-8 bg-black bg-opacity-25 flex justify-center items-center rounded-full">
            <Bookmark className="scale-150 rotate-2" />
          </button>
        </div>
        <div className="text-gray-400 ">
          <div className="capitalize w-max grid grid-flow-col gap-2 items-center font-thin text-gray-300 text-base">
            <span>{item.year}</span>
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="flex">
              <MovieIcon />
              <span className="ml-1">{item.category}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white" />
            <span>{item.rating}</span>
          </div>
          <h5 className="text-white text-2xl">{item.title}</h5>
        </div>
      </div>
    </div>
  );
}
