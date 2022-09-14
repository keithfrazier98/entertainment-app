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
          "overflow-x-scroll no-scrollbar h-fit overflow-y-hidden grid grid-flow-r gap-4 lg:gap-6",
          "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        )}
      >
        {content.map((item, index) => (
          <GridItem item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
