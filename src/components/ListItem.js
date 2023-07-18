import React from 'react'
import useTasksContext from '../hooks/use-tasks-context'

import { FaEdit, FaTrashAlt } from 'react-icons/fa'

function ListItem({ item, handleEditClick }) {

    const { deleteTask } = useTasksContext();

    return (
        <div className='flex justify-between items-cente w-96 my-1'>
            <div className='p-2 w-3/4 break-words bg-gray-300'>
                {item.title}
            </div>
            <div className='ml-5'>
                <button onClick={() => handleEditClick(item)}
                    className='rounded shadow-lg p-2 mr-3'
                >
                    <FaEdit color='#333' />
                </button>
                <button onClick={() => deleteTask(item.id)}
                    className='rounded p-2 shadow-lg'
                >
                    <FaTrashAlt color='red' />
                </button>
            </div>
        </div>
    )
}

export default ListItem
