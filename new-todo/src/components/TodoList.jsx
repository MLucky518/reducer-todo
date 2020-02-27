import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  console.log(props);
  return (
    <div>
      {props.tasks.length === 0 ?  (
        <h1>NO TASKS TO SHOW</h1>
      ):(
        props.tasks.map(task => {
          return <Todo key={task.id} task={task} />;
        })
      ) }
      <button onClick={props.clearTasks}>CLEAR COMPLETED</button>
      <button onClick={props.clearAll}>CLEAR</button>
    </div>
  );
}

export default TodoList;
