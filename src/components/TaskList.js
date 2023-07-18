import React from 'react'
import ListItem from './ListItem'

function TaskList({ tasks, handleEditClick }) {

    const renderedList = tasks.length && tasks.map((task) => {
        return <ListItem key={task.id} item={task} handleEditClick={handleEditClick} />
    })

    return (
        <div>
            <div className='flex flex-col items-center justify-center my-10'>
                <div className='text-xl font-bold mb-2'>Task List </div>
                {
                    renderedList !== 0 ? renderedList : <div className='mt-5 font-medium'> No task exist! </div>
                }
            </div>
        </div>
    )
}

export default TaskList
