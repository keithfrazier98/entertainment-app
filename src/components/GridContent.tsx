import { IContentData } from "../types/types";
import { classNames } from "../utils/utils";
import GridItem from "./GridItem";

export default function GridContent({
  title,
  content,
}: {
  title: string;
  content: IContentData[];
}) {
  return (
    <section className="flex flex-col">
      <h2 className="text-white mb-4 text-2xl font-extralight">{title}</h2>
      <div
        className={classNames(
          "grid grid-flow-r gap-4 lg:gap-3",
          "overflow-x-scroll no-scrollbar h-fit overflow-y-hidden",
          "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        )}
      >
        {content.map((item, index) => (
          <GridItem key={"grid_item_" + index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
