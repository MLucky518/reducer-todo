import React, { useState } from "react";
import "./TodoForm.scss";

function TodoForm(props) {
  const [taskName, setTaskName] = useState("example");

  const handleChanges = e => {
    setTaskName(e.target.value);
    console.log(taskName);
  };

  const submitNewTask = e => {
    e.preventDefault();
    props.addTask(taskName);
    setTaskName("example");
  };

  return (
    <div>
      <button onClick={props.clearTasks}>CLEAR COMPLETED</button>
      <button onClick={props.clearAll}>RESET</button>
      <form onSubmit={submitNewTask}>
        <input
          type="text"
          name="taskName"
          value={taskName}
          placeholder="task to be completed"
          onChange={handleChanges}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default TodoForm;
