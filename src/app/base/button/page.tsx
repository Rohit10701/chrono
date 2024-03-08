"use client"
import Button from '@/components/base/Button'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    const handleFun = () => {
        console.log("clicked")
    }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <Button/>
    </div>
  )
}

export default Page