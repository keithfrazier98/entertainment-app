import { classNames } from "../utils/utils";
import { PlayIcon } from "../Icons";

export default function PlayButton({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        className || "",
        "group-hover:opacity-100 opacity-0 transition-opacity",
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      )}
    >
      <div className="bg-white bg-opacity-25 rounded-full pl-3 py-3 flex text-white items-center">
        <PlayIcon className="w-6 h-6 scale-150 fill-white" />
        <p className="mx-8 text-lg">Play</p>
      </div>
    </div>
  );
}
