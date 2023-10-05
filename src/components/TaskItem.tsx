import React, { useState, useRef, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone, MdOutlineCancel } from "react-icons/md";
import { Task } from "../model";

type Props = {
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskItem: React.FC<Props> = ({ task, taskList, setTaskList }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(task.todo);

  const handleComplete = (id: number) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const handleRemove = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, todo: editValue } : task
      )
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])
  
  return (
    <form
      action=""
      className="task__item"
      onSubmit={(e) => handleEdit(e, task.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="task__item--text"
        />
      ) : task.isDone ? (
        <s className="task__item--text">{task.todo}</s>
      ) : (
        <span className="task__item--text">{task.todo}</span>
      )}
      <div className="icon-container">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleRemove(task.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleComplete(task.id)}>
          {task.isDone ? <MdOutlineCancel /> : <MdDone />}
        </span>
      </div>
    </form>
  );
};

export default TaskItem;
