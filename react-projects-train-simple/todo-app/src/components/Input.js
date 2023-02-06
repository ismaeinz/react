import React, { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
  };
  return (
    <>
      <form>
        <input
          type={"text"}
          placeholder="Add a Task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={handleAddTask}>Add</button>
      </form>
    </>
  );
};

export default Input;
