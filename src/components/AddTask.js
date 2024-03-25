import React, { useState } from 'react'
import ViewTasks from './ViewTasks';

const AddTask = () => {
  const [index, setIndex] = useState(null);
  
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  
  const [updateInput, setUpdateInput] = useState('');

  const handleAdd = (inp) => {
    if (!inp.trim()) return;
      setTasks([...tasks, inp]);
      setInput('');
  }

  const handleDelete = (index) => {
    const deleteTasks = [...tasks];
    deleteTasks.splice(index, 1);
    setTasks(deleteTasks);
  }

  const onUpdate = (index) => {
    setIndex(index)
    setUpdateInput(tasks[index]);
  }

  const handleUpdate = () => {
    tasks[index] = updateInput;
    setIndex(null);
  }

  return (
    <div className='w-full '>
      {index === null ? (<div 
        className='w-full bg-[#EDF4F2] p-[15px] flex items-center'
      >
        <textarea 
          className="w-[90%] h-[100px] p-[5px]"
          type="text"
          id="newTask"
          value={input}
          placeholder="Add New Task"
          onChange={e => setInput(e.target.value)}
        />

        <button
          className="w-[10%] h-[100px] bg-[#8AAAE5] flex justify-center items-center ml-[15px]"
          onClick={() => handleAdd(input)}
        >
          <h1 className="text-[20px] text-[#fff]">Add Task</h1>
        </button>
    </div>) : (<div 
        className='w-full bg-[#EDF4F2] p-[15px] flex items-center'
      >
        <textarea 
          className="w-[90%] h-[100px] p-[5px]"
          type="text"
          id="newTask"
          value={updateInput}
          placeholder="Add New Task"
          onChange={e => setUpdateInput(e.target.value)}
        />

        <button
          className="w-[10%] h-[100px] bg-[#8AAAE5] flex justify-center items-center ml-[15px]"
          onClick={() => handleUpdate()}
        >
          <h1 className="text-[20px] text-[#fff]">Update Task</h1>
        </button>
    </div>) }

    <ViewTasks tasks = {tasks} onUpdate = {onUpdate} onDelete = {handleDelete} />
    </div>
  )
}

export default AddTask