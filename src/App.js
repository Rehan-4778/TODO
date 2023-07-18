import React, { useState, useEffect } from 'react'
import AddItem from './components/AddItem'
import TaskList from './components/TaskList';

import useTasksContext from './hooks/use-tasks-context';

function App() {
  const { tasks, addTask, fetchTasks, editTask } = useTasksContext();
  const [allowEdit, setAllowEdit] = useState(false);

  const [editableTask, setEditableTask] = useState({
    id: null,
    title: ''
  });


  useEffect(() => {
    fetchTasks();
  }, [])


  const handleAddTask = (value) => {
    addTask(value);
  }


  const handleEditClick = ({ id, title }) => {
    setEditableTask({
      id: id,
      title: title
    })

    setAllowEdit(true)
  }

  const handleEditTask = (newTitle) => {
    editTask(editableTask.id, newTitle);
    setAllowEdit(false);
    setEditableTask({
      id: null,
      title: ''
    })

  }

  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <AddItem
        handleAddTask={handleAddTask}
        allowEdit={allowEdit}
        editableTitle={editableTask.title}
        handleEditTask={handleEditTask}
      />

      <TaskList tasks={tasks} handleEditClick={handleEditClick} />

    </div>
  )
}

export default App
