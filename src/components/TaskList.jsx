import {useContext} from "react";
import TaskCard from "./taskCard";
import {TaskContext} from "../context/TaskContext";

function TaskList() {

  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No task yet</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
       
      ))}
    </div>
  );
}

export default TaskList;
