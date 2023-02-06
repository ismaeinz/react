import React, { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

const App = () => {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);

  return (
    <>
      <h1>02 - To Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <ul>
        {taskList.map((task, index) => (
          <Board
            key={index}
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </ul>
    </>
  );
};

export default App;
