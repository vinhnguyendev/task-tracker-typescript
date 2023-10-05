import React, { useRef } from "react";
import "./styles.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ task, setTask, handleAddTask }) => {
const inputRef = useRef<HTMLInputElement>(null)

return (
    <form className="input" onSubmit={(e) => {
        handleAddTask(e)
        inputRef.current?.blur();
    }}>
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
