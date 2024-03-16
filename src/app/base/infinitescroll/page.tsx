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
    <div className="flex justify-center items-center h-[100vh]">
      <InfiniteScroll
        fetchData={fetchData}
        renderContainer={renderContainer}
        className="border-2 border-gray-800"
        threshold={0.1}
      />
    </div>
  );
};

export default Page;

// https://adrianroselli.com/2014/05/so-you-think-you-built-good-infinite.html