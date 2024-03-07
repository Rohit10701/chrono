"use client";
import InfiniteScroll from "@/components/base/InfiniteScroll";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [data, setData] = useState("")
  const renderContainer = (container: any, index: number) => (
    <div
      key={index}
      style={{ border: "1px solid #ccc", padding: "10px", margin: "5px" }}
    >
      {container.text} 
      <button onClick={e=> (setData(container.text))}>Click</button>
    </div>
  );

  console.log(data)

  
  const fetchData = async (page: number, itemsPerPage: number) => {
    const response = await fetch(`/api/infinitescroll?page=${page}&itemsPerPage=${itemsPerPage}`);
    return response.json();
  };

  return (
    <div>
      <h1>Infinite Scroll Example</h1>
      <InfiniteScroll
        fetchData={fetchData}
        renderContainer={renderContainer}
        initialPage={1}
        itemPerPage={10 }
        threshold={0.1}
      />
    </div>
  );
};

export default Page;
