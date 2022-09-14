import { classNames } from "../utils/utils";
import { PlayIcon } from "./IconLibrary";

export default function PlayButton() {
  return (
    <div
      className={classNames(
        "group-hover:opacity-100 opacity-0 transition-opacity",
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      )}
    >
      <div className="bg-white bg-opacity-10 rounded-full pl-3 py-3 flex text-white items-center">
        <PlayIcon className="scale-150" />
        <p className="mx-6 text-lg">Play</p>
      </div>
    </div>
  );
}
