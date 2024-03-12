import React from 'react'

interface ResizableGroupProps {
    children? : React.ReactNode;
}
const ResizableGroup = ({children}: ResizableGroupProps) => {
  return (
    <div className='flex nowrap h-[400px] w-[80%]'>
        {children}
    </div>
  )
}

export default ResizableGroup