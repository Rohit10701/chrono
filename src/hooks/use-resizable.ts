import React, { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
};

const useResizeable = (onBorder: boolean) => {
  const [positionResizeable, setPosition] = useState<Position>({
    x: 600,
    y: 450,
  });
  const [draggingResizeable, setDragging] = useState<boolean>(false);
  const mousePositionRef = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };

      if (onBorder) {
        setDragging(true);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (draggingResizeable) {
        const deltaX = e.clientX - mousePositionRef.current.x;
        const deltaY = e.clientY - mousePositionRef.current.y;

        setPosition((prevPosition) => ({
          x: prevPosition.x + deltaX,
          y: prevPosition.y + deltaY,
        }));
        // Update the mouse positionResizeable ref on mouse move
        mousePositionRef.current = {
          x: e.clientX,
          y: e.clientY,
        };
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingResizeable, onBorder]);
  return { positionResizeable, draggingResizeable };
};

export default useResizeable;