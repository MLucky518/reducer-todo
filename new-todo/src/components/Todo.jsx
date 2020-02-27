import React from "react";
import "./Todo.scss";

function Todo(props) {
  return (
    <div
      className={`task${props.task.completed ? " completed" : ""}`}
      onClick={() => {
        props.toggle(props.task.id);
      }}
    >
      <ul>
        <li>{props.task.task}</li>
        <li>{props.task.id}</li>
      </ul>
    </div>
  );
}

export default Todo;
