"use client"
import React, { useEffect, useRef, useState } from "react";

interface InfiniteScrollProps {
  fetchData: (
    page: number,
    itemPerPage: number
  ) => Promise<{ newContainer: any[]; newPage: number; newHasMore: boolean }>;
  renderContainer: (container: any, index: number) => React.ReactNode;
  initialPage?: number;
  itemPerPage: number;
  threshold?: number;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  fetchData,
  renderContainer,
  initialPage = 1,
  itemPerPage,
  threshold = 0.1,
}) => {
  const [containerList, setContainerList] = useState<any[]>([]);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  const lastContainerRef = useRef<HTMLDivElement>(null);


  

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData(page, itemPerPage);
        console.log(response)
        if (response && response.newContainer) {
          const { newContainer, newPage, newHasMore } = response;
          setPage(newPage);
          setHasMore(newHasMore);
          setContainerList((prevContainers) => [...prevContainers, ...newContainer]);
        } else {
          console.error("Invalid response format: missing newContainer property");
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
      if (!first.isIntersecting || !hasMore) {
        return;
      }

      fetchDataFromApi();
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
    <div className="h-[400px] overflow-auto">
      {containerList.map((container, index) => renderContainer(container, index))}
      <div ref={lastContainerRef} style={{ height: "10px" }}>
      </div>
    </div>
  );
};

export default InfiniteScroll;
