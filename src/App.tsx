import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Task } from "./model";
import TodoList from "./components/TaskList";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (task) {
      setTaskList([...taskList, { id: Date.now(), todo: task, isDone: false }]);
      setTask("");
    }
  };

  console.log(taskList);

  return (
    <div className="App">
      <span className="heading">task tracker</span>
      <InputField task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default App;
