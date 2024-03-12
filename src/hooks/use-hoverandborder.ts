import React, { RefObject, useEffect, useState } from "react";

const useHoverAndBorder = (
  divRef: RefObject<HTMLDivElement>
) => {
  const [isInside, setIsInside] = useState<boolean>(false);
  const [isOnBorder, setIsOnBorder] = useState({
    isOnHorizontalBorder: false,
    isOnVerticalBorder: false,
    isOnRightBorder: false,
    isOnBottomBorder: false,
  });
  console.log(typeof isOnBorder)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (divRef.current) {
        // Future me if need to look hwo getBounding works https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

        const { left, top, width, bottom } =
          divRef.current.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const insideHorizontal =
          mouseX > left + 10 && mouseX < left + width - 10;
        const insideVertical = mouseY > top + 10 && mouseY < top + bottom - 10;

        const isInsideDiv = insideHorizontal && insideVertical;

        const isOnHorizontalBorder =
          mouseY > top &&
          mouseY < top + bottom &&
          (mouseX < left + 10 || mouseX > left + width - 10);
        const isOnVerticalBorder =
          mouseX > left &&
          mouseX < left + width &&
          (mouseY < top + 10 || mouseY > top + bottom);

        // Check right and bottom borders
        const isOnRightBorder =
          mouseX > left + width - 10 && mouseX < left + width && mouseY > top && mouseY < bottom;
        const isOnBottomBorder =
          mouseY > top + bottom - 10 && mouseY < top + bottom && mouseX > left && mouseX < width;

        setIsInside(isInsideDiv);
        setIsOnBorder({
          isOnHorizontalBorder: isOnHorizontalBorder,
          isOnVerticalBorder: isOnVerticalBorder,
          isOnRightBorder: isOnRightBorder,
          isOnBottomBorder: isOnBottomBorder,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [divRef]);

  return { inside: isInside, onBorder: isOnBorder };
};

export default useHoverAndBorder;
