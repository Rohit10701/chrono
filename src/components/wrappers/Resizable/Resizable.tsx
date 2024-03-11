"use client";
import useHoverAndBorder from "@/hooks/use-hoverandborder";
import useResizeable from "@/hooks/use-resizable";
import React, { forwardRef, FC, MouseEvent, useRef } from "react";

interface ResizableWrapperProps {
  children: React.ReactNode;
  side? : "up" | "down" | "left" | "right"
}

const ResizableWrapper = ({children, side = "up"}: ResizableWrapperProps) => {
  const divRefHoverAndBorder = useRef<HTMLDivElement>(null);
  const { inside, onBorder } = useHoverAndBorder(divRefHoverAndBorder);
  const { positionResizeable, draggingResizeable } = useResizeable(onBorder?.isOnRightBorder);
  return (
    <div
      ref={divRefHoverAndBorder}
      style={{
        cursor: inside ? "" : "e-resize",
        width: positionResizeable.x + "px",
        height: positionResizeable.y + "px",
        minWidth : "50px",
        minHeight : "50px"
      }}
    >
      <div className="h-fit w-fit">
        {children}
      </div>
    </div>
  );
};

export default ResizableWrapper;
