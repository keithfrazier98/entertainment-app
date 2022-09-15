import { classNames } from "../utils/utils";
import { PlayIcon } from "../Icons";

export default function PlayButton({ className }: { className?: string }) {
  return (
    <span
      className={classNames(
        className || "",
        "group-hover:opacity-100 opacity-0 transition-opacity",
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      )}
    >
      <span className="bg-white bg-opacity-25 rounded-full pl-3 py-3 flex text-white items-center">
        <PlayIcon className="lg:w-6 lg:h-6 w-8 h-8 lg:scale-150 fill-white" />
        <p className="mx-8 text-lg">Play</p>
      </span>
    </span>
  );
}
