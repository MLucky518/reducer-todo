import React, { useState } from "react";

function TodoForm(props) {
  const [taskName, setTaskName] = useState("");

  const handleChanges = e => {
    setTaskName(e.target.value );
    console.log(taskName);
  };

  const submitNewTask = e =>{
      e.preventDefault();
      props.addTask(taskName);
      setTaskName("");

  }

  return (
    <div>
      <form onSubmit = {submitNewTask}>
        <input 
            type="text" 
            name="taskName" 
            value = {taskName}
            placeholder="task to be completed" 
            onChange = {handleChanges} />

            <input type = "submit"/>
      </form>
    </div>
  );
}

export default TodoForm;
