import React from 'react'
import AddTask from './AddTask'

const Body = () => {
  return (
    <div className='body w-full min-w-[650px] h-[200px] p-[15px] flex flex-col items-center'>
        <h1 className='text-[20px] text-[#735DA5] font-bold mb-[10px]'>ToDo List</h1>
        <AddTask/>
    </div>
  )
}

export default Body
