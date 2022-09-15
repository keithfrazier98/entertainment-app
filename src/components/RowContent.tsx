import RowItem from "./RowItem";
// import throttle from "lodash/throttle";

import useFilterContent from "../hooks/useFilterContent";
import { IContentData } from "../types/types";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
import { useCallback, useState } from "react";
import useDrag from "../hooks/useDrag";
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default function RowContent({
  title,
  content,
}: {
  title: string;
  content: IContentData[];
}) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  // const [position, setPosition] = useState(0);

  // const savePosition = useCallback(
  //   throttle(({ scrollContainer }: scrollVisibilityApiType) => {
  //     !!scrollContainer.current &&
  //       setPosition(scrollContainer.current.scrollLeft);
  //   }, 500),
  //   []
  // );


  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    //TODO: Scroll horizontal on hover scroll
    <section
      onMouseEnter={disableScroll}
      onMouseLeave={enableScroll}
      className="flex flex-col"
    >
      <h2 className="text-white mb-4 text-2xl font-extralight capitalize">
        {title}
      </h2>
      <div className="overflow-x-scroll no-scrollbar h-fit overflow-y-hidden flex flex-grow">
        {/* <ScrollMenu
          onWheel={onWheel}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        > */}
          {/* onScroll={savePosition} */}
          {content.map((item, index) => (
            <RowItem
              key={"row_item" + index}
              itemId={"row_item" + index}
              item={item}
              index={index}
            />
          ))}
        {/* </ScrollMenu> */}
      </div>
    </section>
  );
}
