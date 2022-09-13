import { useEffect, useState } from "react";
import useFilterContent from "../hooks/useFilterContent";
import { IContentData } from "../types/types";
import GridItem from "./RecommendedItem";

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
        <h2 className="text-white mb-4 text-3xl font-extralight">
          {title}
        </h2>
        <div className="overflow-x-scroll no-scrollbar h-fit overflow-y-hidden flex flex-wrap">
          {content.map((item, index) => (
            <GridItem item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
