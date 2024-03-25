import React, { useState } from 'react'

const AddTask = () => {
  const [newTask, setNewTask] = useState();

  const handleAdd = () => {
    console.log(newTask)
    document.getElementById("newTask").value = ""
  }
  return (
    <div className='w-full bg-[#EDF4F2] p-[15px] flex items-center'>
        <textarea 
          className="w-[90%] h-[100px] p-[5px]"
          type="text"
          id="newTask"
          placeholder="Add New Task"
          onChange={e => setNewTask(e.target.value)}
        />

        <button
          className="w-[10%] h-full bg-[#8AAAE5] flex justify-center items-center ml-[15px]"
          onClick={handleAdd}
        >
          <h1 className="text-[20px] text-[#fff]">Add Task</h1>
        </button>
    </div>
  )
}

export default AddTask