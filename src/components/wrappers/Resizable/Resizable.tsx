"use client";
import useHoverAndBorder from "@/hooks/use-hoverandborder";
import useResizeable from "@/hooks/use-resizable";
import React, { forwardRef, FC, MouseEvent, useRef } from "react";

interface ResizableWrapperProps {
  children: React.ReactNode;
  side?: "horizantal" | "vertical";
}

const ResizableWrapper = ({
  children,
  side = "horizantal",
}: ResizableWrapperProps) => {
  const divRefHoverAndBorder = useRef<HTMLDivElement>(null);
  const { inside, onBorder } = useHoverAndBorder(divRefHoverAndBorder);

  let borderSide;
  switch (side) {
    case "vertical":
      borderSide = onBorder?.isOnBottomBorder;
      break;
    case "horizantal":
      borderSide = onBorder?.isOnRightBorder;
      break;
  }
  const { positionResizeable, draggingResizeable } = useResizeable(
    borderSide
  );
  return (
    <div
      ref={divRefHoverAndBorder}
      style={{
        cursor: inside ? "" : (side == "vertical" ? "n-resize" : "e-resize"),
        width: side == "horizantal" ? positionResizeable.x + "px" : "100%",
        height: side == "vertical" ? positionResizeable.y + "px" : "100%",
        minWidth: "50px",
        minHeight: "50px",
      }}
    >
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default ResizableWrapper;
