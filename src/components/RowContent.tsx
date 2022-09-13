import RowItem from "./RowItem";
import useFilterContent from "../hooks/useFilterContent";
import { IContentData } from "../types/types";

export default function RowContent({
  title,
  content,
}: {
  title: string;
  content: IContentData[];
}) {
  return (
    //TODO: Scroll horizontal on hover scroll
    //TODO: "Play" on title hover
    <section className="flex flex-col">
      <h2 className="text-white mb-6 text-3xl font-extralight capitalize">{title}</h2>
      <div className="overflow-x-scroll no-scrollbar h-fit overflow-y-hidden flex flex-grow">
        {content.map((item, index) => (
          <RowItem item={item} index={index} />
        ))}
      </div>
    </section>
  );
}