import { useContext } from "react";
import TasksContext from "../context/tasks";

function useTasksContext() {
    return useContext(TasksContext);
}

export default useTasksContext;