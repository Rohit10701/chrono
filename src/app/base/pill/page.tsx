import Pill from '@/components/base/Pill'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <Pill>
            <p>this is pill</p>
        </Pill>
    </div>
  )
}

export default Page