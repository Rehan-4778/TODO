import React, { useEffect, useState } from 'react'

function AddItem({ handleAddTask, allowEdit, editableTitle, handleEditTask }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        setValue(editableTitle);
    }, [allowEdit])

    const hanldeFormSubmit = (e) => {
        e.preventDefault();

        if (value.trim() === '' || value.length < 5) {
            alert('Text should have at least 5 characters.')
            return;
        }

        if (!allowEdit)
            handleAddTask(value);
        else
            handleEditTask(value);

        setValue('');
    }

    return (
        <div>
            <form onSubmit={(e) => hanldeFormSubmit(e)}>
                <input
                    className='w-80 bg-blue-100 px-2 py-1 border-2 border-blue-500 outline-none'
                    type='text'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder='Enter task'
                />

                {
                    allowEdit ?
                        <button
                            className='font-bold px-2 py-1 bg-gray-500 border-gray-500 border-2 text-white'
                        >
                            Save Edit
                        </button>
                        :
                        <button
                            className='font-bold px-2 py-1 bg-blue-500 border-blue-500 border-2 text-white'
                        >
                            ADD
                        </button>
                }

            </form>
        </div>
    )
}

export default AddItem
