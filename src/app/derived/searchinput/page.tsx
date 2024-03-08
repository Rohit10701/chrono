"use client"
import SearchInput from '@/components/derived/SearchInput'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    
    const fetchData = async (page: number, itemsPerPage: number)=> {
        const response = await fetch(`/api/infinitescroll?page=${page}&itemsPerPage=${itemsPerPage}`);
        return response.json();
      };
    const searchFunction = (searchTerm : string) => {
        if (searchTerm === "rohit"){
            return fetchData(1, 10)
        }
        return fetchData(50, 2)
    }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <SearchInput searchFunction={searchFunction}/>
    </div>
  )
}

export default Page