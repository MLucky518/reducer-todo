import React from "react";
import Todo from "./Todo";
import "./TodoList.scss"

function TodoList(props) {
  console.log(props);
  return (
    <div className  = "todo-container">
      {props.tasks.length === 0 ?  (
        <h1>NO TASKS TO SHOW!</h1>
      ):(
        props.tasks.map(task => {
          return <Todo key={task.id} task={task} toggle = {props.toggle}/>;
        })
      ) }
      
     
    </div>
  );
}

export default TodoList;
