"use client";
import { cn } from "@/libs/utils";
import { type VariantProps, cva } from "class-variance-authority";
import React, { useEffect, useRef, useState } from "react";

const infiniteScrollVariant = cva(
  "h-[400px] px-3 py-3 m-1 inline-flex flex-col overflow-hidden rounded-sm text-sm font-medium overflow-auto",
  {
    variants: {
      variant: {
        dark: "bg-black text-white ",
        white: "bg-white text-black",
      },
      size: {
        sm: "w-96",
        lg: "w-56",
      },
    },
    defaultVariants: {
      variant: "dark",
      size: "lg",
    },  
  }
);
interface InfiniteScrollProps<T>
  extends VariantProps<typeof infiniteScrollVariant> {
  fetchData: (
    page: number,
    itemPerPage: number
  ) => Promise<{ newContainer: T[]; newPage: number; newHasMore: boolean }>;
  renderContainer: (container: T, index: number) => React.ReactNode;
  initialPage?: number;
  itemPerPage?: number;
  threshold?: number;
  className?: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps<object>> = ({
  fetchData,
  renderContainer,
  initialPage = 1,
  itemPerPage = 10,
  threshold = 0.1,
  className = "",
  variant,
  size,
}) => {
  const [containerList, setContainerList] = useState<object[]>([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  const lastContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData(page, itemPerPage);
        console.log(response);
        if (response?.newContainer) {
          const { newContainer, newPage, newHasMore } = response;
          setPage(newPage);
          setHasMore(newHasMore);
          setContainerList((prevContainers) => [
            ...prevContainers,
            ...newContainer,
          ]);
        } else {
          console.error(
            "Invalid response format: missing newContainer property"
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const targetRef = lastContainerRef.current;
    const observer = new IntersectionObserver(async (entries) => {
      const first = entries[0];
      if (!first?.isIntersecting || !hasMore) {
        return;
      }

      await fetchDataFromApi();
    }, options);

    if (targetRef) {
      observer.observe(targetRef);
    }

    return () => {
      if (targetRef) {
        observer.unobserve(targetRef);
      }
    };
  }, [fetchData, page, itemPerPage, hasMore, threshold]);

  return (
    <div className={cn(infiniteScrollVariant({ variant, size }), className)}>
      {containerList.map((container, index) =>
        renderContainer(container, index)
      )}
      <div ref={lastContainerRef} style={{ height: "10px" }}></div>
    </div>
  );
};

export default InfiniteScroll;
