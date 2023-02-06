import React from "react";

const Board = ({ task, key, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    let removeTask = taskList.indexOf(task);
    taskList.splice(removeTask, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => index === removeTask)
    );
  };
  return (
    <>
      <p>{task}</p>
      <button onClick={handleDelete}>Delate</button>
    </>
  );
};

export default Board;
