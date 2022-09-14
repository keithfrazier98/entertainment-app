import { useEffect, useState } from "react";
import useFilterContent from "../hooks/useFilterContent";
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
    <div>
      <section className="flex flex-col">
        <h2 className="text-white mb-4 text-3xl font-extralight">{title}</h2>
        <div
          className={classNames(
            "overflow-x-scroll no-scrollbar h-fit overflow-y-hidden grid grid-flow-row gap-6",
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {content.map((item, index) => (
            <GridItem item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
