"use client"
import Button from '@/components/base/Button'
import KeyboardKey from '@/components/wrappers/KeyboardKey'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    const handleClick = () => {
        console.log("clicked the button")
    }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <KeyboardKey onClick={handleClick} keyboardButton='Enter'/>
    </div>
  )
}

export default Page