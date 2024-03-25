import React from 'react'

const ViewTasks = ({onUpdate, onDelete, ...props}) => {

  return (
    <div>
        <ul>
            {
                props.tasks.map((task, index) => (
                    <li 
                        className="w-full min-h-[70px] text-[#838686] bg-[#EDF4F2] flex justify-between items-center p-[15px] mt-[10px]"
                        key={index}
                    >
                        {task}

                        <div className='w-[100px]'>
                        <button
                            className='w-[100px] h-[30px] text-[#fff] bg-[#1fd655] mb-[5px]'
                            onClick={() => onUpdate(index)}
                        >
                            Update
                        </button>

                        <button
                            className='w-[100px] h-[30px] text-[#fff] bg-[#ff4747] mt-[5px]'
                            onClick={() => onDelete(index)}
                        >
                            Delete
                        </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ViewTasks
