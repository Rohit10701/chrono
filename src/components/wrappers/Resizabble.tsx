"use client"
import useResizeable from "@/hooks/use-resizeabble";
import React, { forwardRef, FC, MouseEvent } from "react";

interface ResizableWrapperProps {
  children: React.ReactNode;
  onResize?: (newSize: { width: number; height: number }) => void;
  onBorder?: boolean;
  style?: React.CSSProperties;
}

const ResizableWrapper =
  (props :  ResizableWrapperProps) => {

    return (
      <div  style={wrapperStyle} onMouseDown={e => handleResize}>
        {children}
      </div>
    );
  }

export default ResizableWrapper;
