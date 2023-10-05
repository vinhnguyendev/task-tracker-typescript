import React from "react";
import { Task } from "../model";
import TaskItem from "./TaskItem";
import './styles.css'

interface Props {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoList: React.FC<Props> = ({ taskList, setTaskList }) => {
  return (
    <ul className="task_list">
      {taskList.map((task) => (
       <TaskItem
       task={task}
       key={task.id}
       taskList={taskList}
       setTaskList={setTaskList}
       />
      ))}
    </ul>
  );
};
export default TodoList;
