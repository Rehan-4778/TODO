import { createContext } from "react";
import { useState } from "react";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const fetchTasks = () => {
        const tasks = localStorage.getItem('task');
        if (tasks) {
            setTasks(JSON.parse(tasks));
        }
    }

    const addTask = (title) => {

        const id = Math.floor(Math.random() * 999);
        setTasks([...tasks, { id, title }]);


        localStorage.setItem('task', JSON.stringify([...tasks, { id, title }]));
    }

    const editTask = (id, newTitle) => {

        const updatedTask = tasks.filter((task) => {
            if (task.id === id) {
                task.title = newTitle;
            }
            return task;
        })

        setTasks(updatedTask);

        localStorage.setItem('task', JSON.stringify(updatedTask));
    }

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks);

        localStorage.setItem('task', JSON.stringify(newTasks));
    }

    return (
        <TasksContext.Provider value={{ tasks, fetchTasks, addTask, deleteTask, editTask }}>
            {children}
        </TasksContext.Provider>
    )
}

export { TasksProvider };
export default TasksContext;