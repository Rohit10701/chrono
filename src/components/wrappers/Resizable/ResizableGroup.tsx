import React from 'react'

interface ResizableGroupProps {
    children? : React.ReactNode;
}
const ResizableGroup = ({children}: ResizableGroupProps) => {
  return (
    <div className='flex w-[80%]'>
        {children}
    </div>
  )
}

export default ResizableGroup